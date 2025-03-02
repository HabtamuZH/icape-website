import createHttpService from './http-service.js';

// Create an auth service instance with the '/api/auth' base path
const authService = createHttpService('/api/auth');

// Login method using email and password
authService.login = async (credentials) => {
  try {
    const response = await authService.create(credentials); // POST to /api/auth
    return response.data; // Returns { message, token }
  } catch (error) {
    throw error.response?.data?.error || 'Login failed';
  }
};

export default authService;