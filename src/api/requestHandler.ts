import httpClient from './http';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

const requestHandler = async <T, P = unknown>(
  method: RequestMethod,
  url: string,
  payload?: P,
): Promise<T> => {
  let response;

  switch (method) {
    case 'post':
      response = await httpClient.post<T>(url, payload);
      break;
    case 'get':
      response = await httpClient.get<T>(url);
      break;
    case 'put':
      response = await httpClient.put<T>(url, payload);
      break;
    case 'delete':
      response = await httpClient.delete<T>(url);
      break;
  }

  return response.data;
};

export default requestHandler;
