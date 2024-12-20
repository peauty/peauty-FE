import styled from "styled-components";
import theme from "../../../../../style/theme";
import { colors } from "../../../../../style/color";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 배경을 반투명하게 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  z-index: ${theme.zIndex.dialog}; /* 모달이 다른 콘텐츠 위에 오도록 */
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 350px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalMessage = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0 30px;
  text-align: center;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
`;

export const ModalButton = styled.button`
  padding: 5px 20px;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:first-child {
    background-color: ${colors.background};
    color: ${colors.gray100};
  }

  &:last-child {
    background-color: ${colors.blue100};
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;
