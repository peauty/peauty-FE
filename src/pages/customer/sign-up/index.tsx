import { useState, useEffect } from "react";
import SvgWarning from "../../../assets/svg/Warning";
import {
  ButtonWrapper,
  ContentWrapper,
  InputSection,
  PageWrapper,
  SubTitle,
  Title,
} from "./index.styles";
import { useLocation } from "../../../hooks/useLocation";
import {
  useCheckNickname,
  useSignup,
} from "../../../apis/customer/hooks/useUser";
import { AppBar } from "../../../components/layout/AppBar";
import { ProgressBlock } from "../../../components/progress/ProgressBlock";
import { CustomInput } from "../../../components/input/CustomInput";
import { CustomButton } from "../../../components/button/CustomButton";
import { StepWords } from "./StepWords";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/routes";
import { GNB } from "../../../components/layout/GNB";
import Loading from "../../../components/page/sign-up/Loading";
import { SignUpRequest } from "../../../types/customer/auth";

function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get("nickname") || "",
    profileImageUrl: params.get("profileImageUrl") || "",
    socialPlatform: params.get("socialPlatform") || "",
    socialId: params.get("socialId") || "",
  };
}

export default function CustomerSignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [checkedNickname, setCheckedNickname] = useState("");
  const [isNickNameAvailable, setisNickNameAvailable] = useState(false);
  const {
    location,
    error: locationError,
    locationLoading,
    fetchLocation,
  } = useLocation();
  const { check } = useCheckNickname();
  const { signup } = useSignup();
  const navigate = useNavigate();

  // 각 Step별 데이터를 저장할 상태 추가
  const [formData, setFormData] = useState<Record<string, string>>({});
  const totalSteps = StepWords.length;

  const { title, subTitle, label, placeholder, regex, errorMessage, key } =
    StepWords[currentStep];

  useEffect(() => {
    if (currentStep === 0) {
      const { name, profileImageUrl, socialPlatform, socialId } =
        parseQueryParams();
      setFormData({
        name: name,
        profileImageUrl: profileImageUrl,
        socialPlatform,
        socialId,
      });
      setInputValue(name);
    }
  }, [currentStep]);

  useEffect(() => {
    if (location) {
      setInputValue(location);
      setFormData((prev) => ({
        ...prev,
        location,
      }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 휴대폰 번호 포맷 적용 (currentStep === 1일 때만 적용)
    if (currentStep === 1) {
      value = value.replace(/[^0-9]/g, ""); // 숫자만 남기기
      if (value.length <= 3) {
        value = value; // 3자리 이하
      } else if (value.length <= 7) {
        value = `${value.slice(0, 3)}-${value.slice(3)}`; // 중간자리까지
      } else {
        value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`; // 끝자리까지
      }
    }

    setInputValue(value);

    if (regex && regex.test(value)) {
      setError("");
    } else if (regex) {
      setError(errorMessage);
    }

    if (currentStep === 3 && isNickNameAvailable && checkedNickname !== value) {
      setisNickNameAvailable(false);
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
    setCheckedNickname(inputValue);
    const isAvailableNickname = await check(inputValue);
    if (!isAvailableNickname) {
      setError("이미 사용중인 닉네임입니다.");
    } else {
      setisNickNameAvailable(true);
      setSuccess("사용 가능한 닉네임입니다.");
    }
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
      const signupData: SignUpRequest = {
        socialId: formData.socialId || "",
        socialPlatform: formData.socialPlatform as "KAKAO" | "GOOGLE" | "APPLE",
        name: formData.name || "",
        phoneNumber: formData.phone || "",
        address: formData.location || "",
        nickname: inputValue || "",
        profileImageUrl: formData.profileImageUrl || "",
      };

      try {
        await signup(signupData);
        navigate(ROUTE.customer.signupComplete);
      } catch (error) {
        setError("회원가입 중 문제가 발생했습니다.");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setError("");
      setInputValue(formData[StepWords[currentStep - 1].key] || "");
    } else {
      navigate(ROUTE.signIn);
    }
  };

  return (
    <>
      {locationLoading && <Loading />}
      <AppBar prefix={"backButton"} onclick={handleBack} title="회원가입" />
      <PageWrapper>
        <ContentWrapper>
          <ProgressBlock
            current={currentStep + 1}
            gap={10}
            total={totalSteps}
          />
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
              success={
                currentStep === 3
                  ? checkedNickname === inputValue
                    ? success
                    : ""
                  : ""
              }
              height="40px"
              suffix={
                currentStep === 2 ? (
                  <CustomButton
                    size="small"
                    variant={error === "" ? "primary" : "emergency"}
                    onClick={handleGetLocation}
                  >
                    현재 위치 가져오기
                  </CustomButton>
                ) : currentStep === 3 ? (
                  <CustomButton
                    size="small"
                    variant={error === "" ? "primary" : "emergency"}
                    onClick={handleNicknameCheck}
                    disabled={inputValue === "" || error !== ""}
                  >
                    중복 검사
                  </CustomButton>
                ) : undefined
              }
              disabled={currentStep === 2}
            />
          </InputSection>
        </ContentWrapper>
        <GNB
          buttonText={currentStep === totalSteps - 1 ? "완료" : "다음"}
          onLargeButtonClick={handleNext}
          disabled={
            currentStep === 3
              ? inputValue === "" || error !== "" || !isNickNameAvailable
              : inputValue === "" || error !== ""
          }
        />
      </PageWrapper>
    </>
  );
}
