import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

// DogListWrapper 스타일
export const DogListWrapper = styled.div`
  display: flex;
  padding: 14px;
  overflow-x: auto; // 가로 스크롤 추가
  white-space: nowrap; // 줄 바꿈 방지하여 가로 스크롤 유지
  &::-webkit-scrollbar {
    height: 8px; // 스크롤바 높이
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray200}; // 스크롤바 색상
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; // 스크롤 트랙 (배경) 색상
  }
`;

// DogProfileWrapper 스타일
export const DogProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 80px;
  height: 90px;
`;

// RoundImg 스타일
export const RoundImg = styled.img<{ borderRadius?: string; active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.borderRadius || "50%"};
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
  /* width: 50px; */
  white-space: pre-wrap;
`;
