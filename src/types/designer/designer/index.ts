export interface GetDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrl?: string;
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: 'NONE' | 'GOLD' | 'SILVER' | 'BRONZE';
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
  paymentOptions?: 'CARD' | 'CASH' | 'ACCOUNT'[];
  representativeBadgeNames?: string[];
}

export interface UpdateDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrl?: string;
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: 'NONE' | 'GOLD' | 'SILVER' | 'BRONZE';
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
  paymentOptions?: 'CARD' | 'CASH' | 'ACCOUNT'[];
  representativeBadgeNames?: string[];
}

export interface UpdateDesignerWorkspaceRequest {
  bannerImageUrl?: string;
  workspaceName?: string;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  yearOfExperience?: number;
  licenses?: string[];
  paymentOptions?: 'CARD' | 'CASH' | 'ACCOUNT'[];
  openHours?: string;
  closeHours?: string;
  openDays?: string;
  directionGuide?: string;
  phoneNumber?: string;
}

export interface CreateDesignerWorkspaceResponse {
  designerId?: number;
  workspaceId?: number;
  bannerImageUrl?: string;
  workspaceName?: string;
  reviewRating?: number;
  reviewsCount?: number;
  scissors?: 'NONE' | 'GOLD' | 'SILVER' | 'BRONZE';
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
  paymentOptions?: 'CARD' | 'CASH' | 'ACCOUNT'[];
  representativeBadgeNames?: string[];
}

export interface CreateDesignerWorkspaceRequest {
  bannerImageUrl?: string;
  workspaceName?: string;
  introduceTitle?: string;
  introduce?: string;
  noticeTitle?: string;
  notice?: string;
  address?: string;
  addressDetail?: string;
  yearOfExperience?: number;
  licenses?: string[];
  paymentOptions?: 'CARD' | 'CASH' | 'ACCOUNT'[];
  openHours?: string;
  closeHours?: string;
  openDays?: string;
  directionGuide?: string;
  phoneNumber?: string;
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

export interface CheckDesignerNicknameDuplicatedResponse {
  message?: string;
}