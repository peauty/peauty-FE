import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Container, Label, InputWrapper, StyledInput, SuffixContainer, Message } from './CustomButton.styles';

interface CustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  variant?: 'outlined' | 'underlined';
  suffix?: ReactNode;
  hasButton?: boolean;
}

export default function CustomInput({
  label,
  error,
  hint,
  fullWidth = true,
  disabled = false,
  variant = 'underlined',
  suffix,
  hasButton = false,
  ...props
}: CustomInputProps) {
  return (
    <Container $fullWidth={fullWidth} $hasButton={hasButton}>
      {label && <Label>{label}</Label>}
      <InputWrapper $variant={variant} $error={!!error} $disabled={disabled}>
        <StyledInput $error={!!error} disabled={disabled} {...props} />
        {suffix && <SuffixContainer $variant={variant} $error={!!error}>{suffix}</SuffixContainer>}
      </InputWrapper>
      {(error || hint) && <Message $error={!!error}>{error || hint}</Message>}
    </Container>
  );
};