import { useMemo, useCallback } from "react";
import { CustomInput, MultiSelectButton, Text } from "../../../../components";
import { LocationButton } from "../../../../components/button/LocationButton";
import { MultiSelectButtonProps } from "../../../../components/button/MultiSelectButton/MultiSelectButton";
import {
  CreateDesignerWorkspaceRequest,
  PaymentOptionType,
} from "../../../../types/designer/designer";
import { Style } from "../index.styles";
import { Payment } from "../../../../components/button/MultiSelectButton/MultiSelectButton.stories";

interface ShopInfoInputSectionProps {
  initialValues: {
    address: string;
    addressDetail: string;
    openHours: string;
    phoneNumber: string;
    workspaceName: string;
    paymentOptions: PaymentOptionType[];
  };
  onChange: (field: keyof CreateDesignerWorkspaceRequest, value: any) => void;
}

// 1️⃣ as const로 고정된 타입을 명시 (타입 안정성 확보)
const paymentOptionMap = {
  1: "CARD",
  2: "CASH",
  3: "ACCOUNT",
} as const;

export default function ShopInfoInputSection({
  onChange,
  initialValues, // initialValues prop 추가
}: ShopInfoInputSectionProps) {
  // 2️⃣ 초기값 디스트럭처링
  const {
    address = "",
    addressDetail = "",
    openHours = "",
    phoneNumber = "",
    workspaceName = "",
    paymentOptions = [],
  } = initialValues;

  // 3️⃣ paymentOptionMap을 useMemo로 캐싱하여 불필요한 연산 제거
  const paymentEntries = useMemo(() => Object.entries(paymentOptionMap), []);

  // 4️⃣ 헬퍼 함수 생성 (onChange 중복 제거)
  const updateShopInfoField = useCallback(
    (field: keyof CreateDesignerWorkspaceRequest, value: any) => {
      onChange(field, value);
    },
    [onChange],
  );

  // 5️⃣ getSelectedIndexes의 불필요한 반복 제거
  const getSelectedIndexes = useMemo(() => {
    const indexes = paymentEntries
      .filter(([_, option]) => paymentOptions.includes(option))
      .map(([index]) => Number(index));
    return indexes;
  }, [paymentOptions, paymentEntries]);

  // 6️⃣ 선택한 결제 방식을 PaymentOptionType 배열로 변환
  const mapSelectedIndexesToPaymentOptions = (selectedPayIndexes: number[]) => {
    const mappedPaymentOptions = selectedPayIndexes
      .map((index) => paymentOptionMap[index as keyof typeof paymentOptionMap]) // `index`를 명시적으로 타입 캐스팅
      .filter(Boolean);
    updateShopInfoField("paymentOptions", mappedPaymentOptions);
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
        value={workspaceName}
        onChange={(e) => updateShopInfoField("workspaceName", e.target.value)}
      />

      <LocationButton
        initialValues={{ address, addressDetail }}
        onChange={(address, addressDetail) => {
          updateShopInfoField("address", address);
          updateShopInfoField("addressDetail", addressDetail);
        }}
      />

      <CustomInput
        label="영업 시간"
        placeholder="영업 시간을 입력해주세요"
        value={openHours}
        onChange={(e) => updateShopInfoField("openHours", e.target.value)}
      />

      <CustomInput
        label="대표 전화번호"
        placeholder="대표 전화번호를 입력해주세요"
        value={phoneNumber}
        onChange={(e) => updateShopInfoField("phoneNumber", e.target.value)}
      />

      <Style.RadioWrapper>
        <Text typo="subtitle300">
          결제 방식
          <Text typo="body400" color="gray100">
            {" "}
            (중복 선택도 가능해요)
          </Text>
        </Text>
        <MultiSelectButton
          {...(Payment.args as MultiSelectButtonProps)}
          selectedIndexes={getSelectedIndexes}
          onSelect={mapSelectedIndexesToPaymentOptions}
        />
      </Style.RadioWrapper>
    </Style.SectionWrapper>
  );
}
