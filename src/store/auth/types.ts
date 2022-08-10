export interface IAuthStore {
  isAuth: boolean | null;

  setAuth: (isAuth: boolean) => void;

  check: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}