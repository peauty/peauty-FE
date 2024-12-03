export const ROUTE = {
  // Main routes
  home: "/", // 홈화면
  intro: "/intro", // 인트로
  signIn: "/signin", // 로그인

  // Customer routes
  customer: {
    mypage: "/customer/mypage", // 마이페이지
    signup: "/customer/signup", // 회원가입
    signupComplete: "/customer/signup-complete", // 회원가입 완료
    pet: {
      edit: "/customer/pet/edit", // 반려동물 정보 수정
    },
  },
  designer: {
    base: "/designer", // 디자이너 기본 경로
    signup: "/designer/signup", // 디자이너 회원가입
    signupComplete: "/designer/signup-complete", // 디자이너 회원가입 완료
    signupDetail: "/designer/signup-detail", // 디자이너 회원가입 상세
    signupDetailComplete: "/designer/signup-detail-complete", // 디자이너 회원가입 상세 완료
  },

  shop: "/shop",

  // Error route
  notFound: "*",
};
