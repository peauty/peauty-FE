// styles.tsx
import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../../style/color';

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
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: 500;
  margin: 10px 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  color: ${colors.white};

  // 크기 설정
  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 8px 16px;
          font-size: 10px;
          height: 32px;
        `;
      case 'large':
        return css`
          padding: 16px 32px;
          font-size: 12px;
          height: 250px;
          width: 180px;
          border-radius: 10px;
        `;
      default: // medium
        return css`
          padding: 12px 24px;
          font-size: 12px;
          height: 40px;
        `;
    }
  }}

  // 스타일 variant 설정
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return css`
          background-color: #EEF2FF;
          color: ${colors.blue200};
          border: 2px solid ${colors.blue200};
          
          &:hover:not(:disabled) {
            background-color: #E0E7FF;
          }
          
          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${colors.grayOpacity200};
          border: 2px solid ${colors.grayOpacity100};
          
          &:hover:not(:disabled) {
            background-color: #EEF2FF;
          }
          
          &:active:not(:disabled) {
            animation: ${pressAnimation} 0.2s ease-in-out;
          }
        `;
      default: // primary
        return css`
          background-color: ${colors.blue200};
          border: none;
          box-shadow: 0 2px 4px ${colors.blue100};
          
          &:hover:not(:disabled) {
            background-color: ${colors.blue200};
            transform: translateY(-1px);
            box-shadow: 0 4px 6px ${colors.blue100};
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
    box-shadow: 0 0 0 3px ${colors.blue100};
  }
`;