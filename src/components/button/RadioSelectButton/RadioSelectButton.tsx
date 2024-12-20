import { useState } from "react";
import { Text } from "../../texts/Text";
import { ButtonStyle, GridWrapper } from "./RadioSelectButton.style";

export interface RadioSelectButtonProps {
  col?: number;
  buttonNames?: string[];
  selectedIndex: number;
  onSelect?: (index: number) => void;
  disabled?: boolean; // disabled 추가
}

export default function RadioSelectButton({
  col,
  buttonNames = [],
  selectedIndex,
  onSelect,
  disabled = false, 
}: RadioSelectButtonProps) {
  const [selected, setSelected] = useState<number>(selectedIndex);

  const handleSelect = (index: number) => {
    if (disabled) return; 
    setSelected(index);
    onSelect?.(index);
  };

  return (
    <GridWrapper style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}>
      {buttonNames.map((name, index) => (
        <ButtonStyle
          key={index}
          selected={selected === index}
          onClick={() => handleSelect(index)}
          disabled={disabled} // 버튼을 비활성화
        >
          <Text
            color={selected === index ? "blue100" : "gray100"}
            typo="body100"
          >
            {name}
          </Text>
        </ButtonStyle>
      ))}
    </GridWrapper>
  );
}
