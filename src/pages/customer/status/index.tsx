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
import { useUserDetails } from "../../../hooks/useUserDetails";
import { useNavigate } from "react-router-dom";
import {
  GetAllStep3AboveThreadsResponse,
  GetOngoingProcessWithStep2ThreadsResponse,
} from "../../../types/customer/bidding";
import Basic from "../../../assets/images/basic.png";
import NotFoundPuppy from "./components/NotFoundPuppy";
import NoReceived from "./components/NoReceived";
import Nosend from "./components/Nosent";
interface StatusItemData {
  name: string;
  store: string;
  location: string;
  reservation: string;
  score: number;
  review: number;
  payment?: number;
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
    useState<GetOngoingProcessWithStep2ThreadsResponse | null>(null);
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
          if (step1Data.info) {
            setStatusItemData({
              name: step1Data.info.requestText || "알 수 없음",
              store: step1Data.stores?.[0]?.store || "알 수 없음",
              location: step1Data.stores?.[0]?.location || "알 수 없음",
              reservation: step1Data.stores?.[0]?.threadStep || "알 수 없음",
              score: step1Data.stores?.[0]?.score || 0,
              review: step1Data.stores?.[0]?.review || 0,
              //payment: step1Data.stores?.[0]?.desiredCost || 0,
              date: step1Data.info.requestDate || "알 수 없음",
              badges:
                step1Data.stores?.[0]?.badges?.map((badge) => ({
                  name: badge.badgeName || "알 수 없음",
                  color: badge.badgeColor || "#000",
                })) || [],
              thumbnailUrl: step1Data.stores?.[0]?.thumbnailUrl || Basic,
            });
          }

          const step2Data = await getOngoingProcessWithStep2Threads(
            userId,
            puppyId,
          );
          setStep2ThreadsData(step2Data);

          const step3Data = await getAllStep3AboveThreads(userId, puppyId);
          setThreadsData(step3Data);

          if (step2Data.info) {
            setProcessId(step2Data.info.processId || 0);
          }

          if (step2Data.stores && step2Data.stores.length > 0) {
            setThreadId(step2Data.stores[0].threadId || 0);
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
    if (puppyId === null) {
      return <NotFoundPuppy />;
    }
    switch (activeTab) {
      case "sent":
        return (
          <>
            {statusItemData ? (
              <>
                <Info
                  requestDate={statusItemData.date }
                  requestText={statusItemData.name }
                  userId={0}
                  puppyId={0}
                  processId={0}
                />
                <StatusListItem
                  location={statusItemData.location }
                  store={statusItemData.store }
                  score={statusItemData.score }
                  review={statusItemData.review }
                  badges={statusItemData.badges }
                  thumbnailUrl={statusItemData.thumbnailUrl}
                  onClick={() => console.log("StatusListItem clicked")}
                />
              </>
            ) : (
              <Nosend />
            )}
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
            {step2ThreadsData?.stores && step2ThreadsData.stores.length > 0 ? (
              step2ThreadsData.stores.map((store, index) => (
                <CustomerInfo
                  key={index}
                  store={store.store || "알 수 없음"}
                  score={store.score || 0}
                  review={store.review || 0}
                  location={store.location || "알 수 없음"}
                  thumbnailUrl={store.thumbnailUrl || Basic}
                  buttons={renderCustomerInfoButtons("received")}
                  status={step2ThreadsData.info?.requestText || "알 수 없음"}
                  payment={formatCurrency(store.desiredCost || 0)}
                  onClick={() =>
                    console.log(`CustomerInfo clicked for store ${index}`)
                  }
                />
              ))
            ) : (
              <NoReceived /> 
            )}
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
                    store={thread.workspaceName || "알 수 없음"}
                    score={thread.score || 0}
                    review={thread.reviewCount || 0}
                    reservation={thread.threadStep || "알 수 없음"}
                    location={thread.address || "알 수 없음"}
                    thumbnailUrl={thread.thumbnailUrl || Basic}
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
                <NoReceived /> 
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
