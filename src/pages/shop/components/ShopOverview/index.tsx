import { Divider, Text } from "../../../../components";
import { Shop } from "../../../../assets/svg";
import { Badge } from "../../../../components/category/Badge";
import ShopEvent from "./ShopEvent";
import { Maker } from "../../../../assets/svg";
export default function ShopOverview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "0 20px",
      }}
    >
      <div>
        <Text typo="subtitle100">호키포키</Text>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Maker height={14} />
          <Text typo="body100" color="gray100">
            성남시 위례구
          </Text>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          whiteSpace: "pre-line", // 줄바꿈 처리
        }}
      >
        {/* 아이콘과 첫 번째 줄 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Shop height={10} style={{ marginRight: "5px" }} />
          <Text typo="body300" color="gray100">
            말티즈 및 푸들 모발케어 전문
          </Text>
        </div>

        {/* 두 번째 줄 */}
        <Text typo="body400" color="gray100">
          안녕하세요. 말티즈 및 푸들 모발 케어 전문 호키포키입니다.{"\n"}
          보호자의 반려견을 정성을 다해서 케어해드립니다.
        </Text>
        <div style={{ display: "flex", gap: "5px", margin: "10px 0px" }}>
          <Badge type="general" text="사업자 등록 인증" variant="green" />
          <Badge type="general" text="말티즈 전문가" />
        </div>
        <ShopEvent />
      </div>

      <Divider thickness={3} />
    </div>
  );
}
