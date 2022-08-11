import { makeAutoObservable } from 'mobx';

import { IAccountContactStore, IAccountStore, IAccountUserStore } from './types';
import AccountContactStore from './contacts/accountContactStore';
import AccountUserStore from './users/accountUserStore';

class AccountStore implements IAccountStore {
  contactStore: IAccountContactStore;
  userStore: IAccountUserStore;

  constructor() {
    this.contactStore = new AccountContactStore(this);
    this.userStore = new AccountUserStore(this);
    makeAutoObservable(this);
  }
}

export default AccountStore;