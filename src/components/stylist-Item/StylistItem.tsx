import { ItemWrapper } from "./StylistItem.styles";
import { Text } from "../texts/Text";
import { colors } from "../../style/color";
import { Star } from "../../assets/svg";
import Badge from "../category/Badge/Badge";
import { BadgeContainer } from "../category/Badge/Badge.styles";
import { typography } from "../../style/typography";

type GeneralVariant = "blue" | "green" | "disease";
type ScissorsVariant = "gold" | "silver" | "bronze";

interface StyledBadgeProps {
  type: "general" | "scissors" | "normal";
  variant: GeneralVariant | ScissorsVariant;
  text: string;
  typo?: keyof typeof typography;
}

interface StyledItemProps {
  name: string;
  imageUrl: string;
  location: string;
  star: number;
  starCount: number;
  career: number;
  badges?: StyledBadgeProps[];
}

export default function StylistItem({
  name,
  imageUrl,
  location,
  star,
  starCount,
  career,
  badges,
}: StyledItemProps) {
  return (
    <ItemWrapper>
      <div
        style={{
          width: "65px",
          height: "65px",
          borderRadius: "10px",
          border: `1px solid ${colors.gray200}`,
        }}
      ></div>
      <div>
        <Text typo="subtitle200">{name}</Text>
        <div>
          <Text typo="body500" color="gray100">
            {location}
          </Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Star width={14} />{" "}
          <Text typo="body600" color="gray100">
            <div style={{ display: "flex", gap: "5px" }}>
              <span>
                {star}({starCount})
              </span>
              <span>|</span>
              <span>경력 {career}년</span>
            </div>
          </Text>
        </div>
        <BadgeContainer>
          {badges.map((badge, index) => (
            <Badge
              key={index}
              type={badge.type}
              variant={badge.variant}
              text={badge.text}
              typo={badge.typo}
            />
          ))}
        </BadgeContainer>
      </div>
    </ItemWrapper>
  );
}
