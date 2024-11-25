import CustomModal from "../../../global/modal/CustomModal";
import { SocialLoginButton } from "../SocialLoginButton";
import { ModalContent } from "./SocialLoginModal.styles";



interface SocialLoginModalProps {
  onClose: () => void;
}

export default function SocialLoginModal({ onClose }: SocialLoginModalProps) {

  const handleKakaoLogin = () => {
    const socialPlatform = 'kakao'
    const socialId = "xx"; // Kakao ID 값 (서버에서 가져오거나 지정된 값)
    const username = "aa"; // 사용자 이름 (예제 값)
    const profileUrl = "bb"; // 프로필 URL (예제 값)
    
    // URL 리다이렉트
    window.location.href = `/signup?social_platform=${socialPlatform}&social_id=${socialId}&username=${username}&profile_url=${profileUrl}`;
  };

  return (
    <CustomModal onClose={onClose}>
      <ModalContent>
        <SocialLoginButton type="kakao" onClick={handleKakaoLogin}/>
        <SocialLoginButton type="naver" />
        <SocialLoginButton type="google" />
      </ModalContent>
    </CustomModal>
  );
}