export interface SignUpResponse {
  accessToken?: string;
  refreshToken?: string;
}

export interface SignUpRequest {
  socialId?: string;
  socialPlatform?: 'KAKAO' | 'GOOGLE' | 'APPLE';
  name?: string;
  phoneNumber?: string;
  email?: string;
  nickname?: string;
  profileImageUrl?: string;
}
