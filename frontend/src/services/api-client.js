import axios, {CanceledError} from "axios"

// const baseUrl = "http://localhost:5000/";
// const baseUrl = "https://cautious-giggle-jx9qv6grqgw35q6q-5001.app.github.dev/";
const baseUrl =
  "https://5001-idx-icape-websitegit-1738576899242.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/"

// Create Axios instance
const apiClient = axios.create({
  baseURL: baseUrl
})

export default apiClient
export {CanceledError, baseUrl}
