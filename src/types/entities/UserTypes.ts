export type TUser = {
  id: number;
  email: string;
  password: string;
  fullName: string;
}

export type TUserLogin = Pick<TUser, 'email' | 'password'>