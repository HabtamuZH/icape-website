import React, {useState} from "react"

const ApplicationDetailsModal = ({application, onClose}) => {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyData, setReplyData] = useState({
    subject: "",
    message: ""
  })

  const handleReplyToggle = () => {
    setShowReplyForm(!showReplyForm)
  }

  const handleReplyChange = (e) => {
    const {name, value} = e.target
    setReplyData((prev) => ({...prev, [name]: value}))
  }

  const handleReplySubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${
      application.email
    }?subject=${encodeURIComponent(
      replyData.subject
    )}&body=${encodeURIComponent(replyData.message)}`
    window.location.href = mailtoLink
    setShowReplyForm(false)
    setReplyData({subject: "", message: ""})
  }

  return (
    <div className='fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-light rounded-xl shadow-xl border border-border p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-2xl font-heading font-semibold text-primary'>
            Application Details: {application.fullName}
          </h3>
          <button
            onClick={onClose}
            className='text-primary font-body hover:text-accent text-xl'
          >
            ✕
          </button>
        </div>

        <div className='space-y-4 text-primary font-body'>
          <p>
            <strong>Email:</strong> {application.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {application.phoneNumber}
          </p>
          <p>
            <strong>Opportunity Type:</strong> {application.opportunityType}
          </p>
          {application.department && (
            <p>
              <strong>Department:</strong> {application.department}
            </p>
          )}
          {application.studentStatus && (
            <p>
              <strong>Student Status:</strong> {application.studentStatus}
            </p>
          )}
          <p>
            <strong>Availability:</strong> {application.availability}
          </p>
          <p>
            <strong>Reason for Applying:</strong> {application.reason}
          </p>
          <p>
            <strong>Skills & Experience:</strong> {application.skills}
          </p>
          <p>
            <strong>CV:</strong>{" "}
            <a
              href={`/uploads/${application.cv}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent underline hover:text-opacity-80'
            >
              Download CV
            </a>
          </p>
          <p>
            <strong>Submitted On:</strong>{" "}
            {new Date(application.submittedAt).toLocaleString()}
          </p>
        </div>

        {/* Reply Button */}
        <div className='mt-6'>
          <button
            onClick={handleReplyToggle}
            className='px-4 py-2 text-sm font-body text-accent border border-accent rounded-md hover:bg-accent hover:text-light transition-colors duration-200'
          >
            {showReplyForm ? "Cancel Reply" : "Reply to Applicant"}
          </button>
        </div>

        {/* Reply Form */}
        {showReplyForm && (
          <form onSubmit={handleReplySubmit} className='mt-6 space-y-4'>
            <div>
              <label
                htmlFor='subject'
                className='block text-primary font-body font-medium mb-2'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={replyData.subject}
                onChange={handleReplyChange}
                placeholder='e.g., Regarding Your Application'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                required
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-primary font-body font-medium mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={replyData.message}
                onChange={handleReplyChange}
                placeholder='Type your response here...'
                rows='4'
                className='w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
                required
              />
            </div>
            <div className='flex justify-end space-x-4'>
              <button
                type='submit'
                className='px-6 py-2 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
              >
                Send Email
              </button>
              <button
                type='button'
                onClick={handleReplyToggle}
                className='px-6 py-2 border border-accent text-base font-body font-medium rounded-md text-accent hover:bg-accent hover:text-light transition-colors duration-200'
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Close Button (when reply form is not visible) */}
        {!showReplyForm && (
          <div className='mt-6 flex justify-end'>
            <button
              onClick={onClose}
              className='px-6 py-2 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicationDetailsModal
