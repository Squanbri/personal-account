import { makeAutoObservable } from 'mobx';

import { IAuthStore } from './types';
import { TUserLogin } from 'types/entities/UserTypes';
import { AuthService } from 'API';

class AuthStore implements IAuthStore {
  isAuth: boolean | null;

  constructor() {
    this.isAuth = null;

    makeAutoObservable(this);
    this.check();
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  async login(user: TUserLogin) {
    const response = await AuthService.login(user);
    
    if (response.status !== 401) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response;
  }

  check() {
    const token = localStorage.getItem('token');

    if (token !== null) {
      AuthService.check()
        .then(() => this.setAuth(true))
        .catch(() => {
          localStorage.removeItem('token');
          this.setAuth(false);
        });

      return;
    }

    this.setAuth(false);
  }

  logout = () => {
    localStorage.removeItem('token');
    this.setAuth(false);
  };
}

export default AuthStore;