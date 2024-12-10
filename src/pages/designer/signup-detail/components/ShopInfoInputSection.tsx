import { CustomInput, MultiSelectButton, Text } from "../../../../components";
import { LocationButton } from "../../../../components/button/LocationButton";
import { MultiSelectButtonProps } from "../../../../components/button/MultiSelectButton/MultiSelectButton";
import { Payment } from "../../../../components/button/MultiSelectButton/MultiSelectButton.stories";
import { CreateDesignerWorkspaceRequest } from "../../../../types/designer";
import { Style } from "../index.styles";

interface ShopInfoInputSectionProps {
  onChange: (field: keyof CreateDesignerWorkspaceRequest, value: any) => void;
}

export default function ShopInfoInputSection({
  onChange,
}: ShopInfoInputSectionProps) {
  const handleHowToPaySelect = (selectedPayIndexs: number[]) => {
    const paymentOptions = selectedPayIndexs.map((index) =>
      index === 0 ? "CARD" : index === 1 ? "CASH" : "ACCOUNT",
    );
    onChange("paymentOptions", paymentOptions);
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
        label="이름"
        placeholder="매장 이름을 입력해주세요"
        onChange={(e) => onChange("workspaceName", e.target.value)}
      />

      <LocationButton
        onChange={(address, addressDetail) => {
          onChange("address", address);
          onChange("addressDetail", addressDetail);
        }}
      />

      <CustomInput
        label="영업 시간"
        placeholder="영업 시간을 입력해주세요"
        onChange={(e) => onChange("openHours", e.target.value)}
      />

      <CustomInput
        label="대표 전화번호"
        placeholder="대표 전화번호를 입력해주세요"
        onChange={(e) => onChange("phoneNumber", e.target.value)}
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
