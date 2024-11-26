import {
  CustomButton,
  CustomInput,
  Layout,
  MultiSelectButton,
} from "../../../../components";
import { MultiSelectButtonProps } from "../../../../components/global/button/MultiSelectButton/MultiSelectButton";
import { LargeGrid } from "../../../../components/global/button/MultiSelectButton/MultiSelectButton.stories";
import { Text } from "../../../../components/global/texts/Text";

import { Style } from "./index.styles";

export default function Edit() {
  const handleSelect = (selectedIndexes: number[]) => {
    console.log("Selected buttons:", selectedIndexes);
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

          <Text typo="subtitle300">견종</Text>
          <Text typo="subtitle300">성별</Text>

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
              {...(LargeGrid.args as MultiSelectButtonProps)} // 스토리북의 LargeGrid args 사용
              selectedIndexes={[0]}
              onSelect={handleSelect} // 커스텀 이벤트 핸들러
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
