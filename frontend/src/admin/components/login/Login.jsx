import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import authService from "../../../services/auth-service";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await authService.login({ email, password });
      setToken(token);
      localStorage.setItem("token", token);
      setError(null);
      navigate("/admin"); // Redirect to FeedbackDashboard
    } catch (err) {
      setError(err || "Login failed");
    }
  };

  return (
    <div className="p-6 bg-secondary min-h-screen flex items-center justify-center">
      <div className="bg-light p-6 rounded-xl shadow-lg border border-border max-w-md w-full">
        <h2 className="text-2xl font-heading font-bold text-primary mb-4">
          Admin Login
        </h2>
        {error && <p className="text-red-500 font-body mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-primary font-body font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block text-primary font-body font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-primary rounded-lg font-body font-semibold shadow-md hover:bg-accent/80 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;