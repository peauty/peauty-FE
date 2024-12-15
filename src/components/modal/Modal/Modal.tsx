import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalMessage,
  ModalButtons,
  ModalButton,
} from "./Modal.styles";
import { Text } from "../../texts/Text";

interface ModalProps {
  title?: string; // 제목은 선택적
  message?: string; // 메시지도 선택적
  buttons: { label: string; onClick: () => void }[]; // 버튼 배열
  onClose: () => void; // 모달 닫기 이벤트
}

export default function Modal({
  title,
  message,
  buttons,
  onClose,
}: ModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      {" "}
      {/* 모달 외부 클릭 시 닫힘 */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* 이벤트 전파 방지 */}
        <ModalMessage>
          {title && <Text typo="subtitle200">{title}</Text>}
          {message && <Text typo="body400">{message}</Text>}
        </ModalMessage>
        {buttons.length > 0 && ( // 버튼이 있을 때만 렌더링
          <ModalButtons>
            {buttons.map((button, index) => (
              <ModalButton key={index} onClick={button.onClick}>
                {button.label}
              </ModalButton>
            ))}
          </ModalButtons>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
