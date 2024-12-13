import { useState } from "react";
import { AppBar } from "../../../../components";
import { ProgressWrapper, ProgressBlock } from "./index.styles";
import Step1 from "./components/Step/step1";
import Step2 from "./components/Step/step2";
import Step3 from "./components/Step/step3";
import { signUpCustomHook } from "../../../../apis/customer/hooks/signUpCustomHook";
import axios from "axios";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import { registerPuppy } from "../../../../apis/customer/resources/puppy";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/routes";

export default function PetSignUp() {
  const navigate = useNavigate();

  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);

  // Hook을 통해 받은 값들
  const { inputData, handleChange, handleDiseaseChange } = signUpCustomHook();

  // useUserDetails 훅을 사용하여 userId 가져오기
  const { userId, isLoading } = useUserDetails();

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Step 렌더링 함수
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            onNext={handleNext}
            inputData={inputData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <Step2
            onNext={handleNext}
            inputData={inputData}
            handleChange={handleChange}
            handleDiseaseChange={handleDiseaseChange}
          />
        );
      case 3:
        return (
          <Step3
            onSubmit={handleSubmit}
            inputData={inputData}
            handleChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  // 반려견 등록 POST 요청
  const handleSubmit = async () => {
    if (isLoading || !userId) {
      alert("유저 정보를 불러오는 중입니다.");
      return;
    }

    try {
      const payload = {
        //puppyId: 0, // 실제로는 생성된 반려견 ID를 사용해야 할 수 있음
        name: inputData.name,
        breed: inputData.breed,
        weight: inputData.weight,
        sex: inputData.sex,
        age: inputData.age,
        birthdate: inputData.birthdate,
        detail: inputData.detail,
        disease: inputData.disease ?? [], // TODO
        diseaseDescription: inputData.diseaseDescription,
        profileImageUrl: inputData.profileImageUrl || "",
        puppySize: inputData.puppySize,
      };

      // POST 요청
      await registerPuppy(userId, payload);
      alert("등록 완료");
      navigate(ROUTE.customer.mypage.home);
    } catch (error) {
      console.error("반려견 등록 실패:", error);
      alert("반려견 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="반려견 등록" />
      <div style={{ paddingBottom: `30px` }}>
        <ProgressWrapper>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <ProgressBlock key={index} isActive={index < currentStep} />
          ))}
        </ProgressWrapper>
        {renderStep()}
      </div>
    </>
  );
}
