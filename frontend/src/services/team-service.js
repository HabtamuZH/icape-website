import createHttpService from "./http-service.js";

const teamService = createHttpService("/api/teams");

export default teamService;
