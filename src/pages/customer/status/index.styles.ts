import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  gap: 10px;
  //align-items: center;
  //margin: 16px 0;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? "#007bff" : "#f8f9fa")};
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#6c757d")};
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #007bff;
    color: #ffffff;
  }
`;

export const TabContentWrapper = styled.div`
  padding: 16px;
 // background-color: #ffffff;
`;