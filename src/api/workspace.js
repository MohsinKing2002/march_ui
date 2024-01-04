import { api, handleResponse, getToken } from '@/api/core';

const workspace = {
  CheackWorkspaceAvailibility: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.get(`/workspaces/workspace-slug-check/?slug=${data}`, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  GetUserWorkspaces: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.get(`/workspaces/`, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  CreateNewWorkspace: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post('/workspaces/', data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  }
};

export default workspace;
