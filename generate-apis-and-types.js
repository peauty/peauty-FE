import axios from "axios";
import * as fs from "node:fs/promises";
import path from "path";

const CUSTOMER_SERVER = "https://customer-dev.peauty.click/v3/api-docs";
const DESIGNER_SERVER = "http://designer-dev.peauty.click/v3/api-docs";

const SERVERS = {
  customer: {
    url: CUSTOMER_SERVER,
    apiClass: "CustomerAPI",
  },
  designer: {
    url: DESIGNER_SERVER,
    apiClass: "DesignerAPI",
  },
};

const BASE_DIR = path.join(process.cwd(), "src");

// 제외할 API 경로 설정
const EXCLUDED_PATHS = [
  "/v1/auth/kakao-sign-in",
  "/v1/auth/google-sign-in",
  "/v1/auth/test/sign",
];

// 리소스별로 그룹화하는 함수
const groupPathsByTag = (paths) => {
  const groups = {};

  Object.entries(paths).forEach(([path, methods]) => {
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
        ...data,
      });
    });
  });

  return groups;
};

// 스키마를 TypeScript 인터페이스로 변환하는 함수
const convertSchemaToTS = (schema, components, processedRefs = new Set()) => {
  if (!schema) return "any";

  if (schema.$ref) {
    const refName = schema.$ref.split("/").pop();
    // Prevent infinite recursion with circular references
    if (processedRefs.has(refName)) {
      return refName;
    }
    processedRefs.add(refName);

    const refSchema = components[refName];
    if (refSchema) {
      return convertSchemaToTS(refSchema, components, processedRefs);
    }
    return refName;
  }

  if (schema.type === "array") {
    const itemType = convertSchemaToTS(schema.items, components, processedRefs);
    return `${itemType}[]`;
  }

  if (schema.type === "object" || (!schema.type && schema.properties)) {
    if (schema.additionalProperties) {
      // Handle dictionary/map types
      const valueType = convertSchemaToTS(
        schema.additionalProperties,
        components,
        processedRefs,
      );
      return `Record<string, ${valueType}>`;
    }

    const props = Object.entries(schema.properties || {})
      .map(([key, prop]) => {
        const isRequired = (schema.required || []).includes(key);
        const typeStr = convertSchemaToTS(prop, components, processedRefs);
        return `  ${key}${isRequired ? "" : "?"}: ${typeStr};`;
      })
      .join("\n");
    return `{\n${props}\n}`;
  }

  const typeMapping = {
    integer: "number",
    string: (prop) =>
      prop.enum ? prop.enum.map((e) => `'${e}'`).join(" | ") : "string",
    boolean: "boolean",
    number: "number",
  };

  return typeMapping[schema.type]
    ? typeof typeMapping[schema.type] === "function"
      ? typeMapping[schema.type](schema)
      : typeMapping[schema.type]
    : "any";
};

const extractReferencedSchemas = (schema, schemas, collectedSchemas = {}) => {
  if (!schema) return;

  if (schema.$ref) {
    const refName = schema.$ref.split("/").pop();
    if (!collectedSchemas[refName] && schemas[refName]) {
      collectedSchemas[refName] = schemas[refName];
      extractReferencedSchemas(schemas[refName], schemas, collectedSchemas);
    }
  }

  if (schema.type === "array") {
    extractReferencedSchemas(schema.items, schemas, collectedSchemas);
  }

  if (schema.type === "object" || (!schema.type && schema.properties)) {
    Object.values(schema.properties || {}).forEach((prop) => {
      extractReferencedSchemas(prop, schemas, collectedSchemas);
    });
  }

  if (schema.additionalProperties) {
    extractReferencedSchemas(
      schema.additionalProperties,
      schemas,
      collectedSchemas,
    );
  }

  return collectedSchemas;
};

// API 코드 생성 함수
const generateApiCode = (tag, endpoints, serverType) => {
  const apiClass = SERVERS[serverType].apiClass;
  const imports = new Set([`import { ${apiClass} } from "../../api";`]);
  const apiCalls = [];

  endpoints.forEach((endpoint) => {
    const operationId = endpoint.operationId;
    const responseType =
      endpoint.responses["200"]?.content?.["application/json"]?.schema?.$ref
        ?.split("/")
        .pop() || "any";

    let requestType = null;
    const contentType =
      endpoint.requestBody?.content &&
      Object.keys(endpoint.requestBody.content)[0];

    if (contentType === "application/json") {
      requestType = endpoint.requestBody?.content[
        "application/json"
      ]?.schema?.$ref
        ?.split("/")
        .pop();
    }

    if (responseType !== "any") {
      imports.add(
        `import { ${responseType} } from "../../../../types/${serverType}/${tag.toLowerCase()}";`,
      );
    }
    if (requestType) {
      imports.add(
        `import { ${requestType} } from "../../../../types/${serverType}/${tag.toLowerCase()}";`,
      );
    }

    const params = [];
    let urlParams = endpoint.path;

    // Path parameters
    endpoint.parameters?.forEach((param) => {
      if (param.in === "path") {
        params.push(`${param.name}: ${convertSchemaToTS(param.schema)}`);
        urlParams = urlParams.replace(`{${param.name}}`, `\${${param.name}}`);
      }
    });

    // Query parameters
    const queryParams =
      endpoint.parameters?.filter((p) => p.in === "query") || [];
    if (queryParams.length > 0) {
      const queryType = queryParams
        .map(
          (p) =>
            `${p.name}${p.required ? "" : "?"}: ${convertSchemaToTS(p.schema)}`,
        )
        .join("; ");
      params.push(`query: { ${queryType} }`);
    }

    // Multipart form data 처리
    let isMultipart = contentType === "multipart/form-data";
    if (isMultipart) {
      const formDataSchema =
        endpoint.requestBody?.content["multipart/form-data"]?.schema;
      if (formDataSchema?.properties) {
        Object.entries(formDataSchema.properties).forEach(([key, prop]) => {
          if (prop.type === "string" && prop.format === "binary") {
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

    const methodName =
      operationId.charAt(0).toLowerCase() + operationId.slice(1);
    const method = endpoint.method.toLowerCase();

    let apiCall = `export const ${methodName} = async (${params.join(", ")}): Promise<${responseType}> => {`;

    if (isMultipart) {
      apiCall += `
  const formData = new FormData();
  ${endpoint.requestBody.content["multipart/form-data"].schema.properties.image ? 'formData.append("image", image);' : ""}
  const res = await ${apiClass}.${method}<${responseType}>(\`${urlParams}\`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });`;
    } else {
      apiCall += `\n  const res = await ${apiClass}.${method}<${responseType}>(\`${urlParams}\``;

      if (method === "get" && queryParams.length > 0) {
        apiCall += `, { params: query }`;
      } else if (requestType) {
        apiCall += `, data`;
      }

      apiCall += `);`;
    }

    apiCall += `\n  return res.data;\n};\n`;

    apiCalls.push(apiCall);
  });

  return [...imports, "", ...apiCalls].join("\n");
};

// 타입 코드 생성 함수
const generateTypeCode = (schemas) => {
  const processedSchemas = new Set();
  const interfaces = [];

  const processSchema = (name, schema) => {
    if (processedSchemas.has(name)) return;
    processedSchemas.add(name);

    const tsInterface = convertSchemaToTS(schema, schemas);
    interfaces.push(`export interface ${name} ${tsInterface}\n`);

    // Process any referenced schemas
    const referencedSchemas = extractReferencedSchemas(schema, schemas);
    Object.entries(referencedSchemas).forEach(([refName, refSchema]) => {
      if (!processedSchemas.has(refName)) {
        processSchema(refName, refSchema);
      }
    });
  };

  Object.entries(schemas).forEach(([name, schema]) => {
    processSchema(name, schema);
  });

  return interfaces.join("\n");
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
    // 각 서버 타입별로 파일 생성
    for (const [serverType, serverConfig] of Object.entries(SERVERS)) {
      console.log(`Generating files for ${serverType} server...`);

      const response = await axios.get(serverConfig.url);
      const {
        paths,
        components: { schemas },
      } = response.data;

      const groupedPaths = groupPathsByTag(paths);

      // API 디렉토리 생성
      const apisDir = path.join(BASE_DIR, "apis", serverType, "resources");
      const typesDir = path.join(BASE_DIR, "types", serverType);

      await createDirectoryIfNotExists(apisDir);
      await createDirectoryIfNotExists(typesDir);

      // 각 태그별로 파일 생성
      for (const [tag, endpoints] of Object.entries(groupedPaths)) {
        const tagLower = tag.toLowerCase();

        // API 폴더 및 파일 생성
        const tagApiDir = path.join(apisDir, tagLower);
        await createDirectoryIfNotExists(tagApiDir);

        const apiCode = generateApiCode(tag, endpoints, serverType);
        await fs.writeFile(path.join(tagApiDir, "index.ts"), apiCode);

        // 타입 폴더 및 파일 생성
        const tagTypeDir = path.join(typesDir, tagLower);
        await createDirectoryIfNotExists(tagTypeDir);

        // 관련된 타입들 추출
        const relevantSchemas = {};
        endpoints.forEach((endpoint) => {
          const responseSchema =
            endpoint.responses["200"]?.content?.["application/json"]?.schema;
          if (responseSchema) {
            if (responseSchema.$ref) {
              const schemaName = responseSchema.$ref.split("/").pop();
              relevantSchemas[schemaName] = schemas[schemaName];
              // Extract all nested schemas
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(schemas[schemaName], schemas),
              );
            } else {
              // Handle inline response schemas
              const tempName = `${endpoint.operationId}Response`;
              relevantSchemas[tempName] = responseSchema;
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(responseSchema, schemas),
              );
            }
          }

          const requestSchema =
            endpoint.requestBody?.content?.["application/json"]?.schema;
          if (requestSchema) {
            if (requestSchema.$ref) {
              const schemaName = requestSchema.$ref.split("/").pop();
              relevantSchemas[schemaName] = schemas[schemaName];
              // Extract all nested schemas
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(schemas[schemaName], schemas),
              );
            } else {
              // Handle inline request schemas
              const tempName = `${endpoint.operationId}Request`;
              relevantSchemas[tempName] = requestSchema;
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(requestSchema, schemas),
              );
            }
          }
        });

        // 타입 파일 생성
        const typeCode = generateTypeCode(relevantSchemas);
        await fs.writeFile(path.join(tagTypeDir, "index.ts"), typeCode);
      }
    }

    console.log("Successfully generated API and type files!");
  } catch (error) {
    console.error("Error generating files:", error);
  }
};

// 스크립트 실행
generateFiles();
