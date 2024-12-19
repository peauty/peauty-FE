import styled from "styled-components";
import { colors } from "../../../style/color";

export const Tooltip = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  background-color: ${colors.white};
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  line-height: 1.1;
  max-width: 400px;
  width: 100%;
  white-space: normal;
  word-wrap: break-word;
  white-space: pre-line;
`;

export const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.gray100};
  &:hover {
    scale: calc(1.1);
  }
`;

export const IconContainItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
