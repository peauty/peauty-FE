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
}

export default function LocationButton({ onChange }: LocationButtonProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");

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
    onChange(selectedLocation, addressDetail);
  }, [selectedLocation]);

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
            variant="secondary"
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
