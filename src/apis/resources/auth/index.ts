import { CustomerAPI } from "../../api";
import { SignUpResponse } from "../../../types/auth";
import { SignUpRequest } from "../../../types/auth";

export const signUp = async (data: SignUpRequest) => {
  const res = await CustomerAPI.post<SignUpResponse>(`/v1/auth/sign-up`, data);
  return res;
};
