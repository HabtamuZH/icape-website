import { useState, useEffect } from "react";
import userService from "../../services/user-service";
import authService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const navigateTo = useNavigate();
  const [activeTab, setActiveTab] = useState("personal-info");
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });
  const [profile, setProfile] = useState(null);
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  // Fetch profile data
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      setProfile(response.data);
      setErrors({});
    } catch (error) {
      const errorMessage =
        error.message === "No authentication token found"
          ? "Please log in again"
          : error.response?.status === 401
          ? "Session expired. Please log in again."
          : error.message || "Failed to fetch profile data";
      setErrors({ general: errorMessage });
      setNotification({ type: "error", message: errorMessage });
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigateTo("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch profile on mount
  useEffect(() => {
    fetchProfile();
  }, []);

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setErrors({});
  };

  // Handle edit click
  const handleEditClick = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: true }));
  };

  // Handle cancel click
  const handleCancelClick = () => {
    setEditMode({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
    });
    setErrors({});
    fetchProfile();
  };

  // Validate profile form
  const validateForm = () => {
    const newErrors = {};
    if (!profile?.firstName) newErrors.firstName = "First name is required.";
    if (!profile?.lastName) newErrors.lastName = "Last name is required.";
    if (!profile?.email?.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(profile.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!profile?.phone) newErrors.phone = "Phone is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle save click
  const handleSaveClick = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const dataToSend = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
      };
      const response = await userService.updateProfile(dataToSend);
      setProfile(response.data);
      setEditMode({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
      });
      setErrors({});
      setNotification({
        type: "success",
        message: "Profile updated successfully!",
      });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      const errorMessage =
        error.message === "No authentication token found"
          ? "Please log in again"
          : error.response?.status === 401
          ? "Session expired. Please log in again."
          : error.message || "Failed to update profile";
      setErrors({ general: errorMessage });
      setNotification({ type: "error", message: errorMessage });
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigateTo("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Handle security input change
  const handleSecurityInputChange = (field, value) => {
    setSecurityData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Validate password form
  const validatePassword = () => {
    const newErrors = {};
    if (!securityData.currentPassword)
      newErrors.currentPassword = "Current password is required.";
    if (!securityData.newPassword)
      newErrors.newPassword = "New password is required.";
    else if (securityData.newPassword.length < 8)
      newErrors.newPassword = "Password must be at least 8 characters long.";
    if (!securityData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required.";
    else if (securityData.newPassword !== securityData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle update password
  const handleUpdatePassword = async () => {
    if (!validatePassword()) return;

    try {
      setLoading(true);
      await userService.updatePassword({
        currentPassword: securityData.currentPassword,
        newPassword: securityData.newPassword,
      });
      setSecurityData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setErrors({});
      setNotification({
        type: "success",
        message: "Password updated successfully!",
      });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      const errorMessage =
        error.message === "No authentication token found"
          ? "Please log in again"
          : error.response?.status === 401
          ? "Session expired. Please log in again."
          : error.response?.data?.message === "Current password is incorrect"
          ? "Current password is incorrect"
          : error.message || "Failed to update password";
      setErrors({ general: errorMessage });
      setNotification({ type: "error", message: errorMessage });
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigateTo("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("token");
      navigateTo("/login");
    } catch (error) {
      console.error("Logout error:", error);
      setNotification({
        type: "error",
        message: "Failed to logout. Please try again.",
      });
    }
  };

  return {
    activeTab,
    handleTabClick,
    editMode,
    handleEditClick,
    profile,
    handleLogout,
    handleInputChange,
    handleSaveClick,
    handleCancelClick,
    securityData,
    handleSecurityInputChange,
    handleUpdatePassword,
    loading,
    errors,
    notification,
  };
};

export default useProfile;