import React from "react";
import { DropButton } from "../../global/button/DropButton";
import { Style } from "../../../pages/my-page/pet/edit/index.styles";

interface DatePickerProps {
  yearOptions: string[];
  monthOptions: string[];
  dayOptions: string[];
  selectedYear: number | null;
  selectedMonth: number | null;
  selectedDay: number | null;
  onYearSelect: (year: number) => void;
  onMonthSelect: (month: number) => void;
  onDaySelect: (day: number) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  yearOptions,
  monthOptions,
  dayOptions,
  onYearSelect,
  onMonthSelect,
  onDaySelect,
}) => {
  return (
    <Style.Wrapper>
      <DropButton
        label="생년월일"
        placeholder="년"
        options={yearOptions}
        onSelect={(value) => onYearSelect(Number(value))}
      />

      <DropButton
        label=""
        placeholder="월"
        options={monthOptions}
        onSelect={(value) => onMonthSelect(Number(value))}
      />

      <DropButton
        label=""
        placeholder="일"
        options={dayOptions}
        onSelect={(value) => onDaySelect(Number(value))}
      />
    </Style.Wrapper>
  );
};

export default DatePicker;
