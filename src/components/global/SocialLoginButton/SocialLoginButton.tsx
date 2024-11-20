// SocialLoginButton.tsx
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from 'react-icons/fa';
import { SiNaver } from "react-icons/si";
import { ButtonWrapper } from "./SocialLoginButton.styles";

type SocialLoginButtonProps = {
  type: 'kakao' | 'google' | 'naver';
  round?: boolean; // 동그란 버튼 여부
};

function SocialLoginButton({ 
  type, 
  round = false 
}: SocialLoginButtonProps) {
  const getButtonText = () => {
    switch (type) {
      case 'kakao':
        return '카카오로 로그인';
      case 'google':
        return '구글로 로그인';
      case 'naver':
        return '네이버로 로그인';
      default:
        return '';
    }
  };

  const getButtonIcon = () => {
    switch (type) {
      case 'kakao':
        return <RiKakaoTalkFill />;
      case 'google':
        return <FaGoogle />;
      case 'naver':
        return <SiNaver />;
      default:
        return null;
    }
  };

  return (
    <ButtonWrapper type={type} round={round}>
      {getButtonIcon()}
      {!round && getButtonText()}
    </ButtonWrapper>
  );
}

export default SocialLoginButton;
