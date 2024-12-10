import styled from "styled-components";

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
  z-index: 9999; /* 모달이 다른 콘텐츠 위에 오도록 */
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalMessage = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:first-child {
    background-color: #ff4d4f;
    color: white;
  }

  &:last-child {
    background-color: #4caf50;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;
