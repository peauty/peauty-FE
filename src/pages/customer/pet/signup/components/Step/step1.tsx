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

import { signUpCustomHook } from "../../../../../../apis/customer/hooks/signUpCustomHook";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";

interface Step1Props {
  onNext: () => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  profileImage: string | null;
  onBreedSelect: (index: string) => void;
  onGenderSelect: (index: string) => void;
  selectedBreedIndex: string;
  selectedGenderIndex: string;
  inputData: RegisterPuppyRequest;
}

export default function Step1({
  onNext,
  onImageUpload,
  profileImage,
  onGenderSelect,
  selectedGenderIndex,
}: Step1Props) {
  const {  inputData,
    handleChange,
    updateDisease,
    updateDiseaseDescription,
    setPuppySize,
    setBreed, } = signUpCustomHook();

  // function setPuppySize(size: number): void {
  //   throw new Error("Function not implemented.");
  // }

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
          value={inputData.name}
          onChange={(event) => handleChange(event, "name")}
        />

        <DropButton
          label="견종"
          placeholder="견종을 선택해주세요"
          options={["말티즈", "푸들", "진돗개", "시츄"]}
          onSelect={(value) => setBreed(value)} // 견종 값 설정
        />

        <Text typo="subtitle300">
          분류
          <RadioSelectButton
            col={3}
            buttonNames={["SMALL", "MEDIUM", "LARGE"]}
            selectedIndex={parseInt(inputData.puppySize ?? "0")}
            onSelect={(size) => setPuppySize(size)}
          />
        </Text>

        <Text typo="subtitle300">
          성별
          <RadioSelectButton
            buttonNames={["남아", "여아"]}
            selectedIndex={selectedGenderIndex === "M" ? 0 : 1}
            onSelect={(value) => {
              (value === 0 ? "M" : "F");
              onGenderSelect(value === 0 ? "M" : "F");
            }}
          />
        </Text>

        <InputWrapper>
          <HalfWrapper>
            <CustomInput
              label="나이"
              placeholder="예) 4"
              variant="outlined"
              value={inputData.age}
              onChange={(event) => handleChange(event, "age")}
            />
            <Text color="gray100" typo="body100">살</Text>
          </HalfWrapper>

          <HalfWrapper>
            <CustomInput
              label="몸무게"
              placeholder="예) 22"
              variant="outlined"
              value={inputData.weight}
              onChange={(event) => handleChange(event, "weight")}
            />
            <Text color="gray100" typo="body100">kg</Text>
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
