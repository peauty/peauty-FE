import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Text } from "../../../../components";
import BottomSheet from "../../../../components/bottom-sheet/BottomSheet";
import StarRating from "../../../../components/star-rating/StarRating";
import ReviewPhotos from "./ReviewPhotos";
import ReviewItem from "./ReviewItem";
import { TabWrapper2 } from "../index.styles";
import { CustomerRiverWrapper } from "./index.styles";
import { IconContain } from "../ShopDetail/ShopInfo/index.styles";
// 리뷰 데이터 타입 정의
interface Review {
  id: number;
  rating: string;
  content: string;
  username: string;
  date: string;
  service: string;
  images: string[]; // 이미지 배열 추가
}

// 더미 데이터 생성 함수
const generateDummyReviews = (start: number, count: number): Review[] =>
  Array.from({ length: count }, (_, i) => ({
    id: start + i,
    rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 ~ 5.0 사이의 평점
    content: `리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 ${start + i + 1}`,
    username: `사용자 ${start + i + 1}`,
    service: `가위컷 + 곰돌이컷 ${start + i + 1}`,
    date: `2024.12.04`,
    images: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
  }));

const ShopReview = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const [reviews, setReviews] = useState<Review[]>(() =>
    generateDummyReviews(0, 5),
  ); // 초기 리뷰 데이터
  const [page, setPage] = useState(1); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 추가 데이터 여부

  const loaderRef = useRef<HTMLDivElement | null>(null); // 로더 요소
  const observerRef = useRef<IntersectionObserver | null>(null); // Observer 관리

  // 무한 스크롤 감지
  useEffect(() => {
    if (!loaderRef.current) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          loadMoreReviews(); // 추가 데이터 로드
        }
      },
      { threshold: 1.0 },
    );

    observerRef.current.observe(loaderRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [hasMore]);

  // 추가 리뷰 로드 함수
  const loadMoreReviews = () => {
    setTimeout(() => {
      const newReviews = generateDummyReviews(page * 5, 5);
      setReviews((prev) => [...prev, ...newReviews]);
      setPage((prev) => prev + 1);

      // 가상 데이터가 25개 이상이면 더 이상 데이터 없음
      if ((page + 1) * 5 >= 5) setHasMore(false);
    }, 1000);
  };

  return (
    <TabWrapper2 ref={ref} {...props}>
      <Text typo="subtitle300">고객 리뷰</Text>
      <CustomerRiverWrapper>
        <IconContain>
          <Text typo="subtitle100">5.0</Text>
          <StarRating rating={5.0} size={17} />
        </IconContain>
      </CustomerRiverWrapper>
      <ReviewPhotos />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <BottomSheet options={["최신순", "평점 높은순"]} />
      </div>

      {/* 리뷰 리스트 */}
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          rating={review.rating}
          content={review.content}
          username={review.username}
          service={review.service}
          date={review.date}
          images={review.images}
        />
      ))}

      {/* 로더 */}
      {hasMore && (
        <div ref={loaderRef} style={{ textAlign: "center", padding: "20px" }}>
          <Text typo="body200" color="gray200">
            로딩 중...
          </Text>
        </div>
      )}
    </TabWrapper2>
  );
});

export default ShopReview;
