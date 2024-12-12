import { Text } from "../../../../components";
import { NavigationWrapper, Tab, ContentWrapper } from "./index.styles";
import { useState } from "react";
import StylistItem from "components/stylist-item/StylistItem";
import PetlistItem from "../../../../components/petlist-item/PetlistItem";

interface HomeProps {
  title: string;
  firstNav: string;
  secendNav: string;
}

export default function ProposalStautsNav({
  title,
  firstNav,
  secendNav,
}: HomeProps) {
  const [activeTab, setActiveTab] = useState<"received" | "waiting">("waiting");

  return (
    <div>
      <NavigationWrapper>
        <Tab
          isActive={activeTab === "waiting"}
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
          isActive={activeTab === "received"}
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
            {title === "견적" ? (
              <StylistItem
                name="몽끄의 아틀리에 위례점"
                imageUrl="https://via.placeholder.com/65"
                location="몽끄의 아틀리에 위례점"
                star={"3.0"}
                starCount={12}
                career={5}
                badges={[
                  { text: "청결 우수상", type: "general", variant: "green" },
                  { text: "2023 골드 가위", type: "scissors", variant: "gold" },
                ]}
                showButton="내 요청보기"
              />
            ) : (
              <PetlistItem
                name="꼬미"
                imageUrl="https://via.placeholder.com/65"
                birth="2020.03.01"
                weight={3.45}
                gender="여자"
                breed="말티즈"
                diseases={["피부병", "슬개구"]}
                showButton="요청서 보기"
              />
            )}
          </div>
        ) : (
          // activeTab이 "received"일 때 보여줄 내용
          <div>
            {title === "견적" ? (
              <StylistItem
                badges={[
                  { text: "말티즈 전문가", type: "general", variant: "blue" },
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
                showButton="견적서 보기"
              />
            ) : (
              // title이 "요청"일 때 보여줄 내용
              <PetlistItem
                imageUrl="https://via.placeholder.com/65"
                name="치치"
                birth="2016.12.27"
                weight={3.45}
                gender="남자"
                breed="세상에 하나뿐인 견종"
                diseases={["외이염", "슬개구"]}
                showButton="견적서 보기"
              />
            )}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}
