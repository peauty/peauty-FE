import styled, { css } from 'styled-components';  // css와 styled-components import
import { typography } from "../../../../style/typography";  // typography import

// StyledText 컴포넌트에서 사용할 Props 타입 정의
interface StyledTextProps {
  color?: string;
  typo: keyof typeof typography;
}

// 스타일 정의
export const StyledText = styled.span<StyledTextProps>`
  ${({ typo }) => css`
    ${typography[typo]}  // typography에서 typo에 해당하는 스타일 적용
  `}
  color: ${({ color }) => color || 'inherit'};  // color가 있으면 그 값, 없으면 'inherit'로 설정
`;
