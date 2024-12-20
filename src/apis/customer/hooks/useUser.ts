import { signUp } from "../resources/auth";
import { checkCustomerNicknameDuplicated } from "../resources/customer";
import { SignUpRequest } from "../../../types/customer/auth";

export const useCheckNickname = () => {
  const check = async (nickname: string) => {
    try {
      const result = await checkCustomerNicknameDuplicated({ nickname });
      if (result.message === "사용해도 좋은 닉네임입니다.") {
        return true;
      } else {
        return false;
      }
    } catch (error: any) {
      return false;
    }
  };
  return { check };
};

export const useSignup = () => {
  const signup = async (userData: SignUpRequest) => {
    try {
      const result = await signUp(userData);
      if (!result.accessToken || !result.refreshToken) {
        throw new Error("토큰이 존재하지 않습니다.");
      } else {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken", result.refreshToken);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return { signup };
};
