import React, {useState} from "react"
import ApplicationsTable from "./ApplicationsTable"
import ApplicationDetailsModal from "./ApplicationDetailsModal"

const AdminApplicationsView = () => {
  const [applications] = useState([
    {
      id: 1,
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      phoneNumber: "123-456-7890",
      opportunityType: "Professional Career Opportunities",
      department: "Engineering",
      reason:
        "I’m passionate about innovative engineering solutions and want to contribute to iCAPE’s groundbreaking projects.",
      skills:
        "5+ years in software engineering, expert in React and Tailwind, team leadership experience.",
      availability: "Full-time",
      cv: "jane_doe_cv.pdf",
      submittedAt: "2025-02-20T10:30:00Z"
    },
    {
      id: 2,
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      phoneNumber: "123-456-7890",
      opportunityType: "Professional Career Opportunities",
      department: "Engineering",
      reason:
        "I’m passionate about innovative engineering solutions and want to contribute to iCAPE’s groundbreaking projects.",
      skills:
        "5+ years in software engineering, expert in React and Tailwind, team leadership experience.",
      availability: "Full-time",
      cv: "jane_doe_cv.pdf",
      submittedAt: "2025-02-20T10:30:00Z"
    },
    {
      id: 3,
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      phoneNumber: "123-456-7890",
      opportunityType: "Professional Career Opportunities",
      department: "Engineering",
      reason:
        "I’m passionate about innovative engineering solutions and want to contribute to iCAPE’s groundbreaking projects.",
      skills:
        "5+ years in software engineering, expert in React and Tailwind, team leadership experience.",
      availability: "Full-time",
      cv: "jane_doe_cv.pdf",
      submittedAt: "2025-02-20T10:30:00Z"
    },
    {
      id: 4,
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      phoneNumber: "123-456-7890",
      opportunityType: "Professional Career Opportunities",
      department: "Engineering",
      reason:
        "I’m passionate about innovative engineering solutions and want to contribute to iCAPE’s groundbreaking projects.",
      skills:
        "5+ years in software engineering, expert in React and Tailwind, team leadership experience.",
      availability: "Full-time",
      cv: "jane_doe_cv.pdf",
      submittedAt: "2025-02-20T10:30:00Z"
    },
    {
      id: 5,
      fullName: "John Smith",
      email: "john.smith@example.com",
      phoneNumber: "987-654-3210",
      opportunityType: "Internship Program 2025",
      studentStatus: "Current Student",
      reason:
        "I’m eager to gain hands-on experience in a cutting-edge industry and learn from iCAPE’s experts.",
      skills:
        "Proficiency in UI/UX design, basic JavaScript, strong problem-solving skills.",
      availability: "Summer 2025",
      cv: "john_smith_cv.pdf",
      submittedAt: "2025-02-19T15:45:00Z"
    },
    {
      id: 6,
      fullName: "John Smith",
      email: "john.smith@example.com",
      phoneNumber: "987-654-3210",
      opportunityType: "Internship Program 2025",
      studentStatus: "Current Student",
      reason:
        "I’m eager to gain hands-on experience in a cutting-edge industry and learn from iCAPE’s experts.",
      skills:
        "Proficiency in UI/UX design, basic JavaScript, strong problem-solving skills.",
      availability: "Summer 2025",
      cv: "john_smith_cv.pdf",
      submittedAt: "2025-02-19T15:45:00Z"
    },
    {
      id: 7,
      fullName: "John Smith",
      email: "john.smith@example.com",
      phoneNumber: "987-654-3210",
      opportunityType: "Internship Program 2025",
      studentStatus: "Current Student",
      reason:
        "I’m eager to gain hands-on experience in a cutting-edge industry and learn from iCAPE’s experts.",
      skills:
        "Proficiency in UI/UX design, basic JavaScript, strong problem-solving skills.",
      availability: "Summer 2025",
      cv: "john_smith_cv.pdf",
      submittedAt: "2025-02-19T15:45:00Z"
    },
  ])

  const [selectedApplication, setSelectedApplication] = useState(null)

  const handleViewDetails = (application) => {
    setSelectedApplication(application)
  }

  const handleCloseDetails = () => {
    setSelectedApplication(null)
  }

  return (
    <section className='py-16 bg-secondary min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-heading font-extrabold text-primary mb-8 text-center'>
          Career Applications Dashboard
        </h2>
        <p className='text-primary font-body text-center mb-12 max-w-3xl mx-auto'>
          Review and manage applications submitted for iCAPE’s Professional
          Career Opportunities and Internship Program 2025.
        </p>

        <ApplicationsTable
          applications={applications}
          onViewDetails={handleViewDetails}
        />

        {selectedApplication && (
          <ApplicationDetailsModal
            application={selectedApplication}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </section>
  )
}

export default AdminApplicationsView
