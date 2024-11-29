import React from "react";
import { BadgeWrapper, IconWrapper } from "./Badge.styles";
import { Text } from "../../texts/Text";
import { colors } from "../../../../style/color";
import { typography } from "../../../../style/typography";

type BadgeType = "general" | "scissors";
type GeneralVariant = "blue" | "green" | "disease";
type ScissorsVariant = "gold" | "silver" | "bronze";

interface BadgeProps {
  type: BadgeType;
  variant?: GeneralVariant | ScissorsVariant;
  text?: string;
  typo?: keyof typeof typography;
  color?: keyof typeof colors;
  backgroundColor?: keyof typeof colors;
  borderRadius?: string;
  padding?: string;
  icon?: React.ReactNode;
}

const styles = {
  general: {
    blue: { backgroundColor: "blue300", color: "blue100", typo: "body600" },
    green: { backgroundColor: "green200", color: "green100", typo: "body600" },
    disease: { backgroundColor: "blue300", color: "blue100", typo: "body300" },
  },
  scissors: {
    gold: { backgroundColor: "gold300", color: "gold100", typo: "body600" },
    silver: {
      backgroundColor: "silver300",
      color: "silver100",
      typo: "body600",
    },
    bronze: {
      backgroundColor: "bronze300",
      color: "bronze100",
      typo: "body600",
    },
  },
} as const;

export default function Badge({
  type,
  variant,
  text,
  typo,
  color,
  backgroundColor,
  borderRadius = "3px",
  padding = "2px 7px",
  icon,
}: BadgeProps) {
  const currentStyle =
    type === "general"
      ? styles.general[variant as GeneralVariant] || styles.general.blue
      : styles.scissors[variant as ScissorsVariant] || styles.scissors.gold;

  return (
    <BadgeWrapper
      backgroundColor={colors[backgroundColor || currentStyle.backgroundColor]}
      borderRadius={borderRadius}
      padding={padding}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text && (
        <Text
          typo={typo || currentStyle.typo}
          color={color || currentStyle.color}
        >
          {text}
        </Text>
      )}
    </BadgeWrapper>
  );
}
