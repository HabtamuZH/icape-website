import apiClient from "./api-client.js";

class HttpService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll(headers = {}) {
    return apiClient.get(this.endpoint, { headers });
  }

  getOne(id, headers = {}) {
    return apiClient.get(`${this.endpoint}/${id}`, { headers });
  }

  delete(id, headers = {}) {
    return apiClient.delete(`${this.endpoint}/${id}`, { headers });
  }

  create(entity, headers = {}) {
    return apiClient.post(this.endpoint, entity, { headers });
  }

  update(id, entity, headers = {}) {
    return apiClient.put(`${this.endpoint}/${id}`, entity, { headers });
  }
}

const createHttpService = (endpoint) => new HttpService(endpoint);
export default createHttpService;
