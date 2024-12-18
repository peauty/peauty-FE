export type ReviewRatingType =
  | "ZERO"
  | "ZERO_POINT_FIVE"
  | "ONE"
  | "ONE_POINT_FIVE"
  | "TWO"
  | "TWO_POINT_FIVE"
  | "THREE"
  | "THREE_POINT_FIVE"
  | "FOUR"
  | "FOUR_POINT_FIVE"
  | "FIVE";

export type ContentsType = "GOOD_SERVICE" | "COME_AGAIN" | "KIND" | "MYPICK";

export interface UpdateReviewResponse {
  reviewId?: number;
  biddingThreadId?: number;
  reviewRating?: number;
  contentDetail?: string;
  contentGenerals?: string[];
  reviewImages?: string[];
}

export interface UpdateReviewRequest {
  reviewRating?: ReviewRatingType;
  contentDetail?: string;
  contentGenerals?: ContentsType[];
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
  contentGenerals?: string[];
}

export interface RegisterReviewRequest {
  reviewRating?: ReviewRatingType;
  contentDetail?: string;
  contentGenerals?: ContentsType[];
  reviewImages?: string[];
}

export interface GetUserReviewsResponse {
  customerId?: number;
  reviews?: {
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
  }[];
}

export interface GetReviewDetailResponse {
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

export interface DesignerProfile {
  workspaceName?: string;
  address?: string;
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
