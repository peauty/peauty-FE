import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./components/search";
import CustomerRequestNotice from "./components/notice";
import ChoosePetForGrooming from "./components/choose-pet";
import CustomizeGrooming from "./components/customize-grooming";
import { useEstimateProposalForm } from "./hooks/useEstimateProposalForm";

import { ROUTE } from "../../../constants/routes";
import { initProcessWithSendEstimateProposal } from "../../../apis/customer/resources/customer-bidding-api";
import { useUserDetails } from "../../../hooks/useUserDetails";

export default function Request() {
  const navigate = useNavigate();

  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const { formData, handleChange, handleArrayChange, setPuppyId, puppyId } =
    useEstimateProposalForm();

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const { userId } = useUserDetails();

  const handleSubmit = async () => {
    try {
      if (!puppyId) {
        alert("Puppy를 선택해주세요.");
        return;
      }
      if (!userId) {
        return;
      }

      // API 호출
      await initProcessWithSendEstimateProposal(userId, puppyId, formData);

      // 성공 시 이동
      alert("요청이 성공적으로 완료되었습니다.");
      navigate(ROUTE.customer.mypage.home);
    } catch (error) {
      console.error(error);
      alert("요청 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  switch (currentStep) {
    case 1:
      return (
        <Search onNext={handleNext} handleArrayChange={handleArrayChange} />
      );
    case 2:
      return <CustomerRequestNotice onNext={handleNext} />;
    case 3:
      return (
        <ChoosePetForGrooming onNext={handleNext} setPuppyId={setPuppyId} />
      );
    case 4:
      return (
        <CustomizeGrooming
          onSubmit={handleSubmit}
          inputData={formData}
          handleChange={handleChange}
          handleArrayChange={handleArrayChange}
        />
      );
  }
}
