// CustomButton.tsx
import React from 'react';
import { Button } from './CustomButton.styles'

interface CustomButtonProps {
  /**
   * 버튼 내부 텍스트
   */
  children: React.ReactNode;
  /**
   * 버튼 크기 variant
   */
  size?: 'small' | 'medium' | 'large' | 'big';
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

export default function CustomButton({
  children,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
  fullWidth = true,
}: CustomButtonProps) {
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
}