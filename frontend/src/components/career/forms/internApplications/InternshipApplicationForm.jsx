/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import applicationService from "../../../../services/application-service";
import toast from "react-hot-toast";
import FormHeader from "./FormHeader";
import FormField from "./FormField";
import LoadingSpinner from "../../../common/LoadingSpinner";
import { motion } from "framer-motion";

const InternshipApplicationForm = () => {
  const cvRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    opportunityType: "Internship Program 2025",
    studentStatus: "",
    reason: "",
    skills: "",
    availability: "",
    cv: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf" && file.size <= 5 * 1024 * 1024) {
      setFormData({ ...formData, cv: file });
    } else {
      toast.error("Please upload a valid PDF file (Max 5MB)");
      if (cvRef.current) cvRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      await applicationService.create(submitData);
      toast.success("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        opportunityType: "Internship Program 2025",
        studentStatus: "",
        reason: "",
        skills: "",
        availability: "",
        cv: null,
      });
      if (cvRef.current) cvRef.current.value = "";
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  const studentStatusOptions = [
    { value: "", label: "Select Status" },
    { value: "Current Student", label: "Current Student" },
    { value: "Recent Graduate", label: "Recent Graduate" },
  ];

  const availabilityOptions = [
    { value: "", label: "Select Availability" },
    { value: "Summer 2025", label: "Summer 2025" },
    { value: "Fall 2025", label: "Fall 2025" },
  ];

  const isFormValid = () => {
    return (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phoneNumber.trim() &&
      formData.studentStatus &&
      formData.reason.trim() &&
      formData.skills.trim() &&
      formData.availability &&
      formData.cv
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary dark:bg-dark-bg flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="py-20 md:py-32 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
            <div className="bg-secondary-light/80 dark:bg-dark-surface/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-border dark:border-dark-border shadow-2xl">
              <FormHeader
                title="Internship 2025"
                description="Join our visionary team and gain hands-on experience in world-class architectural projects."
              />

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    label="Full Name"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <FormField
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    label="Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+251 ..."
                    required
                  />
                  <FormField
                    label="Student Status"
                    id="studentStatus"
                    name="studentStatus"
                    type="select"
                    value={formData.studentStatus}
                    onChange={handleChange}
                    options={studentStatusOptions}
                    required
                  />
                </div>

                <FormField
                  label="Motivation"
                  id="reason"
                  name="reason"
                  type="textarea"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Tell us why you're excited to contribute to iCAPE..."
                  required
                />

                <FormField
                  label="Skills & Experience"
                  id="skills"
                  name="skills"
                  type="textarea"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="List your relevant technical skills and any previous experience..."
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    label="Availability"
                    id="availability"
                    name="availability"
                    type="select"
                    value={formData.availability}
                    onChange={handleChange}
                    options={availabilityOptions}
                    required
                  />
                  <FormField
                    label="Curriculum Vitae (PDF)"
                    id="cv"
                    name="cv"
                    type="file"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    value={formData.cv}
                    placeholder="Upload your CV"
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-6"
                >
                  <button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className={`w-full py-5 rounded-2xl font-heading font-bold text-lg transition-all duration-300 shadow-xl ${
                      isFormValid() && !isSubmitting
                        ? "bg-accent text-primary hover:bg-white hover:shadow-accent/40"
                        : "bg-border dark:bg-dark-bg text-text-secondary/50 dark:text-dark-textSecondary/50 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <LoadingSpinner size="sm" />
                        Processing...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default InternshipApplicationForm;
