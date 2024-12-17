import { useEffect, useState } from "react";
import { colors } from "../../../../../style/color";
import CustomerInfo from "../../../status/components/CustomerInfo";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import { usePuppyId } from "../../../../../hooks/usePuppyId"; 
import { getAllStep3AboveThreads } from "../../../../../apis/customer/resources/bidding";
import { GetAllStep3AboveThreadsResponse } from "../../../../../types/customer/bidding";

export default function ReviewableService() {
  const { userId } = useUserDetails();
  const { puppyId } = usePuppyId(userId);

  // 전체 응답 데이터를 저장
  const [threadsData, setThreadsData] = useState<GetAllStep3AboveThreadsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchThreads = async () => {
      if (!puppyId) {
        console.log("puppyId가 존재하지 않습니다.");
        return;
      }
      setLoading(true);
      setError("");

      try {
        const response = await getAllStep3AboveThreads(userId, puppyId);
        console.log("API Response:", response);

        // 전체 응답 데이터를 저장
        setThreadsData(response);
      } catch (err) {
        console.error("API 호출 오류:", err);
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchThreads();
  }, [userId, puppyId]);

  const formatCurrency = (amount: number) => new Intl.NumberFormat().format(amount);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {threadsData && threadsData.data?.threads?.length ? (
          threadsData.data.threads
            .filter(thread => {
              console.log("Thread 필터링 전:", thread);
              return !thread.isReviewed;
            }) // isReviewed가 false인 항목만 필터링
            .map((thread, index) => {
              console.log("Filtered Thread:", thread);
              return (
                <CustomerInfo
                  key={index}
                  isReviewed={false}
                  store={thread.designer.workspaceName || "알 수 없음"}
                  score={thread.designer.reviewRating || 0}
                  review={thread.designer.reviewCount || 0}
                  location={thread.designer.address || "알 수 없음"}
                  thumbnailUrl={thread.designer.profileImageUrl || ""}
                  buttons={renderCustomerInfoButtons("confirmed")}
                  status={thread.threadStep || "알 수 없음"}
                  payment={formatCurrency(thread.estimate.estimatedCost || 0)}
                  onClick={() => console.log(`CustomerInfo clicked for thread ${index}`)}
                />
              );
            })
        ) : (
          <p>확인된 데이터가 없습니다.</p>
        )}
      </div>
    </>
  );
}
