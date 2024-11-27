import { ReactNode } from "react";
import { WrapperStyle } from "./Wrapper.styles";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <WrapperStyle>{children}</WrapperStyle>; // "childern" -> "children"으로 수정
}
