export type ScissorsType = "NONE" | "GOLD" | "SILVER" | "BRONZE";

export type BadgeColorType = "BLUE" | "GREEN" | "BRONZE" | "SILVER" | "GOLD";

export type BadgeTypeType = "GENERAL" | "SCISSORS";

export interface GetCustomerProfileResponse {
  customerId?: number;
  name?: string;
  nickname?: string;
  profileImageUrl?: string;
  address?: string;
  phoneNumber?: string;
}

export interface UpdateCustomerProfileResponse {
  customerId?: number;
  name?: string;
  nickname?: string;
  phoneNumber?: string;
  address?: string;
  profileImageUrl?: string;
}

export interface UpdateCustomerProfileRequest {
  name?: string;
  nickname?: string;
  phoneNumber?: string;
  address?: string;
  profileImageUrl?: string;
}

export interface UploadProfileImageResponse {
  customerId?: number;
  uploadedProfileImageUrl?: string;
}

export interface GetDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrl?: string;
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
  paymentOptions?: string[];
  representativeBadges?: {
    badgeId?: number;
    badgeName?: string;
    badgeContent?: string;
    badgeImageUrl?: string;
    isRepresentativeBadge?: boolean;
    badgeColor?: BadgeColorType;
    badgeType?: BadgeTypeType;
  }[];
}

export interface Badge {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeImageUrl?: string;
  badgeColor?: BadgeColorType;
  badgeType?: BadgeTypeType;
}

export interface GetAroundWorkspacesResponse {
  customerId?: number;
  customerAddress?: string;
  workspaces?: {
    workspaceId?: number;
    workspaceName?: string;
    address?: string;
    addressDetail?: string;
    bannerImageUrl?: string;
    reviewCount?: number;
    reviewRating?: number;
    designerId?: number;
    designerName?: string;
    yearOfExperience?: number;
    representativeBadges?: {
      badgeId?: number;
      badgeName?: string;
      badgeContent?: string;
      badgeImageUrl?: string;
      badgeColor?: BadgeColorType;
      badgeType?: BadgeTypeType;
    }[];
  }[];
}

export interface GetAroundWorkspaceResponse {
  workspaceId?: number;
  workspaceName?: string;
  address?: string;
  addressDetail?: string;
  bannerImageUrl?: string;
  reviewCount?: number;
  reviewRating?: number;
  designerId?: number;
  designerName?: string;
  yearOfExperience?: number;
  representativeBadges?: {
    badgeId?: number;
    badgeName?: string;
    badgeContent?: string;
    badgeImageUrl?: string;
    badgeColor?: BadgeColorType;
    badgeType?: BadgeTypeType;
  }[];
}

export interface BadgeResponse {
  badgeId?: number;
  badgeName?: string;
  badgeContent?: string;
  badgeImageUrl?: string;
  badgeColor?: BadgeColorType;
  badgeType?: BadgeTypeType;
}

export interface CheckCustomerNicknameDuplicatedResponse {
  message?: string;
}

export interface GetDesignerBadgesForCustomerResponse {
  acquiredBadges?: {
    badgeId?: number;
    badgeName?: string;
    badgeContent?: string;
    badgeImageUrl?: string;
    badgeColor?: BadgeColorType;
    badgeType?: BadgeTypeType;
  }[];
  representativeBadges?: BadgeResponse[];
}
