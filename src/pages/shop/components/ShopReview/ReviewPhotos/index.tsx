import React from "react";
import { Text } from "../../../../../components";
import ImageGallery from "../ImageGallery";
import { PhotosWrapper } from "./index.styles";
import { useNavigate } from "react-router-dom";

interface Review {
  imageUrls?: string[];
}

interface ReviewPhotosProps {
  reviews: Review[];
  workspaceId: string; // workspaceId 추가
}

export default function ReviewPhotos({
  reviews,
  workspaceId,
}: ReviewPhotosProps) {
  const navigate = useNavigate();

  // 리뷰 이미지들을 모아 배열로 만듦
  const images = reviews
    .flatMap((review) => review.imageUrls || [])
    .filter((url) => url);

  const handleTotalImage = () => {
    navigate(`/customer/request/shops/${workspaceId}/gallery`, {
      state: { images },
    });
  };

  return (
    <PhotosWrapper>
      <span style={{ display: "flex", whiteSpace: "break-spaces" }}>
        <Text typo="body200" style={{ flex: "1" }}>
          리뷰 사진
        </Text>
        <Text typo="body300" color="blue100" onClick={handleTotalImage}>
          더보기
        </Text>
      </span>
      {/* ImageGallery 컴포넌트에 핸들러 전달 */}
      <ImageGallery
        images={images}
        totalImages={images.length}
        onMoreClick={handleTotalImage} // "더보기" 클릭 이벤트
      />
    </PhotosWrapper>
  );
}
