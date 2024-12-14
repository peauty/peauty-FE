export type SocialPlatformType = 'KAKAO' | 'GOOGLE' | 'APPLE';



export interface SignUpResponse {
  accessToken?: string;
  refreshToken?: string;
}

export interface SignUpRequest {
  socialId?: string;
  socialPlatform?: SocialPlatformType;
  name?: string;
  phoneNumber?: string;
  address?: string;
  nickname?: string;
  profileImageUrl?: string;
}
