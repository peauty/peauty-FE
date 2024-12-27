import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { GetUserReviewsResponse } from "../../../../../types/customer/review";
import {
  deleteReview,
  getUserReviews,
} from "../../../../../apis/customer/resources/review";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import NoReview from "./NoReview";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../../constants/routes";
import { useSetRecoilState } from "recoil";
import { ReviewAtom, ReviewData } from "../../../../../atoms/reviewAtom";
import DeleteReviewModal from "./DeleteReviewModal";

interface review {
  reviewId?: number;
  biddingThreadId?: number;
  biddingProcessId?: number;
  puppyId?: number;
  reviewRating?: number;
  contentDetail?: string;
  contentGenerals?: string[];
  reviewImages?: string[];
  groomingStyle?: string;
  puppyName?: string;
  estimateCost?: number;
  reviewCreatedAt?: string;
  designerProfile?: {
    workspaceName?: string;
    address?: string;
  };
}

export default function ReviewedService() {
  const [reviews, setReviews] = useState<GetUserReviewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { userId } = useUserDetails();
  const navigate = useNavigate();
  const setReviewData = useSetRecoilState(ReviewAtom);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const handleDeleteButton = (review: review) => {
    setSelectedReviewId(review.reviewId || null);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!userId || !selectedReviewId) return;

    try {
      await deleteReview(userId, selectedReviewId);
      // Update local state to remove the deleted review
      if (reviews) {
        setReviews({
          ...reviews,
          reviews: reviews.reviews?.filter(
            (review) => review.reviewId !== selectedReviewId,
          ),
        });
      }
    } catch (error) {
      console.error("Failed to delete review:", error);
      alert("삭제 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedReviewId(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedReviewId(null);
  };

  const handleEditButton = (review: review) => {
    const reviewData: ReviewData = {
      userId: userId || 0,
      puppyId: review.puppyId || 0,
      processId: review.biddingProcessId || 0,
      threadId: review.biddingThreadId || 0,
      reviewId: review.reviewId,
    };

    setReviewData(reviewData);
    navigate(ROUTE.customer.mypage.review.edit);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      if (!userId) return;

      try {
        setIsLoading(true);
        const data = await getUserReviews(userId);
        setReviews(data);
        console.log(data);
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
    <div>
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
          onEdit={() => handleEditButton(review)}
          onDelete={() => handleDeleteButton(review)}
        />
      ))}
      <DeleteReviewModal
        isOpen={isDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
}
