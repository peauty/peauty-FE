import React, { forwardRef, useState } from "react";
import {
  BadgeContainer,
  BadgeItem,
  BadgeText,
  BadgeGrid,
  BadgeIcon,
} from "./index.styles";
import { Text } from "../../../../components";
import BadgeModal from "./badge-modal";

interface Badge {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeColor?: string;
  badgeType?: string;
  badgeImageUrl?: string;
}

interface ShopBadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  badges?: Badge[]; // 표시할 뱃지 데이터 배열
  onBadgeClick?: (badge: Badge) => void; // 뱃지를 클릭했을 때 실행될 콜백 함수
}

export const ShopBadge = forwardRef<HTMLDivElement, ShopBadgeProps>(
  ({ badges = [], onBadgeClick, ...props }, ref) => {
    const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null); // Badge 타입으로 변경
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBadgeClick = (badge: Badge) => {
      setSelectedBadge({
        badgeId: badge.badgeId ?? 0,
        badgeName: badge.badgeName ?? "이름 없음",
        badgeContent: badge.badgeContent ?? "내용 없음",
        badgeColor: badge.badgeColor ?? "BLUE",
        badgeType: badge.badgeType ?? "GENANAL",
        badgeImageUrl: badge.badgeImageUrl ?? "",
      });
      setIsModalOpen(true);

      // 부모 컴포넌트의 onClick 콜백 호출
      if (onBadgeClick) {
        onBadgeClick(badge);
      }
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <BadgeContainer ref={ref} {...props}>
        <Text typo="subtitle300">가게 뱃지</Text>
        <BadgeGrid>
          {badges?.map((badge) => (
            <BadgeItem
              key={badge.badgeId}
              onClick={() => handleBadgeClick(badge)} // badge 객체만 전달
            >
              <BadgeIcon>
                <img
                  src={badge.badgeImageUrl}
                  alt={badge.badgeName}
                  width="40"
                  height="40"
                />
              </BadgeIcon>
              <BadgeText typo="body300">{badge.badgeName}</BadgeText>
            </BadgeItem>
          ))}
        </BadgeGrid>
        {badges?.length === 0 && (
          <Text typo="body400" color="gray100">
            뱃지가 없습니다.
          </Text>
        )}
        {isModalOpen && selectedBadge && (
          <BadgeModal
            badge={selectedBadge}
            onClose={closeModal}
            iconSize={60}
          />
        )}
      </BadgeContainer>
    );
  },
);
