import styled from "styled-components";
import { colors } from "../../../style/color";
import { typography } from "../../../style/typography";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  ${typography.subtitle300};
  margin-bottom: 8px;
  display: inline-block;
`;

export const DropdownContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  padding: 8px 12px;
  border: 1px solid
    ${({ isActive }) => (isActive ? colors.blue100 : colors.gray300)};
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${colors.blue100};
  }

  svg {
    margin-left: 8px;
  }
`;

export const Placeholder = styled.span`
  font-size: 14px;
  color: ${colors.gray100};
`;

export const SelectedValue = styled.span`
  font-size: 14px;
  color: ${colors.black};
`;

export const DropdownList = styled.ul`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  width: 100%;
  border: 1px solid ${colors.gray300};
  border-radius: 10px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownListItem = styled.li`
  padding: 10px 12px;
  font-size: 14px;
  color: ${colors.gray100};
  cursor: pointer;

  &:hover {
    background-color: ${colors.blue100};
    color: #fff;
  }
`;
