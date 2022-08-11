import makeRequest from 'API/makeRequest';
import { FetchUsersResponse } from 'types/api/UserResponses';

class UserService {
  fetchUsers(query: string) {
    return makeRequest<FetchUsersResponse>({
      url: `/users${query}`,
      authToken: true,
    });
  }

  addUser(userId: number) {
    return makeRequest<void>({
      method: 'POST',
      url: '/users',
      authToken: true,
      data: { userId }
    });
  }
}

export default new UserService();