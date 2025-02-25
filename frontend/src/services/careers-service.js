import httpService from "./http-service"

const careerService = httpService("/api/careers")

export default careerService


import createHttpService from "./http-service.js";

// const careerService = createHttpService("/api/careers");

// // Create career opportunity
// careerService.create = (data) =>
//   careerService.create(data, {
//     headers: { "Content-Type": "application/json" },
//   });

// // Update career opportunity
// careerService.update = (id, data) =>
//   careerService.update(id, data, {
//     headers: { "Content-Type": "application/json" },
//   });

// export default careerService;