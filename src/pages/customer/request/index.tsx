import { useState } from "react";
import Search from "./components/search";
import CustomerRequestNotice from "./components/notice";
import CustomizeGrooming from "./components/customize-grooming";
import { useEstimateProposalForm } from "./hooks/useEstimateProposalForm";
import { ROUTE } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import ChoosePetForGrooming from "./components/choose-pet";

export default function Request() {
  const navigate = useNavigate();

  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const { formData, handleChange, handleArrayChange } =
    useEstimateProposalForm();

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    navigate(ROUTE.customer.mypage.home);
  };

  switch (currentStep) {
    case 1:
      return (
        <Search
          onNext={handleNext}
          inputData={formData}
          handleChange={handleChange}
        />
      );
    case 2:
      return <CustomerRequestNotice onNext={handleNext} />;
    case 3:
      return (
        <ChoosePetForGrooming
          onNext={handleNext}
          inputData={formData}
          handleChange={handleChange}
        />
      );
    case 4:
      return (
        <CustomizeGrooming
          onSubmit={handleSubmit}
          inputData={formData}
          handleChange={handleChange}
        />
      );
  }
}
