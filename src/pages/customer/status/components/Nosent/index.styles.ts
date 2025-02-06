import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

export const Button = styled.button`
  width: 150px;
  background-color: ${colors.blue300};
  color: ${colors.blue100};
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  &:hover {
    border: 1px solid ${colors.blue100};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 304px);
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
