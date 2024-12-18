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
import {
  GetAllStep3AboveThreadsResponse,
  GetOngoingProcessWithThreadsResponse,
} from "../../../types/customer/bidding";
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
  const { userId } = useUserDetails();
  const [statusItemData, setStatusItemData] = useState<StatusItemData | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<"sent" | "received" | "confirmed">(
    "sent",
  );
  const [step2ThreadsData, setStep2ThreadsData] =
    useState<GetOngoingProcessWithThreadsResponse | null>(null);
  const [threadsData, setThreadsData] =
    useState<GetAllStep3AboveThreadsResponse | null>(null);
  const [puppyId, setPuppyId] = useState<number | null>(null);
  const navigate = useNavigate();
  const [threadId, setThreadId] = useState<number | null>(null);
  const [processId, setProcessId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userId && puppyId !== null) {
        try {
          const step1Data = await getOngoingProcessWithStep1Threads(
            userId,
            puppyId,
          );
          if (step1Data.process) {
            const process = step1Data.process;
            const threadInfo = process.threadInfo;
            const designer = threadInfo?.designer;

            setStatusItemData({
              name: process.estimateProposal?.style || "알 수 없음",
              store: designer?.workspaceName || "알 수 없음",
              location: designer?.address || "알 수 없음",
              reservation: process.processStatus || "알 수 없음",
              score: 0, // 새로운 타입에는 reviewRating이 없음
              review: 0, // 새로운 타입에는 reviewCount가 없음
              payment: process.estimateProposal?.desiredCost || 0,
              date: process.estimateProposal?.desiredDateTime || "알 수 없음",
              badges: [], // 새로운 타입에는 badges가 없음
              thumbnailUrl: "", // 새로운 타입에는 profileImageUrl이 없음
            });
          }

          const step2Data = await getOngoingProcessWithStep2Threads(
            userId,
            puppyId,
          );
          setStep2ThreadsData(step2Data);

          const step3Data = await getAllStep3AboveThreads(userId, puppyId);
          setThreadsData(step3Data);

          if (step2Data.process) {
            setProcessId(step2Data.process.processId || 0);
          }

          if (step2Data.threads && step2Data.threads.length > 0) {
            setThreadId(step2Data.threads[0].threadId || 0);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [userId, puppyId]);

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
                    store={thread.threadId?.toString() || "알 수 없음"} // threadInfo에서 workspaceName 접근
                    score={0} // 새 타입에는 없음
                    review={0} // 새 타입에는 없음
                    location={"알 수 없음"} // threadInfo에서 address 접근
                    thumbnailUrl={""} // 새 타입에는 없음
                    buttons={renderCustomerInfoButtons("received")}
                    status={thread.threadId?.toString() || "알 수 없음"} // threadStep 사용
                    payment={formatCurrency(0)}
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
                threadsData.threads.map((thread, index) => (
                  <CustomerInfo
                    key={index}
                    store={thread.designer?.workspaceName || "알 수 없음"}
                    score={0} // 새 타입에는 없음
                    review={0} // 새 타입에는 없음
                    reservation={thread.threadStep || "알 수 없음"}
                    location={thread.designer?.address || "알 수 없음"}
                    thumbnailUrl={""} // 새 타입에는 없음
                    buttons={renderCustomerInfoButtons("confirmed")}
                    status={thread.style || "알 수 없음"}
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
      default:
        return null;
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="요청 현황" />
      <TabWrapper>
        <DogList setPuppyId={setPuppyId} />
        <StatusTab activeTab={activeTab} onTabClick={handleTabClick} />
        {renderTabContent()}
      </TabWrapper>
      <GNB type="customer" />
    </>
  );
}
