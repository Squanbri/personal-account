import axios from 'axios';

import { LoginResponse } from 'types/api/UserResponses';
import { TUserLogin } from 'types/entities/UserTypes';

class AuthService {
  login(user: TUserLogin) {
    return axios.post<LoginResponse>(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login`, 
      {...user}
    )
  }
}

export default new AuthService();