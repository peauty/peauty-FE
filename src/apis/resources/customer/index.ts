import { CustomerAPI } from "../../api";
import { GetCustomerProfileResponse } from "../../../types/customer";
import { UpdateCustomerProfileResponse } from "../../../types/customer";
import { UpdateCustomerProfileRequest } from "../../../types/customer";
import { UploadProfileImageResponse } from "../../../types/customer";
import { CheckCustomerNicknameDuplicatedResponse } from "../../../types/customer";

export const getCustomerProfile = async (userId: number) => {
  const res = await CustomerAPI.get<GetCustomerProfileResponse>(`/v1/users/${userId}/profile`);
  return res;
};

export const updateCustomerProfile = async (userId: number, data: UpdateCustomerProfileRequest) => {
  const res = await CustomerAPI.put<UpdateCustomerProfileResponse>(`/v1/users/${userId}/profile`, data);
  return res;
};

export const uploadProfileImage = async (userId: number) => {
  const res = await CustomerAPI.post<UploadProfileImageResponse>(`/v1/users/${userId}/profile/images`);
  return res;
};

export const checkCustomerNicknameDuplicated = async (query: { nickname: string }) => {
  const res = await CustomerAPI.get<CheckCustomerNicknameDuplicatedResponse>(`/v1/users/check`, { params: query });
  return res;
};
