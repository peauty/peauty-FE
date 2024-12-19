import { useState, useEffect } from "react";
import { AppBar, Divider, GNB, Text } from "../../../../components";
import SvgFirework from "../../../../assets/svg/Firework";
import SvgMedal from "../../../../assets/svg/Medal";
import {
  PageWrapper,
  BannerWrapper,
  InfoWrapper,
  FlexRowWrapper,
  TextWrapper,
  BadgeGridWrapper,
} from "./index.styles";
import {
  getDesignerBadges,
  updateRepresentativeBadge,
} from "../../../../apis/designer/resources/designer";
import { BadgeResponse } from "../../../../types/designer/designer";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import { ShopBadge } from "../../../shop/components/ShopBadge";
interface Badge {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeColor?: string;
  badgeType?: string;
  badgeImageUrl?: string;
}
export default function DesignerMyBadgesPage() {
  const [allBadges, setAllBadges] = useState<Badge[]>([]);
  const [representativeBadges, setRepresentativeBadges] = useState<Badge[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { userId } = useUserDetails();
  console.log(userId, "userId");

  useEffect(() => {
    // 초기 데이터 로드
    const fetchBadges = async () => {
      if (!userId) return;
      try {
        const data = await getDesignerBadges(userId);
        console.log("Fetched badges data:", data);
        setAllBadges(data.unacquiredBadges || []);
        setRepresentativeBadges(data.unacquiredBadges || []);
      } catch (error) {
        console.error("Error fetching badges:", error);
        setError("배지 데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchBadges();
  }, [userId]);

  const handleBadgeClick = async (badge: Badge) => {
    if (!userId) {
      console.error("User ID is null");
      return;
    }

    if (
      representativeBadges.length < 3 ||
      representativeBadges.some((b) => b.badgeId === badge.badgeId)
    ) {
      try {
        const updatedBadge = await updateRepresentativeBadge(
          userId,
          badge.badgeId!,
          {
            isRepresentativeBadge: !representativeBadges.some(
              (b) => b.badgeId === badge.badgeId,
            ),
          },
        );
        setRepresentativeBadges((prev) =>
          prev.some((b) => b.badgeId === badge.badgeId)
            ? prev.filter((b) => b.badgeId !== badge.badgeId)
            : [...prev, badge],
        );
        console.log("Badge updated:", updatedBadge);
      } catch (error) {
        console.error("Error updating representative badge:", error);
      }
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="뱃지 내역" />
      <PageWrapper>
        <BannerWrapper>
          <TextWrapper>
            <Text typo="subtitle200" color="gray200">
              축하해요
            </Text>
            <Text typo="subtitle200" color="black">
              새로운 배지가 생겼어요!
            </Text>
          </TextWrapper>
          <SvgFirework width={40} />
        </BannerWrapper>

        <InfoWrapper>
          <Text typo="subtitle200" color="black">
            활동 배지
          </Text>
          <FlexRowWrapper>
            <Text typo="subtitle200" color="gray200">
              신뢰성을 위해 배지를 모아보세요
            </Text>
            <SvgMedal width={20} />
          </FlexRowWrapper>
        </InfoWrapper>

        <Text typo="subtitle200" color="black">
          나의 대표 배지
        </Text>
        <ShopBadge
          badges={representativeBadges}
          onBadgeClick={(badge) => handleBadgeClick(badge)}
          style={{ padding: "0" }}
        />

        <Divider />

        <Text typo="subtitle200" color="black">
          모든 배지
        </Text>
        <ShopBadge
          badges={allBadges}
          onBadgeClick={(badge) => handleBadgeClick(badge)}
        />
      </PageWrapper>
      <GNB type={"designer"} />
    </>
  );
}
