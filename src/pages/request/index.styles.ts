import styled from "styled-components";
import { colors } from "../../style/color";
export const ContentWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoBox = styled.div`
  padding: 20px;
  background-color: ${colors.gray400};
  border-radius: 10px;
  height: 100px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1;
`;

export const VerificationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const FilterWrapper = styled.div`
  display: flex;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const DesignerList = styled.div`
  padding: 0 0 20px;
`;
