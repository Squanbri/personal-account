import { IAuthStore } from './auth/types';
import { makeAutoObservable } from 'mobx';
import AuthStore from './auth/authStore';

interface IStore {
  auth: IAuthStore;
}

class Store implements IStore {
  auth: IAuthStore;

  constructor() {
    this.auth = new AuthStore();

    makeAutoObservable(this);
  }
}

export default new Store(); 