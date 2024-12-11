import styled from "styled-components";
import { colors } from "../../../../../../style/color";
import { typography } from "../../../../../../style/typography";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  ${typography.subtitle300};
  /* color: ${colors.gray100}; */
  margin-bottom: 8px;
  display: inline-block;
`;

export const DropdownContainer = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid
    ${({ isActive }) => (isActive ? colors.blue100 : colors.gray300)};
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  background-color: ${colors.white};
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${colors.blue100};
  }
`;

export const Placeholder = styled.span`
  ${typography.body100};
  color: ${colors.gray100};
`;

export const SelectedValue = styled.span`
  ${typography.body100};
  color: ${colors.black};
`;

export const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const DropdownList = styled.ul`
  position: absolute;
  bottom: calc(65%);
  left: 0;
  width: 100%;
  border: 1px solid ${colors.gray300};
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: 0 4px 10px ${colors.grayOpacity100};
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;

  /* 추가: 기본 스타일 제거 */
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownListItem = styled.li`
  padding: 10px 15px;
  ${typography.body100};
  color: ${colors.gray100};
  cursor: pointer;

  text-decoration: none;
  border-bottom: none;

  &:hover {
    background-color: ${colors.blue300};
    color: ${colors.blue100};
  }
`;
