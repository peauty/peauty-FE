import { CustomInput, Text } from "../../../../components";
import { LocationButton } from "../../../../components/button/LocationButton";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import { RadioSelectButtonProps } from "../../../../components/button/RadioSelectButton/RadioSelectButton";
import { Payment } from "../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import { Style } from "../index.styles";

export function ShopInfoSection() {
  const handleHowToPaySelect = (selectedPayIndex: number) => {
    console.log("Selected Payment:", selectedPayIndex);
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">매장 정보</Text>
        <Text color="gray100" typo="body500">
          고객님들이 쉽게 찾아갈 수 있도록 매장 정보를 정확하게 등록해 주세요
        </Text>
      </Style.TitleWrapper>

      <CustomInput
        label="매장 이름"
        placeholder="매장 이름을 입력해주세요"
        variant="outlined"
      />

      <LocationButton />

      <CustomInput
        label="영업 시간"
        placeholder="영업 시간을 입력해주세요"
        variant="outlined"
      />

      <CustomInput
        label="대표 전화번호"
        placeholder="대표 전화번호를 입력해주세요"
        variant="outlined"
      />

      <Style.RadioWrapper>
        <Text typo="subtitle300" color="gray100">
          결제 방식
        </Text>
        <RadioSelectButton
          {...(Payment.args as RadioSelectButtonProps)}
          selectedIndex={0}
          onSelect={handleHowToPaySelect}
        />
      </Style.RadioWrapper>
    </Style.SectionWrapper>
  );
}
