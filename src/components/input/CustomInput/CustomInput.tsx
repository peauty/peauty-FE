import { InputHTMLAttributes, useState, ReactNode } from "react";
import {
  Container,
  Label,
  InputWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledTextarea,
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
  hasButton?: boolean;
  inputType?: "input" | "textarea"; // input인지 textarea인지 구분
  unit?: string; // 단위 추가
}

export default function CustomInput({
  label,
  error,
  success,
  width,
  hint,
  fullwidth = true,
  disabled = false,
  variant = "outlined",
  hasButton = false,
  inputType = "input", // 기본값 input
  unit,
  ...props
}: CustomInputProps) {
  const [focused, setFocused] = useState(false);

  // 색상 결정 함수
  const getColor = () => {
    if (error) return "red100";
    if (success) return "blue100";
    return "black100";
  };

  return (
    <Container fullwidth={fullwidth} hasButton={hasButton} width={width}>
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
          <StyledInputWrapper>
            <StyledInput
              error={!!error}
              disabled={disabled}
              hasUnit={!!unit}
              {...props}
            />
            {unit && <span className="unit">{unit}</span>} {/* 단위 추가 */}
          </StyledInputWrapper>
        ) : (
          <StyledTextarea error={!!error} disabled={disabled} {...props} />
        )}
      </InputWrapper>

      {(error || hint || success) && (
        <Message error={!!error}>
          <Text color={getColor()} typo="body600">
            {error || hint || success}
          </Text>
        </Message>
      )}
    </Container>
  );
}
