import { Text } from "../../../../../components";
import {
  ModalOverlay,
  ModalContent,
  ModalMessage,
  ModalButtons,
  ModalButton,
} from "../../../pet/info/components/Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteReviewModal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalMessage>
          <Text typo="subtitle200">정말 삭제하시겠습니까?</Text>
          <Text typo="body400">삭제한 뒤에는 복구할 수 없어요</Text>
        </ModalMessage>
        <ModalButtons>
          <ModalButton onClick={onConfirm}>예</ModalButton>
          <ModalButton onClick={onCancel}>아니오</ModalButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteReviewModal;
