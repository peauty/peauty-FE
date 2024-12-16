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
  scissor?: 'NONE' | 'GOLD' | 'SILVER' | 'BRONZE';
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
  scissor?: 'NONE' | 'GOLD' | 'SILVER' | 'BRONZE';
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

export interface GetDesignerProfileResponse {
  designerId?: number;
  name?: string;
  nickname?: string;
  profileImageUrl?: string;
  email?: string;
  phoneNum?: string;
}

export interface UpdateDesignerProfileResponse {
  designerId?: number;
  name?: string;
  nickname?: string;
  phoneNum?: string;
  profileImageUrl?: string;
  email?: string;
}

export interface UpdateDesignerProfileRequest {
  name?: string;
  nickname?: string;
  phoneNum?: string;
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