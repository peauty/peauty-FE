import styled from "styled-components";
import theme from "../../../../../style/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${theme.size.gnbHeight} - ${theme.size.appBarHeight});
`;

export const CardWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 15px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
