import { useState } from "react";
import { AppBar, DropButton, Text, CustomInput } from "../../../../components";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import { RadioSelectButtonProps } from "../../../../components/button/RadioSelectButton/RadioSelectButton";
import {
  GroomingBodyType,
  GroomingType,
} from "../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import {
  ContentWrapper,
  SectionWrapper,
  SectionWrapper2,
} from "./index.styles";
import {
  PhotoAttachment,
  PhotoAttachmentContainer,
} from "../../../designer/quote/index.styles";
import { colors } from "../../../../style/color";
import {
  알머리컷,
  베이비컷,
  여신머리,
  곰돌이컷,
  물개컷,
  라이언컷,
  하이바컷,
  귀툭튀,
} from "../../../../assets/svg";
import InfoButton from "../../../../components/button/InfoButton";
import { HAIRSTYLES, CUTTING, SUMMERCUT } from "../../../../constants/request";

export default function CustomizeGrooming() {
  const [selectedGroomingType, setSelectedGroomingType] = useState<number>(0); // selectedIndex 값 관리
  const [selectedBodyGroomingType, setSelectedBodyGroomingType] =
    useState<number>(0); // selectedIndex 값 관리
  const [selectedFaceStyle, setSelectedFaceStyle] = useState<string>("");
  const [selectedLength, setSelectedLength] = useState<string>("");
  const [selectedBodyType, setSelectedBodyType] = useState<number>(-1); // 기본값 -1로 설정
  const [description, setDescription] = useState<string>("");
  const [desiredCost, setDesiredCost] = useState<string>(""); // 희망 비용 관리
  const [desiredDateTime, setDesiredDateTime] = useState<string>(""); // 희망 날짜 및 시간 관리
  const maxCharLimit = 300;

  const faceStyleImg: {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  } = {
    알머리컷,
    베이비컷,
    여신머리,
    곰돌이컷,
    물개컷,
    라이언컷,
    하이바컷,
    귀툭튀,
  };

  const handleGroomingTypeSelect = (selectedIndex: number) => {
    setSelectedGroomingType(selectedIndex); // selectedIndex 값 업데이트
    setSelectedFaceStyle(""); // Reset face style
    setSelectedBodyType(-1); // Reset body type
    setSelectedLength(""); // Reset length
    setDescription(""); // Reset description
    setDesiredCost(""); // Reset desired cost
    setDesiredDateTime(""); // Reset desired date and time
    console.log("Selected Grooming Type:", selectedIndex);
  };

  const handleFaceStyleSelect = (value: string) => {
    setSelectedFaceStyle(value);
    console.log("Selected FaceStyle:", value);
  };

  const handleBodyTypeSelect = (selectedBodyType: number) => {
    setSelectedBodyType(selectedBodyType);
    setSelectedLength(""); // DropButton 값 초기화
    console.log("Selected Grooming Body Type:", selectedBodyType);
  };

  const handleLengthSelect = (value: string) => {
    setSelectedLength(value);
    console.log("Selected Length:", value);
  };

  const handleDescriptionChange = (value: string) => {
    if (value.length <= maxCharLimit) {
      setDescription(value);
    }
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <div
        style={{ display: "flex", flexDirection: "column", padding: "30px 0" }}
      >
        <Text typo="subtitle100">
          <Text typo="subtitle100" color="blue100">
            꼬미
          </Text>
          의 구체적인 미용 시술정보와
          <br />
          원하는 사항을 알려주세요!
        </Text>

        <ContentWrapper>
          <SectionWrapper>
            <Text typo="subtitle300">미용 종류</Text>
            <RadioSelectButton
              {...(GroomingType.args as RadioSelectButtonProps)}
              selectedIndex={selectedGroomingType}
              onSelect={handleGroomingTypeSelect}
            />
          </SectionWrapper>
          {selectedGroomingType === 0 && (
            <>
              <SectionWrapper>
                <DropButton
                  label="얼굴"
                  placeholder="스타일을 선택해주세요"
                  options={HAIRSTYLES}
                  onSelect={handleFaceStyleSelect}
                />
                {selectedFaceStyle && selectedFaceStyle !== "선택 없음" && (
                  <div
                    style={{
                      width: "120px", // 고정된 width 설정
                      height: "140px",
                      border: `1px solid ${colors.blue100}`,
                      borderRadius: "10px",
                      margin: "10px auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* SVG의 width를 고정값으로 설정 */}
                    {faceStyleImg[selectedFaceStyle] &&
                      faceStyleImg[selectedFaceStyle]({
                        width: "100px", // 또는 원하는 고정 값
                        height: "auto", // 자동으로 높이 조정
                      })}
                  </div>
                )}
              </SectionWrapper>

              <SectionWrapper>
                <Text typo="subtitle300">몸</Text>
                <RadioSelectButton
                  {...(GroomingBodyType.args as RadioSelectButtonProps)}
                  selectedIndex={selectedBodyType}
                  onSelect={handleBodyTypeSelect}
                />
                {selectedBodyType === 0 && (
                  <DropButton
                    label=""
                    placeholder="mm를 선택해주세요"
                    options={CUTTING}
                    onSelect={handleLengthSelect}
                  />
                )}
                {selectedBodyType === 1 && (
                  <div style={{ display: "flex", gap: "5px" }}>
                    <DropButton
                      label=""
                      placeholder="미용을 선택해주세요"
                      options={SUMMERCUT}
                      onSelect={handleLengthSelect}
                    />
                    <DropButton
                      label=""
                      placeholder="mm를 선택해주세요"
                      options={CUTTING}
                      onSelect={handleLengthSelect}
                    />
                  </div>
                )}
              </SectionWrapper>
            </>
          )}
          {selectedGroomingType === 1 && (
            <div style={{ boxSizing: "border-box" }}>
              <InfoButton
                title="위생미용이란?"
                message="반려견의 건강을 위해 발바닥 털, 발톱, 항문주변 털, 눈주변, 귀털,
                귀청소, 생식기 털 정리, 항문낭 제거 등을 미용하는것을 말해요"
              />
            </div>
          )}
          <SectionWrapper>
            <CustomInput
              label="상세설명"
              inputType="textarea"
              value={description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              placeholder="강아지의 특이사항이나 요청사항을 작성해주세요"
            />
            <Text
              style={{ textAlign: "right" }}
              typo="body400"
              color={description.length === maxCharLimit ? "red100" : "gray100"}
            >
              {description.length}/{maxCharLimit}
            </Text>
          </SectionWrapper>

          <SectionWrapper>
            <PhotoAttachment>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text typo="subtitle300">사진첨부</Text>
                <Text typo="body400" color="gray100">
                  상세 설명에 대한 이해를 돕기 위해 사진을 첨부하면 좋아요
                </Text>
              </div>
              <PhotoAttachmentContainer>+</PhotoAttachmentContainer>
            </PhotoAttachment>
          </SectionWrapper>
          <SectionWrapper2>
            <CustomInput
              label="희망비용"
              value={desiredCost}
              onChange={(e) => setDesiredCost(e.target.value)}
              width="215px"
            />
            <CustomInput
              label="희망날짜 및 시간"
              value={desiredDateTime}
              onChange={(e) => setDesiredDateTime(e.target.value)}
              width="215px"
              placeholder="날짜와 시간을 입력하세요"
              hint="ex) 12월 24일 오전 6시"
            />
          </SectionWrapper2>
        </ContentWrapper>
      </div>
    </>
  );
}
