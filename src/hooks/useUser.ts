import { useState } from 'react';
import { checkNicknameAPI, signupAPI } from '../apis/resources/userAPI';
import {UserSignupInput} from '../apis/resources/userAPI';

interface HookState {
  checkNicknameLoading: boolean;
  checkData: null | Record<string, any> ;
  error: null | string;
}

export const useCheckNickname = () => {
  const [isNickNameAvailable, setisNickNameAvailable] = useState<boolean>(false);

  const check = async (nickname: string) => {
    try {
      const result = await checkNicknameAPI(nickname);
      if (result.data["responseCode"] === "0000") {
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

interface SignupHookState {
  signupData: null | Record<string, any>;
  signupLoading: boolean;
  signupError: string;
}

export const useSignup = () => {
  const [state, setState] = useState<SignupHookState>({
    signupData: null,
    signupLoading: false,
    signupError: "",
  });

  const signup = async (userData: UserSignupInput) => {
    setState({ signupData: null, signupLoading: true, signupError: "" });
    try {
      const result = await signupAPI(userData);
      setState({ signupData: result.data, signupLoading: false, signupError: "" });
    } catch (error: any) {
      setState({ signupData: null, signupLoading: false, signupError: error.message });
    }
  };

  return { ...state, signup };
};