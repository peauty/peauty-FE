import Camera from "../../../../../../assets/svg/Camera";
import PetProfile from "../../../../../../assets/svg/PetProfile";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { RadioSelectButton } from "../../../../../../components/button/RadioSelectButton";
import { Text } from "../../../../../../components/texts/Text";
import { DropButton } from "../../../../../../components/button/DropButton";
import {
  ProfileWrapper,
  CameraIcon,
  SectionWrapper,
  InputWrapper,
} from "../../index.styles";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";
import { ChangeEvent, useState, useEffect } from "react";
import { breedMap } from "../../../../../../constants/puppy";
import { GNB } from "../../../../../../components";
import { DateDropBox } from "../../../../../../components/button/DateDropBox";
import { uploadImage } from "../../../../../../apis/customer/resources/internal";
import { UploadImageResponse } from "../../../../../../types/customer/internal";
import Modal from "../../../../../../components/modal/Modal/Modal";

interface Step1Props {
  onNext: () => void;
  inputData: RegisterPuppyRequest;
  handleChange: (key: string, value: string) => void;
}

export default function Step1({ onNext, inputData, handleChange }: Step1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility
  const [modalMessage, setModalMessage] = useState(""); // Message to display in the modal
  const [isNextDisabled, setIsNextDisabled] = useState(true); // Track the "Next" button's disabled state

  // Check for missing required fields
  const validateFields = () => {
    const { name, breed, puppySize, sex, weight, birthdate } = inputData;

    return name && breed && puppySize && sex && weight && birthdate;
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string,
  ) => {
    handleChange(key, event.target.value);
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // 파일 업로드 API 호출
        const response: UploadImageResponse = await uploadImage(file);
        // 업로드된 이미지 URL을 상태에 업데이트
        if (response.uploadedImageUrl) {
          handleChange("profileImageUrl", response.uploadedImageUrl);
        }
      } catch (error) {
        console.error("이미지 업로드 실패", error);
      }
    }
  };

  const renderProfileImage = () =>
    inputData.profileImageUrl ? (
      <img
        src={inputData.profileImageUrl}
        alt="Pet Profile"
        width="132"
        height="132"
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    ) : (
      <PetProfile width="132" height="132" />
    );

  const renderRadioButtonGroup = (
    label: string,
    options: string[],
    selectedIndex: number,
    onSelect: (index: number) => void,
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Text typo="subtitle300">{label}</Text>
      <RadioSelectButton
        buttonNames={options}
        selectedIndex={selectedIndex}
        onSelect={onSelect}
      />
    </div>
  );

  const handleNextClick = () => {
    if (validateFields()) {
      onNext();
    } else {
      setModalMessage("모든 값을을 입력해주세요.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  useEffect(() => {
    setIsNextDisabled(!validateFields());
  }, [inputData]);

  return (
    <div>
      <ProfileWrapper>
        <CameraIcon>
          <input
            id="profile-image-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="profile-image-upload" style={{ cursor: "pointer" }}>
            <Camera width="30" height="30" />
          </label>
        </CameraIcon>
        {renderProfileImage()}
      </ProfileWrapper>

      <SectionWrapper style={{ height: `calc(100%)` }}>
        <Text typo="subtitle100">기본정보</Text>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <CustomInput
            label="이름"
            placeholder="이름을 입력해주세요"
            fullwidth
            variant="outlined"
            value={inputData.name}
            onChange={(event) => handleInputChange(event, "name")}
          />

          <DropButton
            label="견종"
            placeholder="견종을 선택해주세요"
            options={Object.keys(breedMap)}
            selected={Object.keys(breedMap).find(
              (key) => breedMap[key] === inputData.breed,
            )}
            onSelect={(value) => handleChange("breed", breedMap[value] || "")}
          />

          {renderRadioButtonGroup(
            "분류",
            ["소형견", "중형견", "대형견"],
            ["SMALL", "MEDIUM", "LARGE"].indexOf(inputData.puppySize || ""),
            (index) =>
              handleChange("puppySize", ["SMALL", "MEDIUM", "LARGE"][index]),
          )}

          {renderRadioButtonGroup(
            "성별",
            ["남아", "여아"],
            inputData.sex === "M" ? 0 : 1,
            (index) => handleChange("sex", index === 0 ? "M" : "F"),
          )}

          <InputWrapper>
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
          </InputWrapper>

          <DateDropBox
            label="생년월일"
            type="birthday"
            selectedDate={inputData.birthdate} // 기존에 선택된 생년월일이 있다면 표시
            onChange={(date) => handleChange("birthdate", date)}
          />
        </div>

        <GNB
          buttonText="다음"
          onLargeButtonClick={handleNextClick}
          disabled={isNextDisabled}
        />
      </SectionWrapper>

      {/* Modal to show validation error */}
      {isModalOpen && (
        <Modal
          message={modalMessage}
          buttons={[{ label: "확인", onClick: closeModal }]}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
