import styled from "styled-components";
import { colors } from "../../../style/color";

export const Tooltip = styled.div`
  position: absolute;
  bottom: -40px; // 버튼 위에 정보가 뜨도록 위치 조정
  left: 0;
  background-color: ${colors.white};
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  line-height: 1.1;
  width: 400px;
  height: auto;
`;

export const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  &:hover {
    scale: calc(1.1);
  }
`;
