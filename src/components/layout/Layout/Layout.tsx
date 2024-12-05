import { CSSProperties, ReactNode } from "react";
import { Wrapper, Main } from "./Layout.styles";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  style?: CSSProperties;
}

export default function Layout({ style }: LayoutProps) {
  return (
    <Wrapper>
      <Main style={style}>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
