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

  check = async () => {
    // const token = localStorage.getItem('token');

    // if (token !== null) {
    //   const response = await AuthService.check();

    //   if (response.status !== 401) {
    //     this.setAuth(true);
    //   } else {
    //     this.setAuth(false);
    //     localStorage.removeItem('token');
    //   }
    //   return;
    // }

    this.setAuth(false);
  }

  async login(user: TUserLogin) {
    const response = await AuthService.login(user);
    
    if (response.status !== 401) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response;
  }

  logout = () => {
    // AuthService.logout();
    // localStorage.removeItem('token');
    // this.setAuth(false);
  };
}

export default AuthStore;