import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, GNB, Text } from "../../../../components";
import Card from "../../../../components/cards/Card";
import { colors } from "../../../../style/color";
import {
  Container,
  ContentWrapper,
  SectionWrapper,
  RequestDetail,
  RequestSection,
} from "../quote-form/index.styles";
import { getEstimateAndProposalDetails } from "../../../../apis/designer/resources/designer-bidding-api";
import { GetEstimateAndProposalDetailsResponse } from "../../../../types/designer/designer-bidding-api";
import { formatDate } from "../../../../utils/dataformat";
import { CheckIcon2 } from "../../../../assets/svg";
import { Divider, Icon } from "./index.styles";
import {
  AgreementContainer,
  AgreementItem,
  DashedDivider,
  DetailLabel,
  DetailRow,
  DetailText,
  QuoteDetailsCard,
  TextSectionWrapper,
} from "../../../customer/quote-detail/index.styles";
import InfoButton from "../../../../components/button/InfoButton";

export default function QuoteDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, processId, threadId, activeTab } = location.state || {};

  const [proposalData, setProposalData] =
    useState<GetEstimateAndProposalDetailsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  const handleBack = () => {
    if (location.state?.fromStatusPage) {
      navigate("/designer/status", { state: { activeTab } });
    } else {
      navigate(-1);
    }
  };
  useEffect(() => {
    const fetchProposalDetails = async () => {
      try {
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

    if (userId && processId && threadId) {
      fetchProposalDetails();
    }
  }, [userId, processId, threadId]);

  if (isLoading) return <div>Loading...</div>;
  if (!proposalData) return <div>Error fetching proposal details</div>;

  const imageUrl =
    proposalData.puppyProfile?.profileImageUrl ||
    "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785";

  return (
    <Container style={{ backgroundColor: `${colors.background}` }}>
      <AppBar prefix="backButton" title="견적서 보기" onclick={handleBack} />
      <ContentWrapper>
        <Card
          imageSrc={imageUrl}
          name={proposalData.puppyProfile?.name || "견적 대상"}
          age={proposalData.puppyProfile?.age || 0}
          gender={proposalData.puppyProfile?.sex || "알 수 없음"}
          weight={proposalData.puppyProfile?.weight || 0}
          breed={proposalData.puppyProfile?.breed || "품종 미제공"}
          tags={proposalData.puppyProfile?.diseases || []}
        />
      </ContentWrapper>
      <Divider />
      <>
        <RequestDetail style={{ gap: "0px" }}>
          {/* 클릭 시 열림/닫힘 상태를 토글 */}
          <div
            onClick={() => setIsDetailOpen((prev) => !prev)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 25px",
              backgroundColor: `${colors.white}`,
            }}
          >
            <Text typo="subtitle300">요청 상세</Text>
            <Text typo="body400" color="gray100">
              {isDetailOpen ? "▲" : "▼"}
            </Text>
          </div>

          <>
            {/* 내용은 열림 상태일 때만 렌더링 */}
            {isDetailOpen && (
              <SectionWrapper style={{ backgroundColor: `${colors.white}` }}>
                <RequestSection>
                  <Text typo="body400" color="gray100">
                    요청 스타일
                  </Text>
                  <Text typo="body100">
                    {proposalData.estimateProposal?.totalGroomingFaceType ||
                      "없음"}{" "}
                    +{" "}
                    {proposalData.estimateProposal?.totalGroomingBodyType ||
                      "없음"}
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
                  <div
                    style={{ display: "flex", gap: "5px", overflowX: "auto" }}
                  >
                    {Array.isArray(proposalData.estimateProposal?.imageUrls) &&
                    proposalData.estimateProposal.imageUrls.length > 0 ? (
                      proposalData.estimateProposal.imageUrls.map(
                        (url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt="첨부 이미지"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        ),
                      )
                    ) : (
                      <Text typo="body100" color="gray100">
                        첨부된 이미지가 없습니다
                      </Text>
                    )}
                  </div>
                </RequestSection>
                <RequestSection>
                  <Text typo="body400" color="gray100">
                    희망 예약 시간
                  </Text>
                  <Text typo="body100">
                    {formatDate(
                      proposalData.estimateProposal?.desiredDateTime,
                    ) || "데이터 없음"}
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
              </SectionWrapper>
            )}
          </>
        </RequestDetail>
      </>

      <Divider />

      <div style={{ padding: "10px 40px 30px" }}>
        <QuoteDetailsCard>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "3px" }}
          >
            <Text
              typo="subtitle100"
              color="blue100"
              style={{ fontWeight: "600" }}
            >
              {proposalData.puppyProfile?.name}
            </Text>
            <Text typo="subtitle100">견적서</Text>
          </div>

          <DashedDivider />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <DetailRow>
              <DetailLabel>
                <Text typo="body400">예약 날짜</Text>
              </DetailLabel>
              <Text typo="body300">
                {formatDate(proposalData.estimateProposal?.desiredDateTime)}
              </Text>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body400">미용 종류</Text>
              </DetailLabel>
              <Text typo="body300">
                {proposalData.estimateProposal?.totalGroomingFaceType} +{" "}
                {proposalData.estimateProposal?.totalGroomingBodyType}
              </Text>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body400">예상 소요 시간</Text>
              </DetailLabel>
              <Text typo="body300">
                {proposalData.estimate?.estimatedDuration}
              </Text>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body400">첨부사진</Text>
              </DetailLabel>
              <div style={{ display: "flex", gap: "5px", overflowX: "auto" }}>
                {Array.isArray(proposalData.estimate?.imageUrls) &&
                proposalData.estimate.imageUrls.length > 0 ? (
                  proposalData.estimate.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="첨부 이미지"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ))
                ) : (
                  <Text typo="body300" color="gray100">
                    첨부된 이미지가 없습니다
                  </Text>
                )}
              </div>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body400">상세 설명</Text>
              </DetailLabel>
              <DetailText>
                <Text typo="body300">{proposalData.estimate?.content}</Text>
              </DetailText>
            </DetailRow>
          </div>

          <DashedDivider />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <DetailRow>
                <DetailLabel>
                  <Text typo="body400" color="gray100">
                    전체 비용
                  </Text>
                </DetailLabel>
                <Text typo="body300" color="gray100">
                  {proposalData.estimate?.estimatedCost?.toLocaleString()}원
                </Text>
              </DetailRow>
              <DetailRow>
                <DetailLabel>
                  <AgreementItem>
                    <InfoButton
                      title="예약금"
                      message={`예약금은 고객님의 예약을 확정하기 위해 미리 결제하는 금액으로, 총 결제 금액의 50%에 해당합니다.\n이 금액은 예약 보증과 원활한 서비스 준비를 위해 사용되며, 잔액은 서비스 완료 시 결제하실 수 있습니다.`}
                    />
                  </AgreementItem>
                </DetailLabel>
                <Text typo="body300" color="gray100">
                  {proposalData.estimate?.depositPrice?.toLocaleString()}원
                </Text>
              </DetailRow>
            </div>
            <DetailRow>
              <DetailLabel>
                <Text typo="subtitle200" color="blue100">
                  총 결제 비용
                </Text>
              </DetailLabel>
              <Text typo="subtitle200">
                {proposalData.estimate?.depositPrice?.toLocaleString()}원
              </Text>
            </DetailRow>
          </div>
          <DashedDivider />

          <AgreementContainer>
            <div style={{ marginBottom: "15px" }}>
              <Text typo="body100" color="gray100">
                이용 약관
              </Text>
            </div>
            <TextSectionWrapper style={{ gap: "15px" }}>
              <Text typo="body400" color="gray100">
                필수 동의사항
              </Text>
              <TextSectionWrapper>
                <AgreementItem>
                  <Icon>
                    <CheckIcon2 width={10} />
                  </Icon>
                  <Text typo="body700" color="gray100">
                    원활한 미용 서비스 제공을 위해 최초 1회 확인 및 동의가
                    필요한 사항입니다.
                  </Text>
                </AgreementItem>
                <AgreementItem>
                  <Icon>
                    <CheckIcon2 width={10} />
                  </Icon>
                  <Text typo="body700" color="gray100">
                    마케팅 활용 및 개인정보 수집에 활용 될 수 있습니다.
                  </Text>
                </AgreementItem>
              </TextSectionWrapper>
              <Text typo="body400" color="gray100">
                결제 및 취소 환불 정책
              </Text>
              <TextSectionWrapper>
                <AgreementItem>
                  <Icon>
                    <CheckIcon2 width={10} />
                  </Icon>
                  <Text typo="body700" color="gray100">
                    요금 결제 시 예약금 결제 후 나머지 비용은 현장결제로
                    결제됩니다.
                  </Text>
                </AgreementItem>
                <AgreementItem>
                  <Icon>
                    <CheckIcon2 width={10} />
                  </Icon>
                  <Text typo="body700" color="gray100">
                    서비스 시작 이후에는 서비스 요금 환불이 불가능 합니다.
                  </Text>
                </AgreementItem>
              </TextSectionWrapper>
            </TextSectionWrapper>
          </AgreementContainer>
        </QuoteDetailsCard>
      </div>
      <GNB type="designer" />
    </Container>
  );
}
