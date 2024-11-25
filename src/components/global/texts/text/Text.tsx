import { HTMLAttributes, ReactNode } from 'react';
import { StyledText } from './Text.styles';  // StyledText import
import { typography } from '../../../../style/typography';  // typography import

// Typography 타입 정의
type Typo = keyof typeof typography;

// Props 인터페이스 정의
interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  typo: Typo;
  children: ReactNode;  // children prop을 ReactNode로 설정
}

// Text 컴포넌트
export function Text({ color, typo, children, ...props }: Props) {
  return (
    <StyledText color={color} typo={typo} {...props}>
      {children}
    </StyledText>
  );
}
