import { ItemWrapper } from "./StylistItem.styles";
import { Text } from "../texts/Text";
import { colors } from "../../../style/color";
import { Star } from "../../../assets/svg";
import { Tag } from "../category/Tag";
import Badge from "../category/Badge/Badge";
import { Home } from "../../../assets/svg";
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
          <Text typo="body500" color="gray200">
            <div style={{ display: "flex", gap: "5px" }}>
              <span>5.0(12)</span>
              <span>|</span>
              <span>경력 5년</span>
            </div>
          </Text>
          <Tag>커스텀 태그</Tag>
          <Badge
            icon={<Home fill={`${colors.green100}`} height={10} />}
            text="골든 시저"
            typo="body600"
            color="green100"
            backgroundColor="green200"
            borderRadius="3px"
          />
        </div>
      </div>
    </ItemWrapper>
  );
}
