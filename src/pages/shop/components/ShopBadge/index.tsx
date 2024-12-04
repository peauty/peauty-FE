import React, { forwardRef, useState } from "react";
import {
  BadgeContainer,
  BadgeItem,
  BadgeText,
  BadgeGrid,
  BadgeIcon,
} from "./index.styles";
import { Text } from "../../../../components";

interface ShopBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const badge = [];

const ShopBadge = forwardRef<HTMLDivElement, ShopBadgeProps>((props, ref) => {
  const badges = Array(7).fill({ name: "청결 최고" }); // 16개의 더미 배지 데이터 생성

  return (
    <BadgeContainer ref={ref} {...props}>
      <Text typo="subtitle300">전체 획득 현황</Text>
      <BadgeGrid>
        {badges.map((badge, index) => (
          <BadgeItem key={index}>
            <BadgeIcon></BadgeIcon>
            <BadgeText typo="body300">{badge.name}</BadgeText>
          </BadgeItem>
        ))}
      </BadgeGrid>
    </BadgeContainer>
  );
});

export default ShopBadge;
