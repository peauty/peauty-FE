import { CSSProperties, ReactNode } from 'react';
import { Wrapper, Main } from './Layout.styles';
interface LayoutProps {
  style?: CSSProperties;
  children: ReactNode;
}

export default function Layout({ style, children }: LayoutProps) {
  return (
    <Wrapper>
      <Main style={style}>
        {children}
      </Main>
    </Wrapper>
  );
}
