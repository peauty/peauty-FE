import { TabWrapper, TabItem } from "./index.styles";

type Tab = "received" | "sent" | "confirmed";

interface StatusTabProps {
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
}

export default function StatusTab({ activeTab, onTabClick }: StatusTabProps) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "received", label: "견적 요청" },
    { id: "sent", label: "받은 견적" },
    { id: "confirmed", label: "확정 견적" },
  ];

  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabWrapper>
  );
}
