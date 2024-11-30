import styled from "styled-components"; // css와 styled-components import
import { typography } from "../../../style/typography"; // typography import
import { colors } from "../../../style/color";

// StyledText 컴포넌트에서 사용할 Props 타입 정의
interface StyledTextProps {
  color?: keyof typeof colors;
  typo: keyof typeof typography;
}

// 스타일 정의
export const StyledText = styled.span<StyledTextProps>`
  align-content: center;
  color: ${({ color }) =>
    color ? colors[color] : colors.gray100}; // 기본값은 black
  ${({ typo }) => typography[typo]}// typography 스타일 적용
`;
