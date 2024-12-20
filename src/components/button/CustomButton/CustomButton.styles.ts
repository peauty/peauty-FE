// CustomButton.styles.tsx
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  color: ${colors.white};
  overflow: hidden; /* 텍스트가 넘치는 경우 숨김 */
  white-space: nowrap; /* 텍스트가 한 줄로 유지 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 '...'으로 처리 */
  position: relative; /* Ensure z-index works */
  z-index: 1; /* Default z-index to ensure it's on top when not hovered */

  // 크기 설정
  ${(props) => {
    switch (props.size) {
      case "full":
        return css`
          display: flex;
          width: 80px;
          height: 80px;
          justify-content: center;
          align-items: center;
        `;
      case "fullWidth":
        return css`
          display: flex;
          width: 100%;
          height: 80px;
          justify-content: center;
          align-items: center;
        `;
      case "small":
        return css`
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          height: 32px;
          border-radius: 7px;
        `;
      case "large":
        return css`
          padding: 16px 32px;
          ${typography.subtitle300}
          height: 80px;
          border-radius: 10px;
          font-weight: 500;
        `;
      case "big":
        return css`
          padding: 16px 32px;
          font-size: 12px;
          height: 250px;
          width: 180px;
          font-weight: 500;
          border-radius: 10px;
        `;
      case "signup":
        return css`
          padding: 20px 32px;
          font-size: 12px;
          width: 200px;
          font-weight: 500;
          border-radius: 7px;
          box-sizing: border-box;
        `;
      default: // medium
        return css`
          /* padding: 12px 24px; */
          ${typography.subtitle300}
          height: 50px;
          width: 100%;
          font-weight: 500;
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
            transform: scale(
              1.05
            ); /* Scale up without affecting surrounding elements */
            z-index: 2; /* Ensure it's on top */
          }

          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      case "outline":
        return css`
          background-color: transparent;
          color: ${colors.black};
          border: 1px solid ${colors.gray300};

          &:hover:not(:disabled) {
            color: ${colors.blue100};
            border: 2px solid ${colors.blue100};
            background-color: ${colors.blue300};
            transform: scale(
              1.05
            ); /* Scale up without affecting surrounding elements */
            z-index: 2; /* Ensure it's on top */
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
            transform: scale(
              1.05
            ); /* Scale up without affecting surrounding elements */
            z-index: 2; /* Ensure it's on top */
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
            transform: scale(
              1.05
            ); /* Scale up without affecting surrounding elements */
            z-index: 2; /* Ensure it's on top */
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
