import { useState, useEffect } from "react";
import { AppBar, GNB } from "../../../components";
import { useNavigate } from "react-router-dom";
import Info from "../../../components/petInfo/Info";
import { colors } from "../../../style/color";
import { TabWrapper } from "./index.styles";
import StatusTab from "./components/StatusTab";
import {
  getStep1Threads,
  getStep2Threads,
  getStep3AboveThreads,
} from "../../../apis/designer/resources/designer-bidding-api";
import { GetThreadsByStepResponse } from "../../../types/designer/designer-bidding-api";
import { formatDate } from "../../../utils/dataformat";
import { useUserDetails } from "../../../hooks/useUserDetails";
import NotFound from "./components/not-found";
import { formatTimeDifference } from "../status/utils";
import { completeGrooming } from "../../../apis/designer/resources/designer-bidding-api";
import Modal from "../../../components/modal/Modal/Modal";
import { useLocation } from "react-router-dom";
import Toast from "../../../components/toast";
type Tab = "received" | "sent" | "confirmed";

export default function Status() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useUserDetails();

  const handleQuote = (processId: number, threadId: number) => {
    navigate(`/designer/quote/${processId}`, {
      state: { userId, processId, threadId, activeTab },
    });
  };

  const handleQuoteDatail = (processId: number, threadId: number) => {
    navigate(`/designer/status/quote/${processId}`, {
      state: { userId, processId, threadId, activeTab },
    });
  };
  const initialTab =
    (location.state as { activeTab?: Tab })?.activeTab || "received";
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [receivedData, setReceivedData] = useState<
    GetThreadsByStepResponse["threads"] | null
  >(null);
  const [sentData, setSentData] = useState<
    GetThreadsByStepResponse["threads"] | null
  >(null);
  const [confirmedData, setConfirmedData] = useState<
    GetThreadsByStepResponse["threads"] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isAlreadyCompleteDialogOpen, setIsAlreadyCompleteDialogOpen] =
    useState(false); // 완료된 미용 모달 상태
  const [currentThread, setCurrentThread] = useState<{
    processId: number;
    threadId: number;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  useEffect(() => {
    // location.state로부터 toastMessage 가져오기
    if (location.state?.toastMessage) {
      setToastMessage(location.state.toastMessage);
    }
  }, [location.state]);

  // 일정 시간 후 토스트 메시지 숨기기
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2500); // 3초 후 사라짐
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;
      setIsLoading(true);
      try {
        if (activeTab === "received") {
          const data = await getStep1Threads(userId);
          setReceivedData(data.threads || []);
        } else if (activeTab === "sent") {
          const data = await getStep2Threads(userId);
          setSentData(data.threads || []);
        } else if (activeTab === "confirmed") {
          const data = await getStep3AboveThreads(1);
          setConfirmedData(data.threads || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (activeTab === "received") setReceivedData(null);
        if (activeTab === "sent") setSentData(null);
        if (activeTab === "confirmed") setConfirmedData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab, userId]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleCompleteGrooming = async (
    processId: number,
    threadId: number,
  ) => {
    if (!userId || !processId || !threadId) {
      console.error("미용 완료를 위한 필수 데이터가 없습니다.");
      return;
    }

    try {
      const response = await completeGrooming(userId, processId, threadId);
      setIsConfirmDialogOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("미용 완료 실패:", error);
    }
  };

  const handleModalOpen = (
    processId: number,
    threadId: number,
    threadStep: string,
  ) => {
    if (threadStep === "미용완료") {
      setIsAlreadyCompleteDialogOpen(true); // 이미 완료된 미용 모달 열기
    } else {
      setCurrentThread({ processId, threadId });
      setIsConfirmDialogOpen(true);
    }
  };

  const renderContent = () => {
    if (isLoading) return <div>Loading...</div>;

    if (activeTab === "received") {
      if (!receivedData) return <div>Error fetching received data.</div>;
      if (receivedData.length === 0) return <NotFound type="request" />;

      return receivedData.map((thread) => (
        <Info
          processStatus={thread.processStatus}
          key={thread.threadId}
          date={formatTimeDifference(thread.processCreatedAt)}
          imageSrc={
            thread.puppy?.profileImageUrl ||
            "https://peauty.s3.ap-northeast-2.amazonaws.com/images/dog.png"
          }
          name={thread.puppy?.name || "강아지"}
          age={thread.puppy?.age || 3}
          gender={thread.puppy?.sex || "수컷"}
          weight={thread.puppy?.weight.toString() || "3.4"}
          breed={thread.puppy?.breed || "품종 미제공"}
          tags={thread.puppy?.diseases || []}
          buttons={[
            {
              title: "요청 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => {
                if (thread.processId && thread.threadId) {
                  handleQuote(thread.processId, thread.threadId);
                } else {
                  console.error("processId 또는 threadId가 없습니다.");
                }
              },
            },
          ]}
        />
      ));
    } else if (activeTab === "sent") {
      if (!sentData) return <div>Error fetching sent data.</div>;
      if (sentData.length === 0) return <NotFound type="quote" />;

      return sentData.map((thread) => (
        <Info
          processStatus={thread.processStatus}
          key={thread.threadId}
          date={formatTimeDifference(thread.processCreatedAt)} // 날짜 포맷팅 적용
          imageSrc={
            thread.puppy?.profileImageUrl ||
            "https://peauty.s3.ap-northeast-2.amazonaws.com/images/dog.png"
          }
          name={thread.puppy?.name || "강아지"}
          age={thread.puppy?.age || 0}
          gender={thread.puppy?.sex || "수컷"}
          weight={thread.puppy?.weight.toString() || "3.4"}
          breed={thread.puppy?.breed || "품종 미제공"}
          tags={thread.puppy?.diseases || []}
          status={thread.threadStep}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => {
                if (thread.processId && thread.threadId) {
                  handleQuoteDatail(thread.processId, thread.threadId);
                } else {
                  console.error("processId 또는 threadId가 없습니다.");
                }
              },
            },
          ]}
        />
      ));
    } else if (activeTab === "confirmed") {
      if (!confirmedData) return <div>Error fetching confirmed data.</div>;
      if (confirmedData.length === 0) return <NotFound type="comfirm" />;

      return confirmedData.map((thread) => (
        <Info
          processStatus={thread.processStatus}
          key={thread.threadId}
          date={formatDate(thread.threadStepModifiedAt)} // 날짜 포맷팅 적용
          imageSrc={
            thread.puppy?.profileImageUrl ||
            "https://peauty.s3.ap-northeast-2.amazonaws.com/images/dog.png"
          }
          name={thread.puppy?.name || "강아지"}
          age={thread.puppy?.age || 3}
          gender={thread.puppy?.sex || "수컷"}
          weight={thread.puppy?.weight.toString() || "3.4"}
          breed={thread.puppy?.breed || "품종 미제공"}
          status={thread.threadStep}
          tags={thread.puppy?.diseases || []}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => {
                if (thread.processId && thread.threadId) {
                  handleQuoteDatail(thread.processId, thread.threadId);
                } else {
                  console.error("processId 또는 threadId가 없습니다.");
                }
              },
            },
            {
              title: "미용 완료",
              bgColor: colors.background,
              color: colors.gray100,
              onClick: () => {
                if (thread.processId && thread.threadId) {
                  handleModalOpen(
                    thread.processId,
                    thread.threadId,
                    thread.threadStep || "",
                  );
                } else {
                  console.error("processId 또는 threadId가 없습니다.");
                }
              },
            },
          ]}
        />
      ));
    }
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <TabWrapper>
        <StatusTab activeTab={activeTab} onTabClick={handleTabClick} />
        {renderContent()}
      </TabWrapper>
      {toastMessage && <Toast>{toastMessage}</Toast>}
      <GNB type="designer" />
      {isConfirmDialogOpen && currentThread && (
        <Modal
          title="해당 미용이 완료됐나요?"
          message="확정 상태는 변경할 수 없어요"
          buttons={[
            {
              label: "네",
              onClick: () =>
                handleCompleteGrooming(
                  currentThread.processId,
                  currentThread.threadId,
                ),
            },
            { label: "아니오", onClick: () => setIsConfirmDialogOpen(false) },
          ]}
          onClose={() => setIsConfirmDialogOpen(false)}
        />
      )}
      {isAlreadyCompleteDialogOpen && (
        <Modal
          message="이미 완료된 미용이에요"
          buttons={[
            {
              label: "닫기",
              onClick: () => setIsAlreadyCompleteDialogOpen(false),
            },
          ]}
          onClose={() => setIsAlreadyCompleteDialogOpen(false)}
        />
      )}
    </>
  );
}
