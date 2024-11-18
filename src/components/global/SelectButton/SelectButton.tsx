import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../style/color";
import theme from "../../../style/theme";

interface SelectButtonProps {
  text: string;
  onClick?: () => void;
}

export function SelectButton({ text, onClick }: SelectButtonProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (onClick) onClick();
  };

  return (
    <Button $isSelected={isSelected} onClick={handleClick}>
      {text}
    </Button>
  );
}

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 450px;
`;

const Button = styled.button<{ $isSelected: boolean }>`
  width: 185px;
  height: 250px;
  border: none;
  border-radius: 10px;
  font-family: ${theme.typo.body6};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? colors.blue200 : colors.gray200};
`;
