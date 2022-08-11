import makeRequest from 'API/makeRequest';
import { TUserLogin } from 'types/entities/UserTypes';
import { LoginResponse } from 'types/api/AuthResponses';

class AuthService {
  login(user: TUserLogin) {
    return makeRequest<LoginResponse>({
      method: 'POST',
      url: '/auth/login',
      data: {...user}
    });
  }

  check() {
    return makeRequest<LoginResponse>({
      url: '/auth/check',
      authToken: true
    });
  }
}

export default new AuthService();