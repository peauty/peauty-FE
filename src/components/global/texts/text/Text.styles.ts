import styled, { css } from 'styled-components';  // css를 import
import { typography } from "../../../../style/typography";  // typography import

// Props로 받을 컬러와 typo 타입 정의
interface StyledTextProps {
  color?: string;
  typo: keyof typeof typography;
}

// 스타일 정의
export const StyledText = styled.span<StyledTextProps>`
  ${({ typo }) => css`
    ${typography[typo]}  // typography에서 해당 typo 스타일 적용
  `}
  color: ${({ color }) => color || 'inherit'};  // color가 있으면 그 값, 없으면 'inherit'
`;
