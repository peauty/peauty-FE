import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Sheet, Option, OpenButton } from "./BottomSheet.styles";
import { Text } from "../texts/Text";
import { DownArrow, UpArrow } from "../../assets/svg";
import BackDrop from "../back-drop/BackDrop";

interface OptionType {
  label: string; // 옵션에 표시될 텍스트
  onClick?: () => void; // 클릭 시 실행될 함수 (선택적)
}

interface BottomSheetProps {
  options: OptionType[]; // 각 옵션이 label과 onClick 함수를 포함
}

function BottomSheet({ options }: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false); // BottomSheet 열림 상태 관리
  const [selectedOption, setSelectedOption] = useState(options[0]?.label); // 선택된 옵션 초기값

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option.label); // 선택된 옵션 업데이트
    setIsOpen(false); // 선택 후 BottomSheet 닫기
    if (option.onClick) {  // onClick이 정의되어 있으면 호출
      option.onClick(); 
    }
  };

  const BottomSheetContent = (
    <>
      {/* BackDrop */}
      {isOpen && (
        <BackDrop
          fullScreen
          onClick={() => setIsOpen(false)} // BackDrop 클릭 시 닫기
        />
      )}

      {/* Bottom Sheet */}
      {isOpen && (
        <Sheet isOpen={isOpen}>
          {options.map((option, index) => (
            <Option
              key={index}
              isSelected={selectedOption === option.label} // 선택된 옵션인지 확인
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </Option>
          ))}
        </Sheet>
      )}
    </>
  );

  return (
    <>
      {/* 버튼 */}
      <OpenButton onClick={() => setIsOpen(true)}>
        <Text typo="body300" color="gray100">
          {selectedOption} {/* 선택된 옵션 표시 */}
        </Text>
        {isOpen ? <UpArrow height={12} /> : <DownArrow height={12} />}
      </OpenButton>

      {/* Portal을 사용하여 부모의 영향을 받지 않음 */}
      {ReactDOM.createPortal(BottomSheetContent, document.body)}
    </>
  );
}

export default BottomSheet;
