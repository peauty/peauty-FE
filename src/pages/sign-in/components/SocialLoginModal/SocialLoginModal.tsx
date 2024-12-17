import CustomModal from "../../../../components/modal/CustomModal";
import { SocialLoginButton } from "../SocialLoginButton";
import { ModalContent } from "./SocialLoginModal.styles";

interface SocialLoginModalProps {
  signinType: string;
  onClose: () => void;
}

export default function SocialLoginModal({
  signinType,
  onClose,
}: SocialLoginModalProps) {
  let kakaoURL = "";
  let googleURL = "";
  if (signinType == "customer") {
    kakaoURL = import.meta.env.VITE_KAKAO_CUSTOMER_SOCIAL_LOGIN_URL;
    googleURL = import.meta.env.VITE_GOOGLE_CUSTOMER_SOCIAL_LOGIN_URL;
  } else {
    kakaoURL = import.meta.env.VITE_KAKAO_DESIGNER_SOCIAL_LOGIN_URL;
    googleURL = import.meta.env.VITE_GOOGLE_DESIGNER_SOCIAL_LOGIN_URL;
  }

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleGoogleLogin = () => {
    window.location.href = googleURL;
  };

  return (
    <CustomModal onClose={onClose}>
      <ModalContent>
        <SocialLoginButton type="kakao" onClick={handleKakaoLogin} />
        <SocialLoginButton type="google" onClick={handleGoogleLogin} />
      </ModalContent>
    </CustomModal>
  );
}
