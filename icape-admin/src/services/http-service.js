// src/services/http-service.js
import apiClient from "./api-client.js";

class HttpService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll(config = {}) {
    return apiClient.get(this.endpoint, config);
  }

  getOne(id, config = {}) {
    return apiClient.get(`${this.endpoint}/${id}`, config);
  }

  delete(id, config = {}) {
    return apiClient.delete(`${this.endpoint}/${id}`, config);
  }

  create(entity, config = {}) {
    return apiClient.post(this.endpoint, entity, config);
  }

  update(id, entity, config = {}) {
    return apiClient.put(`${this.endpoint}/${id}`, entity, config);
  }
}

const createHttpService = (endpoint) => new HttpService(endpoint);
export default createHttpService;
