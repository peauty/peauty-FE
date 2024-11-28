import { axiosCustomerInstance } from "../instance";

interface DefaultResponse {
  responseCode: string;
  errorMessage: string;
  serviceErrorMessage: string;
  data: Record<string, unknown>;
}

export const checkNicknameAPI = async (nickname: string): Promise<DefaultResponse> => {
  return axiosCustomerInstance.get('/users/check', {
    params: { nickname },
  });
};

export interface UserSignupInput {
  socialId: string;
  socialPlatform: string;
  name: string;
  phoneNum: string;
  address: string;
  nickname: string;
  profileImageUrl: string;
}

export const signupAPI = async (userData: UserSignupInput): Promise<DefaultResponse> => {
  return axiosCustomerInstance.post('/auth/sign-up', userData);
};
