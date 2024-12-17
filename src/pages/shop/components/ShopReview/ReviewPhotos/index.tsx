import React from "react";
import { Text } from "../../../../../components";
import ImageGallery from "../ImageGallery";
import { PhotosWrapper } from "./index.styles";

interface Review {
  imageUrls?: string[];
}

interface ReviewPhotosProps {
  reviews: Review[];
}

export default function ReviewPhotos({ reviews }: ReviewPhotosProps) {
  // 리뷰 이미지들을 모아 하나의 배열로 만듦
  const images = reviews
    .flatMap((review) => review.imageUrls || []) // 각 리뷰의 imageUrls를 병합
    .filter((url) => url); // undefined나 null 제거

  return (
    <PhotosWrapper>
      <Text typo="body200">리뷰 사진</Text>
      <ImageGallery images={images} totalImages={images.length} />
    </PhotosWrapper>
  );
}
