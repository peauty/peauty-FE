import { Maker } from "../../../assets/svg";
import StylistItem from "../../../components/stylist-Item/StylistItem";
import { colors } from "../../../style/color";
import { Text } from "../../../components";
export default function EstimateStauts() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <span style={{ marginRight: "10px" }}>
          <Maker width={19} height={22} />
        </span>
        <span>강남구 대치동</span>
      </div>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
          border: `1px solid ${colors.gray200}`,
        }}
      >
        <Text typo="subtitle200" color="black">
          오늘의 견적을 확인해보세요
        </Text>
        <div>
          <StylistItem
            badges={[
              {
                text: "청결 우수상",
                type: "general",
                variant: "green",
              },
              {
                text: "2023 골드 가위",
                type: "scissors",
                variant: "gold",
              },
            ]}
            career={5}
            imageUrl="https://via.placeholder.com/65"
            location="몽끄의 아틀리에 위례점"
            name="수석실장 시언"
            star={3}
            starCount={12}
          />
        </div>
      </div>
    </div>
  );
}
