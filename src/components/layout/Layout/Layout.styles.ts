import styled from "styled-components";
import theme from "../../../style/theme";

export const Wrapper = styled.div`
  width: 100%;
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
  padding: 0;
  overscroll-behavior-y: contain;
  box-sizing: border-box;
  position: relative;
`;

export const Main = styled.div`
  width: 100%;
  padding: ${theme.size.appBarHeight} 25px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box; /* 패딩을 포함하여 너비를 계산 */
`;
