// CustomInput.tsx
import React, { InputHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 입력 필드 라벨
   */
  label?: string;
  /**
   * 에러 메시지
   */
  error?: string;
  /**
   * 도움말 텍스트
   */
  hint?: string;
  /**
   * 너비를 100%로 설정
   */
  fullWidth?: boolean;
    /**
   * 입력 필드 스타일 변형
   */
  variant?: 'outlined' | 'underlined';
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
`;

const StyledInput = styled.input<{
  $error: boolean;
  $fullWidth: boolean;
  $variant: string;
}>`
  display: block;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  transition: all 0.2s ease-in-out;
  outline: none;
  background-color: white;
  font-size: 14px;

  &::placeholder {
    color: #9CA3AF;
  }

  &:disabled {
    background-color: #F3F4F6;
    cursor: not-allowed;
  }

  ${props => props.$variant === 'outlined' ? css`
    border-radius: 20px;
    border: 2px solid ${props => props.$error ? '#EF4444' : '#E5E7EB'};
    padding: 8px 16px;
    height: 32px;

    &:focus {
      border-color: ${props => props.$error ? '#EF4444' : '#4F46E5'};
      box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)'};
    }
  ` : css`
    border: none;
    border-bottom: 2px solid ${props => props.$error ? '#EF4444' : '#E5E7EB'};
    border-radius: 0;
    padding: 4px 0;
    height: 24px;

    &:focus {
      border-bottom-color: ${props => props.$error ? '#EF4444' : '#4F46E5'};
    }
  `}
`;

const Message = styled.p<{ $error?: boolean }>`
  font-size: 14px;
  margin-top: 4px;
  color: ${props => props.$error ? '#EF4444' : '#6B7280'};
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  hint,
  fullWidth = false,
  disabled = false,
  variant = 'outlined',
  ...props
}) => {
  return (
    <Container $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledInput
        $error={!!error}
        $fullWidth={fullWidth}
        $variant={variant}
        disabled={disabled}
        {...props}
      />
      {(error || hint) && (
        <Message $error={!!error}>
          {error || hint}
        </Message>
      )}
    </Container>
  );
};