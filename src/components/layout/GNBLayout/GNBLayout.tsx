import GNB from "../GNB/GNB";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  type?: "user" | "stylist";
}

export default function GNBLayout({ type }: LayoutProps) {
  return (
    <>
      <Outlet/>
      <GNB type={type}/>
    </>
  );
}
