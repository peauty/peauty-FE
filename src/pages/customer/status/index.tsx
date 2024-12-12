import { useState } from "react";
import { AppBar, GNB } from "../../../components";
import DogList from "./components/DogProfile";
import StatusTab from "./components/StatusTab";
import StatusListItem from "./components/StatusListItem";
import { TabWrapper } from "./index.styles";
import Info from "./components/Info";
import { colors } from "../../../style/color";
import CustomerInfo from "./components/CustomerInfo";
import { useNavigate } from "react-router-dom";

export default function Status() {
  const statusItemData = {
    store: "몽뜨의 아틀리네 위례점",
    location: "서울특별시 강남구 대치동",
    score: 4.5,
    review: 120,
    payment: 35000,
    badges: [
      { name: "친절함", color: "blue" },
      { name: "전문성", color: "green" },
      { name: "전문성", color: "green" },
    ],
    thumbnailUrl:
      "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
    onCheckboxChange: () => console.log("Checkbox changed"),
    onClick: () => handleWorkspace(),
  };

  const [activeTab, setActiveTab] = useState<"received" | "sent" | "confirmed">(
    "received",
  );
  const navigate = useNavigate();

  const handleTabClick = (tab: "received" | "sent" | "confirmed") => {
    setActiveTab(tab);
  };

  const handleWorkspace = () => {
    navigate("/customer/request/2");
  };

  const handleQuoteDetail = () => {
    navigate("/customer/quote-detail");
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <TabWrapper>
        <StatusTab activeTab={activeTab} onTabClick={handleTabClick} />

        {/* 탭에 따라 다른 컴포넌트를 렌더링 */}
        {activeTab === "received" && (
          <>
            <DogList />
            <Info />
            <StatusListItem
              location={statusItemData.location}
              store={statusItemData.store}
              score={statusItemData.score}
              review={statusItemData.review}
              badges={statusItemData.badges}
              thumbnailUrl={statusItemData.thumbnailUrl}
              onClick={statusItemData.onClick}
            />
          </>
        )}

        {activeTab === "sent" && (
          <>
            <DogList />
            <Info />
            <CustomerInfo
              location={statusItemData.location}
              store={statusItemData.store}
              score={statusItemData.score}
              review={statusItemData.review}
              thumbnailUrl={statusItemData.thumbnailUrl}
              onClick={statusItemData.onClick}
              buttons={[
                {
                  title: "견적서 보기",
                  bgColor: colors.blue300,
                  color: colors.blue100,
                  width: "100%",
                  onClick: () => handleQuoteDetail(), // 수정된 부분
                },
                {
                  title: "더 이상 보지 않기",
                  bgColor: colors.gray300,
                  color: colors.gray100,
                  width: "100%",
                  onClick: () => console.log("더이상 보지 않기"),
                },
              ]}
              status="가윗컷 + 곰돌이컷"
              payment={statusItemData.payment}
            />
          </>
        )}

        {activeTab === "confirmed" && (
          <>{/* 확정 견적에 해당하는 컴포넌트들 */}</>
        )}
      </TabWrapper>
      <GNB type="customer" />
    </>
  );
}
