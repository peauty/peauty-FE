import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { GetUserReviewsResponse } from "../../../../../types/customer/review";
import { getUserReviews } from "../../../../../apis/customer/resources/review";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import NoReview from "./NoReview";

export default function ReviewedService() {
  const [reviews, setReviews] = useState<GetUserReviewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { userId } = useUserDetails();

  useEffect(() => {
    const fetchReviews = async () => {
      if (!userId) return;

      try {
        setIsLoading(true);
        const data = await getUserReviews(userId);
        setReviews(data);
        setError(null);
      } catch (err) {
        setError("리뷰를 불러오는데 실패했습니다.");
        setReviews(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p>리뷰를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px] text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!reviews?.reviews?.length) {
    return <NoReview message="작성한 리뷰가 없어요" />;
  }

  return (
    <div className="space-y-4">
      {reviews.reviews.map((review) => (
        <ReviewCard
          key={review.reviewId}
          reviewDate={review.reviewCreatedAt?.split("T")?.[0] ?? ""}
          groomingStyle={review.groomingStyle ?? ""}
          puppyName={review.puppyName ?? ""}
          address={review.designerProfile?.address ?? ""}
          totalCost={review.estimateCost ?? 0}
          rating={review.reviewRating ?? 0}
          reviewText={review.contentDetail ?? ""}
          reviewImages={review.reviewImages ?? []}
          onEdit={() => alert(`리뷰 ${review.reviewId} 수정 클릭!`)}
          onDelete={() => alert(`리뷰 ${review.reviewId} 삭제 클릭!`)}
        />
      ))}
    </div>
  );
}
