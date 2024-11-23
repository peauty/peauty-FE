// Tag.styles.ts
import styled from "styled-components";
import { colors } from "../../../style/color";
import { typography } from "../../../style/typography";

interface TagStyleProps {
  color?: {
    backgroundColor?: string;
    borderColor?: string;
    fontColor?: string;
  };
}

export const TagWrapper = styled.div<TagStyleProps>`
  color: ${({ color }) => color?.fontColor || colors.blue200}; /* 폰트 색상 */
  border: 1px solid ${({ color }) => color?.borderColor || colors.blue200}; /* border 색상 */
  border-radius: 5px;
  background-color: ${({ color }) =>
    color?.backgroundColor || colors.blue100}; /* 배경 색상 */
  font-size: ${typography.body6};
  padding: 3px 10px;
  font-weight: 500;
`;