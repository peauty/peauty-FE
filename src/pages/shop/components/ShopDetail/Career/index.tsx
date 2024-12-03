import styled from "styled-components";
import { Text } from "../../../../../components";
import { CareerIcon } from "../../../../../assets/svg";
export default function Career() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Text typo="subtitle300">경력</Text>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <CareerIcon height={14} style={{ marginRight: "5px" }} />
        <Text typo="body400" color="blue100">
          총 경력 5년
        </Text>
      </div>
    </div>
  );
}
