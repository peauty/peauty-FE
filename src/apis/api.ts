import axios from 'axios';

export const CustomerAPI = axios.create({
  baseURL: import.meta.env.VITE_CUSTOMER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

CustomerAPI.interceptors.response.use(
  (response) => {
    if (response.data.responseCode === "0000") {
      return response.data.data; // Return only the 'data' field
    } else {
      return Promise.reject(new Error(response.data.errorMessage || 'Unexpected Error'));
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const DesignerAPI = axios.create({
  baseURL: import.meta.env.VITE_DESIGNER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
