import { CustomInput } from "../../input/CustomInput";
import { CustomButton } from "../CustomButton";
import {
  CustomButtonWrapper,
  DisabledWrapper,
  LocationButtonWrapper,
} from "./LocationButton.styles";

export default function LocationButton() {
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
          <CustomButton variant="secondary" size="small">
            검색
          </CustomButton>
        </CustomButtonWrapper>
        <CustomInput
          placeholder="상세 주소를 입력해주세요"
          variant="outlined"
        />
      </LocationButtonWrapper>
    </>
  );
}
