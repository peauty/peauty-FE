import { useEffect, useState } from "react";
import { colors } from "../../../../../style/color";
import CustomerInfo from "../../../status/components/CustomerInfo";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import { getCanReviewThreads } from "../../../../../apis/customer/resources/bidding";
import { ROUTE } from "../../../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil"; // Recoil의 상태를 업데이트할 때 사용
import { ReviewAtom, ReviewData } from "../../../../../atoms/reviewAtom";

interface Badge {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeImageUrl?: string;
  isRepresentativeBadge?: boolean;
  badgeColor?: string;
  badgeType?: string;
}

interface Thread {
  puppyId?: number;
  processId?: number;
  threadId?: number;
  threadStep?: string;
  threadStatus?: string;
  thumbnailUrl?: string;
  workspaceName?: string;
  score?: number;
  reviewCount?: number;
  address?: string;
  style?: string;
  estimatedCost?: number;
  badges?: Badge[];
}

export default function ReviewableService() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const { userId, isLoading } = useUserDetails();
  const navigate = useNavigate();
  const setReviewData = useSetRecoilState(ReviewAtom); // Recoil 상태 설정 훅 사용

  const fetchThreads = async (userId: number) => {
    try {
      const response = await getCanReviewThreads(userId);
      setThreads(response.threads || []);
    } catch (error) {
      console.error("Error fetching threads:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchThreads(userId);
    }
  }, [userId, isLoading]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat().format(amount);
  };

  const handleButtonClick = (thread: Thread) => {
    // Recoil 상태에 필요한 데이터를 담아서 업데이트
    const reviewData: ReviewData = {
      userId: userId || 0,
      puppyId: thread.puppyId || 0,
      processId: thread.processId || 0,
      threadId: thread.threadId || 0,
      reviewId: undefined, // 실제 reviewId를 설정해야 할 경우, 적절한 값 설정
    };

    setReviewData(reviewData); // Recoil 상태에 데이터 저장
    navigate(ROUTE.customer.mypage.review.write); // 리뷰 작성 페이지로 이동
  };

  return (
    <>
      {threads.map((thread, index) => {
        const {
          threadId,
          threadStatus,
          thumbnailUrl,
          workspaceName,
          score,
          reviewCount,
          address,
          style,
          estimatedCost,
          badges,
        } = thread;

        return (
          <div
            key={threadId || index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <CustomerInfo
              date={new Date().toLocaleDateString()}
              location={address || "주소 없음"}
              store={workspaceName || "업체 이름 없음"}
              score={score || 0}
              review={reviewCount || 0}
              reservation={threadStatus || "예약 상태 없음"}
              thumbnailUrl={thumbnailUrl || ""}
              buttons={[
                {
                  title: "리뷰 작성",
                  bgColor: colors.blue300,
                  color: colors.blue100,
                  width: "100%",
                  onClick: () => handleButtonClick(thread), // handleButtonClick에 thread 데이터를 전달
                },
              ]}
              status={style || "스타일 정보 없음"}
              payment={formatCurrency(estimatedCost || 0)}
              onClick={() => console.log(`Thread ${threadId} clicked`)}
            />
          </div>
        );
      })}
    </>
  );
}
