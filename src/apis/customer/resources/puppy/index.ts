import {
  GetPuppyDetailResponse,
  UpdatePuppyDetailRequest,
  UpdatePuppyDetailResponse,
  DeletePuppyResponse,
  GetPuppyProfilesResponse,
  RegisterPuppyRequest,
  RegisterPuppyResponse,
  UploadPuppyImageResponse,
} from "../../../../types/customer/puppy";
import { CustomerAPI } from "../../api";
import FormData from "form-data";

export const getPuppyDetail = async (
  userId: number,
  puppyId: number,
): Promise<GetPuppyDetailResponse> => {
  const res = await CustomerAPI.get<GetPuppyDetailResponse>(
    `/v1/users/${userId}/puppies/${puppyId}`,
  );
  return res.data;
};

export const updatePuppyDetail = async (
  userId: number,
  puppyId: number,
  data: UpdatePuppyDetailRequest,
): Promise<UpdatePuppyDetailResponse> => {
  const res = await CustomerAPI.put<UpdatePuppyDetailResponse>(
    `/v1/users/${userId}/puppies/${puppyId}`,
    data,
  );
  return res.data;
};

export const deletePuppy = async (
  userId: number,
  puppyId: number,
): Promise<DeletePuppyResponse> => {
  const res = await CustomerAPI.delete<DeletePuppyResponse>(
    `/v1/users/${userId}/puppies/${puppyId}`,
  );
  return res.data;
};

export const getPuppyProfiles = async (
  userId: number,
): Promise<GetPuppyProfilesResponse> => {
  const res = await CustomerAPI.get<GetPuppyProfilesResponse>(
    `/v1/users/${userId}/puppies`,
  );
  return res.data;
};

export const registerPuppy = async (
  userId: number,
  data: RegisterPuppyRequest,
): Promise<RegisterPuppyResponse> => {
  const res = await CustomerAPI.post<RegisterPuppyResponse>(
    `/v1/users/${userId}/puppies`,
    data,
  );
  return res.data;
};

export const uploadPuppyImage = async (
  userId: number,
  puppyId: number,
  image: File,
): Promise<UploadPuppyImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await CustomerAPI.post<UploadPuppyImageResponse>(
    `/v1/users/${userId}/puppies/${puppyId}/images`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data;
};