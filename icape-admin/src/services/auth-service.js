import apiClient from "./api-client.js";
import createHttpService from "./http-service.js";

const authService = createHttpService("/api/auth");

// Login method using email and password
authService.login = async (credentials) => {
  try {
    const response = await authService.create(credentials); // POST to /api/auth
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};

// Logout method
authService.logout = () => apiClient.post("/api/auth/logout");

export default authService;
