import styled from "styled-components";
import theme from "../../../style/theme";
import { colors } from "../../../style/color";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${theme.size.maxWidth};
  min-width: ${theme.size.minWidth};
  height: ${theme.size.gnbHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
  z-index: ${theme.zIndex.gnb};
  padding: 19px 40px 0px;
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? `${colors.blue100}` : "#000")};

  svg {
    width: 21px;
    height: 21px;
    fill: ${(props) => (props.isActive ? `${colors.blue100}` : "#000")};
  }

  span {
    font-weight: ${(props) => (props.isActive ? "semibold" : "normal")};
    color: ${(props) => (props.isActive ? `${colors.blue100}` : "#000")};
    height: 30px;
  }

  &:after {
    content: "";
    display: ${(props) => (props.isActive ? "block" : "none")};
    width: 60px;
    height: 5px;
    background: ${colors.blue100};
    /* margin-top: 4px; */
    position: absolute;
    bottom: 0;
  }
`;
