import { useState, useEffect } from "react";
import { CustomInput, MultiSelectButton, Text } from "../../../../components";
import { LocationButton } from "../../../../components/button/LocationButton";
import { MultiSelectButtonProps } from "../../../../components/button/MultiSelectButton/MultiSelectButton";
import { CreateDesignerWorkspaceRequest } from "../../../../types/designer/designer";
import { Style } from "../index.styles";

interface ShopInfoInputSectionProps {
  onChange: (field: keyof CreateDesignerWorkspaceRequest, value: any) => void;
  initialValues: {
    address: string;
    addressDetail: string;
    openHours: string;
    closeHours: string;
    openDays: string;
    directionGuide: string;
    phoneNumber: string;
    workspaceName: string;
    paymentOptions: string[];
  }; // initialValues를 받는 prop 추가
}

export const Payment: MultiSelectButtonProps = {
  row: 1,
  col: 3,
  buttonNames: ["카드 결제", "현금 결제", "계좌 이체"],
  selectedIndexes: [],
  onSelect: (indexes: number[]) => console.log("선택된 버튼 인덱스:", indexes),
};

export default function ShopInfoInputSection({
  onChange,
  initialValues, // initialValues prop 추가
}: ShopInfoInputSectionProps) {
  const [formValues, setFormValues] = useState(initialValues);

  // 초기값이 변경될 때마다 상태를 업데이트하도록 useEffect 추가
  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  const handleHowToPaySelect = (selectedPayIndexs: number[]) => {
    const paymentOptions = selectedPayIndexs.map((index) =>
      index === 0 ? "CARD" : index === 1 ? "CASH" : "ACCOUNT",
    );
    setFormValues((prevValues) => ({
      ...prevValues,
      paymentOptions,
    }));
    onChange("paymentOptions", paymentOptions); // 부모에게 값 전달
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
        value={formValues.workspaceName} // 초기값 설정
        onChange={(e) => {
          const value = e.target.value;
          setFormValues((prevValues) => ({
            ...prevValues,
            workspaceName: value,
          }));
          onChange("workspaceName", value); // 부모에게 값 전달
        }}
      />

      <LocationButton
        initialValues={{
          address: formValues.address,
          addressDetail: formValues.addressDetail,
        }} // 초기값 설정
        onChange={(address, addressDetail) => {
          setFormValues((prevValues) => ({
            ...prevValues,
            address,
            addressDetail,
          }));
          onChange("address", address);
          onChange("addressDetail", addressDetail);
        }}
      />

      <CustomInput
        label="영업 시간"
        placeholder="영업 시간을 입력해주세요"
        value={formValues.openHours} // 초기값 설정
        onChange={(e) => {
          const value = e.target.value;
          setFormValues((prevValues) => ({
            ...prevValues,
            openHours: value,
          }));
          onChange("openHours", value); // 부모에게 값 전달
        }}
      />

      <CustomInput
        label="대표 전화번호"
        placeholder="대표 전화번호를 입력해주세요"
        value={formValues.phoneNumber} // 초기값 설정
        onChange={(e) => {
          const value = e.target.value;
          setFormValues((prevValues) => ({
            ...prevValues,
            phoneNumber: value,
          }));
          onChange("phoneNumber", value); // 부모에게 값 전달
        }}
      />

      <Style.RadioWrapper>
        <Text typo="subtitle300">
          결제 방식{" "}
          <Text typo="body400" color="gray100">
            (중복 선택도 가능해요)
          </Text>
        </Text>
        <MultiSelectButton
          {...(Payment as MultiSelectButtonProps)}
          selectedIndexes={formValues.paymentOptions.map((option) =>
            option === "CARD" ? 0 : option === "CASH" ? 1 : 2,
          )}
          onSelect={handleHowToPaySelect}
        />
      </Style.RadioWrapper>
    </Style.SectionWrapper>
  );
}
