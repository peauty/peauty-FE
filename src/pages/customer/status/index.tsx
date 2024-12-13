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
    location: "서울특별시 강남구 대치동",
    reservation: "미용 확정",
    score: 4.5,
    review: 120,
    payment: 35000,
    date: "2021.11.12",
    badges: [
      { name: "친절함", color: "blue" },
      { name: "전문성", color: "green" },
      { name: "전문성", color: "green" },
    ],
    thumbnailUrl:
      "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
    onCheckboxChange: () => console.log("Checkbox changed"),
    onClick: () => console.log("StatusListItem clicked"),
  };

  const [activeTab, setActiveTab] = useState<"sent" | "received" | "confirmed">(
    "sent",
  );

  const handleTabClick = (tab: "sent" | "received" | "confirmed") => {
    setActiveTab(tab);
  };

  const getButtonTitle = (reservationStatus: string) => {
    if (reservationStatus === "예약 완료") {
      return "결제 취소";
    } else if (reservationStatus === "미용 확정") {
      return "리뷰 작성";
    }
    return "결제 취소"; // 기본값
  };

  const renderCustomerInfoButtons = (reservationStatus: string) => [
    {
      title: "견적서 보기",
      bgColor: colors.blue300,
      color: colors.blue100,
      width: "100%",
      onClick: () => console.log("견적서 보기 클릭"),
    },
    {
      title:
        reservationStatus === "received"
          ? "더 이상 보지 않기"
          : getButtonTitle(statusItemData.reservation),
      bgColor: colors.gray400,
      color: colors.gray100,
      width: "100%",
      onClick: () => console.log("버튼 클릭"),
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat().format(amount); // 1000 단위로 쉼표 추가
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "sent":
        return (
          <>
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
        );
      case "received":
      case "confirmed":
        return (
          <>
            <div style={{ padding: "20px" }}>
              <CustomerInfo
                date={activeTab === "confirmed" ? statusItemData.date : ""}
                store={statusItemData.store}
                score={statusItemData.score}
                review={statusItemData.review}
                reservation={
                  activeTab === "confirmed" ? statusItemData.reservation : ""
                }
                location={statusItemData.location}
                thumbnailUrl={statusItemData.thumbnailUrl}
                buttons={renderCustomerInfoButtons(activeTab)}
                status="가위컷 + 곰돌이컷"
                payment={formatCurrency(statusItemData.payment)} // 쉼표 추가
                onClick={statusItemData.onClick}
              />
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
        <DogList />
        <StatusTab activeTab={activeTab} onTabClick={handleTabClick} />
        {renderTabContent()}
      </TabWrapper>
      <GNB type="customer" />
    </>
  );
}
