import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const ReviewContain = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  gap: 10px;
  padding: 20px 0;
`;

export const ReviewHeader = styled.div`
  display: flex;
  gap: 3px;
`;
export const ReviewImage = styled.div`
  width: 100px;
  aspect-ratio: 1/1;
  background-color: ${colors.gray400};
  border-radius: 10pxs;
  overflow: hidden;
`;

export const More = styled.span`
  margin-left: 5px;
  cursor: pointer;
  display: inline-block;
`;
export const ImagesContainer = styled.div`
  display: flex;
  gap: 5px; /* 이미지 간격 */
  /* overflow-x: auto; 가로 스크롤 */
`;
