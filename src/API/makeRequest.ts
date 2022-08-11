import axios from 'axios';

import { TMakeRequestParams } from 'types/api/API';

const makeRequest = async <Type>({
  url = '/',
  method = 'GET',
  authToken = false,
  headers = {},
  params = {},
  data = {},
}: TMakeRequestParams) => {
  url = `${process.env.REACT_APP_BACKEND_URL}${url}`;

  if (authToken) {
    const token = localStorage.getItem('token');

    headers.authorization = `Bearer ${token}`;
  }

  return axios
    .request<Type>({
      url,
      method,
      headers,
      params,
      data,
    });
};

export default makeRequest;
