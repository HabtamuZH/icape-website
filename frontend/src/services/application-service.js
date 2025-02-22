// application-service.js
import createHttpService from "./http-service.js"

// Create an instance of HttpService for the /api/applications endpoint
const applicationService = createHttpService("/api/applications")

// Extend the service with a custom create method for multipart/form-data
applicationService.createMultipart = (data) => {
  return applicationService.create(data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

export default applicationService
