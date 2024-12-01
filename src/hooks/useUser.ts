import { useState } from 'react';
import { getCheckNickname, postSignup } from '../apis/resources/user';
import { UserSignupInput } from '../types/user';

export const useCheckNickname = () => {
  const [isNickNameAvailable, setisNickNameAvailable] = useState<boolean>(false);

  const check = async (nickname: string) => {
    try {
      const result = await getCheckNickname(nickname);
      if (result.message === "사용해도 좋은 닉네임입니다.") {
        setisNickNameAvailable(true);
      } else {
        setisNickNameAvailable(false);
      }
    } catch (error: any) {
      setisNickNameAvailable(false);
    }
  };
  return { isNickNameAvailable, setisNickNameAvailable, check };
};

export const useSignup = () => {
  const signup = async (userData: UserSignupInput) => {
      try {
        const result = await postSignup(userData);
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken",result.refreshToken);
      } catch (error: any) {
        console.error(error);
      }
  };

  return { signup };
};