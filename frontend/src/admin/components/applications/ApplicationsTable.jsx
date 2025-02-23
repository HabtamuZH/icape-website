import React, {useState} from "react"

const ApplicationsTable = ({applications, onViewDetails}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5 // Adjust as needed

  // Calculate pagination
  const totalPages = Math.ceil(applications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedApplications = applications.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='bg-light rounded-xl shadow-lg border border-border p-6'>
      <div className='overflow-x-auto'>
        <table className='w-full text-left'>
          <thead>
            <tr className='border-b border-border'>
              <th className='py-4 px-6 text-primary font-body font-semibold'>
               No.
              </th>
              <th className='py-4 px-6 text-primary font-body font-semibold'>
                Applicant Name
              </th>
              <th className='py-4 px-6 text-primary font-body font-semibold'>
                Opportunity
              </th>
              <th className='py-4 px-6 text-primary font-body font-semibold'>
                Email
              </th>
              <th className='py-4 px-6 text-primary font-body font-semibold'>
                Submitted
              </th>
              <th className='py-4 px-6 text-primary font-body font-semibold'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedApplications.map((app, index) => (
              <tr
                key={app.id}
                className='border-b border-border hover:bg-secondary'
              >
                <td className='py-4 px-6 text-primary font-body'>
                  {startIndex + index + 1}
                </td>
                <td className='py-4 px-6 text-primary font-body'>
                  {app.fullName}
                </td>
                <td className='py-4 px-6 text-primary font-body'>
                  {app.opportunityType}
                </td>
                <td className='py-4 px-6 text-primary font-body'>
                  {app.email}
                </td>
                <td className='py-4 px-6 text-primary font-body'>
                  {new Date(app.submittedAt).toLocaleDateString()}
                </td>
                <td className='py-4 px-6'>
                  <button
                    onClick={() => onViewDetails(app)}
                    className='px-4 py-2 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200'
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className='mt-6 flex justify-center items-center space-x-2'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-3 py-1 text-primary font-body border border-border rounded-md hover:bg-accent hover:text-light disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Previous
          </button>
          {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 font-body ${
                currentPage === page
                  ? "bg-accent text-light"
                  : "text-primary border border-border hover:bg-accent hover:text-light"
              } rounded-md transition-colors duration-200`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 text-primary font-body border border-border rounded-md hover:bg-accent hover:text-light disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default ApplicationsTable
