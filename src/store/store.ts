import { makeAutoObservable } from 'mobx';

import { IAccountStore } from './account/types';
import { IAuthStore } from './auth/types';
import AuthStore from './auth/authStore';
import AccountStore from './account/accountStore';

interface IStore {
  authStore: IAuthStore;
  accountStore: IAccountStore;
}

class Store implements IStore {
  authStore: IAuthStore;
  accountStore: IAccountStore;

  constructor() {
    this.authStore = new AuthStore();
    this.accountStore = new AccountStore();

    makeAutoObservable(this);
  }
}

export default new Store(); 