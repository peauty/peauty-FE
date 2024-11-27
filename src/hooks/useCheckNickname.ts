import { useState } from 'react';
import { checkNickname } from '../apis/resources/userAPI';

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
      const result = await checkNickname(nickname);
      setState({ checkNicknameLoading: false, checkData: result.data, error: null });
    } catch (error: any) {
      setState({ checkNicknameLoading: false, checkData: null, error: error.message });
    }
  };

  return { ...state, check };
};

export const useSignup = () => {
  const [state, setState] = useState<HookState>({
    checkNicknameLoading: false,
    checkData: null,
    error: null,
  });

  const check = async (nickname: string) => {
    setState({ checkNicknameLoading: true, checkData: null, error: null });
    try {
      const result = await checkNickname(nickname);
      setState({ checkNicknameLoading: false, checkData: result.data, error: null });
    } catch (error: any) {
      setState({ checkNicknameLoading: false, checkData: null, error: error.message });
    }
  };

  return { ...state, check };
};