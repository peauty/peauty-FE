import { useState, useEffect } from "react";
import SvgWarning from "../../../assets/svg/Warning";
import {
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
} from "../../../apis/designer/hooks/useUser";
import { AppBar } from "../../../components/layout/AppBar";
import { ProgressBlock } from "../../../components/progress/ProgressBlock";
import { CustomInput } from "../../../components/input/CustomInput";
import { CustomButton } from "../../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/routes";
import { GNB } from "../../../components/layout/GNB";
import Loading from "../../../components/page/sign-up/Loading";
import { SignUpRequest } from "../../../types/designer/auth";

export const stepWords = [
  {
    title: "이름을 입력해주세요",
    subTitle: "자격증 검증을 위한 본인인증 시 정확한 이름이 필요해요",
    label: "이름",
    placeholder: "이름을 입력해주세요",
    regex: /^[a-zA-Z가-힣\s]{2,}$/,
    errorMessage: "올바른 이름을 입력해주세요",
    key: "name",
  },
  {
    title: "이메일을 설정해주세요",
    subTitle:
      "자격증 검토 결과는 입력하신 이메일로 발송되니, 정확한 이메일을 입력해주세요",
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
    regex: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    errorMessage: "올바른 이메일을 입력해주세요",
    key: "email",
  },
  {
    title: "휴대폰 번호를 입력해주세요",
    subTitle: "입력하신 번호로 중요한 알림을 보내드려요",
    label: "휴대폰 번호",
    placeholder: "휴대폰 번호를 입력해주세요",
    regex: /^01[0-9]-\d{3,4}-\d{4}$/,
    errorMessage: "올바른 휴대폰 번호를 입력해주세요",
    key: "phone",
  },
  {
    title: "닉네임을 설정해주세요",
    subTitle: "",
    label: "닉네임",
    placeholder: "닉네임을 설정해주세요",
    regex: /^[a-zA-Z가-힣0-9]{2,10}$/,
    errorMessage: "올바른 닉네임을 입력해주세요 (2~10자)",
    suffixButton: "중복 검사",
    key: "nickname",
  },
];

function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get("nickname") || "",
    profileImageUrl: params.get("profileImageUrl") || "",
    socialPlatform: params.get("socialPlatform") || "",
    socialId: params.get("socialId") || "",
  };
}

export default function DesignerSignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [checkedNickname, setCheckedNickname] = useState("");
  const [isNickNameAvailable, setisNickNameAvailable] = useState(false);
  const { location, error: locationError, locationLoading } = useLocation();
  const { check } = useCheckNickname();
  const { signup } = useSignup();
  const navigate = useNavigate();
  const LOADINGIMAGE = "https://avatars.githubusercontent.com/u/70759627?v=4"; // TODO: Change to your loading image

  const [formData, setFormData] = useState<Record<string, string>>({});
  const totalSteps = stepWords.length;

  const { title, subTitle, label, placeholder, regex, errorMessage, key } =
    stepWords[currentStep];

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

    // 전화번호 포맷 처리
    if (currentStep === 2) {
      value = value.replace(/[^0-9]/g, "");
      if (value.length <= 3) {
        // 앞자리만 남김
      } else if (value.length <= 7) {
        value = `${value.slice(0, 3)}-${value.slice(3)}`;
      } else {
        value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
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
        nickname: inputValue || "",
        profileImageUrl: formData.profileImageUrl || "",
        email: formData.email || "", // Added email for designer signup
      };

      try {
        await signup(signupData);
        navigate(ROUTE.designer.signupComplete);
      } catch (error) {
        setError("회원가입 중 문제가 발생했습니다.");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setError("");
      setInputValue(formData[stepWords[currentStep - 1].key] || "");
    } else {
      navigate(ROUTE.signIn);
    }
  };

  return (
    <>
      {locationLoading && <Loading imageUrl={LOADINGIMAGE} />}
      <AppBar
        prefix={"backButton"}
        onclick={handleBack}
        title="디자이너 회원가입"
      />
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
                currentStep === 3 ? (
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
