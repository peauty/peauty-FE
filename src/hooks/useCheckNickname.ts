import { useState } from 'react';
import { checkNickname } from '../apis/resources/userAPI';

interface HookState {
  loading: boolean;
  data: null | object;
  error: null | string;
}

export const useCheckNickname = () => {
  const [state, setState] = useState<HookState>({
    loading: false,
    data: null,
    error: null,
  });

  const check = async (nickname: string) => {
    setState({ loading: true, data: null, error: null });
    try {
      const result = await checkNickname(nickname);
      setState({ loading: false, data: result.data, error: null });
    } catch (error: any) {
      setState({ loading: false, data: null, error: error.message });
    }
  };

  return { ...state, check };
};

export const useSignup = () => {
  const [state, setState] = useState<HookState>({
    loading: false,
    data: null,
    error: null,
  });

  const check = async (nickname: string) => {
    setState({ loading: true, data: null, error: null });
    try {
      const result = await checkNickname(nickname);
      setState({ loading: false, data: result.data, error: null });
    } catch (error: any) {
      setState({ loading: false, data: null, error: error.message });
    }
  };

  return { ...state, check };
};