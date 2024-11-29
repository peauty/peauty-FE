import { ItemWrapper } from "./StylistItem.styles";
import { Text } from "../texts/Text";
import { colors } from "../../../style/color";
import { Star } from "../../../assets/svg";
import { Tag } from "../category/Tag";
import Badge from "../category/Badge/Badge";
import { ScissorsIcon, Auth } from "../../../assets/svg";
import { BadgeContainer } from "../category/Badge/Badge.styles";

export default function StylistItem() {
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
        <Text typo="subtitle200">수석실장 시언</Text>
        <div>
          <Text typo="body500" color="gray100">
            몽끄의 아틀리에 위례점
          </Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Star width={14} />{" "}
          <Text typo="body600" color="gray100">
            <div style={{ display: "flex", gap: "5px" }}>
              <span>5.0(12)</span>
              <span>|</span>
              <span>경력 5년</span>
            </div>
          </Text>
        </div>
        {/* BadgeContainer 적용 */}
        <BadgeContainer>
          <Badge
            type="general"
            variant="green"
            text="일반 초록색"
            icon={<Auth height="10px" color={`${colors.green100}`} />}
          />
          <Badge
            type="scissors"
            variant="gold"
            text="2023 골드 가위"
            icon={<ScissorsIcon height={10} />}
          />
          <Badge
            type="scissors"
            variant="silver"
            text="2023 골드 가위"
            icon={<ScissorsIcon height={10} color={`${colors.silver200}`} />}
          />
          <Badge type="general" variant="disease" text="외이염" />
        </BadgeContainer>
      </div>
    </ItemWrapper>
  );
}
