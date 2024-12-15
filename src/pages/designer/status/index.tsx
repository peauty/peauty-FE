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
} from "../../../apis/designer/resources/designer bidding api";
import { GetThreadsByStepResponse } from "../../../types/designer/designer bidding api";
import { formatDate } from "../../../utils/dataformat";
import { useUserDetails } from "../../../hooks/useUserDetails";
import NotFound from "./components/not-found";

type Tab = "received" | "sent" | "confirmed";

export default function Status() {
  const navigate = useNavigate();
  const { userId } = useUserDetails();

  const handleQuote = (processId: number, threadId: number) => {
    navigate(`/designer/quote/${processId}`, {
      state: { userId, processId, threadId },
    });
  };

  const [activeTab, setActiveTab] = useState<Tab>("received");
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
          const data = await getStep3AboveThreads(userId);
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

  const renderContent = () => {
    if (isLoading) return <div>Loading...</div>;

    if (activeTab === "received") {
      if (!receivedData) return <div>Error fetching received data.</div>;
      if (receivedData.length === 0) return <NotFound type="request" />;

      return receivedData.map((thread) => (
        <Info
          key={thread.threadId}
          date={formatDate(thread.processCreatedAt)}
          imageSrc={
            thread.puppy?.profileImageUrl ||
            "https://peauty.s3.ap-northeast-2.amazonaws.com/images/dog.png"
          }
          name={thread.puppy?.name || "강아지"}
          age={thread.puppy?.age || 3}
          gender={thread.puppy?.sex || "수컷"}
          weight={thread.puppy?.weight.toString() || "3.4"}
          breed={thread.puppy?.breed || "품종 미제공"}
          tags={["태그 없음"]}
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
          key={thread.threadId}
          date={formatDate(thread.processCreatedAt)} // 날짜 포맷팅 적용
          imageSrc={
            thread.puppy?.profileImageUrl ||
            "https://peauty.s3.ap-northeast-2.amazonaws.com/images/dog.png"
          }
          name={thread.puppy?.name || "강아지"}
          age={thread.puppy?.age || 3}
          gender={thread.puppy?.sex || "수컷"}
          weight={thread.puppy?.weight.toString() || "3.4"}
          breed={thread.puppy?.breed || "품종 미제공"}
          tags={["태그 없음"]}
          buttons={[
            {
              title: "견적서 보기",
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
    } else if (activeTab === "confirmed") {
      if (!confirmedData) return <div>Error fetching confirmed data.</div>;
      if (confirmedData.length === 0) return <NotFound type="comfirm" />;

      return confirmedData.map((thread) => (
        <Info
          key={thread.threadId}
          date={formatDate(thread.processCreatedAt)} // 날짜 포맷팅 적용
          imageSrc={
            thread.puppy?.profileImageUrl ||
            "https://peauty.s3.ap-northeast-2.amazonaws.com/images/dog.png"
          }
          name={thread.puppy?.name || "강아지"}
          age={thread.puppy?.age || 3}
          gender={thread.puppy?.sex || "수컷"}
          weight={thread.puppy?.weight.toString() || "3.4"}
          breed={thread.puppy?.breed || "품종 미제공"}
          tags={["태그 없음"]}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => console.log("견적서 보기 클릭"),
            },
            {
              title: "미용 완료",
              bgColor: colors.background,
              color: colors.gray100,
              onClick: () => console.log("미용 완료 클릭"),
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
      <GNB type="designer" />
    </>
  );
}
