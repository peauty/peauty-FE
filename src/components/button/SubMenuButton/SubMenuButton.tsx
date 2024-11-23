// SubMenu.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../../assets/svg";
import { StyledSubMenuButton, Text } from "./SubMenuButton.styles";

export interface SubMenuButtonProps {
  /**
   * 공지사항 텍스트
   */
  text: string;
  /**
   * 이동할 페이지 URL
   */
  to: string;
}

export default function SubMenuButton({ text, to }: SubMenuButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // to에 지정된 URL로 이동
  };

  return (
    <StyledSubMenuButton onClick={handleClick}>
      <Text>{text}</Text>
      <Arrow width="15px" height="27px" />
    </StyledSubMenuButton>
  );
}
