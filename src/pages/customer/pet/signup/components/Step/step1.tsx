import Camera from "../../../../../../assets/svg/Camera";
import PetProfile from "../../../../../../assets/svg/PetProfile";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { RadioSelectButton } from "../../../../../../components/button/RadioSelectButton";
import { Text } from "../../../../../../components/texts/Text";
import { DropButton } from "../../../../../../components/button/DropButton";
import { CustomButton } from "../../../../../../components/button/CustomButton";
import {
  ProfileWrapper,
  CameraIcon,
  SectionWrapper,
  ButtonWrapper,
  InputWrapper,
  HalfWrapper,
} from "../../index.styles";

import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";
import { ChangeEvent } from "react";

interface Step1Props {
  onNext: () => void;
  inputData: RegisterPuppyRequest;
  handleChange: (key: string, value: string) => void;
}

export default function Step1({ onNext, inputData, handleChange }: Step1Props) {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string,
  ) => {
    handleChange(key, event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleChange("profileImageUrl", imageUrl);
    }
  };

  return (
    <div>
      <ProfileWrapper>
        <CameraIcon>
          <label htmlFor="profile-image-upload">
            <Camera width="30" height="30" />
            <input
              id="profile-image-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </CameraIcon>
        {inputData.profileImageUrl ? (
          <img
            src={inputData.profileImageUrl}
            alt="Pet Profile"
            width="132"
            height="132"
          />
        ) : (
          <PetProfile width="132" height="132" />
        )}
      </ProfileWrapper>

      <SectionWrapper>
        <Text color="black100" typo="subtitle100">
          기본정보
        </Text>

        <CustomInput
          label="이름"
          placeholder="이름을 입력해주세요"
          fullwidth={true}
          variant="outlined"
          value={inputData.name}
          onChange={(event) => handleInputChange(event, "name")}
        />

        <DropButton
          label="견종"
          placeholder="견종을 선택해주세요"
          options={["말티즈", "푸들", "진돗개", "시츄"]}
          onSelect={(value) => handleChange("breed", value)}
        />

        <Text typo="subtitle300">
          분류
          <RadioSelectButton
            col={3}
            buttonNames={["SMALL", "MEDIUM", "LARGE"]}
            selectedIndex={["SMALL", "MEDIUM", "LARGE"].indexOf(
              inputData.puppySize || "MEDIUM",
            )}
            onSelect={(index) => {
              const selectedSize = ["SMALL", "MEDIUM", "LARGE"][index];
              handleChange("puppySize", selectedSize);
            }}
          />
        </Text>

        <Text typo="subtitle300">
          성별
          <RadioSelectButton
            buttonNames={["남아", "여아"]}
            selectedIndex={inputData.sex === "M" ? 0 : 1}
            onSelect={(index) => handleChange("sex", index === 0 ? "M" : "F")}
          />
        </Text>

        <InputWrapper>
          <HalfWrapper>
            <CustomInput
              label="나이"
              placeholder="예) 4"
              variant="outlined"
              value={String(inputData.age)}
              onChange={(event) => handleInputChange(event, "age")}
            />
            <Text color="gray100" typo="body100">
              살
            </Text>
          </HalfWrapper>

          <HalfWrapper>
            <CustomInput
              label="몸무게"
              placeholder="예) 22"
              variant="outlined"
              value={String(inputData.weight)}
              onChange={(event) => handleInputChange(event, "weight")}
            />
            <Text color="gray100" typo="body100">
              kg
            </Text>
          </HalfWrapper>
        </InputWrapper>

        <ButtonWrapper>
          <CustomButton fullwidth variant="primary" onClick={onNext}>
            다음
          </CustomButton>
        </ButtonWrapper>
      </SectionWrapper>
    </div>
  );
}
