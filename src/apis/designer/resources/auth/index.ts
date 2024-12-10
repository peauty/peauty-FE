import { DesignerAPI } from "../../api";
import { SignUpResponse } from "../../../../types/designer/auth";
import { SignUpRequest } from "../../../../types/designer/auth";

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const res = await DesignerAPI.post<SignUpResponse>(`/v1/auth/sign-up`, data);
  return res.data;
};
