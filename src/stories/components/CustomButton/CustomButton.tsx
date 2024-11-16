// CustomButton.tsx
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CustomButtonProps {
  /**
   * 버튼 내부 텍스트
   */
  children: React.ReactNode;
  /**
   * 버튼 크기 variant
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 버튼 스타일 variant
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 클릭 핸들러
   */
  onClick?: () => void;
  /**
   * 너비를 100%로 설정
   */
  fullWidth?: boolean;
}

const pressAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button<{
  size: string;
  variant: string;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};

  // 크기 설정
  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 8px 16px;
          font-size: 14px;
          height: 32px;
        `;
      case 'large':
        return css`
          padding: 16px 32px;
          font-size: 18px;
          height: 48px;
        `;
      default: // medium
        return css`
          padding: 12px 24px;
          font-size: 16px;
          height: 40px;
        `;
    }
  }}

  // 스타일 variant 설정
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return css`
          background-color: #EEF2FF;
          color: #4F46E5;
          border: none;
          
          &:hover:not(:disabled) {
            background-color: #E0E7FF;
          }
          
          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: #4F46E5;
          border: 2px solid #4F46E5;
          
          &:hover:not(:disabled) {
            background-color: #EEF2FF;
          }
          
          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      default: // primary
        return css`
          background-color: #4F46E5;
          color: white;
          border: none;
          box-shadow: 0 2px 4px rgba(79, 70, 229, 0.1);
          
          &:hover:not(:disabled) {
            background-color: #4338CA;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);
          }
          
          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
  }
`;

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
  fullWidth = false,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      $fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};