import styled from "styled-components";
import theme from "../../style/theme";
export const StickyContainer = styled.div`
  position: sticky;
  top: ${theme.size.appBarHeight}; /* 화면 상단에 고정 */
  z-index: 10; /* 다른 요소 위에 표시 */
  background: white; /* 스크롤 시 배경색 유지 */
`;
