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
import { formatDate } from "../../../utils/dataformat"; // formatDate 함수 가져오기
import { useUserDetails } from "../../../hooks/useUserDetails";

type Tab = "received" | "sent" | "confirmed";

export default function Status() {
  const navigate = useNavigate();
  const handleQuote = (puppyId: number) => {
    navigate(`/designer/quote/${puppyId}`, { state: { puppyId } });
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

  const { userId } = useUserDetails(); // 유저 ID 가져오기

  // API 호출하여 데이터를 가져오기
  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return; // userId가 없으면 실행하지 않음
      setIsLoading(true);
      try {
        if (activeTab === "received") {
          const data = await getStep1Threads(userId);
          console.log("받은 요청 리스트:", data.threads);
          setReceivedData(data.threads || []);
        } else if (activeTab === "sent") {
          const data = await getStep2Threads(userId);
          console.log("보낸 요청 리스트:", data.threads);
          setSentData(data.threads || []);
        } else if (activeTab === "confirmed") {
          const data = await getStep3AboveThreads(userId);
          console.log("확정된 요청 리스트:", data.threads);
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
  }, [activeTab, userId]); // activeTab 또는 userId 변경 시 호출

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  // Tab별로 필터링된 데이터 렌더링
  const renderContent = () => {
    if (isLoading) return <div>Loading...</div>;

    if (activeTab === "received") {
      if (!receivedData) return <div>Error fetching received data.</div>;
      if (receivedData.length === 0) return <div>받은 요청이 없습니다.</div>;

      return receivedData.map((thread) => (
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
              title: "요청 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => {
                if (thread.puppy?.puppyId !== undefined) {
                  handleQuote(thread.puppy.puppyId);
                } else {
                  console.error("puppyId가 존재하지 않습니다.");
                }
              },
            },
          ]}
        />
      ));
    } else if (activeTab === "sent") {
      if (!sentData) return <div>Error fetching sent data.</div>;
      if (sentData.length === 0) return <div>보낸 요청이 없습니다.</div>;

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
                if (thread.puppy?.puppyId !== undefined) {
                  handleQuote(thread.puppy.puppyId);
                } else {
                  console.error("puppyId가 존재하지 않습니다.");
                }
              },
            },
          ]}
        />
      ));
    } else if (activeTab === "confirmed") {
      if (!confirmedData) return <div>Error fetching confirmed data.</div>;
      if (confirmedData.length === 0) return <div>확정된 요청이 없습니다.</div>;

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
