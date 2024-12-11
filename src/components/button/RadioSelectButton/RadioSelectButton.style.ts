import styled from "styled-components";
import { colors } from "../../../style/color";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  background-color: ${colors.gray400};
`;

export const ButtonStyle = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  border: 1px solid
    ${({ selected }) => (selected ? `${colors.blue100}` : `${colors.gray400}`)};
  background-color: ${({ selected }) => (selected ? `${colors.blue300}` : 0)};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
`;
