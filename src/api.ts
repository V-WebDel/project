import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { Token } from './utils';

const BACKEND_URL = 'https://10.react.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

interface Headers {
  [key: string]: string;
}


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = Token.get();

      if (token) {
        if (!config.headers) {
          config.headers = {}; // создаем объект headers, если его нет
        }
        (config.headers as Headers)['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      toast.dismiss();
      // toast.warn(error.response ? error.response.data.error : error.message);

      return Promise.reject(error);
    }
  );

  return api;
};
