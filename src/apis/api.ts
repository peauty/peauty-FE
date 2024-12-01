import axios from 'axios';

export const CustomerAPI = axios.create({
  baseURL: import.meta.env.VITE_CUSTOMER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

CustomerAPI.interceptors.response.use(
  (response) => {
    const { responseCode, errorMessage, serviceErrorMessage } = response.data;
    if (responseCode === "0000") {
      return response.data.data;
    } else {
      const error = new Error(errorMessage || serviceErrorMessage || '알 수 없는 에러');
      throw error;
    }
  },
  (error) => {
    throw new Error(error.message || '네트워크 오류');
  }
);

export const DesignerAPI = axios.create({
  baseURL: import.meta.env.VITE_DESIGNER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
