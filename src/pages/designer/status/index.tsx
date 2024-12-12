import { useState } from "react";
import { AppBar, GNB } from "../../../components";

import Info from "../../../components/petInfo/Info";
import { colors } from "../../../style/color";
import { TabWrapper } from "./index.styles";
import RequestTabs from "./components/RequsetTab";

type Tab = "received" | "sent" | "confirmed";

export default function Status() {
  const [activeTab, setActiveTab] = useState<Tab>("received");

  const renderContent = () => {
    if (activeTab === "received") {
      return (
        <Info
          date="2024.12.24"
          imageSrc="https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
          name="꼬미"
          age={3}
          gender="암컷"
          weight="3.4"
          breed="말티즈"
          tags={["피부병", "슬개골"]}
          buttons={[
            {
              title: "요청 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => alert("요청 보기 클릭"),
            },
          ]}
        />
      );
    } else if (activeTab === "sent") {
      return (
        <Info
          date="2024.12.24"
          imageSrc="https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
          name="꼬미"
          age={3}
          gender="암컷"
          weight="3.4"
          breed="말티즈"
          tags={["피부병", "슬개골"]}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => alert("견적서 보기 클릭"),
            },
          ]}
          status="견적 확인중"
        />
      );
    } else if (activeTab === "confirmed") {
      return (
        <Info
          date="2024.12.11"
          imageSrc="https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
          name="Buddy"
          age={5}
          gender="남"
          weight="12.3"
          breed="푸들"
          tags={["건강", "활발함"]}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              onClick: () => console.log("견적서 보기 클릭"),
            },
            {
              title: "미용 확정",
              bgColor: colors.gray200,
              color: colors.gray100,
              onClick: () => console.log("미용 확정 클릭"),
            },
          ]}
          status="미용 완료"
        />
      );
    }
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <TabWrapper>
        <RequestTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </TabWrapper>
      <GNB type="designer" />
    </>
  );
}
