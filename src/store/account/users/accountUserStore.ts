import { makeAutoObservable, observable, ObservableMap, values } from 'mobx';

import { UserService } from 'API';
import { IAccountStore } from './../types';
import { IAccountUserStore } from '../types';
import { TUser } from 'types/entities/UserTypes';

class AccountUserStore implements IAccountUserStore {
  accountStore: IAccountStore;
  users: ObservableMap<number, TUser> = observable.map();
  isLoading = true;

  constructor(accountStore: IAccountStore) {
    this.accountStore = accountStore;
    makeAutoObservable(this);
  }

  get isEmpty() {
    return this.users.size === 0;
  }

  get list() {
    return values(this.users);
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setUser(user: TUser) {
    this.users.set(user.id, user);
  }

  removeUser(userId: number) {
    this.users.delete(userId);
  }

  async fetchUsers(query: string) {
    this.setLoading(true);
    this.users.clear();

    const response = await UserService.fetchUsers(query);

    if (response.data.users !== undefined) {
      response.data.users.forEach(user => 
        this.setUser(user)
      );
    }    
    this.setLoading(false);
  };

  async addUser(userId: number) {
    const response = await UserService.addUser(userId);

    if (response.status === 200) {
      const user = this.list.find(user => user.id === userId);

      if (user !== undefined) {
        this.removeUser(userId);
        this.accountStore.contactStore.setContact(user);
      }
    }
  }
}

export default AccountUserStore;