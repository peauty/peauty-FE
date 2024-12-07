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

export interface CheckCustomerNicknameDuplicatedResponse {
  message?: string;
}
