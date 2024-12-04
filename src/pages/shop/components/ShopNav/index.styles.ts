import styled from "styled-components";
import { colors } from "../../../../style/color";

export const NavWrapper = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  height: 55px;
  max-width: 200px; /* Nav의 크기를 제한 */
  padding: 0 20px;
`;

export const NavItem = styled.div<{ active: boolean }>`
  flex: 1; /* 모든 메뉴 아이템이 공평하게 공간을 나눔 */
  text-align: center; /* 텍스트를 가운데 정렬 */
  position: relative;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: auto;
    width: ${({ active }) =>
      active ? "100%" : "0"}; /* 활성화된 아이템의 밑줄 */
    height: 5px;
    background-color: ${colors.blue200}; /* 밑줄 색 */
    transition: width 0.3s ease;
  }
`;
