import axios from 'axios';
import { ROUTE } from '../constants/routes';

const publicPaths: string[] = [
  "/v1/auth/sign-up",
  "/v1/users/check"
]

function createAPI(baseURL: string) {
  const api = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  api.interceptors.request.use(
    async (config) => {
      if (
        config.url &&
        !publicPaths.some((path) => config.url!.startsWith(path))
      ) {
        const token = sessionStorage.getItem("accessToken");
        if (token) {
          // token = await refreshTokenIfNeeded(); // TODO
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          alert("로그인이 필요합니다.");
          window.location.href = ROUTE.signIn;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      const { responseCode, errorMessage, serviceErrorMessage } = response.data;
      if (responseCode === "0000") {
        return response.data;
      } else {
        const error = new Error(errorMessage || serviceErrorMessage || '알 수 없는 에러');
        throw error;
      }
    },
    (error) => {
      throw new Error(error.message || '네트워크 오류');
    }
  );

  return api
}

export const CustomerAPI = createAPI(import.meta.env.VITE_CUSTOMER_BASE_URL)
export const DesignerAPI = createAPI(import.meta.env.VITE_DESIGNER_BASE_URL)
