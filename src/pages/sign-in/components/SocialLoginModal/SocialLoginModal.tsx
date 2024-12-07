import CustomModal from "../../../../components/modal/CustomModal";
import { SocialLoginButton } from "../SocialLoginButton";
import { ModalContent } from "./SocialLoginModal.styles";



interface SocialLoginModalProps {
  onClose: () => void;
}

export default function SocialLoginModal({ onClose }: SocialLoginModalProps) {
  const handleKakaoLogin = () => {
    window.location.href = import.meta.env.VITE_KAKAO_CUSTOMER_SOCIAL_LOGIN_URL;
  };

  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_CUSTOMER_SOCIAL_LOGIN_URL;
  }

  return (
    <CustomModal onClose={onClose}>
      <ModalContent>
        <SocialLoginButton type="kakao" onClick={handleKakaoLogin}/>
        <SocialLoginButton type="naver" />
        <SocialLoginButton type="google" onClick={handleGoogleLogin}/>
      </ModalContent>
    </CustomModal>
  );
}