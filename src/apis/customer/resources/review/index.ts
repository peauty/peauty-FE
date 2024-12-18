import { CustomerAPI } from "../../api";
import { UpdateReviewResponse } from "../../../../types/customer/review";
import { UpdateReviewRequest } from "../../../../types/customer/review";
import { DeleteReviewResponse } from "../../../../types/customer/review";
import { RegisterReviewResponse } from "../../../../types/customer/review";
import { RegisterReviewRequest } from "../../../../types/customer/review";
import { GetUserReviewsResponse } from "../../../../types/customer/review";
import { GetReviewDetailResponse } from "../../../../types/customer/review";
import { GetDesignerReviewsResponse } from "../../../../types/customer/review";

export const updateReview = async (
  userId: number,
  reviewId: number,
  data: UpdateReviewRequest,
): Promise<UpdateReviewResponse> => {
  const res = await CustomerAPI.put<UpdateReviewResponse>(
    `/v1/users/${userId}/reviews/${reviewId}`,
    data,
  );
  return res.data;
};

export const deleteReview = async (
  userId: number,
  reviewId: number,
): Promise<DeleteReviewResponse> => {
  const res = await CustomerAPI.delete<DeleteReviewResponse>(
    `/v1/users/${userId}/reviews/${reviewId}`,
  );
  return res.data;
};

export const registerReview = async (
  userId: number,
  puppyId: number,
  processId: number,
  threadId: number,
  data: RegisterReviewRequest,
): Promise<RegisterReviewResponse> => {
  const res = await CustomerAPI.post<RegisterReviewResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}/threads/${threadId}/reviews`,
    data,
  );
  return res.data;
};

export const getUserReviews = async (
  userId: number,
): Promise<GetUserReviewsResponse> => {
  const res = await CustomerAPI.get<GetUserReviewsResponse>(
    `/v1/users/${userId}/reviews`,
  );
  return res.data;
};

export const getReviewDetail = async (
  userId: number,
  puppyId: number,
  processId: number,
  threadId: number,
  reviewId: number,
): Promise<GetReviewDetailResponse> => {
  const res = await CustomerAPI.get<GetReviewDetailResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/bidding/processes/${processId}/threads/${threadId}/reviews/${reviewId}`,
  );
  return res.data;
};

export const getDesignerReviews = async (
  designerId: number,
): Promise<GetDesignerReviewsResponse> => {
  const res = await CustomerAPI.get<GetDesignerReviewsResponse>(
    `/v1/users/${designerId}/shop/reviews`,
  );
  return res.data;
};
