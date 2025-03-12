import { useState, useEffect } from "react";
import userService from "../../services/user-service";
import authService from "./../../services/auth-service";
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
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Fetch profile data on mount
  useEffect(() => {
    userService
      .getProfile()
      .then((res) => setProfile(res.data))
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Handle Tab Click
  const handleTabClick = (tab) => setActiveTab(tab);

  // Handle Edit Click
  const handleEditClick = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: true }));
  };

  // Handle Cancel Click
  const handleCancelClick = () => {
    setEditMode({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
    });
    setErrors({});
  };

  // Validate Form Data
  const validateForm = () => {
    const newErrors = {};
    if (!profile.firstName) newErrors.firstName = "First name is required.";
    if (!profile.lastName) newErrors.lastName = "Last name is required.";
    if (!profile.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(profile.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!profile.phone) newErrors.phone = "Phone is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Save Click with API
  const handleSaveClick = async () => {
    if (!validateForm()) return;
    try {
      const dataToSend = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
      };
      const updatedProfile = await userService.updateProfile(dataToSend);
      setProfile(updatedProfile);
      setEditMode({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
      });
      setErrors({});
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrors({
        general: error.response?.data?.message || "Error updating profile",
      });
    }
  };

  // Handle Input Change
  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // Handle Security Input Changes
  const handleSecurityInputChange = (field, value) => {
    setSecurityData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle Update Password with API
  const handleUpdatePassword = async () => {
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await userService.updatePassword({
        currentPassword: securityData.currentPassword,
        newPassword: securityData.newPassword,
      });
      alert("Password updated successfully!");
      setSecurityData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error updating password:", error);
      setErrors({
        confirmPassword:
          error.response?.data?.message || "Error updating password",
      });
    }
  };

  // Handle Logout
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        localStorage.removeItem("token");
        navigateTo("/login");
      })
      .catch((err) => console.log(err));
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
  };
};

export default useProfile;
