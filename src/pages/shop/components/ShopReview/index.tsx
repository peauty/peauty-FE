import React, { useState, forwardRef, useEffect } from "react";
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

export const ShopReview = forwardRef<HTMLDivElement, ShopReviewProps>(
  (props, ref) => {
    const { reviews = [], reviewsLoading, id, totalRating, userId } = props;
    const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);
    const [page, setPage] = useState(1);
    const [sortedReviews, setSortedReviews] = useState<Review[]>([]);
    const [sortOption, setSortOption] = useState<"date" | "rating">("date");

    useEffect(() => {
      if (reviews.length > 0) {
        const sorted = [...reviews].sort((a, b) => {
          if (a.reviewDate && b.reviewDate) {
            return (
              new Date(b.reviewDate).getTime() -
              new Date(a.reviewDate).getTime()
            );
          }
          return 0;
        });
        setSortedReviews(sorted);
        setVisibleReviews(sorted.slice(0, 3));
        setPage(1);
      }
    }, [reviews]);

    const handleLoadMore = () => {
      const nextPage = page + 1;
      const nextReviews = sortedReviews.slice(0, nextPage * 3);
      setVisibleReviews(nextReviews);
      setPage(nextPage);
    };

    const hasMoreReviews = visibleReviews.length < sortedReviews.length;

    const handleSort = (option: "date" | "rating") => {
      setSortOption(option);
      let sorted;
      if (option === "date") {
        sorted = [...reviews].sort((a, b) => {
          if (a.reviewDate && b.reviewDate) {
            return (
              new Date(b.reviewDate).getTime() -
              new Date(a.reviewDate).getTime()
            );
          }
          return 0;
        });
      } else {
        sorted = [...reviews].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }
      setSortedReviews(sorted);
      setVisibleReviews(sorted.slice(0, 3));
      setPage(1);
    };

    return (
      <TabWrapper2 ref={ref}>
        <Text typo="subtitle300">고객 리뷰</Text>
        <CustomerRiverWrapper>
          <IconContain>
            <Text typo="subtitle100">
              {totalRating != null ? Math.trunc(totalRating * 100) / 100 : ""}
            </Text>
            <StarRating rating={totalRating ?? 0} size={17} />
          </IconContain>
        </CustomerRiverWrapper>

        {!reviewsLoading && reviews.length === 0 && (
          <Text typo="body300" color="gray100" style={{ marginTop: "20px" }}>
            작성된 리뷰가 없어요
          </Text>
        )}

        {!reviewsLoading && reviews.length > 0 && (
          <>
            <ReviewPhotos reviews={reviews} workspaceId={userId || ""} />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <BottomSheet
                options={[
                  { label: "최신순", onClick: () => handleSort("date") },
                  { label: "평점 높은순", onClick: () => handleSort("rating") },
                ]}
              />
            </div>

            {visibleReviews.map((review) => (
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

            {hasMoreReviews && (
              <MoreReview>
                <Text typo="body200" color="blue100" onClick={handleLoadMore}>
                  리뷰 더보기
                </Text>
              </MoreReview>
            )}
          </>
        )}

        {reviewsLoading && <Text typo="body300">리뷰 로딩 중...</Text>}
      </TabWrapper2>
    );
  },
);
