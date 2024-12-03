import styled, { keyframes } from "styled-components";

// 아래에서 부드럽게 나타나는 애니메이션
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 아래로 부드럽게 사라지는 애니메이션
const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;


export const Sheet = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0 0;
  padding: 10px 20px 0px;
  z-index: 1100;
  animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.3s ease
    forwards;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  padding: 25px 0;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  color: ${({ isSelected }) =>
    isSelected ? "black" : "gray"}; /* 선택된 옵션 색상 */
  font-weight: ${({ isSelected }) =>
    isSelected ? "bold" : "normal"}; /* 선택된 옵션 두께 */
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: black;
  }
`;

export const OpenButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px; /* 텍스트와 아이콘 간격 */
`;
