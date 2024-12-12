import styled from "styled-components";
import { colors } from "../../../../style/color";

export const TabWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  height: 55px;
`;

export const TabItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
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
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 5px;
    background-color: ${colors.blue200}; /* 밑줄 색 */
    transition: width 0.3s ease;
  }
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
