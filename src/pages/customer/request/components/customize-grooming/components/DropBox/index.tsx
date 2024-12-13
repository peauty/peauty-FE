import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  Label,
  DropdownContainer,
  Placeholder,
  SelectedValue,
  DropdownIcon,
  DropdownList,
  DropdownListItem,
} from "./index.styles";
import { DropDown } from "../../../../../../../assets/svg";
import { colors } from "../../../../../../../style/color";

// DropBox Props Interface
export interface DropBoxProps {
  label?: string; // Optional label text
  placeholder: string; // Default text for the dropdown
  options: string[]; // List of options (e.g., "Maltese", "Poodle")
  selected?: string; // Initial selected value
  onSelect: (value: string) => void; // Callback for when an option is selected
}

const DropBox = ({
  label,
  placeholder,
  options,
  selected,
  onSelect,
}: DropBoxProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    selected || null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (selected) {
      setSelectedValue(selected);
    }
  }, [selected]);

  return (
    <Wrapper ref={dropdownRef}>
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
};

export default DropBox;
