import styled, { css, keyframes } from 'styled-components';
import { typography } from '../../../style/typography';
import { colors } from '../../../style/color';

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

export const Container = styled.div<{ $fullWidth: boolean; $hasButton: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' :'auto')};
  ${({ $hasButton }) => $hasButton && css`
    margin-bottom: 10px;
  `}
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 5px;
  font-size: ${typography.body2};
`;

export const InputWrapper = styled.div<{ $variant: string; $error: boolean; $disabled: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.$disabled ? colors.gray100 : 'transparent')};
  ${({ $variant, $error, $disabled }) =>
    $variant === 'outlined'
      ? css`
          border-radius: 5px;
          border: ${$disabled ? 'none' : `1px solid ${$error ? colors.red200 : colors.gray300}`};
          padding: 0px 10px;
          height: 40px;

          &:focus-within {
            border-color: ${$error ? colors.red200 : colors.blue200};
            box-shadow: 0 0 0 3px ${$error ? colors.red100 : colors.blue100};
          }
        `
      : css`
          border: none;
          border-bottom: 1px solid ${$error ? colors.red200 : colors.gray300};
          border-radius: 0;
          padding: 5px 10px;
          height: 32px;

          &:focus-within {
            border-bottom-color: ${$error ? colors.red200 : colors.blue200};
          }
        `}
`;

export const StyledInput = styled.input<{ $error: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;

  &::placeholder {
    color: #9ca3af;
    font-size: ${typography.body6};
  }

  &:disabled {
    color: ${colors.gray300};
    cursor: not-allowed;
    font-size: 12px;
  }
`;

export const SuffixContainer = styled.div<{ $variant: string; $error: boolean }>`
  margin-left: 8px;
  display: flex;
  align-items: center; // 버튼을 수직 중앙 정렬
  ${({ $variant, $error }) => $variant === 'outlined'
    ? css`
        border-radius: 20px;
        border: 2px solid ${$error ? colors.red300 : colors.gray200};
        padding: 8px 16px;
        height: 32px;

        &:focus {
          border-color: ${$error ? colors.red300 : colors.blue200};
          box-shadow: 0 0 0 3px ${$error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)'};
        }
      `
    : css`
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

export const Message = styled.p<{ $error?: boolean }>`
  font-size: ${typography.body6};
  margin-top: 4px;
  color: ${(props) => (props.$error ? colors.red300 : '#6b7280')};
  animation: ${fadeIn} 0.3s ease-in-out;
`;
