import React from "react";
import { BadgeWrapper, IconWrapper } from "./Badge.styles";
import { Text } from "../../texts/Text";
import { colors } from "../../../../style/color";
import { typography } from "../../../../style/typography";
interface BadgeProps {
  text?: string;
  typo?: keyof typeof typography;
  color?: keyof typeof colors; // Text 컴포넌트의 color 타입
  backgroundColor?: keyof typeof colors; // colors 객체에서 참조
  borderRadius?: string;
  padding?: string;
  icon?: React.ReactNode;
}

export default function Badge({
  text,
  typo = "body600",
  color = "blue100",
  backgroundColor = "blue300",
  borderRadius = "3px",
  padding = "2px 7px",
  icon,
}: BadgeProps) {
  return (
    <BadgeWrapper
      backgroundColor={colors[backgroundColor]}
      borderRadius={borderRadius}
      padding={padding}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text && (
        <Text typo={typo} color={color}>
          {text}
        </Text>
      )}
    </BadgeWrapper>
  );
}
