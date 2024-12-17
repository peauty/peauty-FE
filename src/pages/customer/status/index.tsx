import { useEffect, useState } from "react";
import { AppBar, GNB } from "../../../components";
import DogList from "./components/DogProfile";
import StatusTab from "./components/StatusTab";
import StatusListItem from "./components/StatusListItem";
import { TabWrapper } from "./index.styles";
import Info from "./components/Info";
import { colors } from "../../../style/color";
import CustomerInfo from "./components/CustomerInfo";
import {
  getOngoingProcessWithStep1Threads,
  getAllStep3AboveThreads,
  getOngoingProcessWithStep2Threads,
} from "../../../apis/customer/resources/bidding";
import { GetAllStep3AboveThreadsResponse } from "../../../types/customer/bidding";
import { GetStep2ProcessWithThreadsResponse } from "../../../types/customer/bidding";
import { useUserDetails } from "../../../hooks/useUserDetails";
import { useNavigate } from "react-router-dom";

interface StatusItemData {
  name: string;
  store: string;
  location: string;
  reservation: string;
  score: number;
  review: number;
  payment: number;
  date: string;
  badges: { name: string; color: string }[];
  thumbnailUrl: string;
}

export default function Status() {
  const { userId } = useUserDetails(); // userId 가져오기
  const [statusItemData, setStatusItemData] = useState<StatusItemData | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<"sent" | "received" | "confirmed">(
    "sent",
  );
  const [step2ThreadsData, setStep2ThreadsData] =
    useState<GetStep2ProcessWithThreadsResponse | null>(null); // Step2 데이터 상태 추가
  const [threadsData, setThreadsData] =
    useState<GetAllStep3AboveThreadsResponse | null>(null);
  const [puppyId, setPuppyId] = useState<number | null>(null); // puppyId 상태
  const navigate = useNavigate();
  const [threadId, setThreadId] = useState<number | null>(null);
  const [processId, setProcessId] = useState<number | null>(null);

  // puppyId 변경 시 해당 강아지의 데이터를 가져오기
  useEffect(() => {
    const fetchData = async () => {
      if (userId && puppyId !== null) {
        try {
          // Step1 데이터 가져오기
          const step1Data = await getOngoingProcessWithStep1Threads(
            userId,
            puppyId,
          );
          if (step1Data.process) {
            const process = step1Data.process;
            const designer = step1Data.threads[0]?.designer || {};

            setStatusItemData({
              name: process.estimateProposal.style || "알 수 없음",
              store: designer.workspaceName || "알 수 없음",
              location: designer.address || "알 수 없음",
              reservation: process.processStatus || "알 수 없음",
              score: designer.reviewRating || 0,
              review: designer.reviewCount || 0,
              payment: process.estimateProposal.desiredCost || 0,
              date: process.estimateProposal.desiredDateTime || "알 수 없음",
              badges:
                designer.badges.map((badge) => ({
                  name: badge.badgeName,
                  color: badge.badgeColor,
                })) || [],
              thumbnailUrl: designer.profileImageUrl || "",
            });
          }

          // Step2 데이터 가져오기
          const step2Data = await getOngoingProcessWithStep2Threads(
            userId,
            puppyId,
          );
          setStep2ThreadsData(step2Data as GetStep2ProcessWithThreadsResponse);


          // Step3 데이터 가져오기
          const step3Data = await getAllStep3AboveThreads(userId, puppyId);
          setThreadsData(step3Data);

          // processId와 threadId 설정
          if (step2Data.process) {
            setProcessId(step2Data.process.processId);
          }

          if (step2Data.threads.length > 0) {
            setThreadId(step2Data.threads[0].threadId);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [userId, puppyId]); // userId와 puppyId가 변경될 때마다 데이터 갱신

  const handleTabClick = (tab: "sent" | "received" | "confirmed") => {
    setActiveTab(tab);
  };

  const getButtonTitle = (reservationStatus: string) => {
    if (reservationStatus === "예약 완료") {
      return "결제 취소";
    } else if (reservationStatus === "미용 확정") {
      return "리뷰 작성";
    }
    return "결제 취소";
  };

  const renderCustomerInfoButtons = (reservationStatus: string) => [
    {
      title: "견적서 보기",
      bgColor: colors.blue300,
      color: colors.blue100,
      width: "100%",
      onClick: () =>
        navigate(
          `/customer/quote-detail?userId=${userId}&puppyId=${puppyId}&threadId=${threadId}&processId=${processId}`,
        ),
    },
    {
      title:
        reservationStatus === "received"
          ? "더이상 보지 않기"
          : getButtonTitle(statusItemData?.reservation || ""),
      bgColor: colors.gray400,
      color: colors.gray100,
      width: "100%",
      onClick: () => console.log("버튼 클릭"),
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat().format(amount);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "sent":
        return (
          <>
            <Info
              requestDate={statusItemData?.date || "알 수 없음"}
              requestText={statusItemData?.name || "요청 내용 없음"}
              userId={0}
              puppyId={0}
              processId={0}
            />
            <StatusListItem
              location={statusItemData?.location || "알 수 없음"}
              store={statusItemData?.store || "알 수 없음"}
              score={statusItemData?.score || 0}
              review={statusItemData?.review || 0}
              badges={statusItemData?.badges || []}
              thumbnailUrl={statusItemData?.thumbnailUrl || ""}
              onClick={() => console.log("StatusListItem clicked")}
            />
          </>
        );
      case "received":
        return (
          <>
            <Info
              requestDate={statusItemData?.date || "알 수 없음"}
              requestText={statusItemData?.name || "요청 내용 없음"}
              userId={0}
              puppyId={0}
              processId={0}
            />
            <div style={{ padding: "0 20px" }}>
              {step2ThreadsData?.threads &&
              step2ThreadsData.threads.length > 0 ? (
                step2ThreadsData.threads.map((thread, index) => (
                  <CustomerInfo
                    key={index}
                    store={thread.designer?.workspaceName || "알 수 없음"}
                    score={thread.designer?.reviewRating || 0}
                    review={thread.designer?.reviewCount || 0}
                    location={thread.designer?.address || "알 수 없음"}
                    thumbnailUrl={thread.designer?.profileImageUrl || ""}
                    buttons={renderCustomerInfoButtons("received")}
                    status={thread.threadStep || "알 수 없음"}
                    payment={formatCurrency(
                      thread.estimate?.estimatedCost || 0,
                    )}
                    onClick={() =>
                      console.log(`CustomerInfo clicked for thread ${index}`)
                    }
                  />
                ))
              ) : (
                <p>확인된 데이터가 없습니다.</p>
              )}
            </div>
          </>
        );
      case "confirmed":
        return (
          <>
            <div style={{ padding: "0 20px" }}>
            {threadsData?.threads?.length ? (
  threadsData.threads.map((thread: GetAllStep3AboveThreadsResponse['data']['threads'][number], index: number) => (
    <CustomerInfo
      key={index}
      store={thread.designer.workspaceName || "알 수 없음"}
      score={thread.designer.reviewRating || 0}
      review={thread.designer.reviewCount || 0}
      reservation={thread.threadStep || "알 수 없음"}
      location={thread.designer.address || "알 수 없음"}
      thumbnailUrl={thread.designer.profileImageUrl || ""}
      buttons={renderCustomerInfoButtons("confirmed")}
      status={thread.style || "알 수 없음"}
      payment={formatCurrency(thread.estimate.estimatedCost || 0)}
      onClick={() =>
        console.log(`CustomerInfo clicked for thread ${index}`)
      }
    />
  ))
) : (
  <p>확인된 데이터가 없습니다.</p>
)}
    </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="요청 현황" />
      <TabWrapper>
        <DogList setPuppyId={setPuppyId} />{" "}
        <StatusTab activeTab={activeTab} onTabClick={handleTabClick} />
        {renderTabContent()}
      </TabWrapper>
      <GNB type="customer" />
    </>
  );
}
