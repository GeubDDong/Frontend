import { httpClient, httpClientWithoutRefresh } from './http';
import { AxiosRequestConfig } from 'axios';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

const requestHandler = async <T, P = unknown>(
  method: RequestMethod,
  url: string,
  payload?: P,
  config?: AxiosRequestConfig & { refreshAndRetry?: boolean },
): Promise<T> => {
  const refreshAndRetry = config?.refreshAndRetry ?? true;
  let response;
  const client = refreshAndRetry ? httpClient : httpClientWithoutRefresh;

  switch (method) {
    case 'post':
      response = await client.post<T>(url, payload, config);
      break;
    case 'get':
      response = await client.get<T>(url, config);
      break;
    case 'put':
      response = await client.put<T>(url, payload, config);
      break;
    case 'delete':
      response = await client.delete<T>(url, config);
      break;
  }

  return response.data;
};

export default requestHandler;
