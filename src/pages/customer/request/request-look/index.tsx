import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  NoImg,
  SectionWrapper,
  SelectedHair,
  TwoItemsWrapper,
} from "./index.styles";
import {
  PhotoAttachment,
  PhotoAttachmentContainer,
} from "../../../designer/quote/quote-form/index.styles";
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
import { HAIRSTYLES, CUTTING, SUMMERCUT } from "../../../../constants/request";
import InfoButton from "../../../../components/button/InfoButton";
import { GetEstimateProposalDetailResponse } from "../../../../types/customer/bidding";
import { getEstimateProposalDetail } from "../../../../apis/customer/resources/bidding";

export default function RequestLook() {
  const [selectedGroomingType, setSelectedGroomingType] = useState(0);
  const [selectedBodyType, setSelectedBodyType] = useState(0);
  const [selectedFaceStyle, setSelectedFaceStyle] = useState("알머리컷");
  const [selectedLength, setSelectedLength] = useState("3mm");
  const [description, setDescription] = useState(
    "이것은 고객이 작성한 상세설명입니다.",
  );
  const [desiredCost, setDesiredCost] = useState("50000");
  const [selectedDate, setSelectedDate] = useState("2024-12-20");
  const [selectedImage, setSelectedImage] = useState("");

  const [proposalDetail, setProposalDetail] =
    useState<GetEstimateProposalDetailResponse | null>(null);

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

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const userId = queryParams.get("userId");
  const puppyId = queryParams.get("puppyId");
  const processId = queryParams.get("processId");
  useEffect(() => {
    if (userId && puppyId && processId) {
      const fetchProposalDetail = async () => {
        try {
          console.log("Fetching data with:", { userId, puppyId, processId });

          // 문자열을 숫자로 변환
          const numericUserId = Number(userId);
          const numericPuppyId = Number(puppyId);
          const numericProcessId = Number(processId);

          // 변환된 숫자값을 함수에 전달
          const response = await getEstimateProposalDetail(
            numericUserId,
            numericPuppyId,
            numericProcessId,
          );

          if (response && response.estimateProposal) {
            const { estimateProposal } = response;

            // 각 필드를 상태로 설정
            setSelectedFaceStyle(estimateProposal.totalGroomingFaceType || "");
            setDescription(estimateProposal.detail || "");
            setDesiredCost((estimateProposal.desiredCost || 0).toString());
            setSelectedDate(estimateProposal.desiredDateTime || "");
            setSelectedImage(
              (estimateProposal.imageUrls && estimateProposal.imageUrls[0]) ||
                "",
            );
            setSelectedGroomingType(
              Number(estimateProposal.totalGroomingBodyType),
            ); // 숫자로 변환
          } else {
            console.error("유효하지 않은 데이터", response);
          }
        } catch (error) {
          console.error("API 호출 오류:", error);
        }
      };

      fetchProposalDetail();
    }
  }, [userId, puppyId, processId]);

  useEffect(() => {
    if (proposalDetail) {
      console.log("제안서 세부 내용:", proposalDetail);
    }
  }, [
    selectedGroomingType,
    selectedBodyType,
    selectedFaceStyle,
    description,
    desiredCost,
    selectedDate,
    selectedImage,
    proposalDetail,
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
    setSelectedLength(value);
  };

  const handleDesiredCostChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");

    setDesiredCost(
      numericValue ? `${Number(numericValue).toLocaleString()}` : "",
    );
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <>
      <AppBar prefix="backButton" title="요청서 보기" />
      <ContentWrapper>
        <SectionWrapper>
          <Text typo="subtitle300">미용 종류</Text>
          <RadioSelectButton
            {...GroomingType.args}
            selectedIndex={selectedGroomingType}
            disabled={true}
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
              disabled={true}
            />
            {selectedFaceStyle && selectedFaceStyle !== "선택 없음" && (
              <SelectedHair>{faceStyleImg[selectedFaceStyle]}</SelectedHair>
            )}
          </SectionWrapper>
        )}

        <SectionWrapper>
          <Text typo="subtitle300">몸</Text>
          <RadioSelectButton
            {...GroomingBodyType.args}
            selectedIndex={selectedBodyType}
            onSelect={handleBodyTypeSelect}
            disabled={true}
          />
          {selectedBodyType === 0 && (
            <DropButton
              placeholder="mm를 선택해주세요"
              options={CUTTING}
              selected={selectedLength}
              onSelect={handleLengthSelect}
              disabled={true}
            />
          )}
          {selectedBodyType === 1 && (
            <TwoItemsWrapper>
              <DropButton
                placeholder="미용을 선택해주세요"
                options={SUMMERCUT}
                onSelect={handleLengthSelect}
                disabled={true}
              />
              <DropButton
                placeholder="mm를 선택해주세요"
                options={CUTTING}
                selected={selectedLength}
                onSelect={handleLengthSelect}
                disabled={true}
              />
            </TwoItemsWrapper>
          )}
        </SectionWrapper>

        <SectionWrapper>
          <CustomInput
            label="상세설명"
            inputType="textarea"
            value={description}
            placeholder=""
            disabled={true}
            maxLength={300}
          />
        </SectionWrapper>

        <SectionWrapper>
          <PhotoAttachment>
            <Text typo="subtitle300">사진첨부</Text>
            {selectedImage ? (
              <PhotoAttachmentContainer>
                <img
                  src={selectedImage}
                  alt="첨부된 사진"
                  style={{ width: "100%", height: "auto" }}
                />
              </PhotoAttachmentContainer>
            ) : (
              <NoImg>
                <Text typo="body300" color="gray100">
                  첨부된 사진이 없어요
                </Text>
              </NoImg>
            )}
          </PhotoAttachment>
          <CustomInput
            label="희망비용"
            value={desiredCost}
            onChange={(e) => handleDesiredCostChange(e.target.value)}
            disabled={true}
          />
        </SectionWrapper>

        <SectionWrapper>
          <CustomInput
            label="희망 날짜"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            disabled={true}
          />
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
}
