import React from "react";
import {
  ImageGrid,
  Image,
  ImageWrapper,
  MoreText,
  Overlay,
} from "./index.styles";

interface ImageGridProps {
  images: string[]; // 이미지 배열
  totalImages: number; // 총 이미지 수 (더보기 텍스트에 사용)
}

export default function ImageGallery({ images, totalImages }: ImageGridProps) {
  return (
    <ImageGrid>
      {images.slice(0, 3).map((src, index) => (
        <ImageWrapper key={index}>
          <Image src={src} alt={`이미지 ${index + 1}`} />
        </ImageWrapper>
      ))}

      {/* 마지막 이미지에 "더보기" 표시 */}
      <ImageWrapper>
        <Image src={images[3]} alt="더보기" />
        <Overlay>
          <MoreText>
            <span>+</span> 더보기
          </MoreText>
        </Overlay>
      </ImageWrapper>
    </ImageGrid>
  );
}
