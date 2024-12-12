import styled from "styled-components";
import { colors } from "../../../../../style/color";
import { typography } from "../../../../../style/typography";


export  const Container = styled.div`
  width: 100%;
  padding: 20px 20px;
  background-color: ${colors.gray300};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerBox = styled.div`
  width: 100%;
  padding: 15px;
 // height: 77px;
  background-color: ${colors.gray400};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CutTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RequestButton = styled.button`
  width: 78px;
  height: 34px;
  background-color: ${colors.blue300};
  color: ${colors.blue100};
  ${typography.body300};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
