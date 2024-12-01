// SelectButton.styles.ts
import styled from "styled-components";
import { colors } from "../../../style/color";
import theme from "../../../style/theme";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 450px;
`;

export const Button = styled.button<{ $isSelected: boolean }>`
  width: 185px;
  height: 250px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? colors.blue200 : colors.gray200};
`;
