import styled from "styled-components";
import { colors } from "../../../../../style/color";

// DogListWrapper 스타일
export const DogListWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 30px 10px;
`;

// DogProfileWrapper 스타일
export const DogProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

// RoundImg 스타일
export const RoundImg = styled.img<{ borderRadius?: string }>`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.borderRadius || "50%"};
`;

// DogName 스타일
export const DogName = styled.p<{ active: boolean }>`
  margin-top: 5px;
  font-size: 12px;
  font-weight: ${({ active }) => (active ? `600` : `400`)};
  color: ${({ active }) => (active ? `${colors.black}` : `${colors.gray200}`)};
  text-align: center;
`;
