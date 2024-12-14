import { CustomerAPI } from "../../api";
import { UploadImagesResponse } from "../../../../types/customer/internal";
import FormData from "form-data";
import { UploadImageResponse } from "../../../../types/customer/internal";

export const uploadImages = async (): Promise<UploadImagesResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await CustomerAPI.post<UploadImagesResponse>(`/v1/internal/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const uploadImage = async (image: File): Promise<UploadImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await CustomerAPI.post<UploadImageResponse>(`/v1/internal/image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
