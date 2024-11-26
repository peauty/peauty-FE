import { HTMLAttributes, ReactNode } from "react";
import { StyledText } from "./Text.styles"; // StyledText import
import { typography } from "../../../../style/typography"; // typography import
import { colors } from "../../../../style/color";

// Typography 타입 정의
type Typo = keyof typeof typography;
type Color = keyof typeof colors;

// Props 인터페이스 정의
interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: Color;
  typo: Typo;
  children: ReactNode; // children prop을 ReactNode로 설정
}

// Text 컴포넌트
export default function Text({ color, typo, children, ...props }: Props) {
  return (
    <StyledText color={color} typo={typo} {...props}>
      {children}
    </StyledText>
  );
}
