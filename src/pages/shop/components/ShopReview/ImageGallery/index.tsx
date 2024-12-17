import React from "react";
import {
  ImageGrid,
  Image,
  ImageWrapper,
  MoreText,
  Overlay,
} from "./index.styles";

interface ImageGalleryProps {
  images: string[];
  totalImages: number;
  onMoreClick?: () => void; // "더보기" 클릭 핸들러 추가
}

export default function ImageGallery({
  images,
  totalImages,
  onMoreClick,
}: ImageGalleryProps) {
  const displayImages = images.slice(0, 4); // 처음 4장까지만 표시

  return (
    <ImageGrid>
      {displayImages.map((src, index) => (
        <ImageWrapper
          key={index}
          onClick={index === 3 ? onMoreClick : undefined}
        >
          {index === 3 && images.length > 4 ? (
            <>
              <Image src={src} alt="더보기" />
              <Overlay onClick={onMoreClick}>
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
