export const ROUTE = {
    // Main routes
    intro: '/intro', // 인트로
    signIn: '/signin', // 로그인
  
    // Customer routes
    customer: {
      home: '/customer/home',
      mypage: '/customer/mypage', // 마이페이지
      mypageEdit: '/customer/mypage-edit', // 마이페이지 수정
      signup: '/customer/signup', // 회원가입
      signupComplete: '/customer/signup-complete', // 회원가입 완료
      pet: {
    },
    request: {
      notice: "/customer/request/notice",
      choosePet: "/customer/request/choose-pet-for-grooming", // 반려동물 정보 수정
      },
    },
    designer: {
      base: '/designer', // 디자이너 기본 경로
      signup: '/designer/signup', // 디자이너 회원가입
      signupComplete: '/designer/signup-complete', // 디자이너 회원가입 완료
      signupDetail: '/designer/signup-detail', // 디자이너 회원가입 상세
      signupDetailComplete: '/designer/signup-detail-complete', // 디자이너 회원가입 상세 완료
    },
  
    // Error route
    notFound: '*',
  };