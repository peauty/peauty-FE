import React, { useState, forwardRef } from "react";
import { Text } from "../../../../components";
import BottomSheet from "../../../../components/bottom-sheet/BottomSheet";
import StarRating from "../../../../components/star-rating/StarRating";
import ReviewPhotos from "./ReviewPhotos";
import ReviewItem from "./ReviewItem";
import { TabWrapper2 } from "../index.styles";
import { CustomerRiverWrapper, MoreReview } from "./index.styles";
import { IconContain } from "../ShopDetail/ShopInfo/index.styles";

interface Review {
  reviewId?: number;
  reviewDate?: string;
  reviewerNickname?: string;
  groomingStyle?: string;
  rating?: number;
  imageUrls?: string[];
  content?: string;
}

interface ShopReviewProps {
  reviews?: Review[];
  reviewsLoading?: boolean;
  id?: string;
  totalRating?: number;
  userId?: string;
}

const ShopReview = forwardRef<HTMLDivElement, ShopReviewProps>((props, ref) => {
  const { reviews = [], reviewsLoading, id, totalRating, userId } = props;
  const [visibleReviews, setVisibleReviews] = useState<Review[]>(
    reviews.slice(0, 3),
  ); // 처음 3개의 리뷰만 표시
  const [page, setPage] = useState(1); // 현재 페이지
  const [sortedReviews, setSortedReviews] = useState<Review[]>(reviews); // 정렬된 리뷰 상태
  const [sortOption, setSortOption] = useState<"date" | "rating">("date"); // 현재 선택된 정렬 옵션

  // 리뷰 더보기 핸들러
  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextReviews = sortedReviews.slice(0, nextPage * 3); // 다음 페이지의 리뷰 가져오기
    setVisibleReviews(nextReviews);
    setPage(nextPage);
  };

  // 더보기 버튼이 보이려면 visibleReviews.length가 전체 리뷰 개수보다 적을 때만 보여줌
  const hasMoreReviews = visibleReviews.length < sortedReviews.length;

  // 정렬 함수
  const handleSort = (option: "date" | "rating") => {
    setSortOption(option); // 선택된 정렬 옵션을 상태로 저장

    let sorted;
    if (option === "date") {
      // 최신순 정렬 (날짜가 최신일수록 앞에 오도록)
      sorted = [...reviews].sort((a, b) => {
        if (a.reviewDate && b.reviewDate) {
          return (
            new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime()
          );
        }
        return 0;
      });
    } else {
      // 평점 높은순 정렬
      sorted = [...reviews].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setSortedReviews(sorted); // 정렬된 리뷰 상태로 업데이트
    setVisibleReviews(sorted.slice(0, 3)); // 초기에는 3개의 리뷰만 표시
    setPage(1); // 페이지 번호 초기화
  };

  return (
    <TabWrapper2 ref={ref}>
      <Text typo="subtitle300">고객 리뷰</Text>
      <CustomerRiverWrapper>
        <IconContain>
          <Text typo="subtitle100">{totalRating}</Text>
          <StarRating rating={totalRating} size={17} />
        </IconContain>
      </CustomerRiverWrapper>

      <ReviewPhotos reviews={reviews} workspaceId={userId || ""} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <BottomSheet
          options={[
            { label: "최신순", onClick: () => handleSort("date") },
            {
              label: "평점 높은순",
              onClick: () => handleSort("rating"),
            },
          ]}
        />
      </div>

      {reviewsLoading && <Text typo="body300">리뷰 로딩 중...</Text>}

      {!reviewsLoading &&
        visibleReviews.map((review) => (
          <ReviewItem
            key={review.reviewId}
            rating={review.rating || 0}
            content={review.content || ""}
            username={review.reviewerNickname || ""}
            service={review.groomingStyle || ""}
            date={review.reviewDate || ""}
            images={review.imageUrls || []}
          />
        ))}

      {/* 리뷰 더보기 버튼 (3개 초과일 때만 나타냄) */}
      {hasMoreReviews && (
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
