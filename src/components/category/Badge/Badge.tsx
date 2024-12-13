import { BadgeWrapper, IconWrapper } from "./Badge.styles";
import { Text } from "../../texts/Text";
import { colors } from "../../../style/color";
import { typography } from "../../../style/typography";
import { Auth, ScissorsIcon } from "../../../assets/svg";

type BadgeType = "general" | "scissors" | "normal";
type GeneralVariant = "blue" | "green" | "disease";
type ScissorsVariant = "gold" | "silver" | "bronze";

interface BadgeProps {
  type?: BadgeType;
  variant?: GeneralVariant | ScissorsVariant;
  text?: string;
  typo?: keyof typeof typography;
  color?: keyof typeof colors;
  backgroundColor?: keyof typeof colors;
  borderRadius?: string;
  padding?: string;
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
  type = "normal",
  variant = "blue",
  text,
  typo,
  color,
  backgroundColor,
  borderRadius = "3px",
  padding = "2px 7px",
}: BadgeProps) {
  const currentStyle =
    type === "normal"
      ? styles.general.blue
      : type === "general"
        ? styles.general[variant as GeneralVariant] || styles.general.blue
        : styles.scissors[variant as ScissorsVariant] || styles.scissors.gold;

  return (
    <BadgeWrapper
      backgroundColor={colors[backgroundColor || currentStyle.backgroundColor]}
      borderRadius={borderRadius}
      padding={padding}
    >
      {type != "normal" && (
        <IconWrapper>
          {type === "general" ? (
            <Auth height="10px" color={colors[currentStyle.color]} />
          ) : (
            <ScissorsIcon height={10} color={colors[currentStyle.color]} />
          )}
        </IconWrapper>
      )}
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
