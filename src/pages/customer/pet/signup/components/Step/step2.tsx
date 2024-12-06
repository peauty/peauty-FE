import { MultiSelectButton } from "../../../../../../components/button/MultiSelectButton";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import { ConfirmButtonWrapper ,SectionWrapper} from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text"; 

interface Step2Props {
  onNext: () => void;
}

export default function Step2({ onNext }: Step2Props) {
  return (
    <div>
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
          "질병1",
          "질병2",
          "질병3",
          "질병4",
          "질병5",
          "질병6",
          "기타",
        ]}
        selectedIndexes={[]}
        onSelect={() => {}}
      />
      <CustomInput
        label="기타"
        placeholder="기타 건강상태를 알려주세요"
        fullwidth={true}
        variant="outlined"
      />
     
      <ConfirmButtonWrapper>
        <CustomButton fullwidth onClick={onNext}>
          다음
        </CustomButton>
      </ConfirmButtonWrapper>
      </SectionWrapper>
    </div>
  );
}