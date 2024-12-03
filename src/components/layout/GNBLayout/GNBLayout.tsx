import GNB from "../GNB/GNB";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./GNBLayout.styles";
import { GNBwrapper } from "./GNBLayout.styles";
interface LayoutProps {
  type?: "user" | "stylist";
}

export default function GNBLayout({ type }: LayoutProps) {
  return (
    <Wrapper>
      <GNBwrapper>
        <Outlet />
        <GNB type={type} />
      </GNBwrapper>
    </Wrapper>
  );
}
