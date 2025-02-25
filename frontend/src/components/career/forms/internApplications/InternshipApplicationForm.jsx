import { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import applicationService from "../../../../services/application-service";
import { toast } from "react-toastify";
import FormHeader from "./FormHeader"; // Adjust path
import FormField from "./FormField"; // Adjust path
import LoadingSpinner from "../../../common/LoadingSpinner"; // Adjust path based on your component location

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
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  useEffect(() => {
    // Simulate initial loading (remove if not needed)
    const timer = setTimeout(() => setIsLoading(false), 1000);

    const sr = ScrollReveal({
      reset: false,
      duration: 800,
      easing: "ease-out",
    });

    sr.reveal(".form-header", { origin: "top", distance: "40px", delay: 200 });
    sr.reveal(".form-field", {
      origin: "bottom",
      distance: "30px",
      delay: 300,
      interval: 100,
    });

    return () => {
      clearTimeout(timer);
      sr.destroy();
    };
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

      const res = await applicationService.create(submitData);
      console.log("New internship application created:", res.data);
      toast.success("Internship application submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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

  // Validation for submit button
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
      <section className="min-h-screen bg-secondary flex items-center justify-center">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-secondary min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-light p-4 sm:p-6 md:p-8 shadow-lg rounded-xl border border-border mt-6 sm:mt-10">
        <FormHeader
          title="Internship Application - iCAPE 2025"
          description="Apply for our Internship Program 2025 and gain hands-on experience."
        />

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <FormField
            label="Full Name"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <FormField
            label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
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
          <FormField
            label="Why do you want to join iCAPE?"
            id="reason"
            name="reason"
            type="textarea"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Tell us why you’re excited to contribute..."
            rows="3 sm:rows-4"
            required
          />
          <FormField
            label="Relevant Skills & Experience"
            id="skills"
            name="skills"
            type="textarea"
            value={formData.skills}
            onChange={handleChange}
            placeholder="List your skills and experience..."
            rows="3 sm:rows-4"
            required
          />
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
            label="Upload CV (PDF, Max 5MB)"
            id="cv"
            name="cv"
            type="file"
            onChange={handleFileChange}
            accept="application/pdf"
            ref={cvRef}
            required
          />
          <div className="form-field">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-body font-medium text-light bg-accent rounded-md shadow-md transition-all duration-200 ${
                isFormValid() && !isSubmitting
                  ? "hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InternshipApplicationForm;