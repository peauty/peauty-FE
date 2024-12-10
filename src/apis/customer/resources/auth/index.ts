import { CustomerAPI } from "../../api";
import { SignUpResponse } from "../../../../types/customer/auth";
import { SignUpRequest } from "../../../../types/customer/auth";

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const res = await CustomerAPI.post<SignUpResponse>(`/v1/auth/sign-up`, data);
  console.log(res.data);
  return res.data;
};
