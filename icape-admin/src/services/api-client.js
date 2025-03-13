import axios, { CanceledError } from "axios";

const baseUrl = "https://api.icape.studio/";
// const baseUrl = "http://localhost:5001/";
// const baseUrl = "https://5001-idx-icape-website-1741507084977.cluster-rz2e7e5f5ff7owzufqhsecxujc.cloudworkstations.dev/";

const apiClient = axios.create({
  baseURL: baseUrl,
});

export default apiClient;
export { CanceledError, baseUrl };

// const baseUrl = "https://5001-idx-icape-websitegit-1738576899242.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/";
