import styled from 'styled-components';
import { colors } from '../../../style/color';

export const StyledMenuItem = styled.div<{ isActive?: boolean }>`
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