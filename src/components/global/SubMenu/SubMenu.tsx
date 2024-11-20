// SubMenu.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../../assets/svg";
import { StyledSubMenu, Text } from "./SubMenu.styles";

export interface SubMenuProps {
  /**
   * 공지사항 텍스트
   */
  text: string;
  /**
   * 이동할 페이지 URL
   */
  to: string;
}

export default function SubMenu({ text, to }: SubMenuProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // to에 지정된 URL로 이동
  };

  return (
    <StyledSubMenu onClick={handleClick}>
      <Text>{text}</Text>
      <Arrow width="15px" height="27px" />
    </StyledSubMenu>
  );
}