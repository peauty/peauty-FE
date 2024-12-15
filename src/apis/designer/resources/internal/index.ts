import { DesignerAPI } from "../../api";
import { UploadImagesResponse } from "../../../../types/designer/internal";
import FormData from "form-data";
import { UploadImageResponse } from "../../../../types/designer/internal";

export const uploadImages = async (
  images: File,
): Promise<UploadImagesResponse> => {
  const formData = new FormData();
  formData.append("image", images);
  const res = await DesignerAPI.post<UploadImagesResponse>(
    `/v1/internal/images`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data;
};

export const uploadImage = async (
  image: File,
): Promise<UploadImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await DesignerAPI.post<UploadImageResponse>(
    `/v1/internal/image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data;
};
