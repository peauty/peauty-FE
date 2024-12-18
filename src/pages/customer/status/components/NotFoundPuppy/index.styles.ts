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
  padding: 0 25px;
  height: calc(100vh - ${theme.size.appBarHeight} - ${theme.size.gnbHeight} - 50px);
  justify-content: center;
  align-items: center;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  display: flex;
  padding: 30px 0;
`;
