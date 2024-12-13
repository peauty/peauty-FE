import { useState } from "react";
import { AppBar, GNB } from "../../../../components";
import ReviewTabs from "./components/ReviewTabs";
import ReviewableService from "./components/ReviewableService";
import ReviewedService from "./components/ReviewedService";

type Tab = "new" | "history";

export default function ReviewHistory() {
  const [activeTab, setActiveTab] = useState<Tab>("new");
  return (
    <>
      <AppBar prefix="backButton" title="리뷰 내역" />
      <ReviewTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "new" ? <ReviewableService /> : <ReviewedService />}
      <GNB type="customer" />
    </>
  );
}
