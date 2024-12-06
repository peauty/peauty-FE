import { AppBar, GNB, Text } from "../../components";
import { colors } from "../../style/color";
import { Maker, Warning } from "../../assets/svg";
import StylistItem from "../../components/stylist-Item/StylistItem";
import BottomSheet from "../../components/bottom-sheet/BottomSheet";

export default function Request() {
  return (
    <div>
      <AppBar prefix="backButton" title="요청하기" />
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: `${colors.gray400}`,
            borderRadius: "10px",
            height: "100px",
          }}
        >
          에디
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flex: "1",
            }}
          >
            <Maker height={15} />
            <Text typo="body100">강남구 대치동</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <Text typo="body600" color="gray100">
              퓨티와 함께하는 검증된 미용사
            </Text>
            <Warning height={12} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <BottomSheet options={["최신순", "평점 높은순"]} />
        </div>
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
            star={3.0}
            starCount={12}
          />
        </div>
      </div>
      <GNB type="customer" />
    </div>
  );
}
