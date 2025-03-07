import httpClient from './http';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

const requestHandler = async <T>(
  method: RequestMethod,
  url: string,
  payload?: T,
) => {
  let response;

  switch (method) {
    case 'post':
      response = await httpClient.post(url, payload);
      break;
    case 'get':
      response = await httpClient.get(url);
      break;
    case 'put':
      response = await httpClient.put(url, payload);
      break;
    case 'delete':
      response = await httpClient.delete(url);
      break;
  }
  return response.data;
};

export default requestHandler;
