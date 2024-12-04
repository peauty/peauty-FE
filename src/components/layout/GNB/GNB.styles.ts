import styled from "styled-components";
import { colors } from "../../../style/color";

export const Nav = styled.nav`
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const MenuItem = styled.div<{ isActive?: boolean }>`
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
    position: absolute;
    bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;
