import { useAuthStore } from '@/store/authStore';
import axios, { AxiosRequestConfig } from 'axios';
import { refreshToken } from './auth.api';

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const DEFAULT_TIMEOUT = 5000;

const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const { user, setUser } = useAuthStore.getState();

      if (error.response?.status === 401 && !originalRequest.retry && user) {
        originalRequest.retry = true;

        try {
          await refreshToken();
          // 재요청
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          setUser(null);
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

const httpClient = createClient();

export default httpClient;
