import React, {useState, useEffect} from "react"
import ApplicationsTable from "./ApplicationsTable"
import ApplicationDetailsModal from "./ApplicationDetailsModal"
import applicationService from "../../../services/application-service"

const AdminApplicationsView = () => {
  const [applications, setApplications] = useState([])
  const [selectedApplication, setSelectedApplication] = useState(null)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        applicationService.getAll().then((res) => setApplications(res.data)).catch((err) => console.log(err))
        if (!response.ok) throw new Error("Failed to fetch applications")

        const data = await response.json()
        setApplications(data)
      } catch (error) {
        console.error("Error fetching applications:", error)
      }
    }

    fetchApplications()
  }, [])

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
