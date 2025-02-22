// services/application-service.js
import axios from "axios"

const applicationService = {
  create: (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value) // Handles both text and file fields
    })
    return axios.post("/api/applications", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
}

export default applicationService
