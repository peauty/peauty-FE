export type ReviewRatingType = 'ZERO' | 'ZERO_POINT_FIVE' | 'ONE' | 'ONE_POINT_FIVE' | 'TWO' | 'TWO_POINT_FIVE' | 'THREE' | 'THREE_POINT_FIVE' | 'FOUR' | 'FOUR_POINT_FIVE' | 'FIVE';

export type ContentGeneralType = 'GOOD_SERVICE' | 'COME_AGAIN' | 'KIND' | 'MYPICK';



export interface GetReviewDetailResponse {
  reviewId?: number;
  biddingThreadId?: number;
  reviewRating?: number;
  contentDetail?: string;
  contentGeneral?: string;
  reviewImages?: string[];
}

export interface UpdateReviewResponse {
  reviewId?: number;
  biddingThreadId?: number;
  reviewRating?: number;
  contentDetail?: string;
  contentGeneral?: string;
  reviewImages?: string[];
}

export interface UpdateReviewRequest {
  reviewRating?: ReviewRatingType;
  contentDetail?: string;
  contentGeneral?: ContentGeneralType;
  reviewImageUrls?: string[];
}

export interface DeleteReviewResponse {
  message?: string;
}

export interface RegisterReviewResponse {
  reviewId?: number;
  biddingThreadId?: number;
  reviewRating?: number;
  contentDetail?: string;
  contentGeneral?: string;
}

export interface RegisterReviewRequest {
  reviewRating?: ReviewRatingType;
  contentDetail?: string;
  contentGeneral?: ContentGeneralType;
  reviewImages?: string[];
}

export interface GetDesignerReviewsResponse {
  designerId?: number;
  reviews?: {
  reviewId?: number;
  reviewDate?: string;
  reviewerNickname?: string;
  groomingStyle?: string;
  rating?: number;
  imageUrls?: string[];
  content?: string;
}[];
}

export interface ReviewDetails {
  reviewId?: number;
  reviewDate?: string;
  reviewerNickname?: string;
  groomingStyle?: string;
  rating?: number;
  imageUrls?: string[];
  content?: string;
}
