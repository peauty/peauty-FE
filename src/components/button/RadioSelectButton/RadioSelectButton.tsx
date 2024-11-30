import { useState } from "react";

import { Text } from "../../texts/Text";
import { ButtonStyle, GridWrapper } from "./RadioSelectButton.style";

export interface RadioSelectButtonProps {
  col?: number;
  buttonNames: string[];
  selectedIndex: number;
  onSelect?: (index: number) => void;
}

export default function RadioSelectButton({
  col,
  buttonNames,
  selectedIndex,
  onSelect,
}: RadioSelectButtonProps) {
  const [selected, setSelected] = useState<number>(selectedIndex);

  const handleSelect = (index: number) => {
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
        >
          <Text
            color={selected === index ? "blue100" : "gray200"}
            typo="body100"
          >
            {name}
          </Text>
        </ButtonStyle>
      ))}
    </GridWrapper>
  );
}
