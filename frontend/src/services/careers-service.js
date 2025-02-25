import httpService from "./http-service";

const careerService = httpService("/api/careers");

// No need to override update since http-service.js now uses PATCH
export default careerService;
