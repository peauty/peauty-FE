import fs from 'fs';
import path from 'path';

// CLI에서 입력된 인자를 처리하는 함수
const parseArgs = () => {
  const args = process.argv.slice(2);
  const nameIndex = args.indexOf('-name');
  if (nameIndex === -1 || !args[nameIndex + 1]) {
    console.error('컴포넌트 이름을 입력하세요: node generateComponent.js -name <ComponentName>');
    process.exit(1);
  }
  return args[nameIndex + 1];
};

const createComponent = (componentName) => {
  // 프로젝트 루트 기준으로 /src/components/global 경로 설정
  const baseDir = path.join(process.cwd(), 'src', 'components', 'global');
  const componentDir = path.join(baseDir, componentName);

  // /src/components/global 디렉토리가 없으면 생성
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  // 컴포넌트 디렉토리 생성
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  const files = {
    [`${componentName}.stories.tsx`]: `import { ${componentName} } from "./index";\n`,
    [`${componentName}.styles.ts`]: `import styled from 'styled-components';\n`,
    [`${componentName}.tsx`]: `import React from "react";

interface Props {

}

export default function ${componentName}({}: Props) {
    return (
        <></>
    );
}
`,
    'index.ts': `export { default } from './${componentName}';\n`,
  };

  // 파일 생성
  for (const [fileName, content] of Object.entries(files)) {
    const filePath = path.join(componentDir, fileName);
    fs.writeFileSync(filePath, content, 'utf8');
  }

  console.log(`컴포넌트 ${componentName} 생성 완료: ${componentDir}`);
};

// CLI에서 입력받은 이름으로 컴포넌트 생성
const componentName = parseArgs();
createComponent(componentName);