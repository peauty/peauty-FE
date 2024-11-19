# peauty-FE

## Peauty 서비스 소개
Pet + Beauty = Peauty
강아지를 아름답게 하는 미용 중계 서비스입니다.

### 개발 환경
Node `20.17.0`,
Typescript, React, Vite, Recoil, yarn, storybook

### How to start
```
yarn install
yarn dev
yarn storybook
```

## 프로젝트 폴더 구조

```plaintext
PAWFIT-FE
├── public
│   └── svg               # 정적 SVG 파일
│       ├── AppBarBack.svg
│       ├── favicon.svg
│       └── logo.svg
├── src
│   ├── assets            # 정적 리소스 관리
│   │   ├── fonts         # 폰트 파일
│   │   └── svg           # SVG 리소스
│   ├── components        # 재사용 가능한 컴포넌트
│   │   ├── global        # 전역 컴포넌트
│   │   │   ├── AppBar
│   │   │   ├── CustomButton
│   │   │   ├── CustomInput
│   │   │   ├── ProgressBar
│   │   │   ├── ProgressBlock
│   │   │   ├── SocialLoginButton
│   │   │   └── StepProgress
│   │   └── pages         # 페이지별 컴포넌트 조합
│   │       ├── main      # 메인 페이지 컴포넌트
│   │       └── my-page   # 개인 페이지 컴포넌트
│   ├── page              # 페이지 파일 (라우팅 대상)
│   │   ├── main
│   │   │   ├── index.styles.ts
│   │   │   └── index.tsx
│   │   └── my-page
│   │       ├── index.styles.ts
│   │       └── index.tsx
│   ├── style             # 스타일 및 테마 설정
│   │   ├── color.ts
│   │   ├── fonts.css
│   │   ├── global-style.ts
│   │   ├── normalize.css
│   │   ├── theme.ts
│   │   └── typography.ts
│   ├── App.tsx           # 앱의 메인 진입 컴포넌트
│   ├── main.tsx          # React DOM 렌더링 진입점
│   └── router.tsx        # 라우터 설정 파일
├── .storybook            # Storybook 설정
├── node_modules          # 의존성 관리 폴더
└── .gitignore            # Git에서 무시할 파일 설정
```

## 각 기능 소개
public/svg

	•	정적 SVG 파일을 저장합니다.
	•	AppBarBack.svg: 상단 바의 뒤로 가기 아이콘.
	•	favicon.svg: 브라우저 탭 아이콘.
	•	logo.svg: 애플리케이션 로고.

src/assets

	•	정적 리소스를 관리합니다.
	•	fonts: 폰트 파일.
	•	svg: SVG 리소스.

src/components

	•	global: 전역적으로 재사용 가능한 컴포넌트 모음.
	•	예: CustomButton, SocialLoginButton, ProgressBar 등.
	•	pages: 각 페이지에서 사용하는 컴포넌트들을 정의.
	•	페이지별로 global 컴포넌트를 조합해 사용합니다.
	•	예: main 폴더에서는 메인 페이지 컴포넌트들이 정의됩니다.

src/page

	•	페이지 파일을 정의하며 라우팅의 진입점 역할을 합니다.
	•	main: 메인 페이지.
	•	my-page: 사용자 개인 페이지.

src/style

	•	스타일 및 테마 관련 파일 관리.
	•	color.ts: 색상 테마 정의.
	•	global-style.ts: 전역 스타일 설정.
	•	typography.ts: 폰트와 텍스트 관련 스타일 정의.

주요 파일

	•	App.tsx: 애플리케이션의 최상위 컴포넌트.
	•	main.tsx: React DOM을 렌더링하는 진입점.
	•	router.tsx: 라우터 설정 파일로 각 페이지를 연결.

