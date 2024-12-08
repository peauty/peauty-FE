import { useState } from "react";
import { AppBar } from "../../../../components";
import { ProgressWrapper, ProgressBlock } from "./index.styles";
import Step1 from "./components/Step/step1";
import Step2 from "./components/Step/step2";
import Step3 from "./components/Step/step3";
import { signUpCustomHook } from '../../../../apis/customer/hooks/signUpCustomHook';
import axios from 'axios';
import { useUserDetails } from "../../../../hooks/useUserDetails"; 

export default function PetSignUp() {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);

  // Hook을 통해 받은 값들
  const {  
    inputData,
    handleChange,
    updateDisease,
    updateDiseaseDescription,
    setPuppySize,
    setBreed, 
  } = signUpCustomHook();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedBreedIndex, setSelectedBreedIndex] = useState<string>("");
  const [selectedGenderIndex, setSelectedGenderIndex] = useState<string>("");

  // useUserDetails 훅을 사용하여 userId 가져오기
  const { userId, isLoading } = useUserDetails(); 

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // 품종 선택 핸들러
  const handleBreedSelect = (value: string) => {
    setSelectedBreedIndex(value);
    const event = {
      target: { value }
    } as React.ChangeEvent<HTMLInputElement>;  // { value }를 ChangeEvent 타입으로 형변환
    handleChange(event, 'breed');
  };
  
  // 성별 선택 핸들러
  const handleGenderSelect = (index: string) => {
    setSelectedGenderIndex(index);
    const event = {
      target: { value: index }
    } as React.ChangeEvent<HTMLInputElement>;  // { value }를 ChangeEvent 타입으로 형변환
    handleChange(event, 'sex');
  };

  // Step 렌더링 함수
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            onNext={handleNext}
            onImageUpload={handleImageUpload}
            profileImage={profileImage}
            onBreedSelect={handleBreedSelect}
            onGenderSelect={handleGenderSelect}
            selectedBreedIndex={selectedBreedIndex}
            selectedGenderIndex={selectedGenderIndex}
            inputData={inputData}   
          />
        );
      case 2:
        return <Step2 onNext={handleNext} inputData={inputData} />;
      case 3:
        return <Step3 onSubmit={handleSubmit} />;
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
        puppyId: 0,  // 실제로는 생성된 반려견 ID를 사용해야 할 수 있음
        name: inputData.name,
        breed: selectedBreedIndex,
        weight: inputData.weight,
        sex: selectedGenderIndex,
        age: inputData.age,
        birthdate: inputData.birthdate,
        detail: inputData.detail,
        disease: inputData.disease,
        diseaseDescription: inputData.diseaseDescription,
        profileImageUrl: profileImage || '',
        puppySize: inputData.puppySize,
      };

      // POST 요청
      const response = await axios.post(`/v1/users/${userId}/puppies`, payload);  // userId를 URL에 포함
      if (response.status === 200) {
        alert("반려견 등록이 완료되었습니다!");
      }
    } catch (error) {
      console.error("반려견 등록 실패:", error);
      alert("반려견 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="반려견 등록" />
      <ProgressWrapper>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <ProgressBlock key={index} isActive={index < currentStep} />
        ))}
      </ProgressWrapper>
      {renderStep()}
    </>
  );
}
