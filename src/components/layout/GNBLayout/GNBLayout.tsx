import GNB from "../GNB/GNB";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  type?: "customer" | "designer";
}

export default function GNBLayout({ type }: LayoutProps) {
  return (
    <>
      <Outlet />
      <GNB type={type} />
    </>
  );
}
