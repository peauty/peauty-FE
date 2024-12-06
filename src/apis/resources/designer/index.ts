import { CustomerAPI } from "../../customer/api";
import { GetDesignerWorkspaceResponse } from "../../../types/designer";
import { UpdateDesignerWorkspaceResponse } from "../../../types/designer";
import { UpdateDesignerWorkspaceRequest } from "../../../types/designer";
import { CreateDesignerWorkspaceResponse } from "../../../types/designer";
import { CreateDesignerWorkspaceRequest } from "../../../types/designer";
import { GetDesignerProfileResponse } from "../../../types/designer";
import { UpdateDesignerProfileResponse } from "../../../types/designer";
import { UpdateDesignerProfileRequest } from "../../../types/designer";
import { UploadProfileImageResponse } from "../../../types/designer";
import FormData from "form-data";
import { CheckDesignerNicknameDuplicatedResponse } from "../../../types/designer";

export const getDesignerWorkspace = async (userId: number): Promise<GetDesignerWorkspaceResponse> => {
  const res = await CustomerAPI.get<GetDesignerWorkspaceResponse>(`/v1/users/${userId}/shop`);
  return res.data;
};

export const updateDesignerWorkspace = async (userId: number, data: UpdateDesignerWorkspaceRequest): Promise<UpdateDesignerWorkspaceResponse> => {
  const res = await CustomerAPI.put<UpdateDesignerWorkspaceResponse>(`/v1/users/${userId}/shop`, data);
  return res.data;
};

export const createDesignerWorkspace = async (userId: number, data: CreateDesignerWorkspaceRequest): Promise<CreateDesignerWorkspaceResponse> => {
  const res = await CustomerAPI.post<CreateDesignerWorkspaceResponse>(`/v1/users/${userId}/shop`, data);
  return res.data;
};

export const getDesignerProfile = async (userId: number): Promise<GetDesignerProfileResponse> => {
  const res = await CustomerAPI.get<GetDesignerProfileResponse>(`/v1/users/${userId}/profile`);
  return res.data;
};

export const updateDesignerProfile = async (userId: number, data: UpdateDesignerProfileRequest): Promise<UpdateDesignerProfileResponse> => {
  const res = await CustomerAPI.put<UpdateDesignerProfileResponse>(`/v1/users/${userId}/profile`, data);
  return res.data;
};

export const uploadProfileImage = async (userId: number, image: File): Promise<UploadProfileImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await CustomerAPI.post<UploadProfileImageResponse>(`/v1/users/${userId}/profile/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const checkDesignerNicknameDuplicatedResponse = async (query: { nickname: string }): Promise<CheckDesignerNicknameDuplicatedResponse> => {
  const res = await CustomerAPI.get<CheckDesignerNicknameDuplicatedResponse>(`/v1/users/check`, { params: query });
  return res.data;
};
