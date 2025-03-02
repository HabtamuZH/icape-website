import httpService from "./http-service.js";

const blogService = httpService("/api/blogs");

export default blogService;