import styled from "styled-components";
import { colors } from "../../../style/color";
import theme from "../../../style/theme";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${theme.size.maxWidth};
  height: ${theme.size.gnbHeight};
  background: #ffffff;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  z-index: ${theme.zIndex.gnb};
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? `${colors.blue100}` : "#000")};

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => (props.isActive ? `${colors.blue100}` : "#000")};
  }

  span {
    font-weight: ${(props) => (props.isActive ? "semibold" : "normal")};
    color: ${(props) => (props.isActive ? `${colors.blue100}` : "#000")};
    /* height: 30px; */
  }

  &:after {
    content: "";
    display: ${(props) => (props.isActive ? "block" : "none")};
    width: 60px;
    height: 5px;
    background: ${colors.blue100};
    position: absolute;
    bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 30px 10px;
`;
