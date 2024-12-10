import React, { useState } from "react";
import {
  Wrapper,
  Label,
  DropdownContainer,
  Placeholder,
  SelectedValue,
  DropdownIcon,
  DropdownList,
  DropdownListItem,
} from "./DropButton.styles";
import { DropDown } from "../../../assets/svg";
import { colors } from "../../../style/color";

export interface DropButtonProps {
  label?: string; // 라벨 텍스트 (optional)
  placeholder: string; // 드롭다운 기본 텍스트
  options: string[]; // 옵션 리스트 (말티즈, 푸들 등)
  onSelect: (value: string) => void; // 선택 시 실행할 함수
}

export default function DropButton({
  label,
  placeholder,
  options,
  onSelect,
}: DropButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsActive(false);
    onSelect(value);
  };

  return (
    <Wrapper>
      {/* label이 있을 경우만 렌더링 */}
      {label && <Label>{label}</Label>}
      <DropdownContainer
        isActive={isActive}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {selectedValue ? (
          <SelectedValue>{selectedValue}</SelectedValue>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}

        <DropdownIcon>
          {isActive ? (
            <DropDown color={colors.blue100} />
          ) : (
            <DropDown color={colors.gray200} />
          )}
        </DropdownIcon>
      </DropdownContainer>
      {isActive && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownListItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </Wrapper>
  );
}
