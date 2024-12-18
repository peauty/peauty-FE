import { useEffect, useState } from "react";
import { colors } from "../../../../../style/color";
import CustomerInfo from "../../../status/components/CustomerInfo";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import { getCanReviewThreads } from "../../../../../apis/customer/resources/bidding";

// 상태에 대한 초기값 설정
interface Badge {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeImageUrl?: string;
  isRepresentativeBadge?: boolean;
  badgeColor?: string; // Color가 문자열일 수 있음 (예: "blue")
  badgeType?: string; // BadgeTypeType도 문자열일 가능성 있음
}

interface Thread {
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

  // 비동기 API 호출을 위한 함수 정의
  const fetchThreads = async (userId: number) => {
    try {
      const response = await getCanReviewThreads(userId);
      setThreads(response.threads || []);
    } catch (error) {
      console.error("Error fetching threads:", error);
    }
  };

  // 사용자 ID에 맞는 쓰레드 데이터 fetch
  useEffect(() => {
    if (userId) {
      fetchThreads(userId);
    }
  }, [userId, isLoading]);

  // 금액 포맷팅
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat().format(amount); // 1000 단위로 쉼표 추가
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
              date={new Date().toLocaleDateString()} // 실제 날짜를 넣으려면 적절한 값을 설정
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
                  onClick: () => console.log("리뷰작성클릭"),
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
