import { CustomInput, MultiSelectButton, Text } from "../../../../components";
import { LocationButton } from "../../../../components/button/LocationButton";
import { MultiSelectButtonProps } from "../../../../components/button/MultiSelectButton/MultiSelectButton";
import { Payment } from "../../../../components/button/MultiSelectButton/MultiSelectButton.stories";
import { Style } from "../index.styles";

export function ShopInfoInputSection() {
  const handleHowToPaySelect = (selectedPayIndexs: number[]) => {
    console.log("Selected Payment:", selectedPayIndexs);
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">매장 정보</Text>
        <Text color="gray100" typo="body500">
          고객님들이 쉽게 찾아갈 수 있도록 매장 정보를 정확하게 등록해 주세요
        </Text>
      </Style.TitleWrapper>

      <CustomInput label="매장 이름" placeholder="매장 이름을 입력해주세요" />
      <LocationButton />
      <CustomInput label="영업 시간" placeholder="영업 시간을 입력해주세요" />
      <CustomInput
        label="대표 전화번호"
        placeholder="대표 전화번호를 입력해주세요"
      />
      <Style.RadioWrapper>
        <Text typo="subtitle300" color="gray100">
          결제 방식{" "}
          <Text typo="body400" color="gray100">
            (중복 선택도 가능해요)
          </Text>
        </Text>
        <MultiSelectButton
          {...(Payment.args as MultiSelectButtonProps)}
          selectedIndexes={[]}
          onSelect={handleHowToPaySelect}
        />
      </Style.RadioWrapper>
    </Style.SectionWrapper>
  );
}
