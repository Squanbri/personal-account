export type TUser = {
  id: number;
  email: string;
  password: string;
}

export type TUserLogin = Omit<TUser, 'id'>