import FormData from "form-data";
import { UploadImageResponse, UploadImagesResponse } from "../../../../types/designer/internal";
import { DesignerAPI } from "../../api";

export const uploadImages = async (images: File[]): Promise<UploadImagesResponse> => {
  const formData = new FormData();
  images.forEach(image => {
    formData.append("image", image);  
  });
  const res = await DesignerAPI.post<UploadImagesResponse>(`/v1/internal/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const uploadImage = async (image: File): Promise<UploadImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await DesignerAPI.post<UploadImageResponse>(`/v1/internal/image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
