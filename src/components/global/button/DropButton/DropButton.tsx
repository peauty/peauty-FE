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
import { DropDown } from "../../../../assets/svg";

export interface DropButtonProps {
  label?: string;
  placeholder: string;
  options: string[]; // 옵션 리스트 말티즈,푸들,말티푸 이런거
  onSelect: (value: string) => void; // 선택 시 실행할 함수
  isActive?: boolean;
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
      <Label>{label}</Label>
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
          <DropDown />
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
