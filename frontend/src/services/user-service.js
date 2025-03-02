import createHttpService from "./http-service.js";
import apiClient from "./api-client.js";

const userService = createHttpService("/api/users");

const token = localStorage.getItem("token");

// Get all users (public, consider restricting in production)
userService.getAllUsers = async (headers = {}) => {
  try {
    const res = await userService.getAll(headers);
    return res.data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

// Get authenticated user's profile (private)
userService.getProfile = () => {
  return apiClient.get("/api/users/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Register a new user (public)
userService.register = async (userData) => {
  try {
    const res = await userService.create(userData);
    return res.data; // Returns { token }
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Update authenticated user's profile (private)
userService.updateProfile = (data) => {
  const token = localStorage.getItem("token");
  return apiClient.put("/api/users/profile", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Update authenticated user's password (private)
userService.updatePassword = (data) =>
  apiClient.put("/api/users/password", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Get user by ID (private)
userService.getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await userService.getOne(id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

export default userService;
