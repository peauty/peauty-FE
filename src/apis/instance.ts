import axios from 'axios';

export const axiosCustomerInstance = axios.create({
  baseURL: import.meta.env.VITE_CUSTOMER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosDesignerInstance = axios.create({
  baseURL: import.meta.env.VITE_DESIGNER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
