import { useState } from "react";
import { signUpCustomHook } from "../../../../../../apis/customer/hooks/signUpCustomHook";
import { MultiSelectButton } from "../../../../../../components/button/MultiSelectButton";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import { SectionWrapper } from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";
import { diseaseMap } from "../../../../../../constants/puppy";

interface Step2Props {
  onNext: () => void;
  inputData: RegisterPuppyRequest;
  handleChange: (key: string, value: string) => void;
  handleDiseaseChange: (diseaseValue: string[]) => void;
}

export default function Step2({
  onNext,
  inputData,
  handleChange,
  handleDiseaseChange,
}: Step2Props) {
  // 선택된 질병을 상태로 관리
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]);
  const dieseases = Object.keys(diseaseMap);
  const handleDiseaseSelect = (selectedIndexes: number[]) => {
    // 선택된 질병 상태 업데이트
    setSelectedDiseases(selectedIndexes);

    const diseases = [
      "NONE",
      "PATELLA",
      "EAR_INFECTION",
      "DERMATITIS",
      "EYE_DISEASE",
      "HEART_DISEASE",
      "ARTHRITIS",
      "ETC",
    ];

    const selectedDiseases = selectedIndexes.map((index) => diseases[index]);
    handleDiseaseChange(selectedDiseases);
  };

  const handleDiseaseDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleChange("diseaseDescription", event.target.value);
  };

  return (
    <SectionWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Text typo="subtitle100">반려견의 건강상태를 알려주세요</Text>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text typo="subtitle300">질병 이력</Text>
            <Text typo="body400" color="blue100">
              중복 선택 가능해요
            </Text>
          </div>
          <MultiSelectButton
            row={3}
            col={3}
            buttonNames={dieseases}
            selectedIndexes={selectedDiseases} // 상태로 관리된 선택된 인덱스
            onSelect={handleDiseaseSelect}
          />
        </div>

        <CustomInput
          label="기타"
          placeholder="기타 건강상태를 알려주세요"
          fullwidth={true}
          variant="outlined"
          value={inputData.diseaseDescription}
          onChange={handleDiseaseDescriptionChange}
        />
      </div>

      <CustomButton fullwidth onClick={onNext}>
        다음
      </CustomButton>
    </SectionWrapper>
  );
}
