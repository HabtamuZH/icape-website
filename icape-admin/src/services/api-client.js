import axios, { CanceledError } from "axios";

const baseUrl = "https://api.icape.studio/";
// const baseUrl = "https://5001-idx-icape-website-1741507084977.cluster-rz2e7e5f5ff7owzufqhsecxujc.cloudworkstations.dev/";

const apiClient = axios.create({
  baseURL: baseUrl,
});

export default apiClient;
export { CanceledError, baseUrl };
