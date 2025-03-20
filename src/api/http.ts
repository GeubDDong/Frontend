import { useAuthStore } from '@/store/authStore';
import axios, { AxiosRequestConfig } from 'axios';
import { refreshToken } from './auth.api';

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const DEFAULT_TIMEOUT = 3000;

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

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = useAuthStore.getState().accessToken;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest.retry) {
        originalRequest.retry = true;

        try {
          const res = await refreshToken();
          const newAccessToken = res.accessToken;

          useAuthStore.getState().setAccessToken(newAccessToken);

          // 재요청
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          useAuthStore.getState().logout();
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
