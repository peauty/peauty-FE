import styled from "styled-components";

export const ImageGrid = styled.div`
  display: flex;
  gap: 10px; /* 이미지 간격 */
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px; /* 라운드 처리 */
  overflow: hidden;
  flex-shrink: 0;
  aspect-ratio: 1 / 1; /* 정사각형 비율 유지 */
`;

export const Image = styled.img`
  width: 102px;
  height: 102px;
  object-fit: cover; /* 이미지 비율 유지하며 채우기 */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 102px;
  height: 102px;
  background: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const MoreText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* "+"와 "더보기" 간격 */
`;
