// Tag.styles.ts
import styled from "styled-components";
import { typography } from "../../../style/typography";
import { colors } from "../../../style/color";

interface TagStyleProps {
  backgroundColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
}

export const TagWrapper = styled.div<TagStyleProps>`
  padding: 3px 10px;
  ${typography.body300};
  border-radius: 5px;
  text-align: center;

  /* 색상 관련 스타일링 */
  background-color: ${({ backgroundColor }) => backgroundColor ? colors[backgroundColor] : colors.blue300};
  border: 1px solid ${({ borderColor }) => borderColor ? colors[borderColor] : null};
`;
