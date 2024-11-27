import { ReactNode } from "react";
import { Logo } from "../../../../assets/svg";
import { StyledAppBarBack, StyledHeader, Title } from "./AppBar.styles";

interface Props {
  prefix?: "backButton" | "logo";
  title?: string; // 중앙 제목
  titleSize?: string; // 제목 크기 (예: '16px', '1.5rem')
  suffix?: ReactNode; // 오른쪽 영역
  onclick?: () => void; // 뒤로가기 버튼 클릭 시 실행할 함수
}

export default function AppBar({
  prefix,
  title,
  titleSize = "18px",
  suffix,
  onclick,
}: Props) {
  return (
    <StyledHeader>
      {prefix ? prefix === "backButton" ? <StyledAppBarBack onClick={onclick} /> : <Logo width="94px" height="24px" onClick={onclick}/> : null}
      {title && <Title size={titleSize}>{title}</Title>}
      {suffix && suffix}
    </StyledHeader>
  );
}
