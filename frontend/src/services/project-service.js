import httpService from "./http-service.js";

const projectService = httpService("/api/projects");

export default projectService;