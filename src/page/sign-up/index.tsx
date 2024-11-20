import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import ReactModal from "react-modal";
import { AppBar } from "../../components/global/AppBar";
import { ProgressBlock } from "../../components/global/ProgressBlock";
import { CustomInput } from "../../components/global/CustomInput";
import { CustomButton } from "../../components/global/CustomButton";
import SvgWarning from "../../assets/svg/Warning";
import {
  ButtonWrapper,
  ContentWrapper,
  InputSection,
  PageWrapper,
  StyledAppBarBack,
  SubTitle,
  Title,
  modalStyles,
} from "./index.styles";

ReactModal.setAppElement("#root");

const StepWords = [
    {
      title: "이름을 입력해주세요",
      subTitle: "이름은 한 번 설정하면 변경 안돼요",
      label: "이름",
      placeholder: "이름을 입력해주세요",
      regex: /^[a-zA-Z가-힣\s]{2,}$/,
      errorMessage: "올바른 이름을 입력해주세요",
    },
    {
      title: "휴대폰 번호를 입력해주세요",
      subTitle: "입력하신 번호로 중요한 알림을 보내드려요",
      label: "휴대폰 번호",
      placeholder: "휴대폰 번호를 입력해주세요",
      regex: /^01[0-9]-\d{3,4}-\d{4}$/,
      errorMessage: "올바른 휴대폰 번호를 입력해주세요",
    },
    {
      title: "지역을 설정해주세요",
      subTitle: "",
      label: "지역",
      placeholder: "지역을 입력해주세요",
      suffixButton: "현재 위치 가져오기" // 수정됨
    },
    {
      title: "닉네임을 설정해주세요",
      subTitle: "",
      label: "닉네임",
      placeholder: "닉네임을 설정해주세요",
      regex: /^[a-zA-Z가-힣0-9]{2,10}$/,
      errorMessage: "올바른 닉네임을 입력해주세요 (2~10자)",
      suffixButton: "중복 확인"
    },
];

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const totalSteps = StepWords.length;
  const kakaoKey = "a02fac3a5a779a1f9a1b51d3cc09e6e3"; // TODO: Kakao API 키를 여기에 입력하세요

  const { title, subTitle, label, placeholder, regex, errorMessage } =
    StepWords[currentStep];

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
    if (!navigator.geolocation) {
      setError("브라우저에서 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
            {
              headers: {
                Authorization: `KakaoAK ${kakaoKey}`,
              },
            }
          );

          const data = await response.json();

          if (data.documents && data.documents.length > 0) {
            const addressName = data.documents[0].address_name;
            setInputValue(addressName);
            setError("");
          } else {
            setError("주소를 찾을 수 없습니다.");
          }
        } catch (err) {
          setError("주소 변환 중 오류가 발생했습니다.");
        }
      },
      (err) => {
        setError("현재 위치를 가져올 수 없습니다. (" + err.message + ")");
      }
    );
  };

  const handleNext = () => {
    if (regex && !regex.test(inputValue)) {
      setError(errorMessage);
      return;
    }
    setError("");
    setInputValue("");
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setError("");
      setInputValue("");
    }
  };

  const handleModalToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddressSelect = (data: { address: string }) => {
    setInputValue(data.address);
    setError("");
    handleModalToggle();
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
                ) : undefined
              }
            />
            <ReactModal
              isOpen={isOpen}
              onRequestClose={handleModalToggle}
              contentLabel="주소 검색"
              style={modalStyles}
            >
              <DaumPostcode onComplete={handleAddressSelect} />
            </ReactModal>
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