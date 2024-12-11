import { InputHTMLAttributes, useState, ReactNode } from "react";
import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  StyledTextarea,
  SuffixContainer,
  NoticeContainer,
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
  extraText?: string; // 추가 텍스트를 위한 prop
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
  extraText, // 추가 텍스트 prop
  ...props
}: CustomInputProps) {
  // focused 상태 관리
  const [focused, setFocused] = useState(false);
  const [inputLength, setInputLength] = useState(0);

  // textarea의 글자 수 제한
  const MAX_LENGTH = 200;

  // 조건 변수 추출
  const isTextOverLimit = inputLength > MAX_LENGTH; // 글자 수 초과 조건
  const showError = !!error || isTextOverLimit; // 에러 메시지 표시 조건
  const charCountColor = isTextOverLimit
    ? "red100"
    : focused
      ? "blue100"
      : "gray100"; // {inputLength}/{MAX_LENGTH} 색상 결정

  // 입력값 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setInputLength(value.length);

    if (inputType === "textarea" && value.length > MAX_LENGTH) {
      props.onChange?.(e);
      return;
    }

    props.onChange?.(e);
  };

  return (
    <Container fullwidth={fullwidth} hasButton={hasButton}>
      {label && (
        <Label focused={focused} error={!!error}>
          {label}
        </Label>
      )}
      <InputWrapper
        variant={variant}
        error={showError}
        disabled={disabled}
        onFocus={() => setFocused(true)} // 포커스 상태 설정
        onBlur={() => setFocused(false)} // 포커스 해제 시 상태 변경
        hasExtraText={!!extraText} // 추가 텍스트가 있을 때 스타일 변경
      >
        {inputType === "input" ? (
          <StyledInput
            error={showError}
            disabled={disabled}
            {...props}
            onChange={handleChange}
          />
        ) : (
          <StyledTextarea
            error={showError}
            disabled={disabled}
            maxLength={MAX_LENGTH + 1}
            {...props}
            onChange={handleChange}
          />
        )}
        {suffix && (
          <SuffixContainer variant={variant} error={showError}>
            {suffix}
          </SuffixContainer>
        )}
        {/* 추가 텍스트 출력 */}
        {extraText && (
          <Text color="gray100" typo="body100">
            {extraText}
          </Text>
        )}
      </InputWrapper>

      <NoticeContainer
        hasError={
          !!error || (inputType === "textarea" && inputLength > MAX_LENGTH)
        }
      >
        <Text
          color={
            error || (inputType === "textarea" && inputLength > MAX_LENGTH)
              ? "red100"
              : success
                ? "blue100"
                : undefined
          }
          typo="body500"
        >
          {inputLength > MAX_LENGTH
            ? "작성 가능한 글자 수를 초과했어요"
            : error || hint || success}
        </Text>

        {inputType === "textarea" && (
          <Text
            color={
              inputLength > MAX_LENGTH
                ? "red100"
                : focused
                  ? "blue100"
                  : "gray100"
            }
            typo="body100"
          >
            {inputLength}/{MAX_LENGTH}
          </Text>
        )}
      </NoticeContainer>
    </Container>
  );
}
