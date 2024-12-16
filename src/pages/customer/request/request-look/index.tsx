import { useState, useEffect } from "react";
import { AppBar, DropButton, Text, CustomInput, GNB } from "../../../../components";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import { GroomingBodyType, GroomingType } from "../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import { ContentWrapper, SectionWrapper, SelectedHair, TwoItemsWrapper } from "./index.styles";
import { PhotoAttachment, PhotoAttachmentContainer } from "../../../designer/quote/quote-form/index.styles";
import { EggHead, BabyCut, Goddess, TeddyCut, SealCut, LionCut, Helmet, EarsPop } from "../../../../assets/svg";
import { HAIRSTYLES, CUTTING, SUMMERCUT } from "../../../../constants/request";
import InfoButton from "../../../../components/button/InfoButton";

export default function RequestLook() {
  // 더미 데이터로 초기화
  const [selectedGroomingType, setSelectedGroomingType] = useState(0); // 예시로 0 (일반 미용) 선택
  const [selectedBodyType, setSelectedBodyType] = useState(0); // 예시로 몸 타입을 첫 번째 선택
  const [selectedFaceStyle, setSelectedFaceStyle] = useState("알머리컷"); // 예시로 "알머리컷" 선택
  const [selectedLength, setSelectedLength] = useState("3mm"); // 예시로 "30mm" 선택
  const [description, setDescription] = useState("이것은 고객이 작성한 상세설명입니다."); // 더미 설명
  const [desiredCost, setDesiredCost] = useState("50000"); // 예시로 50,000원
  const [selectedDate, setSelectedDate] = useState("2024-12-20"); // 예시 날짜
  const [selectedImage, setSelectedImage] = useState(""); // 예시 이미지

  

  const maxCharLimit = 200;

  // 얼굴 스타일 이미지 매핑
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

  // 로그를 통해 상태 값 확인하기
  useEffect(() => {
    console.log("미용 종류:", selectedGroomingType);
    console.log("몸 타입:", selectedBodyType);
    console.log("얼굴 스타일:", selectedFaceStyle);
    console.log("상세 설명:", description);
    console.log("희망 비용:", desiredCost);
    console.log("선택된 날짜:", selectedDate);
    console.log("첨부된 이미지:", selectedImage);
  }, [
    selectedGroomingType,
    selectedBodyType,
    selectedFaceStyle,
    description,
    desiredCost,
    selectedDate,
    selectedImage,
  ]);

  const handleGroomingTypeSelect = (index: number) => {
    setSelectedGroomingType(index);
    resetFields(); 
  };

  const resetFields = () => {
    setSelectedFaceStyle("");
    setSelectedBodyType(-1);
    setSelectedLength("");
    setDescription("");
    setDesiredCost("");
  };

  const handleFaceStyleSelect = (value: string) => setSelectedFaceStyle(value);
  const handleBodyTypeSelect = (type: number) => setSelectedBodyType(type);
  const handleLengthSelect = (value: string) => {
    setSelectedLength(value); // 선택된 길이를 상태에 저장
  };
  const handleDescriptionChange = (value: string) =>
    value.length <= maxCharLimit && setDescription(value);

  const handleDesiredCostChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, ""); 

    setDesiredCost(
      numericValue ? `${Number(numericValue).toLocaleString()}` : "",
    ); // 상태 업데이트
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <>
      <ContentWrapper>
        <AppBar prefix="backButton" title="요청서 보기" />
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
            disabled={true} // disabled로 설정하여 사용자가 선택을 못하도록 함
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
          <SectionWrapper>
            <DropButton
              label="얼굴"
              placeholder="스타일을 선택해주세요"
              options={HAIRSTYLES}
              selected={selectedFaceStyle}
              onSelect={handleFaceStyleSelect}
              disabled={true} // disabled로 설정
            />
            {selectedFaceStyle && selectedFaceStyle !== "선택 없음" && (
              <SelectedHair>{faceStyleImg[selectedFaceStyle]}</SelectedHair> // 선택된 스타일의 이미지를 표시
            )}
          </SectionWrapper>
        )}

        <SectionWrapper>
          <Text typo="subtitle300">몸</Text>
          <RadioSelectButton
            {...GroomingBodyType.args}
            selectedIndex={selectedBodyType}
            onSelect={handleBodyTypeSelect}
            disabled={true} // disabled로 설정
          />
          {selectedBodyType === 0 && (
            <DropButton
              placeholder="mm를 선택해주세요"
              options={CUTTING}
              selected={selectedLength} // 선택된 길이를 표시
              onSelect={handleLengthSelect} // 길이를 선택할 때 상태 업데이트
              disabled={true} // disabled로 설정
            />
          )}
          {selectedBodyType === 1 && (
            <TwoItemsWrapper>
              <DropButton
                placeholder="미용을 선택해주세요"
                options={SUMMERCUT}
                onSelect={handleLengthSelect}
                disabled={true} // disabled로 설정
              />
              <DropButton
                placeholder="mm를 선택해주세요"
                options={CUTTING}
                selected={selectedLength} // 선택된 길이를 표시
                onSelect={handleLengthSelect} // 길이를 선택할 때 상태 업데이트
                disabled={true} // disabled로 설정
              />
            </TwoItemsWrapper>
          )}
        </SectionWrapper>

        <SectionWrapper>
          <CustomInput
            label="상세설명"
            inputType="textarea"
            value={description} // 이미 입력된 값
            placeholder="" // placeholder를 빈 문자열로 설정
            disabled={true} // disabled 상태로 설정하여 수정 불가
          />
        </SectionWrapper>

        <SectionWrapper>
          <PhotoAttachment>  {/* 시작 태그 */}
            <Text typo="subtitle300">사진첨부</Text>
            <PhotoAttachmentContainer>
              {selectedImage ? (
                <img src={selectedImage} alt="첨부된 사진" style={{ width: "100%", height: "auto" }} />
              ) : (
                "+"
              )}
            </PhotoAttachmentContainer>
          </PhotoAttachment> 
          <CustomInput
            label="희망비용"
            value={desiredCost} 
            onChange={(e) => handleDesiredCostChange(e.target.value)}
            placeholder="" // placeholder를 빈 문자열로 설정
            unit="원" 
            disabled={true} // disabled로 설정하여 수정 불가
          />
        </SectionWrapper>

        <SectionWrapper>
        <CustomInput
            label="희망 시간 및 날짜"
            value={selectedDate} 
            onChange={(e) => handleDateChange(e.target.value)}
            placeholder="" // placeholder를 빈 문자열로 설정
            disabled={true} // disabled로 설정하여 수정 불가
          />
        </SectionWrapper>
      </ContentWrapper>

    </>
  );
}
