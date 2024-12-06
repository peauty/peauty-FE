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
import { Clean } from "../../../../assets/svg";

interface ShopBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const badges = [
  {
    icon: <Clean width={45} />, // 아이콘 크기 45
    name: "청결최고",
    description: "이거는 청결한 매장한테 주는 뱃지이에요",
  },
];

const ShopBadge = forwardRef<HTMLDivElement, ShopBadgeProps>((props, ref) => {
  const [selectedBadge, setSelectedBadge] = useState<typeof badges[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBadgeClick = (badge: typeof badges[0]) => {
    setSelectedBadge(badge);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BadgeContainer ref={ref} {...props}>
      <Text typo="subtitle300">전체 획득 현황</Text>
      <BadgeGrid>
        {badges.map((badge, index) => (
          <BadgeItem key={index} onClick={() => handleBadgeClick(badge)}>
            <BadgeIcon>{badge.icon}</BadgeIcon>
            <BadgeText typo="body300">{badge.name}</BadgeText>
          </BadgeItem>
        ))}
      </BadgeGrid>
      {isModalOpen && selectedBadge && (
        <BadgeModal badge={selectedBadge} onClose={closeModal} iconSize={60} />
      )}
    </BadgeContainer>
  );
});

export default ShopBadge;
