import { DesignerAPI } from "../../api";
import { GetDesignerWorkspaceResponse } from "../../../../types/designer/designer";
import { UpdateDesignerWorkspaceResponse } from "../../../../types/designer/designer";
import { UpdateDesignerWorkspaceRequest } from "../../../../types/designer/designer";
import { CreateDesignerWorkspaceResponse } from "../../../../types/designer/designer";
import { CreateDesignerWorkspaceRequest } from "../../../../types/designer/designer";
import { GetDesignerAccountResponse } from "../../../../types/designer/designer";
import { UpdateDesignerAccountResponse } from "../../../../types/designer/designer";
import { UpdateDesignerAccountRequest } from "../../../../types/designer/designer";
import { UploadProfileImageResponse } from "../../../../types/designer/designer";
import FormData from "form-data";
import { CheckDesignerNicknameDuplicatedResponse } from "../../../../types/designer/designer";

export const getDesignerWorkspace = async (
  userId: number,
): Promise<GetDesignerWorkspaceResponse> => {
  const res = await DesignerAPI.get<GetDesignerWorkspaceResponse>(
    `/v1/users/${userId}/shop`,
  );
  return res.data;
};

export const updateDesignerWorkspace = async (
  userId: number,
  data: UpdateDesignerWorkspaceRequest,
): Promise<UpdateDesignerWorkspaceResponse> => {
  const res = await DesignerAPI.put<UpdateDesignerWorkspaceResponse>(
    `/v1/users/${userId}/shop`,
    data,
  );
  return res.data;
};

export const createDesignerWorkspace = async (
  userId: number,
  data: CreateDesignerWorkspaceRequest,
): Promise<CreateDesignerWorkspaceResponse> => {
  const res = await DesignerAPI.post<CreateDesignerWorkspaceResponse>(
    `/v1/users/${userId}/shop`,
    data,
  );
  return res.data;
};

export const getDesignerAccount = async (
  userId: number,
): Promise<GetDesignerAccountResponse> => {
  const res = await DesignerAPI.get<GetDesignerAccountResponse>(
    `/v1/users/${userId}/account`,
  );
  return res.data;
};

export const updateDesignerAccount = async (
  userId: number,
  data: UpdateDesignerAccountRequest,
): Promise<UpdateDesignerAccountResponse> => {
  const res = await DesignerAPI.put<UpdateDesignerAccountResponse>(
    `/v1/users/${userId}/account`,
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
  const res = await DesignerAPI.post<UploadProfileImageResponse>(
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

export const checkDesignerNicknameDuplicatedResponse = async (query: {
  nickname: string;
}): Promise<CheckDesignerNicknameDuplicatedResponse> => {
  const res = await DesignerAPI.get<CheckDesignerNicknameDuplicatedResponse>(
    `/v1/users/check`,
    { params: query },
  );
  return res.data;
};
