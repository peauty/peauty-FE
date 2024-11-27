import { ReactNode } from "react";
import { Logo } from "../../../../assets/svg";
import { StyledHeader } from "./AppBar.styles";
import { Text } from "../../texts/Text";
interface Props {
  prefix?: ReactNode;
  title?: string;
}

export default function AppBar({ prefix, title }: Props) {
  return (
    <StyledHeader>
      {prefix ? prefix : <Logo width="47px" height="34px" />}
      {title && <Text typo="subtitle400">{title}</Text>}
    </StyledHeader>
  );
}
