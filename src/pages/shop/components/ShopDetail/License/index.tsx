import { Text } from "../../../../../components";
import styled from "styled-components";
import { colors } from "../../../../../style/color";
import { ContentsWrapper } from "../../index.styles";
export default function License() {
  return (
    <ContentsWrapper>
      <Text typo="subtitle300">자격증 및 기타 서류</Text>
      <div style={{ display: "flex", marginTop: "15px", gap: "5px" }}>
        <div
          style={{
            backgroundColor: `${colors.gray400}`,
            width: "85px",
            height: "80px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `${colors.gray400}`,
            width: "85px",
            height: "80px",
          }}
        ></div>
      </div>
    </ContentsWrapper>
  );
}
