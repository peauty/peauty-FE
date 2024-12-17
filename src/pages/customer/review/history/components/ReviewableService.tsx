import { useEffect, useState, useCallback } from "react";
import CustomerInfo from "../../../status/components/CustomerInfo";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import { usePuppyId } from "../../../../../hooks/usePuppyId";
import { getAllStep3AboveThreads } from "../../../../../apis/customer/resources/bidding";
import { GetAllStep3AboveThreadsResponse } from "../../../../../types/customer/bidding";
import { colors } from "../../../../../style/color";
import { useNavigate } from "react-router-dom";
export default function ReviewableService() {
  const { userId } = useUserDetails();
  const { puppyId } = usePuppyId(Number(userId));
  const navigate = useNavigate();
  // 상태 관리
  const [threadsData, setThreadsData] =
    useState<GetAllStep3AboveThreadsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dummyData: GetAllStep3AboveThreadsResponse = {
    threads: null, // threads 최상위 필드는 현재 사용하지 않음
    responseCode: "200",
    errorMessage: "",
    serviceErrorMessage: "",
    data: {
      threads: [
        {
          processId: 1,
          style: "포메라니안 컷",
          threadId: 101,
          threadStep: "confirmed",
          threadStatus: "진행 중",
          isReviewed: false,
          threadCreatedAt: "2024-06-01T10:00:00Z",
          designer: {
            designerId: 201,
            workspaceName: "스타일 펫 살롱",
            designerName: "김디자이너",
            reviewCount: 15,
            reviewRating: 4.8,
            profileImageUrl: "https://via.placeholder.com/150", // 더미 이미지 URL
            badges: [
              {
                badgeId: 1,
                badgeName: "베스트 디자이너",
                badgeContent: "고객이 선정한 최고의 디자이너",
                badgeImageUrl: "https://via.placeholder.com/50",
                isRepresentativeBadge: true,
                badgeColor: "#FFD700",
                badgeType: "gold",
              },
            ],
            address: "서울특별시 강남구",
            scissors: "고급 가위",
          },
          estimate: {
            threadId: 101,
            estimateId: 301,
            content: "포메라니안 털 정리 및 목욕",
            availableGroomingDate: "2024-06-05",
            estimatedDuration: "2시간",
            estimatedCost: 120000,
            depositPrice: 30000,
            imageUrls: ["https://via.placeholder.com/200"],
          },
        },
        {
          processId: 2,
          style: "말티즈 컷",
          threadId: 102,
          threadStep: "completed",
          threadStatus: "완료",
          isReviewed: false,
          threadCreatedAt: "2024-06-10T15:30:00Z",
          designer: {
            designerId: 202,
            workspaceName: "댕댕이 스타일샵",
            designerName: "이디자이너",
            reviewCount: 23,
            reviewRating: 4.6,
            profileImageUrl: "https://via.placeholder.com/150", // 더미 이미지 URL
            badges: [
              {
                badgeId: 2,
                badgeName: "우수 리뷰어",
                badgeContent: "리뷰 점수가 높은 디자이너",
                badgeImageUrl: "https://via.placeholder.com/50",
                isRepresentativeBadge: false,
                badgeColor: "#C0C0C0",
                badgeType: "silver",
              },
            ],
            address: "서울특별시 서초구",
            scissors: "일반 가위",
          },
          estimate: {
            threadId: 102,
            estimateId: 302,
            content: "말티즈 털 정리 및 발톱 케어",
            availableGroomingDate: "2024-06-12",
            estimatedDuration: "1시간 30분",
            estimatedCost: 90000,
            depositPrice: 20000,
            imageUrls: ["https://via.placeholder.com/200"],
          },
        },
      ],
    },
  };

  const renderCustomerInfoButtons = (thread: any) => [
    {
      title: "리뷰 작성",
      width: "100%",
      bgColor: `${colors.blue300}`,
      color: `${colors.blue100}`,
      onClick: () => {
        console.log("리뷰 작성 버튼 클릭");

        // thread의 필요한 정보를 함께 넘겨줌
        navigate("/customer/mypage/reviews-write", {
          state: {
            puppyId,
            processId: thread.processId,
            threadId: thread.threadId,
            style: thread.style,
            workspaceName: thread.designer.workspaceName,
            availableGroomingDate: thread.estimate.availableGroomingDate,
            estimatedCost: thread.estimate.estimatedCost,
            badgeImageUrl: thread.designer.badges[0]?.badgeImageUrl || "",
          },
        });
      },
    },
  ];

  useEffect(() => {
    setLoading(true);
    try {
      setThreadsData(dummyData);
    } catch (err) {
      setError("더미 데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  // fetchThreads 함수 - useCallback으로 메모이제이션
  const fetchThreads = useCallback(async () => {
    if (userId === null || puppyId === null) {
      console.warn("userId 또는 puppyId가 존재하지 않습니다.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await getAllStep3AboveThreads(userId, puppyId);
      setThreadsData(response);
    } catch (err) {
      console.error("API 호출 오류:", err);
      setError("데이터를 가져오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [userId, puppyId]);

  // API 호출 - useEffect 안에서 fetchThreads 실행
  useEffect(() => {
    if (userId !== null && puppyId !== null) {
      fetchThreads();
    }
  }, [fetchThreads, userId, puppyId]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat().format(amount);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {threadsData && threadsData.data?.threads?.length ? (
        threadsData.data.threads
          .filter((thread) => !thread.isReviewed)
          .map((thread, index) => (
            <CustomerInfo
              key={index}
              isReviewed={false}
              store={thread.designer.workspaceName || "알 수 없음"}
              score={thread.designer.reviewRating || 0}
              review={thread.designer.reviewCount || 0}
              location={thread.designer.address || "알 수 없음"}
              thumbnailUrl={thread.designer.profileImageUrl || ""}
              buttons={renderCustomerInfoButtons(thread)} // thread 객체 전달
              status={thread.style || "알 수 없음"}
              payment={formatCurrency(thread.estimate.estimatedCost || 0)}
              onClick={() =>
                console.log(`CustomerInfo clicked for thread ${index}`)
              }
              reservation={thread.threadStatus}
            />
          ))
      ) : (
        <p>확인된 데이터가 없습니다.</p>
      )}
    </div>
  );
}
