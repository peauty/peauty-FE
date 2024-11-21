// SocialLoginButton.tsx
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { ButtonWrapper } from "./SocialLoginButton.styles";

type SocialLoginButtonProps = {
  type: 'kakao' | 'google' | 'naver';
  round?: boolean; // 동그란 버튼 여부
  fullWidth?: boolean;
};

function SocialLoginButton({ 
  type, 
  round = false,
  fullWidth = true
}: SocialLoginButtonProps) {
  const getButtonText = () => {
    switch (type) {
      case 'kakao':
        return '카카오로 시작하기';
      case 'google':
        return '구글로 시작하기';
      case 'naver':
        return '네이버로 시작하기';
      default:
        return '';
    }
  };

  const getButtonIcon = () => {
    switch (type) {
      case 'kakao':
        return <RiKakaoTalkFill />;
      case 'google':
        return <FcGoogle />;
      case 'naver':
        return <SiNaver />;
      default:
        return null;
    }
  };

  return (
    <ButtonWrapper type={type} round={round} fullWidth={fullWidth}>
      {getButtonIcon()}
      {!round && getButtonText()}
    </ButtonWrapper>
  );
}

export default SocialLoginButton;
