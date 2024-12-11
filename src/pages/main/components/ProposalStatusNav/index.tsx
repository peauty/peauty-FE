import { Text } from "../../../../components";
import { NavigationWrapper, Tab, ContentWrapper } from "./index.stlyes";
import { useState } from "react";
import StylistItem from "../../../../components/stylist-Item/StylistItem";

interface HomeProps {
  firstNav: string;
  secendNav: string;
}
export default function ProposalStautsNav({ firstNav, secendNav }: HomeProps) {
  const [activeTab, setActiveTab] = useState<"received" | "waiting">("waiting");
  return (
    <div>
      <NavigationWrapper>
        <Tab
          isActive={activeTab == "waiting"}
          onClick={() => setActiveTab("waiting")}
        >
          <Text
            typo="body300"
            color={activeTab === "waiting" ? "black" : "gray100"}
          >
            {firstNav}
          </Text>
        </Tab>
        <Tab
          isActive={activeTab == "received"}
          onClick={() => setActiveTab("received")}
        >
          <Text
            typo="body300"
            color={activeTab === "received" ? "black" : "gray100"}
          >
            {secendNav}
          </Text>
        </Tab>
      </NavigationWrapper>
      <ContentWrapper>
        {activeTab === "waiting" ? (
          <div>
            <StylistItem
              badges={[
                {
                  text: "청결 우수상",
                  type: "general",
                  variant: "green",
                },
                {
                  text: "2023 골드 가위",
                  type: "scissors",
                  variant: "gold",
                },
              ]}
              career={5}
              imageUrl="https://via.placeholder.com/65"
              location="몽끄의 아틀리에 위례점"
              name="수석실장 시언"
              star={"3.0"}
              starCount={12}
            />
          </div>
        ) : (
          <div>
            <StylistItem
              badges={[
                {
                  text: "말티즈 전문가",
                  type: "general",
                  variant: "blue",
                },
                {
                  text: "2023 실버 가위",
                  type: "scissors",
                  variant: "silver",
                },
              ]}
              career={5}
              imageUrl="https://via.placeholder.com/65"
              location="디지털로 31길"
              name="까끌래 뽀끌래"
              star={"4.0"}
              starCount={2453}
            />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}
