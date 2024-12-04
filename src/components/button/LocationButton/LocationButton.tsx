import { CustomInput } from "../../input/CustomInput";
import { CustomButton } from "../CustomButton";
import {
  CustomButtonWrapper,
  DisabledWrapper,
  LocationButtonWrapper,
  Wrapper,
} from "./LocationButton.styles";

interface Props {}

export default function LocationButton({}: Props) {
  return (
    <>
      <LocationButtonWrapper>
        <DisabledWrapper>
          <CustomInput
            error=""
            hint=""
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
      </LocationButtonWrapper>

      <CustomInput
        error=""
        hint=""
        label=""
        placeholder="상세 주소를 입력해주세요"
        variant="outlined"
      />
    </>
  );
}
