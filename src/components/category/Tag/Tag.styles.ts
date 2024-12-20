// Tag.styles.ts
import styled from "styled-components";
import { typography } from "../../../style/typography";
import { colors } from "../../../style/color";

export const TagWrapper = styled.div`
  padding: 1px 7px;
  ${typography.body300};
  border-radius: 4px;
  text-align: center;

  /* 색상 관련 스타일링 */
  background-color: ${colors.blue300};
`;
