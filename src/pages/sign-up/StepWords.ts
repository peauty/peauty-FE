export const StepWords = [
    {
      title: "이름을 입력해주세요",
      subTitle: "이름은 한 번 설정하면 변경 안돼요",
      label: "이름",
      placeholder: "이름을 입력해주세요",
      regex: /^[a-zA-Z가-힣\s]{2,}$/,
      errorMessage: "올바른 이름을 입력해주세요",
      key: "name", // 추가됨
    },
    {
      title: "휴대폰 번호를 입력해주세요",
      subTitle: "입력하신 번호로 중요한 알림을 보내드려요",
      label: "휴대폰 번호",
      placeholder: "휴대폰 번호를 입력해주세요",
      regex: /^01[0-9]-\d{3,4}-\d{4}$/,
      errorMessage: "올바른 휴대폰 번호를 입력해주세요",
      key: "phone", // 추가됨
    },
    {
      title: "지역을 설정해주세요",
      subTitle: "",
      label: "지역",
      placeholder: "지역을 설정해주세요",
      suffixButton: "현재 위치 불러오기",
      key: "location", // 추가됨
    },
    {
      title: "닉네임을 설정해주세요",
      subTitle: "",
      label: "닉네임",
      placeholder: "닉네임을 설정해주세요",
      regex: /^[a-zA-Z가-힣0-9]{2,10}$/,
      errorMessage: "올바른 닉네임을 입력해주세요 (2~10자)",
      suffixButton: "중복 검사",
      key: "nickname", // 추가됨
    },
  ];