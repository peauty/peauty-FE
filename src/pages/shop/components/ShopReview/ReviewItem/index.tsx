import { useState, useRef, useEffect } from "react";
import { Text } from "../../../../../components";
import Rating from "../../../../../components/rating";

import {
  ReviewContain,
  ReviewHeader,
  ReviewImage,
  More,
  ImagesContainer,
  ContentWrapper,
} from "./index.styles";

interface ReviewItemProps {
  rating: number; // 평점
  content: string; // 리뷰 내용
  username: string; // 작성자 이름
  date: string; // 작성 날짜
  service: string; // 서비스명
  images?: string[]; // 리뷰 이미지 URL 배열
}

export default function ReviewItem({
  rating,
  content,
  username,
  date,
  service,
  images = [],
}: ReviewItemProps) {
  const [isExpanded, setIsExpanded] = useState(false); // 전체 보기 상태
  const [isTruncated, setIsTruncated] = useState(false); // 줄 수 초과 여부
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseFloat(
        window.getComputedStyle(contentRef.current).lineHeight,
      );
      const maxHeight = lineHeight * 3; // 3줄 높이 계산
      if (contentRef.current.scrollHeight > maxHeight) {
        setIsTruncated(true); // 내용이 3줄을 초과할 경우
      }
    }
  }, [content]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev); // 전체 보기 토글
  };

  return (
    <ReviewContain>
      <Text typo="body400" color="gray200">
        {date}
      </Text>
      <div>
        <Text typo="subtitle300">{username}</Text>
        <ReviewHeader>
          <Text typo="body300" color="blue100">
            {service}
          </Text>
          <Rating score={rating} />
        </ReviewHeader>
      </div>

      {/* 이미지 렌더링 */}
      {images.length > 0 && (
        <ImagesContainer>
          {images.map((image, index) => (
            <ReviewImage key={index}>
              <img
                src={image}
                alt={`리뷰 이미지 ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ReviewImage>
          ))}
        </ImagesContainer>
      )}

      <ContentWrapper isExpanded={isExpanded} ref={contentRef}>
        <Text typo="body400">{content}</Text>
      </ContentWrapper>
      {isTruncated && (
        <More onClick={toggleExpand}>
          <Text typo="body300" color="gray200">
            {isExpanded ? "접기" : "... 더보기"}
          </Text>
        </More>
      )}
    </ReviewContain>
  );
}
