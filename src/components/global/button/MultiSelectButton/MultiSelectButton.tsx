import { useState } from "react";
import { GridWrapper, ButtonStyle } from "./MultiSelectButton.styles";
import { Text } from "../../texts/Text";
import { colors } from "../../../../style/color";

export interface MultiSelectButtonProps {
  row?: number;
  col?: number;
  buttonNames?: string[]; // 버튼 이름 배열
  selectedIndexes: number[]; // 선택된 버튼 인덱스 배열
  onSelect?: (indexes: number[]) => void; // 선택 이벤트
}

export default function MultiSelectButton({
  col = 4,
  buttonNames = [],
  selectedIndexes,
  onSelect,
}: MultiSelectButtonProps) {
  const [selected, setSelected] = useState<number[]>(selectedIndexes);

  const handleSelect = (index: number) => {
    if (index === 0) {
      // "없음" 버튼을 누를 때 다른 선택을 초기화하고 "없음"만 선택
      setSelected([0]);
      onSelect?.([0]);
    } else {
      // 다른 버튼을 누를 때 "없음" 해제 및 다중 선택 허용
      if (selected.includes(0)) {
        setSelected([index]); // "없음" 선택 해제 후 클릭한 버튼만 선택
        onSelect?.([index]);
      } else {
        const updatedSelection = selected.includes(index)
          ? selected.filter((i) => i !== index) // 이미 선택된 버튼 클릭 시 해제
          : [...selected, index]; // 새로운 버튼 추가 선택
        setSelected(updatedSelection);
        onSelect?.(updatedSelection);
      }
    }
  };

  return (
    <GridWrapper style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}>
      {buttonNames?.map((name, index) => (
        <ButtonStyle
          key={index}
          selected={selected.includes(index)}
          onClick={() => handleSelect(index)}
        >
          <Text
            color={selected.includes(index) ? "blue100" : "gray200"}
            typo="body100"
          >
            {name}
          </Text>
        </ButtonStyle>
      ))}
    </GridWrapper>
  );
}
