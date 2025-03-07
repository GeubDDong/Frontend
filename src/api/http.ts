import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = '';
const DEFAULT_TIMEOUT = 3000;

const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'content-type': 'application/json',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

const httpClient = createClient();

export default httpClient;
