import { useState } from "react";
import Camera from "../../../../assets/svg/Camera";
import PetProfile from "../../../../assets/svg/PetProfile";
import { CustomInput } from "../../../../components/input/CustomInput";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import { Text } from "../../../../components/texts/Text";
import { DropButton } from "../../../../components/button/DropButton";
import { CustomButton } from "../../../../components/button/CustomButton";
import {
  ProfileWrapper,
  CameraIcon,
  SectionWrapper,
  ButtonWrapper,
  InputWrapper,
  HalfWrapper,
} from "../../index.styles";

interface Step1Props {
  onNext: () => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  profileImage: string | null;
  onBreedSelect: (index: number) => void;
  onGenderSelect: (index: number) => void;
  selectedBreedIndex: number;
  selectedGenderIndex: number;
}

export default function Step1({
  onNext,
  onImageUpload,
  profileImage,
  onBreedSelect,
  onGenderSelect,
  selectedBreedIndex,
  selectedGenderIndex,
}: Step1Props) {
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
              onChange={onImageUpload}
            />
          </label>
        </CameraIcon>
        {profileImage ? (
          <img
            src={profileImage}
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
        />

        <DropButton
          label="견종"
          placeholder="견종을 선택해주세요"
          options={["말티즈", "푸들", "진돗개", "시츄"]}
          onSelect={(value) => console.log(value)}
        />

        <Text typo="subtitle300">
          성별
          <RadioSelectButton
            buttonNames={["남아", "여아"]}
            selectedIndex={selectedGenderIndex}
            onSelect={onGenderSelect}
          />
        </Text>

        <Text typo="subtitle300">
          분류
          <RadioSelectButton
            buttonNames={["소형견", "중형견", "대형견"]}
            selectedIndex={selectedBreedIndex}
            onSelect={onBreedSelect}
          />
        </Text>

        <InputWrapper>
          <HalfWrapper>
            <CustomInput
              error=""
              hint=""
              label="나이"
              placeholder="예) 4"
              variant="outlined"
            />
            <Text color="gray100" typo="body100">
              살
            </Text>
          </HalfWrapper>

          <HalfWrapper>
            <CustomInput
              error=""
              hint=""
              label="몸무게"
              placeholder="예) 22"
              variant="outlined"
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
