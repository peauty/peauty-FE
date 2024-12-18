import styled from "styled-components";
import { colors } from "../../../style/color";

export const CardWrapper = styled.div<{
  isSelected: boolean;
  disabled: boolean;
}>`
  border: ${({ isSelected }) =>
    isSelected
      ? `1px solid ${colors.blue200}`
      : `1px solid ${colors.background}`};
  border-radius: 15px;
  padding-left: 20px;
  background-color: ${({ isSelected, disabled }) =>
    disabled ? colors.gray200 : isSelected ? colors.blue300 : colors.white};
  display: flex;
  align-items: center;
  text-align: center;
  cursor: ${({ disabled }) =>
    disabled
      ? "not-allowed"
      : "pointer"}; // disabled일 때 pointer를 not-allowed로 설정
  opacity: ${({ disabled }) =>
    disabled ? 0.6 : 1}; // disabled일 때 opacity를 낮춤
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
  gap: 5px;
`;

export const DiseaseWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
