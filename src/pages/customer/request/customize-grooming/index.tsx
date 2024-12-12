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
  SelectedHair,
  TwoItemsWrapper,
} from "./index.styles";
import {
  PhotoAttachment,
  PhotoAttachmentContainer,
} from "../../../designer/quote/index.styles";
import {
  EggHead,
  BabyCut,
  Goddess,
  TeddyCut,
  SealCut,
  LionCut,
  Helmet,
  EarsPop,
} from "../../../../assets/svg";
import {
  HAIRSTYLES,
  CUTTING,
  SUMMERCUT,
  TIME,
} from "../../../../constants/request";
import InfoButton from "../../../../components/button/InfoButton";
import DropBox from "./components/DropBox";
import { DateDropBox } from "../../../../components/button/DateDropBox";
import { useNavigate } from "react-router-dom";
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
  const [selectedDate, setSelectedDate] = useState("");

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
    setSelectedGroomingType(index);
    resetFields(); // Reset fields when grooming type changes
  };

  const navigate = useNavigate();
  const resetFields = () => {
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

    setDesiredCost(
      numericValue ? `${Number(numericValue).toLocaleString()}` : "",
    ); // 상태 업데이트
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    console.log("선택된 날짜:", date);
  };

  const handleComplete = () => {
    navigate("/customer/request");
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
                <SelectedHair>{faceStyleImg[selectedFaceStyle]}</SelectedHair>
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

        <SectionWrapper>
          <DateDropBox
            type="reservation"
            label="날짜"
            onChange={handleDateChange}
          />
          <DropBox
            label="시간"
            placeholder="시간을 선택해주세요"
            options={TIME}
            onSelect={handleLengthSelect}
          />
        </SectionWrapper>
      </ContentWrapper>
      <GNB
        buttonText="견적 요청하기"
        onLargeButtonClick={() => handleComplete()}
      />
    </>
  );
}
