import { CustomButton } from "../../../../../components/button/CustomButton";
import {
  ModalOverlay,
  ModalContent,
  ModalMessage,
  ModalButtons,
  ModalButton,
} from "./Modal.styles";
import { Text } from "../../../../../components";
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
        <ModalMessage>
          <Text typo="subtitle200">{title}</Text>
          <Text typo="body400">{message}</Text>
        </ModalMessage>
        <ModalButtons>
          <ModalButton onClick={onConfirm}>예</ModalButton>
          <ModalButton onClick={onCancel}>아니오</ModalButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
}
