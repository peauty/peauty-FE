import { useState } from "react";
import { CustomInput } from "../../input/CustomInput";
import { CustomButton } from "../CustomButton";
import {
  CustomButtonWrapper,
  DisabledWrapper,
  LocationButtonWrapper,
} from "./LocationButton.styles";
import SearchLocationModal from "../../../pages/designer/signup-detail/components/SearchLocationModal";

export default function LocationButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenSearchLocationModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseSearchLocationModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <LocationButtonWrapper>
        <DisabledWrapper>
          <CustomInput
            label="위치"
            placeholder="매장 위치를 검색해주세요"
            variant="outlined"
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
          variant="outlined"
        />
      </LocationButtonWrapper>

      {isModalVisible && (
        <SearchLocationModal onClose={handleCloseSearchLocationModal} />
      )}
    </>
  );
}
