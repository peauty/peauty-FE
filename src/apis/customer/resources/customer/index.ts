import { CustomerAPI } from "../../api";
import { GetCustomerProfileResponse } from "../../../../types/customer/customer";
import { UpdateCustomerProfileResponse } from "../../../../types/customer/customer";
import { UpdateCustomerProfileRequest } from "../../../../types/customer/customer";
import { UploadProfileImageResponse } from "../../../../types/customer/customer";
import FormData from "form-data";
import { GetDesignerWorkspaceResponse } from "../../../../types/customer/customer";
import { GetAroundWorkspacesResponse } from "../../../../types/customer/customer";
import { CheckCustomerNicknameDuplicatedResponse } from "../../../../types/customer/customer";
import { GetDesignerBadgesForCustomerResponse } from "../../../../types/customer/customer";

export const getCustomerProfile = async (
  userId: number,
): Promise<GetCustomerProfileResponse> => {
  const res = await CustomerAPI.get<GetCustomerProfileResponse>(
    `/v1/users/${userId}/profile`,
  );
  return res.data;
};

export const updateCustomerProfile = async (
  userId: number,
  data: UpdateCustomerProfileRequest,
): Promise<UpdateCustomerProfileResponse> => {
  const res = await CustomerAPI.put<UpdateCustomerProfileResponse>(
    `/v1/users/${userId}/profile`,
    data,
  );
  return res.data;
};

export const uploadProfileImage = async (
  userId: number,
  image: File,
): Promise<UploadProfileImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await CustomerAPI.post<UploadProfileImageResponse>(
    `/v1/users/${userId}/profile/images`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data;
};

export const getDesignerWorkspace = async (
  userId: number,
): Promise<GetDesignerWorkspaceResponse> => {
  const res = await CustomerAPI.get<GetDesignerWorkspaceResponse>(
    `/v1/${userId}/shop`,
  );
  return res.data;
};

export const getAroundWorkspaces = async (
  userId: number,
): Promise<GetAroundWorkspacesResponse> => {
  const res = await CustomerAPI.get<GetAroundWorkspacesResponse>(
    `/v1/users/${userId}/serach`,
  );
  return res.data;
};

export const checkCustomerNicknameDuplicated = async (query: {
  nickname: string;
}): Promise<CheckCustomerNicknameDuplicatedResponse> => {
  const res = await CustomerAPI.get<CheckCustomerNicknameDuplicatedResponse>(
    `/v1/users/check`,
    { params: query },
  );
  return res.data;
};

export const getDesignerBadgesForCustomer = async (
  designerId: number,
): Promise<GetDesignerBadgesForCustomerResponse> => {
  const res = await CustomerAPI.get<GetDesignerBadgesForCustomerResponse>(
    `/v1/designers/${designerId}/badges`,
  );
  return res.data;
};
