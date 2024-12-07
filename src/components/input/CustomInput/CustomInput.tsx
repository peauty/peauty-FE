import { InputHTMLAttributes, useState, ReactNode } from "react";
import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  StyledTextarea,
  SuffixContainer,
  Message,
} from "./CustomInput.styles";
import { Text } from "../../texts/Text";

interface CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  width?: string;
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  fullwidth?: boolean;
  variant?: "outlined" | "underlined";
  suffix?: ReactNode;
  hasButton?: boolean;
  inputType?: "input" | "textarea"; // input인지 textarea인지 구분
}

export default function CustomInput({
  label,
  error,
  success,
  hint,
  fullwidth = true,
  disabled = false,
  variant = "outlined",
  suffix,
  hasButton = false,
  inputType = "input", // 기본값 input
  ...props
}: CustomInputProps) {
  // focused 상태 관리
  const [focused, setFocused] = useState(false);

  return (
    <Container fullwidth={fullwidth} hasButton={hasButton}>
      {label && (
        <Label focused={focused} error={!!error}>
          {label}
        </Label>
      )}
      <InputWrapper
        variant={variant}
        error={!!error}
        disabled={disabled}
        onFocus={() => setFocused(true)} // 포커스 상태 설정
        onBlur={() => setFocused(false)} // 포커스 해제 시 상태 변경
      >
        {inputType === "input" ? (
          <StyledInput error={!!error} disabled={disabled} {...props} />
        ) : (
          <StyledTextarea error={!!error} disabled={disabled} {...props} />
        )}
        {suffix && (
          <SuffixContainer variant={variant} error={!!error}>
            {suffix}
          </SuffixContainer>
        )}
      </InputWrapper>

      {(error || hint || success) && (
        <Message error={!!error}>
          <Text
            color={error ? "red100" : success ? "blue100" : undefined}
            typo="body500"
          >
            {error || hint || success}
          </Text>
        </Message>
      )}
    </Container>
  );
}
