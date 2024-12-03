import { Text } from "../../../../components";
import { colors } from "../../../../style/color";
import { RedSpeaker } from "../../../../assets/svg";
export default function ShopEvent() {
  return (
    <div
      style={{
        backgroundColor: `${colors.blue300}`,
        padding: "20px",
        borderRadius: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        whiteSpace: "pre-line",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "px", alignItems: "center" }}>
        <RedSpeaker height={14} />
        <Text typo="subtitle300">5주년 이벤트</Text>
      </div>
      <div style={{ lineHeight: "1.2" }}>
        <Text typo="body300" color="gray100">
          저희 호키포키에서 5주년 이벤트로 예약자에 한에서 반려견 피부 보습
          케어를 무료 제공합니다.
        </Text>
      </div>
    </div>
  );
}
