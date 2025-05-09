import createHttpService from "./http-service.js";
import apiClient from "./api-client.js";

const userService = createHttpService("/api/users");

// Get all users (public, consider restricting in production)
userService.getAllUsers = async (headers = {}) => {
  try {
    const res = await userService.getAll(headers);
    return res.data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

// Get authenticated user's profile (private)
userService.getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  try {
    const res = await apiClient.get("/api/users/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch profile");
  }
};

// Register a new user (public)
userService.register = async (userData) => {
  try {
    const res = await userService.create(userData);
    return res.data; // Returns { token }
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error(error.response?.data?.message || "Failed to register user");
  }
};

// Update authenticated user's profile (private)
userService.updateProfile = async (data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  try {
    const res = await apiClient.put("/api/users/profile", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw new Error(error.response?.data?.message || "Failed to update profile");
  }
};

// Update authenticated user's password (private)
userService.updatePassword = async (data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  try {
    const res = await apiClient.put("/api/users/password", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.error("Error updating password:", error);
    throw new Error(error.response?.data?.message || "Failed to update password");
  }
};

// Get user by ID (private)
userService.getUserById = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  try {
    const res = await userService.getOne(id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch user");
  }
};

export default userService;