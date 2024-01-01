import { api, handleResponse, getToken } from '@/api/core';

const auth = {
  Login: async (data) => {
    let response = null;
    try {
      response = await api.post('/auth/common/login/', data);
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  SignUp: async (data) => {
    let response = null;
    try {
      response = await api.post('/auth/common/signup/', data);
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default auth;
