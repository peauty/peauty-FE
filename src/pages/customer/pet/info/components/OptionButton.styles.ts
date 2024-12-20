import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const GridWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

export const ButtonStyle = styled.button<{ selected: boolean }>`
  padding: 12px 24px;
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ selected }) => (selected ? `${colors.white}` : `${colors.gray300}`)};
  background-color: ${({ selected }) =>
    selected ? `${colors.background}` : `${colors.blue100}`};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;
