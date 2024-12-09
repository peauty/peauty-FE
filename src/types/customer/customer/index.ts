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
    designerName?: string;
    yearOfExperience?: number;
    representativeBadgesName?: string[];
    scissorsRank?: "NONE" | "GOLD" | "SILVER" | "BRONZE";
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
  designerName?: string;
  yearOfExperience?: number;
  representativeBadgesName?: string[];
  scissorsRank?: "NONE" | "GOLD" | "SILVER" | "BRONZE";
}

export interface CheckCustomerNicknameDuplicatedResponse {
  message?: string;
}
