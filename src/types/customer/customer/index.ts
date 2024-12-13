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

export interface Badge {
  badgeId: number;
  badgeName: string;
  badgeColor: string;
}

export interface Workspace {
  workspaceId: number;
  workspaceName: string;
  address: string;
  addressDetail: string;
  bannerImageUrl: string;
  reviewCount: number;
  reviewRating: number;
  designerName: string;
  yearOfExperience: number; // 추가된 필드
  representativeBadges: Badge[]; // 기존 representativeBadges를 이름 배열로 변경
  scissorsRank: string; // 추가된 필드
}


export interface GetAroundWorkspacesResponse {
  customerId: number;
  customerAddress: string;
  workspaces: Workspace[];
}

export interface CheckCustomerNicknameDuplicatedResponse {
  message?: string;
}
