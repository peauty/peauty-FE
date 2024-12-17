import { useState } from "react";
import { MultiSelectButton } from "../../../../../../components/button/MultiSelectButton";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import { ColumnWrapper, SectionWrapper } from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";
import { diseaseMap } from "../../../../../../constants/puppy";
import { ContentsWrapper } from "../../index.styles";

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
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const diseases = Object.keys(diseaseMap);

  const handleDiseaseSelect = (indexes: number[]) => {
    setSelectedIndexes(indexes); // 선택된 인덱스를 상태로 저장
    const selectedDiseases = indexes.map(
      (index) => diseaseMap[diseases[index]],
    );
    handleDiseaseChange(selectedDiseases); // 부모로 전달
  };

  const handleDiseaseDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleChange("diseaseDescription", event.target.value);
  };

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <Text typo="subtitle100">반려견의 건강상태를 알려주세요</Text>

        <ColumnWrapper style={{ gap: "10px" }}>
          <ColumnWrapper>
            <Text typo="subtitle300">질병 이력</Text>
            <Text typo="body400" color="blue100">
              중복 선택 가능해요
            </Text>
          </ColumnWrapper>
          <MultiSelectButton
            row={3}
            col={3}
            buttonNames={diseases}
            selectedIndexes={selectedIndexes} // 상태로 관리된 선택된 인덱스
            onSelect={handleDiseaseSelect}
          />
        </ColumnWrapper>

        <CustomInput
          label="기타"
          placeholder="기타 건강상태를 알려주세요"
          fullwidth={true}
          variant="outlined"
          value={inputData.diseaseDescription}
          onChange={handleDiseaseDescriptionChange}
        />
      </ContentsWrapper>
      <CustomButton fullwidth onClick={onNext}>
        다음
      </CustomButton>
    </SectionWrapper>
  );
}