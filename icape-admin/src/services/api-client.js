import axios, { CanceledError } from "axios";

// const baseUrl = "https://api.icape.studio/";
// const baseUrl = "https://5001-idx-icape-website-1746431027786.cluster-c3a7z3wnwzapkx3rfr5kz62dac.cloudworkstations.dev/";
const baseUrl = "http://localhost:5001/";

const apiClient = axios.create({
  baseURL: baseUrl,
});

export default apiClient;
export { CanceledError, baseUrl };
