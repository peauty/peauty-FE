import { CSSProperties, ReactNode } from 'react';
import { Wrapper, Main } from './index.styles';
interface LayoutProps {
  style?: CSSProperties;
  children: ReactNode;
}

export function Layout({ style, children }: LayoutProps) {
  return (
    <Wrapper>
      <Main style={style}>
        {children}
      </Main>
    </Wrapper>
  );
}
