import axios, { CanceledError } from "axios";

const baseUrl = "http://localhost:5000/";

// Create Axios instance
const apiClient = axios.create({
  baseURL: baseUrl,
});

export default apiClient;
export { CanceledError, baseUrl };

