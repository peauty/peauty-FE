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
  const displayImages = images.slice(0, 4); // 처음 4장까지만 표시

  return (
    <ImageGrid>
      {displayImages.map((src, index) => (
        <ImageWrapper key={index}>
          {/* 마지막 이미지에 "더보기" 표시 */}
          {index === 3 && images.length > 4 ? (
            <>
              <Image src={src} alt="더보기" />
              <Overlay>
                <MoreText>
                  <span>+</span> 더보기
                </MoreText>
              </Overlay>
            </>
          ) : (
            <Image src={src} alt={`이미지 ${index + 1}`} />
          )}
        </ImageWrapper>
      ))}
    </ImageGrid>
  );
}
