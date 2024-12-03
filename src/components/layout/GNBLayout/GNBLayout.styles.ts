import styled from "styled-components";
import theme from "../../../style/theme";
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체를 차지하도록 설정 */
  padding: ${theme.size.appBarHeight} 0 ${theme.size.gnbHeight};
  box-sizing: border-box;
`;

export const GNBwrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto; /* 컨텐츠가 길 경우 스크롤 허용 */
`;
