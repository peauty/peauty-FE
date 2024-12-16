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

interface ShopBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  badges: {
    badgeId: number;
    badgeName: string;
    badgeContent: string;
    badgeColor: string;
    badgeType: string;
    badgeImageUrl: string;
  }[]; // 전달받는 badge 데이터 타입
}
export const ShopBadge = forwardRef<HTMLDivElement, ShopBadgeProps>(
  ({ badges = [], ...props }, ref) => {
    const [selectedBadge, setSelectedBadge] = useState<
      ShopBadgeProps["badges"][0] | null
    >(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBadgeClick = (badge: ShopBadgeProps["badges"][0]) => {
      setSelectedBadge(badge);
      setIsModalOpen(true);
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
              onClick={() => handleBadgeClick(badge)}
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
