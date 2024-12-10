# peauty-FE

## Peauty 서비스 소개
> 당신의 반려견의 모든 날들이 아름답도록 **Peauty**<br>
`Pet + Beauty = Peauty`<br>
강아지를 아름답게 하는 **동네 기반 반려견 미용 중계 서비스**
#### 견적서 서비스
사용자는 원하는 애견 미용사에게 견적서를 요청한다.
#### 신뢰성
사용자가 믿고 맞길 수 있는 미용사를 선택할 수 있도록 `뱃지` 시스템과 `등급제`를 도입한다.

> - 뱃지 시스템이란?
>  	- 특정 활동에 따라 뱃지를 얻을 수 있다.<br>
>	- 뱃지 취득을 위한 특정 활동에는 견종 전문가, 노견 미용 전문가, 대형견 미용 전문가 등이 있을 수 있다.<br>
> 		- 특정 견종을 얼마나 미용했느냐에 따라서 뱃지를 획득할 수 있다.
> - 등급제란?
>  	- 미용사의 등급은 서비스로 정한 지표와 해당 지표에 할당된 가중치에 따른 합산으로 선정된다.
>     		- 자격증 보유 (20%), 경력 (15%), 리뷰 평점(25%), 작업 완료율(15%), 안전 사고 기록(15%), 응답률(10%)
>     		- 등급은 상대 평가로 3스타, 2스타, 1스타로 선정된다.

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
---
## 현재 진행도(미용사 및 고객 두개로 나뉨) 2024/12/10

### 미용사

**[회원가입/로그인]**

- 미용사  회원가입 완료

**[마이페이지]**

- 미용사  회원 정보 수정 삭제 가능(마이페이지 api완료)

**[미용사 메인 페이지]**

- UI 완료, api 진행해야함

[견적서 부분]

- UI 완료
- api 미완료

**[견적 현황]**

- UI 구현, api 둘 다 안됨

### 고객

**[회원가입/로그인]**

- 고객 회원가입 완료

**[마이페이지]**

- 고객 회원 정보 수정 삭제 가능(마이페이지 api완료)

**[강아지 등록]**

- 반려견 수정 등록 삭제 (api 붙이는 중 UI는 다 완성됨)

**[견적서 부분]**

- 주변 미용실 리스트 UI/api 완료
- 고객 요청하기 미완
- 받은 견적 UI 구현해야함

**[고객 메인 페이지]**

- UI 완료, api 진행해야함

**[리뷰]**

- UI, api 미완료

---

**api 및 UI 완성도 약 61.54%** 

### 추후 계획

이번 주 안에 견적서(요청하기,보내기, 현황) UI 및 api 연결, 리뷰 UI, api 연결
