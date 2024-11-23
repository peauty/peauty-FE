import styled from "styled-components";
import theme from "../../../../style/theme";
import { MenuItemProps } from "./GNB";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 12px 0;
  height: ${theme.size.gnbHeight};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme.colors.white};
  box-shadow: 0px -4px 6px 0px ${theme.colors.grayOpacity100};
`;

export const MenuItem = styled.div<MenuItemProps>`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  svg {
    path {
      fill: ${(props) =>
        props.isActive ? theme.colors.blue200 : theme.colors.black100};
    }
    rect {
      stroke: ${(props) =>
        props.isActive ? theme.colors.blue200 : theme.colors.black100};
    }
  }

  div {
    font-size: 10px;
    color: ${(props) =>
      props.isActive ? theme.colors.blue200 : theme.colors.black100};
  }
`;
