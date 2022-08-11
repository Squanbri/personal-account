import { ObservableMap } from 'mobx';

import { TUser } from 'types/entities/UserTypes';

export interface IAccountStore {
  contactStore: IAccountContactStore;
  userStore: IAccountUserStore;
}

export interface IAccountContactStore {
  accountStore: IAccountStore;
  contacts: ObservableMap<number, TUser>
  isLoading: boolean;
  isEmpty: boolean;

  list: readonly TUser[];
  
  setLoading: (isLoading: boolean) => void;
  setContact: (contact: TUser) => void;
  removeContact: (userId: number) => void;

  fetchContacts: () => void;
  deleteContact: (userId: number) => void;
}

export interface IAccountUserStore {
  accountStore: IAccountStore;
  users: ObservableMap<number, TUser>;
  isLoading: boolean;
  isEmpty: boolean;

  list: readonly TUser[];

  setLoading: (isLoading: boolean) => void;
  setUser: (user: TUser) => void;
  removeUser: (userId: number) => void;

  fetchUsers: (query: string) => void;
  addUser: (userId: number) => void;
}