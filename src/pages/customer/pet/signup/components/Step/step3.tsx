import { CustomInput } from "../../../../../../components/input/CustomInput";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import { SectionWrapper } from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text";
import { signUpCustomHook } from "../../../../../../apis/customer/hooks/signUpCustomHook";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";

interface Step3Props {
  onSubmit: () => void;
  inputData: RegisterPuppyRequest;
  handleChange: (key: string, value: string) => void;
}

export default function Step3({
  onSubmit,
  inputData,
  handleChange,
}: Step3Props) {
  return (
    <div>
      <SectionWrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text color="black100" typo="subtitle100">
              미용 시 주의할 점이 있다면 알려주세요
            </Text>
            <Text color="gray100" typo="body400">
              성격, 싫어하는 행동, 평소 미용 스트레스 정도 등
            </Text>
          </div>

          <CustomInput
            label="참고"
            placeholder="참고 할 점을 알려주세요"
            fullwidth={true}
            variant="outlined"
            value={inputData.detail}
            onChange={(event) => handleChange("detail", event.target.value)}
          />
        </div>

        <CustomButton size="medium" onClick={onSubmit}>
          확인
        </CustomButton>
      </SectionWrapper>
    </div>
  );
}
