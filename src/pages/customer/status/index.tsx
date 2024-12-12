import { useState } from "react";
import { AppBar, GNB } from "../../../components";
import DogList from "./components/DogProfile";
import StatusTab from "./components/StatusTab";
import StatusListItem from "./components/StatusListItem";
import { TabWrapper } from "./index.styles";
import Info from "./components/Info";
import { colors } from "../../../style/color";
import CustomerInfo from "./components/CustomerInfo";  

export default function Status() {
  const statusItemData = {
    name: "수석실장 시언",
    store: "몽뜨의 아틀리네 위례점",
    reservation:"예약완료",
    score: 4.5,
    review: 120,
    payment: 35000,
    date:2021.1112,
    badges: [
      { name: "친절함", color: "blue" },
      { name: "전문성", color: "green" },
      { name: "전문성", color: "green" },
    ],
    thumbnailUrl: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
    onCheckboxChange: () => console.log("Checkbox changed"),
    onClick: () => console.log("StatusListItem clicked"),
  };

  const [activeTab, setActiveTab] = useState<"received" | "sent" | "confirmed">("received");

  const handleTabClick = (tab: "received" | "sent" | "confirmed") => {
    setActiveTab(tab);
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
              name={statusItemData.name}
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
              name={statusItemData.name}
              store={statusItemData.store}
              score={statusItemData.score}
              review={statusItemData.review}
              reservation={statusItemData.reservation}
              thumbnailUrl={statusItemData.thumbnailUrl}
              buttons={[
                {
                  title: "견적서 보기",
                  bgColor: colors.blue300,
                  color: colors.blue100,
                  width: "100%",
                  onClick: () => console.log("견적서 보기 클릭"),
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
          <>
          <DogList />
            <CustomerInfo
             date={statusItemData.date}
              name={statusItemData.name}
              store={statusItemData.store}
              score={statusItemData.score}
              review={statusItemData.review}
              reservation={statusItemData.reservation}
              thumbnailUrl={statusItemData.thumbnailUrl}
              buttons={[
                {
                  title: "견적서 보기",
                  bgColor: colors.blue300,
                  color: colors.blue100,
                  width: "100%",
                  onClick: () => console.log("견적서 보기 클릭"),
                },
                {
                  title: "결제 취소",
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

      </TabWrapper>
      <GNB type="customer" />
    </>
  );
}
