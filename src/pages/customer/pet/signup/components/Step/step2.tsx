import { signUpCustomHook } from "../../../../../../apis/customer/hooks/signUpCustomHook";
import { MultiSelectButton } from "../../../../../../components/button/MultiSelectButton";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import { SectionWrapper } from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";

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
  const handleDiseaseSelect = (selectedIndexes: number[]) => {
    const diseases = [
      "없음",
      "슬개골",
      "외이염",
      "피부염",
      "눈질환",
      "심장병",
      "관절병",
      "기타",
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
      <Text color="black100" typo="subtitle100">
        반려견의 건강상태를 알려주세요
      </Text>

      <Text color="blue100" typo="body100">
        질병 이력 (중복 선택도 가능해요)
      </Text>

      <MultiSelectButton
        row={3}
        col={3}
        buttonNames={[
          "없음",
          "슬개골",
          "외이염",
          "피부염",
          "눈질환",
          "심장병",
          "관절병",
          "기타",
        ]}
        selectedIndexes={[]} // 선택된 질병 인덱스
        onSelect={handleDiseaseSelect}
      />

      <CustomInput
        label="기타"
        placeholder="기타 건강상태를 알려주세요"
        fullwidth={true}
        variant="outlined"
        value={inputData.diseaseDescription}
        onChange={handleDiseaseDescriptionChange}
      />

      <CustomButton fullwidth onClick={onNext}>
        다음
      </CustomButton>
    </SectionWrapper>
  );
}
