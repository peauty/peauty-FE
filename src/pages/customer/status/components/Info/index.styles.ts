import styled from "styled-components";
import { colors } from "../../../../../style/color";
import { typography } from "../../../../../style/typography";

export const Container = styled.div`
  width: 100%;
  padding: 20px 20px;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerBox = styled.div`
  width: 100%;
  padding: 20px 15px;
  background-color: ${colors.white};
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
  padding: 5px 10px;
  background-color: ${colors.blue300};
  color: ${colors.blue100};
  ${typography.body200};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const RequestDate = styled.span`
  background-color: ${colors.blue300};
  border-radius: 2px;
  padding: 2px;
  margin-right: 5px;
  font-size: 10px;
  font-weight: 500;
`;
