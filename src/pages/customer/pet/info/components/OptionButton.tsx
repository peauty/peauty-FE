import { useState } from "react";
import { Text } from "../../../../../components/texts/Text";
import { ButtonStyle, GridWrapper } from "./OptionButton.styles";

export interface OptionButtonProps {
  buttonNames: string[];
  selectedIndex: number;
  onSelect?: (index: number) => void;
}

function OptionButton({
  buttonNames,
  selectedIndex,
  onSelect,
}: OptionButtonProps) {
  const [selected, setSelected] = useState<number>(selectedIndex);

  const handleSelect = (index: number) => {
    setSelected(index);
    onSelect?.(index);
  };

  return (
    <GridWrapper>
      {buttonNames.map((name, index) => (
        <ButtonStyle
          key={index}
          selected={selected === index}
          onClick={() => handleSelect(index)}
        >
          <Text
            color={selected === index ? "gray100" : "white"}
            typo="subtitle300"
          >
            {name}
          </Text>
        </ButtonStyle>
      ))}
    </GridWrapper>
  );
}

export default OptionButton;
