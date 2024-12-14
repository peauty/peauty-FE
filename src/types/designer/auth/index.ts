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
  email?: string;
  nickname?: string;
  profileImageUrl?: string;
}
