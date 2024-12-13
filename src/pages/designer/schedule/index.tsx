import React from "react";
import {
  PageWrapper,
  IconWithText,
  TextWrapper,
  ManageContentItem,
  GrayBox,
  SectionHeader,
} from "./index.styles";
import { AppBar, GNB, Text } from "../../../components";
import Rating from "../../../components/rating";
import { colors } from "../../../style/color";
import Dashboard from "./components/Dashboard";
import CustomerInfo from "../../customer/status/components/CustomerInfo";
import { Badge } from "../../../components/category/Badge";

const statusItemData = {
  store: "몽뜨의 아틀리네 위례점",
  location: "서울특별시 강남구 대치동",
  reservation: "예약완료",
  score: 4.5,
  review: 120,
  payment: 35000,
  date: 20211112,
  badges: [
    { name: "친절함", color: "blue" },
    { name: "전문성", color: "green" },
  ],
  thumbnailUrl:
    "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
  onClick: () => console.log("클릭 이벤트 발생"),
};

export default function Schedule() {
  return (
    <div>
      <AppBar prefix="backButton" title="스케줄" />
      <PageWrapper>
        <ManageContentItem>
          <div style={{ display: "flex", gap: "20px" }}>
            <GrayBox />
            <TextWrapper>
              <Text typo="subtitle300">댕댕뷰티살롱</Text>
              <Text
                typo="body400"
                color="gray100"
                onClick={() => console.log("히히못가")}
              >
                마이샵 관리 이동 {">"}
              </Text>
              <IconWithText>
                <Rating score={4.5} starSize="12" />
                <Text typo="body400">(100+)</Text>
              </IconWithText>
              <div style={{ display: "flex", gap: "5px" }}>
                {statusItemData.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    type="general"
                    variant={badge.color as "blue"}
                    text={badge.name}
                    typo="body300"
                  />
                ))}
              </div>
            </TextWrapper>
          </div>
          <Dashboard />
        </ManageContentItem>

        <SectionHeader>
          <Text typo="subtitle300">
            오늘의{" "}
            <Text typo="subtitle300" color="blue100">
              예약
            </Text>{" "}
            2개
          </Text>
        </SectionHeader>

        <CustomerInfo
          date={statusItemData.date}
          location={statusItemData.location}
          store={statusItemData.store}
          score={statusItemData.score}
          review={statusItemData.review}
          reservation={statusItemData.reservation}
          thumbnailUrl={statusItemData.thumbnailUrl}
          onClick={statusItemData.onClick}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              width: "100%",
              onClick: () => console.log("견적서 보기 클릭"),
            },
          ]}
          status="가윗컷 + 곰돌이컷"
          payment={statusItemData.payment}
        />
        <CustomerInfo
          date={statusItemData.date}
          location={statusItemData.location}
          store={statusItemData.store}
          score={statusItemData.score}
          review={statusItemData.review}
          reservation={statusItemData.reservation}
          thumbnailUrl={statusItemData.thumbnailUrl}
          onClick={statusItemData.onClick}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              width: "100%",
              onClick: () => console.log("견적서 보기 클릭"),
            },
          ]}
          status="가윗컷 + 곰돌이컷"
          payment={statusItemData.payment}
        />

        <SectionHeader>
          <Text typo="subtitle300">
            다가오는{" "}
            <Text typo="subtitle300" color="blue100">
              예약
            </Text>{" "}
            14개
          </Text>
        </SectionHeader>
        <CustomerInfo
          date={statusItemData.date}
          location={statusItemData.location}
          store={statusItemData.store}
          score={statusItemData.score}
          review={statusItemData.review}
          reservation={statusItemData.reservation}
          thumbnailUrl={statusItemData.thumbnailUrl}
          onClick={statusItemData.onClick}
          buttons={[
            {
              title: "견적서 보기",
              bgColor: colors.blue300,
              color: colors.blue100,
              width: "100%",
              onClick: () => console.log("견적서 보기 클릭"),
            },
          ]}
          status="가윗컷 + 곰돌이컷"
          payment={statusItemData.payment}
        />
      </PageWrapper>
      <GNB type="designer" />
    </div>
  );
}
