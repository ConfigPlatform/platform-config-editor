import axios, {AxiosRequestConfig} from 'axios';
import {get as getl} from 'lodash';
import {IHttpMethod} from './types';

const getHeaders = (type: string): {[key: string]: string} => ({
  'Content-Type': type || 'application/json',
});

const failHandler = (res: any) => {
  const messageTitle = getl(res, 'response.data.message', '');
  const isFail = getl(res, 'response.data.fail', true);
  const statusCode = getl(res, 'response.status', '');
  const statusText = getl(res, 'response.statusText', '');
  const silent = getl(res, 'response.data.silent', false);

  // TODO add custom logic to display error
};

const httpMethod = async ({method, url, data, type = ''}: IHttpMethod) => {
  const params: AxiosRequestConfig = {
    method,
    url,
    headers: getHeaders(type),
    withCredentials: true,
  };

  if (data) {
    params.data = data;
  }

  try {
    let res = await axios(params);
    return await res.data;
  } catch (error) {
    failHandler(error);
    return error;
  }
};

export const getRequest = ({url}: Omit<IHttpMethod, 'data'>): Promise<any> => httpMethod({method: 'get', url});

export const postRequest = ({url, data, type}: IHttpMethod): Promise<any> =>
  httpMethod({method: 'post', url, data, type});

export const patchRequest = ({url, data, type}: IHttpMethod): Promise<any> =>
  httpMethod({method: 'patch', url, data, type});

export const delRequest = ({url, data}: IHttpMethod): Promise<any> => httpMethod({method: 'delete', url, data});

export const putRequest = ({url, data, type}: IHttpMethod): Promise<any> =>
  httpMethod({method: 'put', url, data, type});
