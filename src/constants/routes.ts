export const ROUTE = {
  // Main routes
  intro: "/intro", // 인트로
  signIn: "/signin", // 로그인

  // Customer routes
  customer: {
    home: "/customer/home",
    mypage: {
      home: "/customer/mypage",
      detail: "/customer/mypage/detail",
      edit: "/customer/mypage/edit",
    },
    signup: "/customer/signup", // 회원가입
    signupComplete: "/customer/signup-complete", // 회원가입 완료
    pet: {},
    request: {
      notice: "/customer/request/notice",
      choosePet: "/customer/request/choose-pet-for-grooming", // 반려동물 정보 수정
    },
  },
  designer: {
    base: "/designer", // 디자이너 기본 경로
    signup: "/designer/signup", // 디자이너 회원가입
    signupComplete: "/designer/signup-complete", // 디자이너 회원가입 완료
    signupDetail: "/designer/signup-detail", // 디자이너 회원가입 상세
    signupDetailComplete: "/designer/signup-detail-complete", // 디자이너 회원가입 상세 완료
    mypageDetail: "/designer/mypage/detail", // 디자이너 마이페이지 회원 상세 정보 페이지
    mypageEdit: "/designer/mypage/edit", // 디자이너 마이페이지 수정
  },
  shop: "/shop",
  // Error route
  notFound: "*",
};
