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
import { useEffect, useState } from 'react';
import { getEstimateAndProposalDetails } from "../../../apis/customer/resources/bidding";
import { GetEstimateAndProposalDetailsResponse } from "../../../types/customer/bidding";
import { useUserDetails } from "../../../hooks/useUserDetails";
import { useLocation } from "react-router-dom";

export default function QuoteDetail() {
  const { userId } = useUserDetails(); // userId 가져오기
  
  const [quoteData, setQuoteData] = useState<GetEstimateAndProposalDetailsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { search } = useLocation(); // 현재 URL에서 쿼리 스트링을 가져옴
  const queryParams = new URLSearchParams(search); // URLSearchParams로 파싱

  const puppyId = queryParams.get("puppyId");
  const threadId = queryParams.get("threadId");
  const processId = queryParams.get("processId");
  const numericPuppyId = puppyId ? Number(puppyId) : null;
  const numericProcessId = processId ? Number(processId) : null;
  const numericThreadId = threadId ? Number(threadId) : null;


  console.log("User ID:", userId);
  console.log("Puppy ID:", puppyId);
  console.log("Thread ID:", threadId);
  
  console.log("Process ID:", processId);

  useEffect(() => {
    // URL 쿼리 파라미터 값들이 모두 존재하는지 확인
    if (numericPuppyId && numericProcessId && numericThreadId && userId) {
      const fetchData = async () => {
        try {
          console.log("Fetching data with:", { userId, numericPuppyId, numericProcessId, numericThreadId });

          // API 호출하여 puppyId, processId, threadId 가져오기
          const data = await getEstimateAndProposalDetails(userId, numericPuppyId, numericProcessId, numericThreadId);

          console.log("API 응답 데이터:", data);

          // 데이터가 유효한 경우에만 상태 설정
          if (data) {
            setQuoteData(data);  // quoteData 설정
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

  const { puppy, estimateProposal, estimate } = quoteData;

  return (
    <PageContainer>
      <AppBar prefix="backButton" title="견적서 보기" />
      <InfoContainer>
        <InfoCard>
        <ProfileImage 
        src={quoteData?.designer.profileImageUrl} 
        
        width="100px" 
        height="100px" 
      
      />
          <div>
            <Text typo="subtitle200">{quoteData?.designer.designerName}</Text> 
            <ProfileTextContainer>
              <ProfileRow>
              <Rating score={quoteData?.designer.reviewRating} />
                <Text typo="body300" color="gray100">
                &nbsp;({quoteData?.designer.reviewCount})
                </Text>
  

              </ProfileRow>
              <ProfileRow>
                <Maker width={10} />
                <Text typo="body400">{quoteData?.designer.address}</Text>
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
              {puppy.name}
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
                {new Date(estimateProposal.desiredDateTime).toLocaleString()} 
              </Text>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">미용 종류</Text>
              </DetailLabel>
              <Text typo="body300">
                {estimateProposal.style} 
              </Text>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">예상 소요 시간</Text>
              </DetailLabel>
              <Text typo="body300">
                {estimate.estimatedDuration} 
              </Text>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Text typo="body300">첨부사진</Text>
              </DetailLabel>
              {estimateProposal.imageUrls && estimateProposal.imageUrls.length > 0 ? (
                <img
                  src={estimateProposal.imageUrls[3]}
                  alt="첨부 사진"
                  style={{ width: "100px", height: "100px", borderRadius: "5px" }}
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
                <Text typo="body300">
                {estimate.content} 
                </Text>
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
            <Text typo="subtitle200">{estimate.depositPrice}</Text>
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

      <GNB buttonText={`${estimate.depositPrice.toLocaleString()}원 결제하기`} />
    </PageContainer>
  );
}
