import { useState } from "react";
import { AppBar, Divider, GNB, Text } from "../../../../components";
import SvgFirework from "../../../../assets/svg/Firework";
import SvgMedal from "../../../../assets/svg/Medal";
import { Badges } from "./components/Badges/Badges";
import { PageWrapper, BannerWrapper, InfoWrapper, FlexRowWrapper, TextWrapper, BadgeGridWrapper } from "./index.styles";

export default function DesignerMyBadgesPage() {
  const badgesData = [
    { id: 1, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "청결 최고" },
    { id: 2, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "말티즈 전문가" },
    { id: 3, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "푸들 전문가" },
    { id: 4, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "골드 시저" },
    { id: 5, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "실버 시저" },
    { id: 6, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "사업자 인증" },
    { id: 7, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "말티푸 전문가" },
    { id: 8, src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785", title: "최고 최고" },
  ];

  const [selectedBadges, setSelectedBadges] = useState<Array<any>>([]);
  
  const handleBadgeClick = (badge: any) => {
    if (selectedBadges.length < 3) {
      setSelectedBadges((prev) => [...prev, badge]);
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="뱃지 내역" />
      <PageWrapper>
        <BannerWrapper>
          <TextWrapper>
            <Text typo="subtitle200" color="gray200">축하해요</Text>
            <Text typo="subtitle200" color="black">새로운 배지가 생겼어요!</Text>
          </TextWrapper>
          <SvgFirework width={40} />
        </BannerWrapper>

        <InfoWrapper>
          <Text typo="subtitle200" color="black">활동 배지</Text>
          <FlexRowWrapper>
            <Text typo="subtitle200" color="gray200">신뢰성을 위해 배지를 모아보세요</Text>
            <SvgMedal width={20} />
          </FlexRowWrapper>
        </InfoWrapper>

        <Text typo="subtitle200" color="black">나의 대표 배지</Text>
<BadgeGridWrapper>
  {selectedBadges.map((badge, index) => (
    <Badges key={index} src={badge.src} title={badge.title} />
  ))}
</BadgeGridWrapper>


        <Divider />

        <Text typo="subtitle200" color="black">모든 배지</Text>
        <BadgeGridWrapper>
          {badgesData.map((badge) => (
            <Badges key={badge.id} src={badge.src} title={badge.title} onClick={() => handleBadgeClick(badge)} />
          ))}
        </BadgeGridWrapper>
      </PageWrapper>
      <GNB type={"designer"} />
    </>
  );
}
