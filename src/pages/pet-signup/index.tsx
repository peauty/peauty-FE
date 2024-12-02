import { useState } from "react";
import { Wrapper } from "../../components/layout/Wrpper";
import { Layout } from "../../components/layout/Layout";
import { AppBar } from "../../components";
import { ProgressWrapper, ProgressBlock } from "./index.styles";
import Step1 from "./components/Step/step1";
import Step2 from "./components/Step/step2";
import Step3 from "./components/Step/step3";

export default function PetSignUp() {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedBreedIndexes, setSelectedBreedIndexes] = useState<number[]>([]);
  const [selectedGenderIndexes, setSelectedGenderIndexes] = useState<number[]>([]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            onNext={handleNext}
            onImageUpload={handleImageUpload}
            profileImage={profileImage}
            onBreedSelect={setSelectedBreedIndexes}
            onGenderSelect={setSelectedGenderIndexes}
            selectedBreedIndexes={selectedBreedIndexes}
            selectedGenderIndexes={selectedGenderIndexes}
          />
        );
      case 2:
        return <Step2 onNext={handleNext} />;
      case 3:
        return <Step3 onSubmit={() => alert("반려견 등록이 완료되었습니다!")} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Wrapper>
        <AppBar prefix="backButton" title="반려견 등록" />

        <ProgressWrapper>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <ProgressBlock key={index} isActive={index < currentStep} />
          ))}
        </ProgressWrapper>

        {renderStep()}
      </Wrapper>
    </Layout>
  );
}
