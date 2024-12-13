import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const TabWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  padding: 10px 25px;
`;

export const TabItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  color: ${({ active }) => (active ? `${colors.black}` : `${colors.gray200}`)};
  cursor: pointer;
  margin-right: 25px; /* 각 Tab 아이템 사이에 25px 간격 추가 */

  &:last-child {
    margin-right: 0; /* 마지막 Tab 아이템은 간격을 주지 않음 */
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 5px;
    background-color: ${colors.blue200}; /* 밑줄 색 */
    transition: width 0.3s ease;
  }
`;
