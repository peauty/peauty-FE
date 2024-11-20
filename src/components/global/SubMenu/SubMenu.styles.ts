// SubMenu.styles.ts
import styled from "styled-components";
import theme from "../../../style/theme";

export const StyledSubMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.black100};
  justify-content: space-between;
`;

export const Text = styled.span`
  white-space: nowrap;
  font-size: 16px;
  color: ${theme.colors.black100};
`;