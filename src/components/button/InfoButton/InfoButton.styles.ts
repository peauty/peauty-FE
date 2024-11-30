import styled from 'styled-components';

export const Tooltip = styled.div`
  position: absolute;
  top: -40px; // 버튼 위에 정보가 뜨도록 위치 조정
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  &:hover {
    color: #555;
  }
`;