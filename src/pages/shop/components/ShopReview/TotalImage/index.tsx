import React from "react";
import { AppBar } from "../../../../../components";
import styled from "styled-components";

interface TotalImagesProps {
  images?: string[]; // 모든 이미지 URL 배열
}

export default function TotalImages({ images = [] }: TotalImagesProps) {
  return (
    <Container>
      {/* 상단 AppBar */}
      <AppBar prefix="backButton" title="리뷰 갤러리" />

      {/* 이미지 그리드 */}
      <ImageGrid>
        {images.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`리뷰 이미지 ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </Container>
  );
}

// 스타일링
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열로 설정 */
  gap: 8px; /* 이미지 사이 간격 */
  padding: 16px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1; /* 정사각형 비율 유지 */
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하며 채우기 */
  border-radius: 4px;
`;
