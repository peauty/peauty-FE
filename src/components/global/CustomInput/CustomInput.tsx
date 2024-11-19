// CustomInput.tsx
import { InputHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../../style/color';

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
  color: ${colors.gray300};
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
  background-color: ${colors.white};
  font-size: 14px;

  &::placeholder {
    color: ${colors.gray200};
  }

  &:disabled {
    background-color: ${colors.gray100};
    cursor: not-allowed;
  }

  ${({ $variant, $error }) => $variant === 'outlined' ? css`
    border-radius: 20px;
    border: 2px solid ${$error ? colors.red300 : colors.gray200};
    padding: 8px 16px;
    height: 32px;

    &:focus {
      border-color: ${$error ? colors.red300 : colors.blue200};
      box-shadow: 0 0 0 3px ${$error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)'};
    }
  ` : css`
    border: none;
    border-bottom: 2px solid ${$error ? colors.red300 : colors.gray200};
    border-radius: 0;
    padding: 4px 0;
    height: 24px;

    &:focus {
      border-bottom-color: ${$error ? colors.red300 : colors.blue200};
    }
  `}
`;

const Message = styled.p<{ $error?: boolean }>`
  font-size: 14px;
  margin-top: 4px;
  color: ${props => props.$error ? colors.red300 : colors.gray200};
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export function CustomInput({
  label,
  error,
  hint,
  fullWidth = false,
  disabled = false,
  variant = 'outlined',
  ...props
}: CustomInputProps) {
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
}
