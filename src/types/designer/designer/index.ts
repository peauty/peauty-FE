import { Badge } from "../../customer/customer";

export type ScissorsType = "NONE" | "GOLD" | "SILVER" | "BRONZE";

export type BadgeColorType = "BLUE" | "GREEN" | "BRONZE" | "SILVER" | "GOLD";

export type BadgeTypeType = "GENERAL" | "SCISSORS";

export type PaymentOptionType = "CARD" | "CASH" | "ACCOUNT";

export interface GetDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrl?: string;
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: "NONE" | "GOLD" | "SILVER" | "BRONZE";
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  phoneNumber?: string;
  yearOfExperience?: number;
  openHours?: string;
  closeHours?: string;
  openDay?: string;
  directionGuide?: string;
  licenses?: string[]; // 자격증 이미지 URL 리스트
  paymentOptions?: ("계좌 이체" | "현금 결제" | "카드 결제")[]; // 결제 옵션
  representativeBadgeNames?: Badge[]; // 대표 배지 이름 리스트
}

export interface UpdateDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrls?: string[];
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: ScissorsType;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  phoneNumber?: string;
  yearOfExperience?: number;
  openHours?: string;
  closeHours?: string;
  openDay?: string;
  directionGuide?: string;
  licenses?: string[];
  paymentOptions?: PaymentOptionType[];
  representativeBadgeNames?: string[];
}

export interface UpdateDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrls?: string[];
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: ScissorsType;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  phoneNumber?: string;
  yearOfExperience?: number;
  openHours?: string;
  closeHours?: string;
  openDay?: string;
  directionGuide?: string;
  licenses?: string[];
  paymentOptions?: PaymentOptionType[];
  representativeBadgeNames?: string[];
}

export interface UpdateDesignerWorkspaceRequest {
  bannerImageUrls?: string[];
  workspaceName?: string;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  yearOfExperience?: number;
  licenses?: string[];
  paymentOptions?: PaymentOptionType[];
  openHours?: string;
  closeHours?: string;
  openDays?: string;
  directionGuide?: string;
  phoneNumber?: string;
}

export interface CreateDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrls?: string[];
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: ScissorsType;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  phoneNumber?: string;
  yearOfExperience?: number;
  openHours?: string;
  closeHours?: string;
  openDay?: string;
  directionGuide?: string;
  licenses?: string[];
  paymentOptions?: PaymentOptionType[];
  representativeBadgeNames?: string[];
}

export interface CreateDesignerWorkspaceRequest {
  bannerImageUrls?: string[];
  workspaceName?: string;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  yearOfExperience?: number;
  licenses?: string[];
  paymentOptions?: PaymentOptionType[];
  openHours?: string;
  closeHours?: string;
  openDays?: string;
  directionGuide?: string;
  phoneNumber?: string;
}

export interface UpdateRepresentativeBadgeResponse {
  badgeId?: number;
  badgeName?: string;
  isRepresentativeBadge?: boolean;
}

export interface UpdateRepresentativeBadgeRequest {
  isRepresentativeBadge?: boolean;
}

export interface GetDesignerAccountResponse {
  designerId?: number;
  name?: string;
  nickname?: string;
  profileImageUrl?: string;
  email?: string;
  phoneNumber?: string;
}

export interface UpdateDesignerAccountResponse {
  designerId?: number;
  name?: string;
  nickname?: string;
  phoneNumber?: string;
  profileImageUrl?: string;
  email?: string;
}

export interface UpdateDesignerAccountRequest {
  name?: string;
  nickname?: string;
  phoneNumber?: string;
  address?: string;
  profileImageUrl?: string;
  email?: string;
}

export interface UploadProfileImageResponse {
  designerId?: number;
  uploadedProfileImageUrl?: string;
}

export interface GetDesignerBadgesResponse {
  acquiredBadges?: {
    badgeId?: number;
    badgeName?: string;
    badgeContent?: string;
    badgeImageUrl?: string;
    badgeColor?: BadgeColorType;
    badgeType?: BadgeTypeType;
  }[];
  unacquiredBadges?: BadgeResponse[];
  representativeBadges?: BadgeResponse[];
}

export interface BadgeResponse {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeImageUrl?: string;
  badgeColor?: BadgeColorType;
  badgeType?: BadgeTypeType;
}

export interface CheckDesignerNicknameDuplicatedResponse {
  message?: string;
}
