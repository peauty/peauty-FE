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
        : colors.black}; // 기본 상태일 때 색상
  margin-bottom: 10px;
  transition: color 0.2s ease;
`;
export const InputWrapper = styled.div<{
  variant: string;
  error: boolean;
  disabled: boolean;
  hasExtraText: boolean;
}>`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.gray400};
  ${({ variant, error, disabled }) =>
    variant === "outlined"
      ? css`
          border: ${error
            ? `1px solid ${colors.red200}`
            : `1px solid ${colors.gray400}`};

          padding: 0px 10px;
          border-radius: 10px;

          &:focus-within {
            border-color: ${error ? colors.red200 : colors.blue200};
          }
        `
      : css`
          border: none;
          border-bottom: 1px solid ${error ? colors.red200 : colors.gray300};
          border-radius: 0;
          padding: 5px 10px;

          &:focus-within {
            border-bottom-color: ${error ? colors.red200 : colors.blue200};
          }
        `}
`;

export const StyledInput = styled.input<{ error: boolean; hasUnit: boolean }>`
  outline: none;
  background-color: transparent;
  font-size: 14px;
  padding: 12px 10px;
  width: ${({ hasUnit }) => (hasUnit ? "calc(100% - 20px)" : "100%")};
  &::placeholder {
    color: #9ca3af;
    font-size: ${typography.body200};
  }
  &:disabled {
    color: ${colors.black};
    cursor: not-allowed;
    font-size: ${typography.body200};
  }
`;

export const StyledTextarea = styled.textarea<{ error: boolean }>`
  flex: 1;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  padding: 10px;
  min-height: 120px;
  resize: none;
  line-height: 1.6;
  border: none;

  &::placeholder {
    color: #9ca3af;
    font-size: ${typography.body200};
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
          padding: 2px 0;
          height: 24px;
          &:focus {
            border-bottom-color: ${error ? colors.red300 : colors.blue200};
          }
        `}
`;

export const Message = styled.p<{ error?: boolean }>`
  margin-bottom: 5px;
  color: ${(props) => (props.error ? colors.red300 : "#6b7280")};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const UnitContainer = styled.div`
  align-self: center; /* 가운데 정렬 */
  pointer-events: none; /* 클릭 방지 */
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  .unit {
    position: absolute;
    right: 10px; /* 입력 필드 내부에서 위치 조정 */
    color: ${colors.gray100};
    font-weight: 500;
    font-size: 14px;
    pointer-events: none; /* 단위를 클릭할 수 없게 설정 */
  }
`;

export const NoticeContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  justify-content: ${({ hasError }) =>
    hasError ? "space-between" : "flex-end"};
  align-items: center;
  width: 100%;
  padding: 5px 5px 0;
`;
