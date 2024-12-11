import { useState } from "react";
import {
  AppBar,
  DropButton,
  Text,
  CustomInput,
  GNB,
} from "../../../../components";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import {
  GroomingBodyType,
  GroomingType,
} from "../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import {
  ContentWrapper,
  SectionWrapper,
  SectionWrapper2,
  SelectedHair,
  TwoItemsWrapper,
} from "./index.styles";
import {
  PhotoAttachment,
  PhotoAttachmentContainer,
} from "../../../designer/quote/index.styles";
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
import { HAIRSTYLES, CUTTING, SUMMERCUT } from "../../../../constants/request";
import InfoButton from "../../../../components/button/InfoButton";

export default function CustomizeGrooming() {
  const [selectedGroomingType, setSelectedGroomingType] = useState(0);
  const [selectedBodyType, setSelectedBodyType] = useState(-1);
  const [selectedFaceStyle, setSelectedFaceStyle] = useState("");
  const [selectedLength, setSelectedLength] = useState("");
  const [description, setDescription] = useState("");
  const [desiredCost, setDesiredCost] = useState("");
  const [desiredDateTime, setDesiredDateTime] = useState("");
  const [desiredCostError, setDesiredCostError] = useState("");
  const [desiredDateTimeError, setDesiredDateTimeError] = useState("");

  const maxCharLimit = 300;

  const faceStyleImg: Record<
    string,
    React.FC<React.SVGProps<SVGSVGElement>>
  > = {
    알머리컷,
    베이비컷,
    여신머리,
    곰돌이컷,
    물개컷,
    라이언컷,
    하이바컷,
    귀툭튀,
  };

  const handleGroomingTypeSelect = (index: number) => {
    setSelectedGroomingType(index);
    setSelectedFaceStyle("");
    setSelectedBodyType(-1);
    setSelectedLength("");
    setDescription("");
    setDesiredCost("");
    setDesiredDateTime("");
  };

  const handleFaceStyleSelect = (value: string) => setSelectedFaceStyle(value);
  const handleBodyTypeSelect = (type: number) => setSelectedBodyType(type);
  const handleLengthSelect = (value: string) => setSelectedLength(value);
  const handleDescriptionChange = (value: string) =>
    value.length <= maxCharLimit && setDescription(value);

  const handleDesiredCostChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // 숫자만 추출

    if (value && !numericValue) {
      setDesiredCostError("숫자를 입력해주세요"); // 숫자가 아닌 경우 에러 메시지 설정
    } else {
      setDesiredCostError(""); // 에러 메시지 초기화
    }

    const formattedValue = numericValue
      ? `${Number(numericValue).toLocaleString()}`
      : "";

    setDesiredCost(formattedValue); // 상태 업데이트
  };

  const handleDateTimeChange = (value: string) => {
    // 유효성 검사 및 포맷팅
    const dateTimePattern =
      /^(\d{1,2})월\s+(\d{1,2})일\s+(오전|오후)\s+(\d{1,2})시$/;
    const match = value.match(dateTimePattern);

    if (match) {
      const [_, month, day, meridiem, hour] = match;

      let formattedHour = parseInt(hour, 10);
      if (meridiem === "오후" && formattedHour < 12) {
        formattedHour += 12;
      } else if (meridiem === "오전" && formattedHour === 12) {
        formattedHour = 0;
      }

      const date = new Date();
      date.setMonth(parseInt(month, 10) - 1);
      date.setDate(parseInt(day, 10));
      date.setHours(formattedHour, 0, 0, 0);

      if (!isNaN(date.getTime())) {
        setDesiredDateTime(date.toISOString()); // ISO 형식으로 저장
        setDesiredDateTimeError("");
      } else {
        setDesiredDateTimeError("올바른 날짜와 시간을 입력해주세요.");
      }
    } else {
      setDesiredDateTimeError(
        "형식에 맞게 입력해주세요. 예: 12월 24일 오전 6시",
      );
    }

    setDesiredDateTime(value); // 상태 업데이트
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
          <br />
          원하는 사항을 알려주세요!
        </Text>

        <SectionWrapper>
          <Text typo="subtitle300">미용 종류</Text>
          <RadioSelectButton
            {...GroomingType.args}
            selectedIndex={selectedGroomingType}
            onSelect={handleGroomingTypeSelect}
          />
          {selectedGroomingType === 1 && (
            <InfoButton
              title="위생미용이란?"
              message="반려견의 건강을 위해 발바닥 털, 발톱, 항문주변 털, 눈주변, 귀털,
                  귀청소, 생식기 털 정리, 항문낭 제거 등을 미용하는 것을 말해요."
            />
          )}
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
                <SelectedHair>
                  {faceStyleImg[selectedFaceStyle]?.({
                    width: "100px",
                    height: "auto",
                  })}
                </SelectedHair>
              )}
            </SectionWrapper>

            <SectionWrapper>
              <Text typo="subtitle300">몸</Text>
              <RadioSelectButton
                {...GroomingBodyType.args}
                selectedIndex={selectedBodyType}
                onSelect={handleBodyTypeSelect}
              />
              {selectedBodyType === 0 && (
                <DropButton
                  placeholder="mm를 선택해주세요"
                  options={CUTTING}
                  onSelect={handleLengthSelect}
                />
              )}
              {selectedBodyType === 1 && (
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
            value={description}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            placeholder="강아지의 특이사항이나 요청사항을 작성해주세요"
          />
        </SectionWrapper>

        <SectionWrapper>
          <PhotoAttachment>
            <Text typo="subtitle300">사진첨부</Text>
            <PhotoAttachmentContainer>+</PhotoAttachmentContainer>
          </PhotoAttachment>
        </SectionWrapper>

        <CustomInput
          label="희망비용"
          value={desiredCost}
          onChange={(e) => handleDesiredCostChange(e.target.value)}
          placeholder="희망 금액을 입력해주세요"
          error={desiredCostError}
          unit="원"
        />

        <CustomInput
          label="희망날짜 및 시간"
          value={desiredDateTime}
          onChange={(e) => handleDateTimeChange(e.target.value)}
          // width="215px"
          placeholder="날짜와 시간을 입력하세요"
          hint="ex) 12월 24일 오전 6시"
          error={desiredDateTimeError}
        />
      </ContentWrapper>
      <GNB buttonText="견적 요청하기" />
    </>
  );
}
