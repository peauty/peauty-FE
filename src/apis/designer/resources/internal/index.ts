import { DesignerAPI } from "../../api";
import {
  UploadImagesResponse,
  UploadImageResponse,
} from "../../../../types/designer/internal";
import FormData from "form-data";

// 여러 이미지를 업로드하는 함수
export const uploadImages = async (
  images: File[],
): Promise<UploadImagesResponse> => {
  const formData = new FormData();

  // 여러 이미지를 추가
  images.forEach((image) => {
    formData.append("image", image);
  });

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

// 하나의 이미지를 업로드하는 함수
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
