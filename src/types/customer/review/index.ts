export type ReviewRatingType = 'ZERO' | 'ZERO_POINT_FIVE' | 'ONE' | 'ONE_POINT_FIVE' | 'TWO' | 'TWO_POINT_FIVE' | 'THREE' | 'THREE_POINT_FIVE' | 'FOUR' | 'FOUR_POINT_FIVE' | 'FIVE';

export type ContentGeneralType = 'GOOD_SERVICE' | 'COME_AGAIN' | 'KIND' | 'MYPICK';



export interface GetReviewDetailResponse {
  reviewId?: number;
  biddingThreadId?: number;
  reviewRating?: string;
  contentDetail?: string;
  contentGeneral?: string;
  reviewImages?: string[];
}

export interface UpdateReviewResponse {
  reviewId?: number;
  biddingThreadId?: number;
  reviewRating?: string;
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
  reviewRating?: string;
  contentDetail?: string;
  contentGeneral?: string;
}

export interface RegisterReviewRequest {
  reviewRating?: ReviewRatingType;
  contentDetail?: string;
  contentGeneral?: ContentGeneralType;
  reviewImages?: string[];
}
