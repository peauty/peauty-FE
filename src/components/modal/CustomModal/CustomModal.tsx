import React, { ReactNode } from "react";
import * as S from "./CustomModal.styles";

interface CustomModalProps {
  children: ReactNode; // 모달 내부에 렌더링될 콘텐츠
  onClose: () => void; // 모달 닫기 함수
}

export default function CustomModal({ children, onClose }: CustomModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick}>
      <S.ModalWrapper>{children}</S.ModalWrapper>
    </S.ModalBackdrop>
  );
}
