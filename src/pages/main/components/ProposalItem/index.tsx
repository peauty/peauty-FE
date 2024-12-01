import { Maker } from "../../../../assets/svg";
import { Text } from "../../../../components";
import { colors } from "../../../../style/color";
import ProposalStautsNav from "../ProposalStatusNav";

export default function ProposalItem() {
  return (
    <div>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <span style={{ marginRight: "5px" }}>
          <Maker width={14} />
        </span>
        <Text typo="subtitle300" color="gray100">
          강남구 대치동
        </Text>
      </div>
      <div
        style={{
          padding: "20px 25px",
          borderRadius: "20px",
          backgroundColor: `${colors.gray400}`,
          //   border: `1px solid ${colors.gray200}`,
        }}
      >
        <Text typo="subtitle200" color="black">
          오늘의{" "}
          <Text typo="subtitle200" color="blue100">
            견적
          </Text>
          을 확인해보세요
        </Text>
        <ProposalStautsNav />
      </div>
    </div>
  );
}
