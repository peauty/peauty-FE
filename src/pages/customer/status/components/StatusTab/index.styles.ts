import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const TabWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  height: 55px;
  padding: 0 20px;
  gap: 10px;
  /* border: 1px solid red; */
`;

export const TabItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  position: relative;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  cursor: pointer;
  /* border: 1px solid red; */
  width: 80px;
  display: flex;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    margin: auto;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 5px;
    background-color: ${colors.blue200}; /* 밑줄 색 */
    transition: width 0.3s ease;
  }
`;
