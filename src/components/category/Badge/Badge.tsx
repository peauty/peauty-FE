import { BadgeWrapper, IconWrapper } from "./Badge.styles";
import { Text } from "../../texts/Text";
import { colors } from "../../../style/color";
import { typography } from "../../../style/typography";
import { Auth, ScissorsIcon } from "../../../assets/svg";

type BadgeType = "general" | "scissors" | "normal";
type GeneralVariant = "blue" | "green" | "disease";
type ScissorsVariant = "gold" | "silver" | "bronze";

interface BadgeProps {
  type?: BadgeType | string; // API로부터 대문자로 들어오는 값도 처리 가능
  variant?: GeneralVariant | ScissorsVariant | string;
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
  // 대문자로 들어오는 API 데이터를 소문자로 변환
  const normalizedType = type.toLowerCase() as BadgeType;
  const normalizedVariant = variant.toLowerCase() as
    | GeneralVariant
    | ScissorsVariant;

  const currentStyle =
    normalizedType === "normal"
      ? styles.general.blue
      : normalizedType === "general"
        ? styles.general[normalizedVariant as GeneralVariant] ||
          styles.general.blue
        : styles.scissors[normalizedVariant as ScissorsVariant] ||
          styles.scissors.gold;

  return (
    <BadgeWrapper
      backgroundColor={colors[backgroundColor || currentStyle.backgroundColor]}
      borderRadius={borderRadius}
      padding={padding}
    >
      {normalizedType !== "normal" && (
        <IconWrapper>
          {normalizedType === "general" ? (
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
