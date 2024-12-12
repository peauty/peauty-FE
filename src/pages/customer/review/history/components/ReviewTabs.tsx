import { TabItem, TabWrapper } from "../index.styles";

type Tab = "new" | "history";

interface RequestTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function ReviewTabs({
  activeTab,
  onTabChange,
}: RequestTabsProps) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "new", label: "리뷰 쓰기" },
    { id: "history", label: "작성한 리뷰" },
  ];

  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabWrapper>
  );
}
