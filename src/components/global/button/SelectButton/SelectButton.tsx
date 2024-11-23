// SelectButton.tsx
import { useState } from "react";
import { Button } from "./SelectButton.styles";

export interface SelectButtonProps {
  text: string;
  onClick?: () => void;
}

export default function SelectButton({ text, onClick }: SelectButtonProps) {
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