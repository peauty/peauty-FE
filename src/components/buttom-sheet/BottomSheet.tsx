import React, { useState } from "react";
import { Backdrop, Sheet, Option, OpenButton } from "./BottomSheet.styles";
import { Text } from "../texts/Text";
import { DownArrow, UpArrow } from "../../assets/svg";

interface BottomSheetProps {
  options: string[]; // 옵션 목록
}

const BottomSheet: React.FC<BottomSheetProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false); // BottomSheet 열림 상태 관리
  const [selectedOption, setSelectedOption] = useState(options[0]); // 선택된 옵션 초기값

  const handleSelect = (option: string) => {
    setSelectedOption(option); // 선택된 옵션 업데이트
    setIsOpen(false); // 선택 후 BottomSheet 닫기
  };

  return (
    <>
      {/* 버튼 */}
      <OpenButton onClick={() => setIsOpen(true)}>
        <Text typo="body100" color="gray100">
          {selectedOption} {/* 선택된 옵션 표시 */}
        </Text>
        {isOpen ? <UpArrow height={12} /> : <DownArrow height={12} />}
      </OpenButton>

      {/* Backdrop */}
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />

      {/* Bottom Sheet */}
      <Sheet isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            key={index}
            isSelected={selectedOption === option} // 선택된 옵션인지 확인
            onClick={() => handleSelect(option)}
          >
            {option}
          </Option>
        ))}
      </Sheet>
    </>
  );
};

export default BottomSheet;
