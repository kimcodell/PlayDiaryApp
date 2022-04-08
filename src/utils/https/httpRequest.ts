import { AxiosError } from 'axios';
import { AppDispatch } from './../../store/index';
import axiosClient from './axiosClient';

interface Request {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: Object;
  params?: Object;
  dispatch?: AppDispatch;
}

const httpRequest = async ({ url, method, data, params, ...rest }: Request) => {
  try {
    const response = await axiosClient.request<any, any>({
      url,
      method,
      data,
      params,
      ...rest,
    });
    return response;
  } catch (error) {
    const errorResponse = (error as AxiosError).response;
    if (errorResponse) {
      console.log('HTTP_ERROR_OBJECT', JSON.stringify(errorResponse), url);
    }
    throw errorResponse;
  }
};

export default httpRequest;
