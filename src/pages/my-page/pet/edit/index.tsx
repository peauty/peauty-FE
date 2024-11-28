import { useState } from "react";
import {
  CustomButton,
  CustomInput,
  DropButton,
  Layout,
  MultiSelectButton,
} from "../../../../components";
import { MultiSelectButtonProps } from "../../../../components/global/button/MultiSelectButton/MultiSelectButton";
import { LargeGrid } from "../../../../components/global/button/MultiSelectButton/MultiSelectButton.stories";
import { Text } from "../../../../components/global/texts/Text";

import { Style } from "./index.styles";
import { RadioSelectButton } from "../../../../components/global/button/RadioSelectButton";
import { Default } from "../../../../components/global/button/RadioSelectButton/RadioSelectButton.stories";
import { RadioSelectButtonProps } from "../../../../components/global/button/RadioSelectButton/RadioSelectButton";

export default function Edit() {
  const dogBreeds = ["말티즈", "푸들", "말티푸", "비숑", "시츄"]; // 더미 데이터 (나중에 api로 get 해올 것)
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  const handleBreedSelect = (value: string) => {
    setSelectedBreed(value);
    console.log("Selected Breed:", selectedBreed);
  };

  const handleDiseaseSelect = (selectedDiseaseIndexes: number[]) => {
    console.log("Selected Diseases:", selectedDiseaseIndexes);
  };

  const handleSizeSelect = (selectedSizeIndexes: number) => {
    console.log("Selected Size:", selectedSizeIndexes);
  };
  return (
    <>
      <Layout>
        <Style.EditPageWrapper>
          <Style.Wrapper>
            <CustomInput
              error=""
              hint=""
              label="이름"
              placeholder="이름을 입력해주세요"
              variant="outlined"
            />
          </Style.Wrapper>

          <DropButton
            label="견종"
            placeholder="견종을 선택해주세요"
            options={dogBreeds}
            onSelect={handleBreedSelect}
          />
          <Text typo="subtitle300">성별</Text>

          <Text typo="subtitle300">
            분류
            <RadioSelectButton
              {...(Default.args as RadioSelectButtonProps)}
              selectedIndex={0}
              onSelect={handleSizeSelect}
            />
          </Text>

          <Style.Wrapper>
            <Style.HalfWrapper>
              <CustomInput
                error=""
                hint=""
                label="나이"
                placeholder="예) 4"
                variant="outlined"
              />
              <Text color="gray100" typo="body100">
                살
              </Text>
            </Style.HalfWrapper>

            <Style.HalfWrapper>
              <CustomInput
                error=""
                hint=""
                label="몸무게"
                placeholder="예) 22"
                variant="outlined"
              />
              <Text color="gray100" typo="body100">
                kg
              </Text>
            </Style.HalfWrapper>
          </Style.Wrapper>
          <Text typo="subtitle300">생년월일</Text>
          <Text typo="subtitle300">
            질병 이력 <Text typo="body400">(중복 선택도 가능해요)</Text>
            <MultiSelectButton
              {...(LargeGrid.args as MultiSelectButtonProps)}
              selectedIndexes={[0]}
              onSelect={handleDiseaseSelect}
            />
          </Text>

          <CustomInput
            error=""
            hint=""
            label="기타"
            placeholder="기타 건강상태를 알려주세요"
            variant="outlined"
          />

          <CustomInput
            error=""
            hint=""
            label="참고"
            placeholder="미용 시 참고해야 할 내용이 있다면 알려주세요"
            variant="outlined"
          />
          <Style.ConfirmButtonWrapper>
            <CustomButton fullwidth variant="primary">
              확인
            </CustomButton>
          </Style.ConfirmButtonWrapper>
        </Style.EditPageWrapper>
      </Layout>
    </>
  );
}
