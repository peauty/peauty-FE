// Tag.styles.ts
import styled from "styled-components";
import { typography } from "../../../style/typography";
import { colors } from "../../../style/color";

interface TagStyleProps {
  color?: {
    backgroundColor?: keyof typeof colors;
    borderColor?: keyof typeof colors;
    fontColor?: keyof typeof colors;
  };
}

export const TagWrapper = styled.div<TagStyleProps>`
  padding: 3px 10px;
  ${typography.body300};
  border-radius: 5px;
  text-align: center;

  /* 색상 관련 스타일링 */
  background-color: ${({ color }) => color?.backgroundColor ? colors[color.backgroundColor] : colors.blue300};
  border: 1px solid ${({ color }) => color?.borderColor ? colors[color.borderColor] : colors.gray300};
`;