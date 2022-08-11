import { AxiosResponse } from 'axios';

import { TUserLogin } from 'types/entities/UserTypes';
import { LoginResponse } from 'types/api/AuthResponses';
export interface IAuthStore {
  isAuth: boolean | null;

  setAuth: (isAuth: boolean) => void;

  check: () => void;
  login: (user: TUserLogin) => Promise<AxiosResponse<LoginResponse>>;
  logout: () => void;
}