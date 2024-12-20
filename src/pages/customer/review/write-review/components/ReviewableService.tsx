import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getEstimateAndProposalDetails } from "../../../../../apis/customer/resources/bidding";
import { Text } from "../../../../../components";
import {
  BackgroundImg,
  ReviewableServiceWrapper,
  ServiceBox,
  ServiceInfoWrapper,
  TotalPriceBox,
} from "../index.styles";
import { ReviewAtom } from "../../../../../atoms/reviewAtom";

// 날짜를 한글로 표현하는 함수
const formatDateToKorean = (dateString: string): string => {
  // 시간 부분이 한 자리가 되지 않도록 수정
  const formattedDateString = dateString.replace(/T(\d{1}):/g, "T0$1:");

  const date = new Date(formattedDateString);

  if (isNaN(date.getTime())) {
    return "날짜 정보 없음";
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
  const day = date.getDate();
  const hours = date.getHours();

  // 한글로 표현
  return `${year}년 ${month}월 ${day}일 ${hours}시`;
};

export default function ReviewableService() {
  // Recoil에서 ReviewAtom 값 불러오기
  const reviewData = useRecoilValue(ReviewAtom);

  // 상태 관리
  const [serviceDetails, setServiceDetails] = useState<any>(null);

  // API 호출 함수
  const fetchServiceDetails = async () => {
    if (!reviewData) {
      console.warn("리뷰 데이터가 없습니다.");
      return;
    }

    const { userId, puppyId, processId, threadId } = reviewData;

    try {
      const response = await getEstimateAndProposalDetails(
        userId,
        puppyId,
        processId,
        threadId,
      );
      setServiceDetails(response);
    } catch (error) {
      console.error("서비스 정보 불러오기 실패", error);
    }
  };

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    fetchServiceDetails();
  }, [reviewData]); // reviewData가 변경될 때마다 호출

  if (!serviceDetails) {
    return <div>서비스 정보를 불러오는 중...</div>;
  }

  // 데이터 매핑
  const { estimateProposal, estimate, designer } = serviceDetails;

  const date = estimateProposal?.desiredDateTime
    ? formatDateToKorean(estimateProposal.desiredDateTime)
    : "날짜 정보 없음";

  const designerName = designer?.workspaceName || "디자이너 정보 없음";

  const serviceType = estimateProposal?.style || "미용 정보 없음";
  const totalPrice = estimate?.estimatedCost
    ? estimate.estimatedCost
    : estimateProposal?.desiredCost || "금액 정보 없음";
  const backgroundImg = designer?.profileImageUrl || "/svg/logo.svg"; // 배경 이미지 URL 기본값 설정

  return (
    <>
      <ReviewableServiceWrapper>
        <ServiceBox>
          <BackgroundImg src={backgroundImg} alt="배경이미지" />
          <ServiceInfoWrapper>
            <Text typo="body400" color="blue100">
              {date}
            </Text>
            <Text typo="subtitle200">{designerName}</Text>
            <Text typo="body300">
              <Text typo="body300" color="gray100">
                진행한 미용{" "}
              </Text>
              {serviceType}
            </Text>
          </ServiceInfoWrapper>
        </ServiceBox>

        <TotalPriceBox>
          <Text typo="body100">총 금액</Text>
          <Text typo="subtitle300" color="blue100">
            {totalPrice} 원
          </Text>
        </TotalPriceBox>
      </ReviewableServiceWrapper>
    </>
  );
}
