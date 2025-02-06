import styled from "styled-components";
import { colors } from "../../../../style/color";

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2.5px solid #ddd;
  position: relative; /* Tab의 border가 겹칠 수 있도록 부모 요소 설정 */
`;

export const Tab = styled.div<{ isActive: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  color: ${({ isActive }) => (isActive ? `#000` : `#aaa`)};
  border-bottom: ${({ isActive }) =>
    isActive ? `2.5px solid ${colors.blue100}` : "none"};
  position: relative;
  top: 2.5px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  background-color: ${colors.blue300};
  padding: 4px 10px;
  width: 120px;
  height: 30px;
  text-align: center;
  color: ${colors.blue100};
  border-radius: 5px;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 500;
  border: 1px solid ${colors.blue300};
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.blue100};
  }
`;
