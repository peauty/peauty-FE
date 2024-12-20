import styled from "styled-components";
import theme from "../../style/theme";

export const Wrapper = styled.div<{ fullScreen: boolean }>`
  position: ${({ fullScreen }) => (fullScreen ? "fixed" : "absolute")};
  width: 100%;
  height: ${({ fullScreen }) => (fullScreen ? "100vh" : "100%")};
  top: 0;
  left: 0;
  background: ${theme.colors.grayOpacity300};
  z-index: ${({ fullScreen }) =>
    fullScreen ? theme.zIndex.dim : theme.zIndex.overlay};
  overflow: hidden;
`;
