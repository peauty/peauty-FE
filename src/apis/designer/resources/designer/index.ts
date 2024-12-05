import { DesignerAPI } from "../../api";
import { GetDesignerWorkspaceResponse } from "../../../../types/designer/designer";
import { UpdateDesignerWorkspaceResponse } from "../../../../types/designer/designer";
import { UpdateDesignerWorkspaceRequest } from "../../../../types/designer/designer";
import { CreateDesignerWorkspaceResponse } from "../../../../types/designer/designer";
import { CreateDesignerWorkspaceRequest } from "../../../../types/designer/designer";
import { GetDesignerProfileResponse } from "../../../../types/designer/designer";
import { UpdateDesignerProfileResponse } from "../../../../types/designer/designer";
import { UpdateDesignerProfileRequest } from "../../../../types/designer/designer";
import { UploadProfileImageResponse } from "../../../../types/designer/designer";
import FormData from "form-data";
import { CheckDesignerNicknameDuplicatedResponse } from "../../../../types/designer/designer";

export const getDesignerWorkspace = async (userId: number): Promise<GetDesignerWorkspaceResponse> => {
  const res = await DesignerAPI.get<GetDesignerWorkspaceResponse>(`/v1/users/${userId}/shop`);
  return res.data;
};

export const updateDesignerWorkspace = async (userId: number, data: UpdateDesignerWorkspaceRequest): Promise<UpdateDesignerWorkspaceResponse> => {
  const res = await DesignerAPI.put<UpdateDesignerWorkspaceResponse>(`/v1/users/${userId}/shop`, data);
  return res.data;
};

export const createDesignerWorkspace = async (userId: number, data: CreateDesignerWorkspaceRequest): Promise<CreateDesignerWorkspaceResponse> => {
  const res = await DesignerAPI.post<CreateDesignerWorkspaceResponse>(`/v1/users/${userId}/shop`, data);
  return res.data;
};

export const getDesignerProfile = async (userId: number): Promise<GetDesignerProfileResponse> => {
  const res = await DesignerAPI.get<GetDesignerProfileResponse>(`/v1/users/${userId}/profile`);
  return res.data;
};

export const updateDesignerProfile = async (userId: number, data: UpdateDesignerProfileRequest): Promise<UpdateDesignerProfileResponse> => {
  const res = await DesignerAPI.put<UpdateDesignerProfileResponse>(`/v1/users/${userId}/profile`, data);
  return res.data;
};

export const uploadProfileImage = async (userId: number, image: File): Promise<UploadProfileImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await DesignerAPI.post<UploadProfileImageResponse>(`/v1/users/${userId}/profile/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const checkDesignerNicknameDuplicatedResponse = async (query: { nickname: string }): Promise<CheckDesignerNicknameDuplicatedResponse> => {
  const res = await DesignerAPI.get<CheckDesignerNicknameDuplicatedResponse>(`/v1/users/check`, { params: query });
  return res.data;
};
