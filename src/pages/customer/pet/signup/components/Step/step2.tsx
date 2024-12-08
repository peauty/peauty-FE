import { signUpCustomHook } from "../../../../../../hooks/signUpCustomHook";
import { MultiSelectButton } from "../../../../../../components/button/MultiSelectButton";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import {  SectionWrapper } from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text";
import { AddPuppyRequest } from "../../../../../../types/customer/puppy";


interface Step2Props {
  onNext: () => void;
  inputData: AddPuppyRequest;
}

export default function Step2({ onNext }: Step2Props) {
  const { inputData, updateDisease, updateDiseaseDescription } = signUpCustomHook();

  const handleDiseaseSelect = (selectedIndexes: number[]) => {
    const diseases = [
      "없음", "외이염", "슬개골", "CANINE_INFLUENZA", "HEART_WORM", "PARVOVIRUS", "RABIES", "기타",
    ];
    const selectedDiseases = selectedIndexes.map((index) => diseases[index]);
    updateDisease(selectedDiseases);
  };

  const handleDiseaseDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDiseaseDescription(event.target.value);
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
        buttonNames={["없음", "슬개골", "KENNEL_COUGH", "CANINE_INFLUENZA", "HEART_WORM", "PARVOVIRUS", "RABIES", "기타"]}
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
