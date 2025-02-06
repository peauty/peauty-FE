import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

export const DogListWrapper = styled.div`
  /* display: flex; */
  overflow-x: auto; // 가로 스크롤 활성화
  scroll-behavior: smooth; // 부드러운 스크롤
  white-space: nowrap; // 줄 바꿈 방지
  gap: 10px; // 프로필 간격
  padding: 14px;

  /* 스크롤바 숨기기 (선택 사항) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DogProfileWrapper = styled.div`
  display: inline-flex; // inline-flex로 설정하여 스크롤 방향 유지
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 70px;
  height: 90px;
`;

// RoundImg 스타일
export const RoundImg = styled.img<{ borderRadius?: string; active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.borderRadius || "50%"};
  scale: ${({ active }) => (active ? 1.3 : 1)};
  transition: box-shadow 0.3s ease-in-out;
`;

// DogName 스타일
export const DogName = styled.p<{ active: boolean }>`
  margin-top: 7px;
  font-size: 13px;
  font-weight: ${({ active }) => (active ? 600 : 400)};
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  text-align: center;
  /* width: 50px; */
  white-space: pre-wrap;
`;
