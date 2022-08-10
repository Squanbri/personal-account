import { makeAutoObservable } from 'mobx';

import { IAuthStore } from './types';

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

  async login(email: string, password: string) {
    // const response = await AuthService.login(email, password);

    // if ('token' in response) {
    //   localStorage.setItem('token', response.token);
    //   this.setAuth(true);
    // }
    
    // return response;
  }

  logout = () => {
    // AuthService.logout();
    // localStorage.removeItem('token');
    // this.setAuth(false);
  };
}

export default AuthStore;