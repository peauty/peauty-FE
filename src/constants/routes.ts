export const ROUTE = {
  // Main routes
  intro: "/intro", // 인트로
  signIn: "/signin", // 로그인

  // Customer routes
  customer: {
    home: "/customer/home",
    shop: "/customer/shop",
    mypage: {
      home: "/customer/mypage",
      detail: "/customer/mypage/detail",
      edit: "/customer/mypage/edit",
      writeReview: "/customer/mypage/reviews-new",
      review: {
        write: "/customer/mypage/reviews/write",
        history: "/customer/mypage/reviews",
      },
    },
    signup: "/customer/signup", // 회원가입
    signupComplete: "/customer/signup-complete", // 회원가입 완료
    pets: {
      signup: "/customer/pets/signup",
      detail: (petId: string) => `/customer/pets/${petId}`, // ROUTE.customer.pets.detail(123)
      edit: (petId: string) => `/customer/pets/${petId}/edit`, // ROUTE.customer.pets.edit(123)
    },
    request: {
      home: "/customer/request",
      shop: (shopId: number) => `/customer/request/shops/${shopId}`,
      gallery: (shopId: number) => `/customer/request/shops/${shopId}/gallery`,
    },
    status: "/customer/status",
    payment: "/customer/payment",
  },
  designer: {
    home: "/designer/home", // 디자이너 기본 경로
    signup: "/designer/signup", // 디자이너 회원가입
    signupComplete: "/designer/signup-complete", // 디자이너 회원가입 완료
    signupDetail: "/designer/signup-detail", // 디자이너 회원가입 상세
    signupDetailComplete: "/designer/signup-detail-complete", // 디자이너 회원가입 상세 완료
    mypageDetail: "/designer/mypage/detail", // 디자이너 마이페이지 회원 상세 정보 페이지
    mypageEdit: "/designer/mypage/edit", // 디자이너 마이페이지 수정
    schedule: "/designer/schedule",
    status: "/designer/status",
    mypage: {
      home: "/designer/mypage",
      detail: "/designer/mypage/detail",
      edit: "/designer/mypage/edit",
    },
  },
  // Error route
  notFound: "*",
};
