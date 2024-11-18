// SocialLoginButton.tsx
import React from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from 'react-icons/fa';
import { SiNaver } from "react-icons/si";

type SocialLoginButtonProps = {
    type: 'kakao' | 'google' | 'naver';
    round?: boolean; // 동그란 버튼 여부
  };
  
  const ButtonWrapper = styled.button<{ type: string; round: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ round }) => (round ? '50px' : '240px')}; // 동그란 버튼은 크기를 작게 설정
    height: ${({ round }) => (round ? '50px' : '50px')};
    border-radius: ${({ round }) => (round ? '50%' : '8px')}; // round가 true이면 50%로 동그란 버튼
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin: 8px 0;
    background-color: ${({ type }) =>
      type === 'kakao' ? '#FEE500' : type === 'google' ? '#4285F4' : '#03C75A'};
  
    color: ${({ type }) => (type === 'kakao' ? '#3C1E1E' : '#fff')};
  
    svg {
      margin-right: ${({ round }) => (round ? '0' : '8px')}; // round 버튼은 아이콘과 텍스트 간격을 좁힘
      font-size: ${({ round }) => (round ? '24px' : '20px')}; // 동그란 버튼은 아이콘을 크게 설정
    }
  
    /* 텍스트가 오른쪽에 위치하도록 가로형 버튼 스타일을 설정 */
    ${({ round }) =>
      !round &&
      `
        svg {
          margin-right: 8px;
        }
      `}
  `;
  
  const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ type, round = false }) => {
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
  };
  
  export default SocialLoginButton;