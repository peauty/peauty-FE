import { UploadImageResponse } from "../../../../types/customer/internal";
import { CustomerAPI } from "../../api";
import FormData from "form-data";

export const uploadImage = async (
  image: File,
): Promise<UploadImageResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await CustomerAPI.post<UploadImageResponse>(
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
