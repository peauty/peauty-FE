//Step3
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import { ConfirmButtonWrapper ,SectionWrapper} from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text"; 

interface Step3Props {
  onSubmit: () => void;
}

export default function Step3({ onSubmit }: Step3Props) {
  return (
    <div>
        <SectionWrapper>
        <Text color="black100" typo="subtitle100">
        미용 시 주의할 점이 있다면 알려주세요
      </Text>
      <Text color="blue100" typo="body400">
        성격, 싫어하는 행동, 평소 미용 스트레스 정도 등
      </Text>

   
      <CustomInput
        label="참고"
        placeholder="참고할 점을 알려주세요"
        fullwidth={true}
        variant="outlined"
      />
   
      <ConfirmButtonWrapper>
        <CustomButton size="medium" onClick={onSubmit}>
          확인
        </CustomButton>
      </ConfirmButtonWrapper>
      </SectionWrapper>
    </div>
  );
}
