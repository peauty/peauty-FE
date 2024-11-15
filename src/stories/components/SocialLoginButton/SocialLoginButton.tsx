// SocialLoginButton.tsx
import React from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from 'react-icons/fa';
import { SiNaver } from "react-icons/si";

type SocialLoginButtonProps = {
  type: 'kakao' | 'google' | 'naver';
};

const ButtonWrapper = styled.button<{ type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin: 8px 0;

  /* 각 로그인 타입에 따른 색상 설정 */
  background-color: ${({ type }) =>
    type === 'kakao' ? '#FEE500' : type === 'google' ? '#4285F4' : '#03C75A'};
  
  /* 카카오 버튼에 텍스트 색상 설정 */
  color: ${({ type }) => (type === 'kakao' ? '#3C1E1E' : '#fff')};

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ type }) => {
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
    <ButtonWrapper type={type}>
      {getButtonIcon()}
      {getButtonText()}
    </ButtonWrapper>
  );
};

export default SocialLoginButton;