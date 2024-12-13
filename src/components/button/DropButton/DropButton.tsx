import { useState, useEffect, useRef } from "react";
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
  label?: string;
  placeholder: string;
  options: string[]; // 옵션 리스트 말티즈,푸들,말티푸 이런거
  selected?: string;
  onSelect: (value: string) => void; // 선택 시 실행할 함수
  isActive?: boolean;
}

export default function DropButton({
  label,
  placeholder,
  options,
  selected,
  onSelect,
}: DropButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState(selected);

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsActive(false);
    onSelect(value);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Wrapper ref={dropdownRef}>
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
