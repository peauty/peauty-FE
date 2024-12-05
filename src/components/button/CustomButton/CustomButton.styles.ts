// styles.tsx
import styled, { css, keyframes } from "styled-components";
import { colors } from "../../../style/color";
import { typography } from "../../../style/typography";

export const pressAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button<{
  size: string;
  variant: string;
  fullwidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  color: ${colors.white};

  // 크기 설정
  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          padding: 8px 16px;
          font-size: 10px;
          height: 32px;
        `;
      case "large":
        return css`
          padding: 16px 32px;
          ${typography.subtitle300}
          height: 80px;
          border-radius: 10px;
        `;
      case "big":
        return css`
          padding: 16px 32px;
          font-size: 12px;
          height: 250px;
          width: 180px;
          border-radius: 10px;
        `;
      default: // medium
        return css`
          /* padding: 12px 24px; */
          ${typography.subtitle200}
          height: 60px;
          width: 100%;
        `;
    }
  }}

  // 스타일 variant 설정
  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return css`
          background-color: ${colors.blue300};
          color: ${colors.blue100};
          border: 1px solid ${colors.blue100};

          &:hover:not(:disabled) {
            background-color: #e0e7ff;
          }

          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      case "outline":
        return css`
          background-color: transparent;
          color: ${colors.grayOpacity200};
          border: 1px solid ${colors.gray200};

          &:hover:not(:disabled) {
            color: ${colors.blue100};
            border: 1px solid ${colors.blue100};
            background-color: ${colors.blue300};
          }

          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      case "emergency":
        return css`
          background-color: ${colors.red300};
          color: ${colors.red100};
          border: 1px solid ${colors.red100};

          &:hover:not(:disabled) {
            background-color: ${colors.red200};
            transform: translateY(-1px);
          }

          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      default: // primary
        return css`
          background-color: ${colors.blue100};
          border: none;
          box-shadow: none;

          &:hover:not(:disabled) {
            background-color: ${colors.blue200};
            transform: translateY(-1px);
          }

          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${colors.blue100};
  }
`;
