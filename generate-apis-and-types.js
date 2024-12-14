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

// Enum 타입 추출 함수
const extractEnumTypes = (schema) => {
  const enums = {};

  const processSchema = (schema, path = "") => {
    if (!schema) return;

    if (schema.type === "string" && schema.enum) {
      const enumName =
        path
          .split(".")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("") + "Type";
      enums[enumName] = schema.enum;
      return enumName;
    }

    if (schema.properties) {
      Object.entries(schema.properties).forEach(([key, prop]) => {
        processSchema(prop, path ? `${path}.${key}` : key);
      });
    }
  };

  processSchema(schema);
  return enums;
};

// 스키마를 TypeScript 인터페이스로 변환하는 함수
const convertSchemaToTS = (schema, components, processedRefs = new Set()) => {
  if (!schema) return "any";

  if (schema.$ref) {
    const refName = schema.$ref.split("/").pop();
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
        let typeStr;

        // Check if property is an enum
        if (prop.type === "string" && prop.enum) {
          const enumName =
            key
              .split(/(?=[A-Z])/)
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join("") + "Type";
          typeStr = enumName;
        } else {
          typeStr = convertSchemaToTS(prop, components, processedRefs);
        }

        return `  ${key}${isRequired ? "" : "?"}: ${typeStr};`;
      })
      .join("\n");
    return `{\n${props}\n}`;
  }

  if (schema.type === "string" && schema.enum) {
    const enumName = Object.keys(components).find(
      (key) =>
        components[key].properties &&
        Object.values(components[key].properties).some(
          (prop) =>
            prop === schema || JSON.stringify(prop) === JSON.stringify(schema),
        ),
    );

    if (enumName) {
      const propertyName = Object.keys(components[enumName].properties).find(
        (key) =>
          components[enumName].properties[key] === schema ||
          JSON.stringify(components[enumName].properties[key]) ===
            JSON.stringify(schema),
      );

      if (propertyName) {
        return (
          propertyName
            .split(/(?=[A-Z])/)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("") + "Type"
        );
      }
    }

    return schema.enum.map((e) => `'${e}'`).join(" | ");
  }

  const typeMapping = {
    integer: "number",
    string: "string",
    boolean: "boolean",
    number: "number",
  };

  return typeMapping[schema.type] || "any";
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

    endpoint.parameters?.forEach((param) => {
      if (param.in === "path") {
        params.push(`${param.name}: ${convertSchemaToTS(param.schema)}`);
        urlParams = urlParams.replace(`{${param.name}}`, `\${${param.name}}`);
      }
    });

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
    } else if (requestType) {
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
  const enumTypes = {};

  const processSchema = (name, schema) => {
    if (processedSchemas.has(name)) return;
    processedSchemas.add(name);

    // Extract enum types
    const schemaEnums = extractEnumTypes(schema);
    Object.assign(enumTypes, schemaEnums);

    const tsInterface = convertSchemaToTS(schema, schemas);
    interfaces.push(`export interface ${name} ${tsInterface}\n`);

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

  // Generate enum type declarations
  const enumDeclarations = Object.entries(enumTypes).map(
    ([name, values]) =>
      `export type ${name} = ${values.map((v) => `'${v}'`).join(" | ")};\n`,
  );

  return [...enumDeclarations, "\n", ...interfaces].join("\n");
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
    for (const [serverType, serverConfig] of Object.entries(SERVERS)) {
      console.log(`Generating files for ${serverType} server...`);

      const response = await axios.get(serverConfig.url);
      const {
        paths,
        components: { schemas },
      } = response.data;

      const groupedPaths = groupPathsByTag(paths);

      const apisDir = path.join(BASE_DIR, "apis", serverType, "resources");
      const typesDir = path.join(BASE_DIR, "types", serverType);

      await createDirectoryIfNotExists(apisDir);
      await createDirectoryIfNotExists(typesDir);

      for (const [tag, endpoints] of Object.entries(groupedPaths)) {
        const tagLower = tag.toLowerCase();

        const tagApiDir = path.join(apisDir, tagLower);
        await createDirectoryIfNotExists(tagApiDir);

        const apiCode = generateApiCode(tag, endpoints, serverType);
        await fs.writeFile(path.join(tagApiDir, "index.ts"), apiCode);

        const tagTypeDir = path.join(typesDir, tagLower);
        await createDirectoryIfNotExists(tagTypeDir);

        const relevantSchemas = {};
        endpoints.forEach((endpoint) => {
          const responseSchema =
            endpoint.responses["200"]?.content?.["application/json"]?.schema;
          if (responseSchema) {
            if (responseSchema.$ref) {
              const schemaName = responseSchema.$ref.split("/").pop();
              relevantSchemas[schemaName] = schemas[schemaName];
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(schemas[schemaName], schemas),
              );
            } else {
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
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(schemas[schemaName], schemas),
              );
            } else {
              const tempName = `${endpoint.operationId}Request`;
              relevantSchemas[tempName] = requestSchema;
              Object.assign(
                relevantSchemas,
                extractReferencedSchemas(requestSchema, schemas),
              );
            }
          }
        });

        const typeCode = generateTypeCode(relevantSchemas);
        await fs.writeFile(path.join(tagTypeDir, "index.ts"), typeCode);
      }
    }

    console.log("Successfully generated API and type files!");
  } catch (error) {
    console.error("Error generating files:", error);
  }
};

generateFiles();
