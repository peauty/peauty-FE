import { Text } from "../../../../components";
import { colors } from "../../../../style/color";
export default function AD() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Text typo="subtitle200">에디</Text>
      <div
        style={{
          width: "`100%",
          borderRadius: "10px",
          backgroundColor: `${colors.gray400}`,
          padding: "20PX",
          height: "120px",
        }}
      >
        에디입니다.
      </div>
    </div>
  );
}
