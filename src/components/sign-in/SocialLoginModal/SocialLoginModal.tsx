import CustomModal from "../../global/CustomModal";
import { SocialLoginButton } from "../../global/SocialLoginButton";
import { ModalContent, Title } from "./SocialLoginModal.styles";



interface SocialLoginModalProps {
  onClose: () => void;
}

export default function SocialLoginModal({ onClose }: SocialLoginModalProps) {
  return (
    <CustomModal onClose={onClose}>
      <ModalContent>
        <SocialLoginButton type="kakao" />
        <SocialLoginButton type="naver" />
        <SocialLoginButton type="google" />
      </ModalContent>
    </CustomModal>
  );
}