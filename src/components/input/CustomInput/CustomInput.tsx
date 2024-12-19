import { InputHTMLAttributes, useState, useEffect, ReactNode } from "react";
import {
  Container,
  Label,
  InputWrapper,
  StyledInputWrapper,
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
  unit?: string; // 단위 추가
  extraText?: string; // 추가 텍스트를 위한 prop
  maxLength?: number; // 최대 글자수 prop 추가
  hasError?: boolean;
  value?: string | readonly string[]; // value 타입 추가
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
  suffix,
  hasButton = false,
  inputType = "input", // 기본값 input
  unit,
  extraText, // 추가 텍스트 prop
  maxLength = 200, // 기본값 200
  hasError = false,
  ...props
}: CustomInputProps) {
  // ⭐ 초기값을 props.value의 길이로 설정
  const [inputLength, setInputLength] = useState(
    props.value ? props.value.length : 0,
  );
  const [focused, setFocused] = useState(false);

  // ⭐ props.value가 변경될 때 inputLength 업데이트
  useEffect(() => {
    if (props.value) {
      setInputLength(props.value.length);
    }
  }, [props.value]);

  const isTextOverLimit = inputLength > maxLength;
  const showError = !!error || isTextOverLimit;
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

    if (inputType === "textarea" && value.length > maxLength) {
      props.onChange?.(e);
      return;
    }
    props.onChange?.(e);
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
        error={showError}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)} // 포커스 해제 시 상태 변경
        hasExtraText={!!extraText} // 추가 텍스트가 있을 때 스타일 변경
      >
        {inputType === "input" ? (
          <StyledInputWrapper>
            <StyledInput
              error={showError}
              disabled={disabled}
              hasUnit={!!unit}
              {...props}
              onChange={handleChange}
            />
            {unit && <span className="unit">{unit}</span>} {/* 단위 추가 */}
          </StyledInputWrapper>
        ) : (
          <StyledTextarea
            error={showError}
            disabled={disabled}
            maxLength={maxLength + 1} // maxLength + 1로 텍스트박스에 허용 가능한 길이 설정
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

      <NoticeContainer hasError={showError}>
        <Text
          color={
            error || (inputType === "textarea" && inputLength > maxLength)
              ? "red100"
              : success
                ? "blue100"
                : undefined
          }
          typo="body500"
        >
          {inputLength > maxLength
            ? "작성 가능한 글자 수를 초과했어요"
            : error || hint || success}
        </Text>

        {inputType === "textarea" && (
          <Text color={charCountColor} typo="body400">
            {inputLength}/{maxLength}
          </Text>
        )}
      </NoticeContainer>
    </Container>
  );
}
