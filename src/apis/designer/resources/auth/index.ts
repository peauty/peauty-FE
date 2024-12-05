import { SignUpRequest, SignUpResponse } from "../../../../types/designer/auth";
import { DesignerAPI } from "../../api";

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const res = await DesignerAPI.post<SignUpResponse>(`/v1/auth/sign-up`, data);
  return res.data;
};
