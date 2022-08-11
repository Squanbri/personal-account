import { makeAutoObservable, observable, ObservableMap, values } from 'mobx';

import { ContactService } from 'API';
import { IAccountStore } from './../types';
import { IAccountContactStore } from '../types';
import { TUser } from 'types/entities/UserTypes';

class AccountContactStore implements IAccountContactStore {
  accountStore: IAccountStore;
  contacts: ObservableMap<number, TUser> = observable.map();
  isLoading = true;

  constructor(accountStore: IAccountStore) {
    this.accountStore = accountStore;
    makeAutoObservable(this);
  }

  get isEmpty() {
    return this.contacts.size === 0;
  }

  get list() {
    return values(this.contacts);
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setContact(contact: TUser) {
    this.contacts.set(contact.id, contact);
  }

  removeContact(userId: number) {
    this.contacts.delete(userId);
  }

  async fetchContacts() {
    this.setLoading(true);
    
    const response = await ContactService.fetchContacts();

    if (response.data.contacts !== undefined) {
      response.data.contacts.forEach(contact => 
        this.setContact(contact)
      );
    }    
    this.setLoading(false);
  };

  async deleteContact(userId: number) {
    const response = await ContactService.deleteContact(userId);

    if (response.status === 200) {
      const contact = this.list.find(contact => contact.id === userId);

      if (contact !== undefined) {
        this.removeContact(userId);
        this.accountStore.userStore.setUser(contact);
      }
    }
  }
}

export default AccountContactStore;