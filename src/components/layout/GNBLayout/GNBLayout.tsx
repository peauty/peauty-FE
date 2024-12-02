import { CSSProperties, ReactNode } from "react";
import { Main, Wrapper } from "../Layout/Layout.styles";
import GNB from "../GNB/GNB";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  style?: CSSProperties;
  type?: "user" | "stylist";
}

export default function GNBLayout({ style, type }: LayoutProps) {
  return (
    <Wrapper>
      <Main style={style}>
        <Outlet/>
      </Main>
      <GNB type={type}/>
    </Wrapper>
  );
}
