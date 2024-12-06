import { ReactNode } from "react";
import { Logo } from "../../../assets/svg";
import { StyledAppBarBack, StyledHeader, Title } from "./AppBar.styles";
import { Text } from "../../texts/Text";
interface Props {
  prefix?: "backButton" | "logo";
  title?: string; // 중앙 제목
  onclick?: () => void; // 뒤로가기 버튼 클릭 시 실행할 함수
}

export default function AppBar({ prefix, title, onclick }: Props) {
  return (
    <StyledHeader>
      {prefix ? (
        prefix === "backButton" ? (
          <div>
            <StyledAppBarBack onClick={onclick} height={20} />
          </div>
        ) : (
          <Logo width="94px" height="24px" onClick={onclick} />
        )
      ) : null}
      {title && (
        <Title>
          <Text typo="title300">{title}</Text>
        </Title>
      )}
    </StyledHeader>
  );
}
