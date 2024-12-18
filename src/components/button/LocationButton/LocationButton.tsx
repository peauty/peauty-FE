import { useState, useEffect } from "react";
import { CustomInput } from "../../input/CustomInput";
import { CustomButton } from "../CustomButton";
import {
  CustomButtonWrapper,
  DisabledWrapper,
  LocationButtonWrapper,
} from "./LocationButton.styles";
import SearchLocationModal from "../../../pages/designer/signup-detail/components/SearchLocationModal";

interface LocationButtonProps {
  onChange: (address: string, addressDetail: string) => void;
  initialValues?: { address: string; addressDetail: string }; // 초기값을 받을 수 있도록 수정
}

export default function LocationButton({
  onChange,
  initialValues = { address: "", addressDetail: "" }, // 기본값 설정
}: LocationButtonProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>(
    initialValues.address,
  );
  const [addressDetail, setAddressDetail] = useState<string>(
    initialValues.addressDetail,
  );

  const handleOpenSearchLocationModal = () => setIsModalVisible(true);
  const handleCloseSearchLocationModal = () => setIsModalVisible(false);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setAddressDetail("");
    handleCloseSearchLocationModal();
  };

  const handleAddressDetailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newDetail = e.target.value;
    setAddressDetail(newDetail);
    onChange(selectedLocation, newDetail);
  };

  useEffect(() => {
    if (initialValues.address && initialValues.addressDetail) {
      setSelectedLocation(initialValues.address);
      setAddressDetail(initialValues.addressDetail);
    }
  }, [initialValues.address, initialValues.addressDetail]);

  useEffect(() => {
    onChange(selectedLocation, addressDetail);
  }, [selectedLocation, addressDetail]);

  return (
    <>
      <LocationButtonWrapper>
        <DisabledWrapper>
          <CustomInput
            label="위치"
            placeholder="매장 위치를 검색해주세요"
            value={selectedLocation}
            disabled
          />
        </DisabledWrapper>
        <CustomButtonWrapper>
          <CustomButton
            variant="primary"
            size="small"
            onClick={handleOpenSearchLocationModal}
          >
            검색
          </CustomButton>
        </CustomButtonWrapper>
        <CustomInput
          placeholder="상세 주소를 입력해주세요"
          value={addressDetail}
          onChange={handleAddressDetailChange}
        />
      </LocationButtonWrapper>

      {isModalVisible && (
        <SearchLocationModal
          onLocationSelect={handleLocationSelect}
          onClose={handleCloseSearchLocationModal}
        />
      )}
    </>
  );
}
