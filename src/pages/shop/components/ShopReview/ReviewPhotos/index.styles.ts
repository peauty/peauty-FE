import styled from "styled-components";

// 전체 이미지 컨테이너
export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 이미지 그리드: 3열
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  gap: 8px; /* 이미지 사이 간격 */
  padding: 8px 0;
`;

// 각 이미지 래퍼
export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1; /* 정사각형 비율 유지 */
  overflow: hidden;
  border-radius: 4px;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하며 채우기 */
`;
