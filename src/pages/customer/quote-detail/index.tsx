import { CareerIcon, CheckIcon2, Maker } from "../../../assets/svg";
import { AppBar, GNB, Text } from "../../../components";
import Rating from "../../../components/rating";
import { colors } from "../../../style/color";
import {
  PageContainer,
  InfoContainer,
  InfoCard,
  ProfileImage,
  ProfileTextContainer,
  ProfileRow,
  DashedDivider,
  QuoteDetailsCard,
  DetailRow,
  DetailLabel,
  DetailText,
  AgreementContainer,
  AgreementItem,
  TextSectionWrapper,
} from "./index.styles";
import { useEffect, useState } from "react";
import { getEstimateAndProposalDetails } from "../../../apis/customer/resources/bidding";
import { GetEstimateAndProposalDetailsResponse } from "../../../types/customer/bidding";
import { useUserDetails } from "../../../hooks/useUserDetails";
import { useLocation } from "react-router-dom";

export default function QuoteDetail() {
  const { userId } = useUserDetails();
  const [quoteData, setQuoteData] =
    useState<GetEstimateAndProposalDetailsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const puppyId = queryParams.get("puppyId");
  const threadId = queryParams.get("threadId");
  const processId = queryParams.get("processId");
  const numericPuppyId = puppyId ? Number(puppyId) : null;
  const numericProcessId = processId ? Number(processId) : null;
  const numericThreadId = threadId ? Number(threadId) : null;

  useEffect(() => {
    if (numericPuppyId && numericProcessId && numericThreadId && userId) {
      const fetchData = async () => {
        try {
          const data = await getEstimateAndProposalDetails(
            userId,
            numericPuppyId,
            numericProcessId,
            numericThreadId,
          );

          if (data) {
            setQuoteData(data);
          } else {
            console.error("유효하지 않은 데이터", data);
          }
        } catch (error) {
          console.error("API 요청 실패:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [userId, numericPuppyId, numericProcessId, numericThreadId]);

  if (isLoading || !puppyId || !processId || !threadId) {
    return <div>Loading...</div>;
  }

  if (!quoteData) {
    return <div>Error: Data is missing.</div>;
  }

  const { puppy, estimateProposal, estimate, designer } = quoteData;

  return (
    <PageContainer>
      <AppBar prefix="backButton" title="견적서 보기" />
      <InfoContainer>
        <InfoCard>
          <ProfileImage
            src="" // 새로운 타입에는 designer의 profileImageUrl이 없음
            width="100px"
            height="100px"
          />
          <div>
            <Text typo="subtitle200">{designer?.workspaceName}</Text>
            <ProfileTextContainer>
              <ProfileRow>
                <Rating score={0} /> {/* 새로운 타입에는 reviewRating이 없음 */}
                <Text typo="body300" color="gray100">
                  &nbsp;(0) {/* 새로운 타입에는 reviewCount가 없음 */}
                </Text>
              </ProfileRow>
              <ProfileRow>
                <Maker width={10} />
                <Text typo="body400">{designer?.address}</Text>
              </ProfileRow>
              <ProfileRow>
                <CareerIcon width={13} />
                <Text typo="body400">경력 5년</Text>
              </ProfileRow>
            </ProfileTextContainer>
          </div>
        </InfoCard>
      </InfoContainer>

      <div style={{ padding: "10px 40px 30px" }}>
        <QuoteDetailsCard>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "3px" }}
          >
            <Text typo="subtitle100" color="blue100">
              {puppy?.name}
            </Text>
            <Text typo="subtitle100">견적서</Text>
          </div>

          <DashedDivider />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <DetailRow>
              <DetailLabel>
                <Text typo="body300">예약 날짜</Text>
              </DetailLabel>
              <Text typo="body300">
                {estimateProposal?.desiredDateTime
                  ? new Date(estimateProposal.desiredDateTime).toLocaleString()
                  : "날짜 정보 없음"}
              </Text>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">미용 종류</Text>
              </DetailLabel>
              <Text typo="body300">
                {estimateProposal?.style || "정보 없음"}
              </Text>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">예상 소요 시간</Text>
              </DetailLabel>
              <Text typo="body300">
                {estimate?.estimatedDuration || "정보 없음"}
              </Text>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">첨부사진</Text>
              </DetailLabel>
              {estimateProposal?.imageUrls &&
              estimateProposal.imageUrls.length > 0 ? (
                <img
                  src={estimateProposal.imageUrls[0]}
                  alt="첨부 사진"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "5px",
                    backgroundColor: `${colors.gray300}`,
                  }}
                />
              )}
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">상세 설명</Text>
              </DetailLabel>
              <DetailText>
                <Text typo="body300">{estimate?.content || "설명 없음"}</Text>
              </DetailText>
            </DetailRow>
          </div>

          <DashedDivider />

          <DetailRow>
            <DetailLabel>
              <Text typo="subtitle200" color="blue100">
                총 결제 비용
              </Text>
            </DetailLabel>
            <Text typo="subtitle200">
              {estimate?.depositPrice
                ? `${estimate.depositPrice.toLocaleString()}원`
                : "0원"}
            </Text>
          </DetailRow>

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
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    원활한 미용 서비스 제공을 위해 최초 1회 확인 및 동의가
                    필요한 사항입니다.
                  </Text>
                </AgreementItem>
                <AgreementItem>
                  <CheckIcon2 width={10} />
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
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    요금 결제 시 예약금 결제 후 나머지 비용은 현장결제로
                    결제됩니다.
                  </Text>
                </AgreementItem>
                <AgreementItem>
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    서비스 시작 이후에는 서비스 요금 환불이 불가능 합니다.
                  </Text>
                </AgreementItem>
              </TextSectionWrapper>
            </TextSectionWrapper>
          </AgreementContainer>
        </QuoteDetailsCard>
      </div>

      <GNB
        buttonText={`${
          estimate?.depositPrice ? estimate.depositPrice.toLocaleString() : 0
        }원 결제하기`}
        type="customer"
      />
    </PageContainer>
  );
}
