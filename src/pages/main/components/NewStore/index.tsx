import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { colors } from "../../../../style/color";
export default function NewStore() {
  return (
    <div>
      <Text typo="subtitle300">새로 오픈한 신규 매장</Text>
      <div style={{ display: "flex", gap: "5px", marginTop: "25px" }}>
        <div style={{ flex: "1", width: "50%" }}>
          {" "}
          {/* 첫 번째 박스 */}
          <div
            style={{
              height: "100px",
              borderRadius: "10px",
              backgroundColor: `${colors.gray400}`,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "2px",
              flexDirection: "column",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Text typo="body200">몬도서울 위례신도시점</Text>
            <Text typo="body600" color="gray100">
              남위례역 3번 출구 대진건물 3층
            </Text>
            <div style={{ display: "flex", gap: "5px" }}>
              <Badge type="general" text="행동교정 전문" />
              <Badge type="general" text="행동교정 전문" />
            </div>
          </div>
        </div>
        <div style={{ flex: "1", width: "50%" }}>
          {" "}
          {/* 두 번째 박스 */}
          <div
            style={{
              height: "100px",
              borderRadius: "10px",
              backgroundColor: `${colors.gray400}`,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "2px",
              flexDirection: "column",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text typo="body200">몬도서울 위례신도시점</Text>
              <Text typo="body600" color="gray100">
                남위례역 3번 출구 대진건물 3층
              </Text>
              <div>
                <Badge type="general" text="행동교정 전문" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
