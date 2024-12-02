import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { colors } from "../../../../style/color";
export default function PopularStore() {
  return (
    <div>
      <Text typo="subtitle200">
        우리동네 <span style={{ color: `${colors.red100}` }}>HOT</span>한 매장
      </Text>
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
          margin: "25px 0 ",
        }}
      >
        <div
          style={{
            backgroundColor: `${colors.gray400}`,
            borderRadius: "50%",
            width: "90px",
            height: "90px",
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text typo="subtitle300">몽뜨의 아뜰리네</Text>
          <Text typo="body300" color="gray200">
            몽뜨의 아뜰리네
          </Text>
          <div style={{ display: "flex", gap: "5px", marginTop: "3px" }}>
            <Badge type="general" text="말티즈 전문가" />
            <Badge type="general" text="반려견 구조 자격증" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
          margin: "25px 0 ",
        }}
      >
        <div
          style={{
            backgroundColor: `${colors.gray400}`,
            borderRadius: "50%",
            width: "90px",
            height: "90px",
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text typo="subtitle300">몽뜨의 아뜰리네</Text>
          <Text typo="body300" color="gray200">
            몽뜨의 아뜰리네
          </Text>
          <div style={{ display: "flex", gap: "5px", marginTop: "3px" }}>
            <Badge type="general" text="말티즈 전문가" />
            <Badge type="general" text="반려견 구조 자격증" />
          </div>
        </div>
      </div>
    </div>
  );
}
