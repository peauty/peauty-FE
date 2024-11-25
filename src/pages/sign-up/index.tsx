import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import SvgWarning from "../../assets/svg/Warning";
import {
  ButtonWrapper,
  ContentWrapper,
  InputSection,
  PageWrapper,
  StyledAppBarBack,
  SubTitle,
  Title,
} from "./index.styles";
import { useLocation } from "../../hooks/useLocation";
import { useCheckNickname } from "../../hooks/useCheckNickname";
import { AppBar } from "../../components/global/layout/AppBar";
import { ProgressBlock } from "../../components/global/progress/ProgressBlock";
import { CustomInput } from "../../components/global/input/CustomInput";
import { CustomButton } from "../../components/global/button/CustomButton";

ReactModal.setAppElement("#root");

const StepWords = [
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
    placeholder: "지역을 입력해주세요",
    suffixButton: "현재 위치 가져오기",
    key: "location", // 추가됨
  },
  {
    title: "닉네임을 설정해주세요",
    subTitle: "",
    label: "닉네임",
    placeholder: "닉네임을 설정해주세요",
    regex: /^[a-zA-Z가-힣0-9]{2,10}$/,
    errorMessage: "올바른 닉네임을 입력해주세요 (2~10자)",
    suffixButton: "중복 확인",
    key: "nickname", // 추가됨
  },
];

function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    username: params.get("username") || "",
    profileUrl: params.get("profile_url") || "",
    socialPlatform: params.get("social_platform") || "",
    socialId: params.get("social_id") || "",
  };
}

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { location, error: locationError, fetchLocation } = useLocation();
  const { loading, data, error: checkNicknameError, check } = useCheckNickname();

  // 각 Step별 데이터를 저장할 상태 추가
  const [formData, setFormData] = useState<Record<string, string>>({});
  const totalSteps = StepWords.length;

  const { title, subTitle, label, placeholder, regex, errorMessage, key } =
    StepWords[currentStep];

  useEffect(() => {
    // 첫 번째 Step이 name일 경우 초기값 설정
    if (currentStep === 0) {
      // 쿼리 파라미터에서 데이터 추출 및 초기 상태 설정
      const { username, profileUrl, socialPlatform, socialId } = parseQueryParams();

      // username을 name에, profile_url을 profileImageUrl에 저장
      setFormData({
        name: username,
        profileImageUrl: profileUrl,
        socialPlatform,
        socialId,
      });
      setInputValue(username);
    }
  }, [currentStep]);

  useEffect(() => {
    // 현재 위치가 업데이트되면 formData에 반영
    if (location) {
      setFormData((prev) => ({
        ...prev,
        location,
      }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (regex && regex.test(value)) {
      setError("");
    } else if (regex) {
      setError(errorMessage);
    }
  };

  const handleGetLocation = () => {
    fetchLocation();
    setInputValue(location)
    if (locationError) {
      setError(locationError);
    }
  };

  const handleNicknameCheck = async () => {
    if (!inputValue || !regex || !regex.test(inputValue)) {
      setError("올바른 닉네임을 입력해주세요 (2~10자)");
      return;
    }
    check(inputValue);
  };

  const handleNext = async () => {
    if (regex && !regex.test(inputValue)) {
      setError(errorMessage);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [key]: inputValue,
    }));

    setError("");
    setInputValue("");

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("회원가입 요청 실패");
        }

        alert("회원가입이 완료되었습니다!");
      } catch (error) {
        console.error("회원가입 오류:", error);
        setError("회원가입 중 문제가 발생했습니다.");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setError("");
      setInputValue(formData[StepWords[currentStep - 1].key] || "");
    }
  };

  const handleModalToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar prefix={<StyledAppBarBack onClick={handleBack} />} title="회원가입" />
      <PageWrapper>
        <ContentWrapper>
          <ProgressBlock current={currentStep + 1} gap={10} total={totalSteps} />
          <Title>{title}</Title>
          {subTitle && (
            <SubTitle>
              <SvgWarning />
              {subTitle}
            </SubTitle>
          )}
          <InputSection>
            <CustomInput
              label={label}
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              error={error}
              height="40px"
              suffix={
                currentStep === 2 ? (
                  <CustomButton size="small" onClick={handleGetLocation}>
                    현재 위치 가져오기
                  </CustomButton>
                ) : currentStep === 3 ? (
                  <CustomButton size="small" onClick={handleNicknameCheck}>
                    중복 확인
                  </CustomButton>
                ) : undefined
              }
              disabled={currentStep === 2}
            />
          </InputSection>
        </ContentWrapper>
        <ButtonWrapper>
          <CustomButton onClick={handleNext}>
            {currentStep === totalSteps - 1 ? "완료" : "다음"}
          </CustomButton>
        </ButtonWrapper>
      </PageWrapper>
    </>
  );
}