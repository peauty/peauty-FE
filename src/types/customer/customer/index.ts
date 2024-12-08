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
  workspaces?: GetAroundWorkspaceResponse[];
}

export interface CheckCustomerNicknameDuplicatedResponse {
  message?: string;
}

export interface GetDesignerBadgesForCustomerResponse {
  acquiredBadges?: BadgeResponse[];
  representativeBadges?: BadgeResponse[];
}
