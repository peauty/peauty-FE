import { HTMLAttributes, ReactNode } from 'react';
import { StyledText } from './Text.styles';
import { typography } from '../../../../style/typography';

type Typo = keyof typeof typography;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  typo: Typo;
  children: ReactNode;
}

export function Text({ color, typo, children, ...props }: Props) {
  return (
    <StyledText color={color} typo={typo} {...props}>
      {children}
    </StyledText>
  );
}
