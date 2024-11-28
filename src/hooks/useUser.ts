import { useState } from 'react';
import { checkNicknameAPI, signupAPI } from '../apis/resources/userAPI';
import {UserSignupInput} from '../apis/resources/userAPI';

interface HookState {
  checkNicknameLoading: boolean;
  checkData: null | Record<string, any> ;
  error: null | string;
}

export const useCheckNickname = () => {
  const [state, setState] = useState<HookState>({
    checkNicknameLoading: false,
    checkData: null,
    error: null,
  });

  const check = async (nickname: string) => {
    setState({ checkNicknameLoading: true, checkData: null, error: null });
    try {
      const result = await checkNicknameAPI(nickname);
      setState({ checkNicknameLoading: false, checkData: result.data, error: null });
    } catch (error: any) {
      setState({ checkNicknameLoading: false, checkData: null, error: error.message });
    }
  };

  return { ...state, check };
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