import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  Label,
  DropdownContainer,
  Placeholder,
  SelectedValue,
  DropdownList,
  DropdownListItem,
} from "./DateDropBox.styles";
import { DownArrow, UpArrow } from "../../../assets/svg";
interface CustomDatePickerProps {
  label?: string;
  type: "birthday" | "reservation";
  onChange?: (date: string) => void;
}
export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  type,
  onChange = () => {},
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years =
    type === "birthday"
      ? [
          "선택 없음",
          ...Array.from({ length: currentYear - 1994 + 1 }, (_, i) =>
            (1994 + i).toString(),
          ),
        ]
      : [
          "선택 없음",
          ...Array.from({ length: 2 }, (_, i) => (currentYear + i).toString()),
        ];

  const months = [
    "선택 없음",
    ...Array.from({ length: 12 }, (_, i) =>
      (i + 1).toString().padStart(2, "0"),
    ),
  ];

  const days = [
    "선택 없음",
    ...Array.from({ length: 31 }, (_, i) =>
      (i + 1).toString().padStart(2, "0"),
    ),
  ];

  const handleDateChange = () => {
    if (selectedYear && selectedMonth && selectedDay) {
      const formattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
      onChange(formattedDate);
    }
  };

  const closeDropdowns = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdowns);
    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, []);

  return (
    <Wrapper ref={dropdownRef}>
      {label && <Label>{label}</Label>}
      <div style={{ display: "flex", gap: "8px" }}>
        {["year", "month", "day"].map((type, index) => {
          const options =
            type === "year" ? years : type === "month" ? months : days;
          const selected =
            type === "year"
              ? selectedYear
              : type === "month"
                ? selectedMonth
                : selectedDay;

          return (
            <div style={{ position: "relative", flex: 1 }} key={type}>
              <DropdownContainer
                isActive={activeDropdown === type}
                onClick={() =>
                  setActiveDropdown((prev) => (prev === type ? null : type))
                }
              >
                {selected ? (
                  <SelectedValue>{selected}</SelectedValue>
                ) : (
                  <Placeholder>
                    {type === "year" ? "년" : type === "month" ? "월" : "일"}
                  </Placeholder>
                )}
                {activeDropdown === type ? (
                  <UpArrow height={12} />
                ) : (
                  <DownArrow height={12} />
                )}
              </DropdownContainer>
              {activeDropdown === type && (
                <DropdownList>
                  {options.map((option) => (
                    <DropdownListItem
                      key={option}
                      onClick={() => {
                        if (type === "year")
                          setSelectedYear(
                            option === "선택 없음" ? null : option,
                          );
                        if (type === "month")
                          setSelectedMonth(
                            option === "선택 없음" ? null : option,
                          );
                        if (type === "day")
                          setSelectedDay(
                            option === "선택 없음" ? null : option,
                          );
                        setActiveDropdown(null);
                        handleDateChange();
                      }}
                    >
                      {option}
                    </DropdownListItem>
                  ))}
                </DropdownList>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
