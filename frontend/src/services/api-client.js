import axios, { CanceledError } from "axios";

// const baseUrl = "http://localhost:5001/";
const baseUrl = "https://api.icape.studio/";
// const baseUrl =
//   "https://5001-idx-icape-websitegit-1738576899242.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/";
// const baseUrl = "https://5001-idx-icape-websitegit-1740205892456.cluster-4ezwrnmkojawstf2k7vqy36oe6.cloudworkstations.dev";

// Create Axios instance
const apiClient = axios.create({
  baseURL: baseUrl,
});

export default apiClient;
export { CanceledError, baseUrl };
    