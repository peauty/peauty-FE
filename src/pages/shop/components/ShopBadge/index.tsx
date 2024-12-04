import React, { forwardRef } from "react";
import styled from "styled-components";
import { Text } from "../../../../components";

const BadgeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BadgeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const BadgeIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #666;
`;

const BadgeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ShopBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const ShopBadge = forwardRef<HTMLDivElement, ShopBadgeProps>((props, ref) => {
  const badges = [
    {
      id: 1,
      name: "친절 인증",
      description: "고객에게 친절한 서비스를 제공합니다.",
    },
    {
      id: 2,
      name: "청결 인증",
      description: "청결한 환경에서 미용을 진행합니다.",
    },
    {
      id: 3,
      name: "전문 기술",
      description: "최고 수준의 기술력을 보유하고 있습니다.",
    },
  ];

  return (
    <BadgeContainer ref={ref} {...props}>
      {badges.map((badge) => (
        <BadgeItem key={badge.id}>
          <BadgeIcon>{badge.name.slice(0, 1)}</BadgeIcon>
          <BadgeInfo>
            <Text typo="subtitle300">{badge.name}</Text>
            <Text typo="body300" color="gray200">
              {badge.description}
            </Text>
          </BadgeInfo>
        </BadgeItem>
      ))}
    </BadgeContainer>
  );
});

export default ShopBadge;
