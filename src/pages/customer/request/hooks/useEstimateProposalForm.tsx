import { useState } from "react";
import { SendEstimateProposalRequest } from "../../../../types/customer/bidding";

export function useEstimateProposalForm() {
  const [puppyId, setPuppyId] = useState(0);
  const [formData, setFormData] = useState<SendEstimateProposalRequest>({
    designerIds: [],
    groomingType: "CLEAN",
    detail: "",
    imageUrls: [],
    desiredCost: undefined,
    desiredDateTime: "",
    totalGroomingBodyType: undefined,
    totalGroomingFaceType: undefined,
  });

  const handleChange = (key: keyof SendEstimateProposalRequest, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleArrayChange = (
    key: keyof SendEstimateProposalRequest,
    value: any[],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    formData,
    handleChange,
    handleArrayChange,
    setPuppyId,
    puppyId,
  };
}
