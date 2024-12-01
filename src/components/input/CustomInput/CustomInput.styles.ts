import styled, { css, keyframes } from "styled-components";
import { typography } from "../../../style/typography";
import { colors } from "../../../style/color";

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

export const Container = styled.div<{
  fullwidth: boolean;
  hasButton: boolean;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ fullwidth, width }) =>
    width ? width : fullwidth ? "100%" : "auto"};
  ${({ hasButton }) =>
    hasButton &&
    css`
      margin-bottom: 10px;
    `}
`;

export const Label = styled.label<{ focused: boolean; error: boolean }>`
  ${typography.subtitle300}
  color: ${({ focused, error }) =>
    error
      ? colors.red100 // 에러 상태일 때 색상
      : focused
        ? colors.blue100 // 포커스 상태일 때 색상
        : colors.gray100}; // 기본 상태일 때 색상
  margin-bottom: 5px;
  transition: color 0.2s ease;
`;
export const InputWrapper = styled.div<{
  variant: string;
  error: boolean;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.gray400};
  ${({ variant, error, disabled }) =>
    variant === "outlined"
      ? css`
          border-radius: 5px;
          border: ${disabled
            ? `1px solid ${colors.blue100}`
            : `1px solid ${error ? colors.red200 : colors.gray400}`};
          padding: 0px 10px;
          height: 50px;
          border-radius: 10px;

          &:focus-within {
            border-color: ${error ? colors.red200 : colors.blue200};
            box-shadow: 0 0 0 1px ${error ? colors.red100 : colors.blue100};
          }
        `
      : css`
          border: none;
          border-bottom: 1px solid ${error ? colors.red200 : colors.gray300};
          border-radius: 0;
          padding: 5px 10px;
          height: 50px;
          border-radius: 10px;

          &:focus-within {
            border-bottom-color: ${error ? colors.red200 : colors.blue200};
          }
        `}
`;

export const StyledInput = styled.input<{ error: boolean }>`
  flex: 1;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  padding-left: 10px;

  &::placeholder {
    color: #9ca3af;
    font-size: ${typography.body100};
  }

  &:disabled {
    color: ${colors.black};
    cursor: not-allowed;
    font-size: 12px;
  }
`;

export const SuffixContainer = styled.div<{
  variant: string;
  error: boolean;
}>`
  margin-left: 8px;
  display: flex;
  align-items: center; // 버튼을 수직 중앙 정렬
  ${({ variant, error }) =>
    variant === "outlined"
      ? css`
          height: 32px;

          &:focus {
            border-color: ${error ? colors.red300 : colors.blue200};
            box-shadow: 0 0 0 1px
              ${error ? "rgba(239, 68, 68, 0.1)" : "rgba(79, 70, 229, 0.1)"};
          }
        `
      : css`
          border: none;
          border-bottom: 2px solid ${error ? colors.red300 : colors.gray200};
          border-radius: 0;
          padding: 4px 0;
          height: 24px;
          &:focus {
            border-bottom-color: ${error ? colors.red300 : colors.blue200};
          }
        `}
`;

export const Message = styled.p<{ error?: boolean }>`
  margin-top: 4px;
  color: ${(props) => (props.error ? colors.red300 : "#6b7280")};
  animation: ${fadeIn} 0.3s ease-in-out;
`;
