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
  star: string;
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
          width: "75px",
          // height: "70px",
          borderRadius: "10px",
          border: `1px solid ${colors.gray300}`,
        }}
      ></div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text typo="subtitle200" color="black">
            {name}
          </Text>
          <Text typo="body700" color="black">
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
          {badges?.map((badge, index) => (
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
