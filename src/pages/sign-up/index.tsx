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
import { StepWords } from "./StepWords";

ReactModal.setAppElement("#root");

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
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const { location, error: locationError, locationLoading, fetchLocation } = useLocation();
  const { checkNicknameLoading, checkData, error: checkNicknameError, check } = useCheckNickname();

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
      setInputValue(location)
      setFormData((prev) => ({
        ...prev,
        location,
      }));
    }
  }, [location]);

  useEffect(() => {
    if (checkData?.message === "사용할 수 있는 닉네임입니다.") {
      setIsNicknameAvailable(true);
      setError(""); // 에러 메시지 초기화
    } else if (checkNicknameError) {
      setIsNicknameAvailable(false);
      setError("닉네임 중복 검사 중 문제가 발생했습니다.");
    } else {
      setIsNicknameAvailable(false);
    }
  }, [checkData, checkNicknameError]);


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
                  <CustomButton size="small" variant={error === "" ? "secondary" : "emergency"} onClick={handleGetLocation}>
                    현재 위치 가져오기
                  </CustomButton>
                ) : currentStep === 3 ? (
                  <CustomButton size="small" variant={error === "" ? "secondary" : "emergency"} onClick={handleNicknameCheck} disabled={inputValue==="" || error != ""}>
                    중복 검사
                  </CustomButton>
                ) : undefined
              }
              disabled={currentStep === 2}
            />
          </InputSection>
        </ContentWrapper>
        <ButtonWrapper>
          <CustomButton onClick={handleNext} disabled={inputValue === "" || error != "" }> 
            {currentStep === totalSteps - 1 ? "완료" : "다음"}
          </CustomButton>
        </ButtonWrapper>
      </PageWrapper>
    </>
  );
}