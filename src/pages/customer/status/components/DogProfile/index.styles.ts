import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

// DogListWrapper 스타일
export const DogListWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px 30px;
`;

// DogProfileWrapper 스타일
export const DogProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

// RoundImg 스타일
export const RoundImg = styled.img<{ borderRadius?: string; active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.borderRadius || "50%"};
  /* border: ${({ active }) =>
    active ? `5px solid ${colors.blue200}` : `none`}; */
  scale: ${({ active }) => (active ? 1.2 : 1)};
  transition: box-shadow 0.3s ease-in-out;
`;

// DogName 스타일
export const DogName = styled.p<{ active: boolean }>`
  margin-top: 7px;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  text-align: center;
`;
