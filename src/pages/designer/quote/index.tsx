import React, { useState, useEffect } from "react";
import { AppBar, Divider, GNB, Text, CustomInput } from "../../../components";
import Card from "../../../components/cards/Card";
import { colors } from "../../../style/color";
import {
  Container,
  ContentWrapper,
  SectionWrapper,
  InputWrapper,
  PhotoAttachment,
  PhotoAttachmentContainer,
  RequestDetail,
  RequestSection,
} from "./index.styles";
import {
  getEstimateAndProposalDetails,
  sendEstimate,
} from "../../../apis/designer/resources/designer bidding api";
import { GetEstimateAndProposalDetailsResponse } from "../../../types/customer/customer-bidding-api";
import { formatDate } from "../../../utils/dataformat";
import {
  SendEstimateResponse,
  SendEstimateRequest,
} from "../../../types/designer/designer bidding api";
export default function Quote() {
  const [proposalData, setProposalData] =
    useState<GetEstimateAndProposalDetailsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 폼 입력 상태 관리
  const [content, setContent] = useState<string>(""); // 상세 설명
  const [estimatedDuration, setEstimatedDuration] = useState<string>(""); // 소요 시간
  const [estimatedCost, setEstimatedCost] = useState<number | undefined>(); // 비용
  const [attachments, setAttachments] = useState<string[]>([]); // 첨부 이미지

  const handleSendEstimate = async () => {
    try {
      if (!proposalData) {
        console.error("Proposal data is not loaded.");
        return;
      }

      const userId = 12; // 하드코딩된 사용자 ID
      const processId = proposalData.processId || 0;
      const threadId = proposalData.threadId || 0;

      const requestData: SendEstimateRequest = {
        content,
        estimatedDuration,
        estimatedCost,
        imageUrls: attachments,
      };

      const response: SendEstimateResponse = await sendEstimate(
        userId,
        processId,
        threadId,
        requestData,
      );

      console.log("견적서 전송 성공:", response);
      alert(
        `견적서가 성공적으로 전송되었습니다. 견적 ID: ${response.estimateId}`,
      );
    } catch (error) {
      console.error("견적서 전송 실패:", error);
      alert("견적서 전송에 실패했습니다.");
    }
  };

  useEffect(() => {
    const fetchProposalDetails = async () => {
      try {
        // 하드코딩된 데이터
        const userId = 12;
        const processId = 15;
        const threadId = 33;

        const data = await getEstimateAndProposalDetails(
          userId,
          processId,
          threadId,
        );
        setProposalData(data);
      } catch (error) {
        console.error("Error fetching proposal details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProposalDetails();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!proposalData) {
    return <div>Error fetching proposal details</div>;
  }

  const imageUrl =
    proposalData.puppyProfile?.profileImageUrl ||
    "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785";

  return (
    <Container>
      <AppBar prefix="backButton" title="견적서 작성" />
      <ContentWrapper>
        <Card
          imageSrc={imageUrl}
          name={proposalData.puppyProfile?.name || "견적 대상"}
          age={proposalData.puppyProfile?.age || 0}
          gender={proposalData.puppyProfile?.sex || "알 수 없음"}
          weight={proposalData.puppyProfile?.weight || 0}
          breed={proposalData.puppyProfile?.breed || "품종 미제공"}
          tags={[]}
        />
      </ContentWrapper>
      <Divider thickness={3} color={`${colors.gray400}`} />
      <SectionWrapper>
        <RequestDetail>
          <Text typo="subtitle200">요청 상세</Text>
          <RequestSection>
            <Text typo="body400" color="gray100">
              요청 스타일
            </Text>
            <Text typo="body100">
              {proposalData.estimateProposal?.totalGroomingFaceType ||
                "데이터 없음"}{" "}
              +{" "}
              {proposalData.estimateProposal?.totalGroomingBodyType ||
                "데이터 없음"}
            </Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              상세설명
            </Text>
            <Text typo="body100">
              {proposalData.estimateProposal?.detail || "데이터 없음"}
            </Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              첨부 사진
            </Text>
            <div style={{ display: "flex", gap: "5px", overflowX: "auto" }}>
              {Array.isArray(proposalData.estimateProposal?.imageUrls) &&
              proposalData.estimateProposal.imageUrls.length > 0 ? (
                proposalData.estimateProposal.imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={"고객이 원하는 사항을 위해 첨부한 사진입니다"}
                    style={{
                      width: "80px", // 이미지 너비
                      height: "80px", // 이미지 높이
                      objectFit: "cover", // 이미지 비율 유지
                      borderRadius: "8px", // 둥근 모서리
                    }}
                  />
                ))
              ) : (
                <Text typo="body100" color="gray100">
                  첨부된 이미지가 없습니다
                </Text>
              )}
            </div>
          </RequestSection>

          <RequestSection>
            <Text typo="body400" color="gray100">
              희망 예약 시간간
            </Text>
            <Text typo="body100">
              {formatDate(proposalData.estimateProposal?.desiredDateTime) ||
                "데이터 없음"}
            </Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              예상 비용
            </Text>
            <Text typo="body100">
              {proposalData.estimateProposal?.desiredCost?.toLocaleString() ||
                "데이터 없음"}{" "}
              원
            </Text>
          </RequestSection>
        </RequestDetail>
      </SectionWrapper>

      <Divider thickness={3} color={`${colors.gray400}`} />
      <SectionWrapper>
        <Text typo="subtitle200">견적 설명</Text>
        <InputWrapper>
          <CustomInput
            label="비용"
            placeholder="결제 비용을 입력하세요"
            value={estimatedCost ?? ""}
            onChange={(e) => setEstimatedCost(Number(e.target.value))}
          />
          <CustomInput
            label="소요 시간"
            placeholder="예상 소요 시간을 입력하세요"
            value={estimatedDuration}
            onChange={(e) => setEstimatedDuration(e.target.value)}
          />
          <CustomInput
            label="상세 설명"
            placeholder="추가 설명을 입력하세요"
            inputType="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <PhotoAttachment>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text typo="body100">사진 첨부</Text>
              <Text typo="body400" color="gray100">
                상세 설명에 대한 이해를 돕기 위해 사진을 첨부하세요
              </Text>
            </div>
            <PhotoAttachmentContainer>+</PhotoAttachmentContainer>
          </PhotoAttachment>
        </InputWrapper>
      </SectionWrapper>

      <GNB buttonText="견적서 보내기" onLargeButtonClick={handleSendEstimate} />
    </Container>
  );
}
