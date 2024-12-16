import { useState } from "react";
import {
  AppBar,
  DropButton,
  Text,
  CustomInput,
  GNB,
  CustomButton,
} from "../../../../../components";
import { RadioSelectButton } from "../../../../../components/button/RadioSelectButton";
import {
  GroomingBodyType,
  GroomingType,
} from "../../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import {
  AddWrapper,
  ContentWrapper,
  DeleteButton,
  ImageContainer,
  ImageUnit,
  SectionWrapper,
  SelectedHair,
  TwoItemsWrapper,
} from "./index.styles";

import {
  EggHead,
  BabyCut,
  Goddess,
  TeddyCut,
  SealCut,
  LionCut,
  Helmet,
  EarsPop,
  AddImage,
} from "../../../../../assets/svg";
import {
  HAIRSTYLES,
  CUTTING,
  TIME,
  SUMMERCUT,
} from "../../../../../constants/request";
import InfoButton from "../../../../../components/button/InfoButton";
import DropBox from "./components/DropBox";
import { DateDropBox } from "../../../../../components/button/DateDropBox";
import {
  GroomingTypeType,
  SendEstimateProposalRequest,
  TotalGroomingBodyTypeType,
  TotalGroomingFaceTypeType,
} from "../../../../../types/customer/bidding";
import { uploadImage } from "../../../../../apis/customer/resources/internal";

const faceTypeMapping: Record<string, TotalGroomingFaceTypeType> = {
  알머리컷: "EGG",
  베이비컷: "BABY",
  여신머리: "GODDESS",
  곰돌이컷: "BEAR",
  물개컷: "SEAL",
  라이언컷: "LION",
  하이바컷: "HIGH_BAR",
  귀툭튀: "POINTED_EARS",
};

const bodyTypeMapping: Record<string, TotalGroomingBodyTypeType> = {
  "3mm": "CLIPPING_3MM",
  "6mm": "CLIPPING_6MM",
  "9mm": "CLIPPING_9MM",
};

interface LastStepProps {
  onSubmit: () => void;
  inputData: SendEstimateProposalRequest;
  handleChange: (key: keyof SendEstimateProposalRequest, value: any) => void;
  handleArrayChange: (
    key: keyof SendEstimateProposalRequest,
    value: any[],
  ) => void;
}

export default function CustomizeGrooming({
  onSubmit,
  inputData,
  handleChange,
  handleArrayChange,
}: LastStepProps) {
  const [desiredCostError, setDesiredCostError] = useState("");
  const [selectedBodyIndex, setSelectedBodyIndex] = useState<number | null>(
    null,
  );
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const maxCharLimit = 200;

  const faceStyleImg: Record<string, JSX.Element> = {
    알머리컷: <EggHead width="100px" height="auto" />,
    베이비컷: <BabyCut width="100px" height="auto" />,
    여신머리: <Goddess width="100px" height="auto" />,
    곰돌이컷: <TeddyCut width="100px" height="auto" />,
    물개컷: <SealCut width="100px" height="auto" />,
    라이언컷: <LionCut width="100px" height="auto" />,
    하이바컷: <Helmet width="100px" height="auto" />,
    귀툭튀: <EarsPop width="100px" height="auto" />,
  };

  const handleGroomingTypeSelect = (index: number) => {
    const groomingType: GroomingTypeType = index === 0 ? "TOTAL" : "CLEAN";
    handleChange("groomingType", groomingType);

    if (groomingType === "TOTAL") {
      handleChange("totalGroomingFaceType", undefined);
      handleChange("totalGroomingBodyType", undefined);
    }
  };

  const handleFaceStyleSelect = (value: string) => {
    const faceType = faceTypeMapping[value];
    handleChange("totalGroomingFaceType", faceType);
  };

  const handleBodyTypeSelect = (index: number) => {
    setSelectedBodyIndex(index);
    const bodyType = Object.values(bodyTypeMapping)[index];
    handleChange("totalGroomingBodyType", bodyType);
  };

  const handleLengthSelect = (value: string) => {
    const bodyType = bodyTypeMapping[value];
    handleChange("totalGroomingBodyType", bodyType);
  };

  const handleDescriptionChange = (value: string) => {
    if (value.length <= maxCharLimit) {
      handleChange("detail", value);
    }
  };

  const handleDesiredCostChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");

    if (value && !numericValue) {
      setDesiredCostError("숫자를 입력해주세요");
    } else {
      setDesiredCostError("");
      handleChange(
        "desiredCost",
        numericValue ? Number(numericValue) : undefined,
      );
    }
  };

  const handleDateChange = (date: string) => {
    const dateTimeString = `${date}`;
    handleChange("desiredDateTime", dateTimeString);
  };

  const handleTimeChange = (time: string) => {
    const dateTimeString = `${inputData.desiredDateTime}T${time}:00`;
    handleChange("desiredDateTime", dateTimeString);
  };

  const handleImageUpload = async (file: File) => {
    try {
      const response = await uploadImage(file);
      if (response.uploadedImageUrl) {
        const updatedImageUrls = [...imageUrls, response.uploadedImageUrl];
        setImageUrls(updatedImageUrls);
        handleArrayChange("imageUrls", updatedImageUrls); // 상위 컴포넌트에 전체 이미지 URL 목록 전달
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleImageDelete = (url: string) => {
    const updatedImageUrls = imageUrls.filter((imageUrl) => imageUrl !== url);
    setImageUrls(updatedImageUrls);
    handleArrayChange("imageUrls", updatedImageUrls); // 상위 컴포넌트에 삭제된 목록 전달
  };

  return (
    <>
      <AppBar prefix="backButton" title="견적서 요청하기" />
      <ContentWrapper>
        <Text typo="subtitle100">
          <Text typo="subtitle100" color="blue100">
            꼬미
          </Text>
          의 구체적인 미용 시술정보와
          {"\n"}
          원하는 사항을 알려주세요!
        </Text>

        <SectionWrapper>
          <Text typo="subtitle300">미용 종류</Text>
          <RadioSelectButton
            {...GroomingType.args}
            selectedIndex={inputData.groomingType === "TOTAL" ? 0 : 1}
            onSelect={handleGroomingTypeSelect}
          />
          {inputData.groomingType === "CLEAN" && (
            <InfoButton
              title="위생미용이란?"
              message="반려견의 건강을 위해 발바닥 털, 발톱, 항문주변 털, 눈주변, 귀털,
                  귀청소, 생식기 털 정리, 항문낭 제거 등을 미용하는 것을 말해요."
            />
          )}
        </SectionWrapper>

        {inputData.groomingType === "TOTAL" && (
          <>
            <SectionWrapper>
              <DropButton
                label="얼굴"
                placeholder="스타일을 선택해주세요"
                options={HAIRSTYLES}
                selected={Object.keys(faceTypeMapping).find(
                  (key) =>
                    faceTypeMapping[key] === inputData.totalGroomingFaceType,
                )}
                onSelect={handleFaceStyleSelect}
              />
              {inputData.totalGroomingFaceType && (
                <SelectedHair>
                  {
                    faceStyleImg[
                      Object.keys(faceTypeMapping).find(
                        (key) =>
                          faceTypeMapping[key] ===
                          inputData.totalGroomingFaceType,
                      ) || ""
                    ]
                  }
                </SelectedHair>
              )}
            </SectionWrapper>

            <SectionWrapper>
              <Text typo="subtitle300">몸</Text>
              <RadioSelectButton
                {...GroomingBodyType.args}
                selectedIndex={selectedBodyIndex || 0}
                onSelect={handleBodyTypeSelect}
              />
              {selectedBodyIndex === 0 && (
                <DropButton
                  placeholder="mm를 선택해주세요"
                  options={CUTTING}
                  onSelect={handleLengthSelect}
                />
              )}
              {selectedBodyIndex === 1 && (
                <TwoItemsWrapper>
                  <DropButton
                    placeholder="미용을 선택해주세요"
                    options={SUMMERCUT}
                    onSelect={handleLengthSelect}
                  />
                  <DropButton
                    placeholder="mm를 선택해주세요"
                    options={CUTTING}
                    onSelect={handleLengthSelect}
                  />
                </TwoItemsWrapper>
              )}
            </SectionWrapper>
          </>
        )}

        <SectionWrapper>
          <CustomInput
            label="상세설명"
            inputType="textarea"
            value={inputData.detail || ""}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            placeholder="강아지의 특이사항이나 요청사항을 작성해주세요"
          />
        </SectionWrapper>

        <SectionWrapper>
          <Text typo="subtitle300">사진첨부</Text>
          <ImageContainer>
            {/* 추가 버튼 */}
            {imageUrls.length < 3 && (
              <AddWrapper>
                <CustomButton variant="secondary">
                  <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
                    <AddImage width={15} />
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </CustomButton>
              </AddWrapper>
            )}
            {/* 업로드된 이미지 */}
            {imageUrls.map((url, index) => (
              <AddWrapper key={index} style={{ position: "relative" }}>
                <ImageUnit src={url} alt={`Uploaded image ${index + 1}`} />
                {/* 삭제 버튼 */}
                <DeleteButton onClick={() => handleImageDelete(url)}>
                  &minus;
                </DeleteButton>
              </AddWrapper>
            ))}
          </ImageContainer>
        </SectionWrapper>

        <CustomInput
          label="희망비용"
          value={inputData.desiredCost?.toString() || ""}
          onChange={(e) => handleDesiredCostChange(e.target.value)}
          placeholder="희망 금액을 입력해주세요"
          error={desiredCostError}
          unit="원"
        />

        <SectionWrapper>
          <DateDropBox
            type="reservation"
            label="날짜"
            selectedDate={inputData.desiredDateTime?.split("T")[0] || ""}
            onChange={handleDateChange}
          />
          <DropBox
            label="시간"
            placeholder="시간을 선택해주세요"
            options={TIME}
            selected={
              inputData.desiredDateTime?.split("T")[1]?.slice(0, -3) || ""
            }
            onSelect={(time) => handleTimeChange(time)}
          />
        </SectionWrapper>
      </ContentWrapper>
      <GNB buttonText="견적 요청하기" onLargeButtonClick={onSubmit} />
    </>
  );
}
