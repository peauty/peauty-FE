import { CustomerAPI } from "../../api";
import { UploadImageResponse } from "../../../types/internal";

export const uploadImage = async () => {
  const res = await CustomerAPI.post<UploadImageResponse>(`/v1/internal/images`);
  return res;
};
