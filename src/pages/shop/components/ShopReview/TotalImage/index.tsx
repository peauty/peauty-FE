import React from "react";
import { AppBar, GNB } from "../../../../../components";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import theme from "../../../../../style/theme";

export default function TotalImages() {
  const location = useLocation();
  const { images = [] } = location.state || {}; // state에서 이미지 가져오기

  console.log("전달된 이미지:", images); // 디버깅용

  return (
    <Container>
      {/* 상단 AppBar */}
      <AppBar prefix="backButton" title="리뷰 갤러리" />

      {/* 이미지 그리드 */}
      <ImageGrid>
        {images.length > 0 ? (
          images.map((src: string, index: number) => (
            <ImageWrapper key={index}>
              <Image src={src} alt={`리뷰 이미지 ${index + 1}`} />
            </ImageWrapper>
          ))
        ) : (
          <p>이미지가 없습니다.</p>
        )}
      </ImageGrid>
      <GNB type="designer" />
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
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 16px;
  margin-top: ${theme.size.appBarHeight};
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
