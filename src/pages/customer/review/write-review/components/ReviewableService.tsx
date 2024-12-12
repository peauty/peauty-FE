import { Text } from "../../../../../components";
import {
  BackgroundImg,
  ReviewableServiceWrapper,
  ServiceBox,
  ServiceInfoWrapper,
  TotalPriceBox,
} from "../index.styles";

export default function ReviewableService() {
  const dummyService = {
    backgroundImg: "/svg/logo.svg", // 배경 이미지 URL
    date: "2024.11.09(토) 11:00am", // 날짜
    designerName: "수석실장 시언", // 미용사 이름
    type: "가위컷 + 곰돌이컷", // 진행한 미용
    totalPrice: "35,000", // 총 금액
  };

  return (
    <>
      <ReviewableServiceWrapper>
        <ServiceBox>
          <BackgroundImg src={dummyService.backgroundImg} alt="배경이미지" />
          <ServiceInfoWrapper>
            <Text typo="body400" color="blue100">
              {dummyService.date}
            </Text>
            <Text typo="subtitle200">{dummyService.designerName}</Text>
            <Text typo="body300">
              <Text typo="body300" color="gray100">
                진행한 미용{" "}
              </Text>
              {dummyService.type}
            </Text>
          </ServiceInfoWrapper>
        </ServiceBox>

        <TotalPriceBox>
          <Text typo="body100">총 금액</Text>
          <Text typo="subtitle300" color="blue100">
            {dummyService.totalPrice} 원
          </Text>
        </TotalPriceBox>
      </ReviewableServiceWrapper>
    </>
  );
}
