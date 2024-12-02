import axios from 'axios';
import * as fs from 'node:fs/promises';
import path from 'path';

const SWAGGER_URL = 'http://customer-dev.peauty.click:8080/v3/api-docs';
const BASE_DIR = path.join(process.cwd(), 'src');

// 제외할 API 경로 설정
const EXCLUDED_PATHS = [
  '/v1/auth/kakao-sign-in',
  '/v1/auth/google-sign-in',
  '/v1/auth/test/sign',
];

// 리소스별로 그룹화하는 함수
const groupPathsByTag = (paths) => {
  const groups = {};
  
  Object.entries(paths).forEach(([path, methods]) => {
    // 제외할 API 경로 체크
    if (EXCLUDED_PATHS.includes(path)) {
      return;
    }

    Object.entries(methods).forEach(([method, data]) => {
      const tag = data.tags[0];
      if (!groups[tag]) {
        groups[tag] = [];
      }
      groups[tag].push({
        path,
        method,
        ...data
      });
    });
  });
  
  return groups;
};

// 타입 이름 생성 함수
const createTypeName = (str) => {
  return str
    .split('/')
    .pop()
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
};

// 스키마를 TypeScript 인터페이스로 변환하는 함수
const convertSchemaToTS = (schema, components) => {
  if (!schema) return 'any';

  if (schema.$ref) {
    const refName = schema.$ref.split('/').pop();
    return refName;
  }

  if (schema.type === 'array') {
    const itemType = convertSchemaToTS(schema.items, components);
    return `${itemType}[]`;
  }

  if (schema.type === 'object') {
    const props = Object.entries(schema.properties || {})
      .map(([key, prop]) => {
        const isRequired = (schema.required || []).includes(key);
        const typeStr = convertSchemaToTS(prop, components);
        return `  ${key}${isRequired ? '' : '?'}: ${typeStr};`;
      })
      .join('\n');
    return `{\n${props}\n}`;
  }

  const typeMapping = {
    integer: 'number',
    string: prop => prop.enum ? prop.enum.map(e => `'${e}'`).join(' | ') : 'string',
    boolean: 'boolean',
    number: 'number'
  };

  return typeMapping[schema.type] 
    ? (typeof typeMapping[schema.type] === 'function' 
        ? typeMapping[schema.type](schema) 
        : typeMapping[schema.type])
    : 'any';
};

// API 코드 생성 함수
const generateApiCode = (tag, endpoints) => {
  const imports = new Set(['import { CustomerAPI } from "../../api";']);
  const apiCalls = [];

  endpoints.forEach(endpoint => {
    const operationId = endpoint.operationId;
    const responseType = endpoint.responses['200']?.content?.['application/json']?.schema?.$ref?.split('/').pop() || 'any';
    
    // 요청 타입 처리 수정
    let requestType = null;
    const contentType = endpoint.requestBody?.content && Object.keys(endpoint.requestBody.content)[0];
    
    if (contentType === 'application/json') {
      requestType = endpoint.requestBody?.content['application/json']?.schema?.$ref?.split('/').pop();
    }
    
    if (responseType !== 'any') {
      imports.add(`import { ${responseType} } from "../../../types/${tag.toLowerCase()}";`);
    }
    if (requestType) {
      imports.add(`import { ${requestType} } from "../../../types/${tag.toLowerCase()}";`);
    }

    const params = [];
    let urlParams = endpoint.path;

    // Path parameters
    endpoint.parameters?.forEach(param => {
      if (param.in === 'path') {
        params.push(`${param.name}: ${convertSchemaToTS(param.schema)}`);
        urlParams = urlParams.replace(`{${param.name}}`, `\${${param.name}}`);
      }
    });

    // Query parameters
    const queryParams = endpoint.parameters?.filter(p => p.in === 'query') || [];
    if (queryParams.length > 0) {
      const queryType = queryParams
        .map(p => `${p.name}${p.required ? '' : '?'}: ${convertSchemaToTS(p.schema)}`)
        .join('; ');
      params.push(`query: { ${queryType} }`);
    }

    // Multipart form data 처리
    let isMultipart = contentType === 'multipart/form-data';
    if (isMultipart) {
      const formDataSchema = endpoint.requestBody?.content['multipart/form-data']?.schema;
      if (formDataSchema?.properties) {
        Object.entries(formDataSchema.properties).forEach(([key, prop]) => {
          if (prop.type === 'string' && prop.format === 'binary') {
            params.push(`${key}: File`);
          }
        });
      }
      imports.add('import FormData from "form-data";');
    }
    // JSON request body
    else if (requestType) {
      params.push(`data: ${requestType}`);
    }

    const methodName = operationId.charAt(0).toLowerCase() + operationId.slice(1);
    const method = endpoint.method.toLowerCase();
    
    let apiCall = `export const ${methodName} = async (${params.join(', ')}): Promise<${responseType}> => {`;
    
    // Multipart form data 처리 로직
    if (isMultipart) {
      apiCall += `
  const formData = new FormData();
  ${endpoint.requestBody.content['multipart/form-data'].schema.properties.image ? 'formData.append("image", image);' : ''}
  const res = await CustomerAPI.${method}<${responseType}>(\`${urlParams}\`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });`;
    } else {
      apiCall += `\n  const res = await CustomerAPI.${method}<${responseType}>(\`${urlParams}\``;
      
      if (method === 'get' && queryParams.length > 0) {
        apiCall += `, { params: query }`;
      } else if (requestType) {
        apiCall += `, data`;
      }
      
      apiCall += `);`;
    }
    
    apiCall += `\n  return res.data;\n};\n`;
    
    apiCalls.push(apiCall);
  });

  return [...imports, '', ...apiCalls].join('\n');
};

// 타입 코드 생성 함수
const generateTypeCode = (schemas) => {
  const interfaces = Object.entries(schemas)
    .map(([name, schema]) => {
      const tsInterface = convertSchemaToTS(schema, schemas);
      return `export interface ${name} ${tsInterface}\n`;
    })
    .join('\n');

  return interfaces;
};

// 디렉토리 생성 함수
const createDirectoryIfNotExists = async (dir) => {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
};

// 메인 실행 함수
const generateFiles = async () => {
  try {
    const response = await axios.get(SWAGGER_URL);
    const { paths, components: { schemas } } = response.data;
    
    const groupedPaths = groupPathsByTag(paths);
    
    // API 디렉토리 생성
    const apisDir = path.join(BASE_DIR, 'apis', 'resources');
    const typesDir = path.join(BASE_DIR, 'types');
    
    await createDirectoryIfNotExists(apisDir);
    await createDirectoryIfNotExists(typesDir);

    // 각 태그별로 파일 생성
    for (const [tag, endpoints] of Object.entries(groupedPaths)) {
      const tagLower = tag.toLowerCase();
      
      // API 폴더 및 파일 생성
      const tagApiDir = path.join(apisDir, tagLower);
      await createDirectoryIfNotExists(tagApiDir);
      
      const apiCode = generateApiCode(tag, endpoints);
      await fs.writeFile(
        path.join(tagApiDir, 'index.ts'),
        apiCode
      );

      // 타입 폴더 및 파일 생성
      const tagTypeDir = path.join(typesDir, tagLower);
      await createDirectoryIfNotExists(tagTypeDir);

      // 관련된 타입들 추출
      const relevantSchemas = {};
      endpoints.forEach(endpoint => {
        const responseSchema = endpoint.responses['200']?.content?.['application/json']?.schema;
        if (responseSchema?.$ref) {
          const schemaName = responseSchema.$ref.split('/').pop();
          relevantSchemas[schemaName] = schemas[schemaName];
        }
        
        const requestSchema = endpoint.requestBody?.content?.['application/json']?.schema;
        if (requestSchema?.$ref) {
          const schemaName = requestSchema.$ref.split('/').pop();
          relevantSchemas[schemaName] = schemas[schemaName];
        }
      });

      // 타입 파일 생성
      const typeCode = generateTypeCode(relevantSchemas);
      await fs.writeFile(
        path.join(tagTypeDir, 'index.ts'),
        typeCode
      );
    }

    console.log('Successfully generated API and type files!');
  } catch (error) {
    console.error('Error generating files:', error);
  }
};

// 스크립트 실행
generateFiles();