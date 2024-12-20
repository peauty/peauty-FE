import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

export const TabWrapper = styled.div`
  position: sticky;
  top: ${theme.size.appBarHeight};
  z-index: 10;
  background: white;
  display: flex;
  align-items: center;
  height: 40px;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
`;

export const TabItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  position: relative;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
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
