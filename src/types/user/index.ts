export interface UserSignupInput {
    socialId: string;
    socialPlatform: string;
    name: string;
    phoneNum: string;
    address: string;
    nickname: string;
    profileImageUrl: string;
  }

export interface CheckNickNameResponse {
    message: string;
}

export interface SignUpResponse {
    accessToken: string;
    refreshToken: string;
}