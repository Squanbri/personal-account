import { AxiosResponse } from 'axios';

import { LoginResponse } from 'types/api/UserResponses';
import { TUserLogin } from 'types/entities/UserTypes';
export interface IAuthStore {
  isAuth: boolean | null;

  setAuth: (isAuth: boolean) => void;

  check: () => void;
  login: (user: TUserLogin) => Promise<AxiosResponse<LoginResponse>>;
  logout: () => void;
}