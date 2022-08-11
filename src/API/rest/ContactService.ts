import makeRequest from 'API/makeRequest';
import { FetchContactsResponse } from 'types/api/ContactResponses';

class ContactService {
  fetchContacts() {
    return makeRequest<FetchContactsResponse>({
      url: '/contacts',
      authToken: true,
    });
  }

  deleteContact(userId: number) {
    return makeRequest<void>({
      method: 'DELETE',
      url: '/contacts',
      authToken: true,
      data: { userId }
    });
  }
}

export default new ContactService();