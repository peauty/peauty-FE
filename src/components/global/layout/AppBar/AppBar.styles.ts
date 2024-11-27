import styled from "styled-components";
import theme from "../../../../style/theme";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.appBar};
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* 최대 너비와 중앙 정렬 */
  max-width: ${theme.size.maxWidth};
  min-width: ${theme.size.minWidth};
  padding: 0 25px;
`;
