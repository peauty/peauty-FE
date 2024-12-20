import { useState, useEffect } from "react";
import { DropButton } from "../../../../../components";
import { Style } from "../index.styles";

interface DatePickerProps {
  yearOptions: string[];
  monthOptions: string[];
  dayOptions: string[];
  selectedYear?: number | null;
  selectedMonth?: number | null;
  selectedDay?: number | null;
  onYearSelect: (year: number) => void;
  onMonthSelect: (month: number) => void;
  onDaySelect: (day: number) => void;
}

function DatePicker({
  yearOptions,
  monthOptions,
  dayOptions,
  selectedYear,
  selectedMonth,
  selectedDay,
  onYearSelect,
  onMonthSelect,
  onDaySelect,
}: DatePickerProps) {
  const [year, setYear] = useState<string>(selectedYear?.toString() || "");
  const [month, setMonth] = useState<string>(selectedMonth?.toString() || "");
  const [day, setDay] = useState<string>(selectedDay?.toString() || "");

  // 부모로부터 전달된 초기값 반영
  useEffect(() => {
    if (selectedYear) setYear(selectedYear.toString());
    if (selectedMonth) setMonth(selectedMonth.toString());
    if (selectedDay) setDay(selectedDay.toString());
  }, [selectedYear, selectedMonth, selectedDay]);

  const handleYearChange = (value: string) => {
    setYear(value);
    onYearSelect(Number(value));
  };

  const handleMonthChange = (value: string) => {
    setMonth(value);
    onMonthSelect(Number(value));
  };

  const handleDayChange = (value: string) => {
    setDay(value);
    onDaySelect(Number(value));
  };

  return (
    <Style.Wrapper>
      <DropButton
        label="생년월일"
        placeholder="년"
        options={yearOptions}
        selected={year}
        onSelect={handleYearChange}
      />

      <DropButton
        label=""
        placeholder="월"
        options={monthOptions}
        selected={month}
        onSelect={handleMonthChange}
      />

      <DropButton
        label=""
        placeholder="일"
        options={dayOptions}
        selected={day}
        onSelect={handleDayChange}
      />
    </Style.Wrapper>
  );
}

export default DatePicker;
