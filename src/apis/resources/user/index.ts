import { CheckNickNameResponse, SignUpResponse, UserSignupInput } from "../../../types/user";
import { CustomerAPI } from "../../api";

export const getCheckNickname = async (nickname: string) => {
  const res: CheckNickNameResponse = await CustomerAPI.get('/users/check', {
    params: { nickname },
  });
  return res;
};

export const postSignup = async (userData: UserSignupInput) => {
  const res: SignUpResponse = await CustomerAPI.post('/auth/sign-up', userData);
  return res;
};
