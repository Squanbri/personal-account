import { AxiosRequestConfig } from 'axios';

export interface TMakeRequestParams extends AxiosRequestConfig {
  authToken?: boolean;
}