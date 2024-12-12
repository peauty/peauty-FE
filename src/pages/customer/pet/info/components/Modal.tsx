import { CustomButton } from "../../../../../components/button/CustomButton";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalMessage,
  ModalButtons,
  ModalButton,
} from "./Modal.styles";

interface ModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Modal({
  title,
  message,
  onConfirm,
  onCancel,
}: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalButtons>
          <CustomButton onClick={onCancel}>아니요</CustomButton>
          <CustomButton onClick={onConfirm}>예</CustomButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
}
