import { TabWrapper, TabItem } from "./index.styles";

type Tab = "received" | "sent" | "confirmed";

interface RequestTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function RequestTabs({ activeTab, onTabChange }: RequestTabsProps) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "received", label: "받은 요청" },
    { id: "sent", label: "보낸 견적" },
    { id: "confirmed", label: "확정 견적" },
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
