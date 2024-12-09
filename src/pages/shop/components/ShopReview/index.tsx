import React, { useState, forwardRef } from "react";
import { Text } from "../../../../components";
import BottomSheet from "../../../../components/bottom-sheet/BottomSheet";
import StarRating from "../../../../components/star-rating/StarRating";
import ReviewPhotos from "./ReviewPhotos";
import ReviewItem from "./ReviewItem";
import { TabWrapper2 } from "../index.styles";
import { CustomerRiverWrapper, MoreReview } from "./index.styles";
import { IconContain } from "../ShopDetail/ShopInfo/index.styles";

// 리뷰 데이터 타입 정의
interface Review {
  id: number;
  rating: number;
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
    rating: parseInt((Math.random() * 2 + 3).toFixed(1)), // 3.0 ~ 5.0 사이의 평점
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
  const allReviews = generateDummyReviews(0, 25); // 전체 리뷰 데이터
  const [visibleReviews, setVisibleReviews] = useState<Review[]>(
    allReviews.slice(0, 3),
  ); // 초기 5개만 표시
  const [page, setPage] = useState(1); // 현재 페이지

  // 리뷰 더보기 핸들러
  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextReviews = allReviews.slice(0, nextPage * 3); // 다음 페이지의 리뷰 가져오기
    setVisibleReviews(nextReviews);
    setPage(nextPage);
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
      {visibleReviews.map((review) => (
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

      {/* 리뷰 더보기 버튼 */}
      {visibleReviews.length < allReviews.length && (
        <MoreReview>
          <Text typo="body200" color="blue100" onClick={handleLoadMore}>
            리뷰 더보기
          </Text>
        </MoreReview>
      )}
    </TabWrapper2>
  );
});

export default ShopReview;
