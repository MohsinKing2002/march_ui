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
  GetUserWorkspaces: async () => {
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
  GetWorkspaceMembers: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.get(`/workspaces/${data}/members/`, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  GetSpacesOfWorkspace: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.get(`/workspaces/${data}/spaces/`, {
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
  },
  CreateNewSpace: async (data) => {
    console.log('data in api', data);
    const token = await getToken();
    let response = null;
    try {
      response = await api.post(`/workspaces/${data?.slug}/spaces/`, data, {
        params: {},
        headers: { Authorization: 'Bearer: ' + token }
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  AddMemberToWorkspace: async (data) => {
    const token = await getToken();
    let response = null;
    try {
      response = await api.post(`/workspaces/${data?.slug}/invite/`, data, {
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
