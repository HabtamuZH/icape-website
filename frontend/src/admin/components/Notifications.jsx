import React, {useState} from "react"

const Notifications = () => {
  // Mock notification data (replace with actual data from your backend)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "application",
      message:
        "New application received from Jane Doe for Professional Career Opportunities.",
      timestamp: "2025-02-20T10:30:00Z",
      isRead: false
    },
    {
      id: 2,
      type: "application",
      message:
        "New application received from John Smith for Internship Program 2025.",
      timestamp: "2025-02-19T15:45:00Z",
      isRead: false
    },
    {
      id: 3,
      type: "application",
      message:
        "New application received from John Smith for Internship Program 2025.",
      timestamp: "2025-02-19T15:45:00Z",
      isRead: false
    },
    {
      id: 4,
      type: "application",
      message:
        "New application received from John Smith for Internship Program 2025.",
      timestamp: "2025-02-19T15:45:00Z",
      isRead: true
    },
    {
      id: 5,
      type: "application",
      message:
        "New application received from John Smith for Internship Program 2025.",
      timestamp: "2025-02-19T15:45:00Z",
      isRead: false
    },
    {
      id: 6,
      type: "feedback",
      message: "Feedback submitted: 'Great application process!'",
      timestamp: "2025-02-18T09:15:00Z",
      isRead: false
    }
  ])

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notify) => (notify.id === id ? {...notify, isRead: true} : notify))
    )
  }

  const handleClearAll = () => {
    setNotifications([])
  }

  return (
    <div className='bg-light rounded-xl shadow-lg border border-border p-4 w-full h-full overflow-y-auto'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-heading font-semibold text-primary'>
          Notifications
          {unreadCount > 0 && (
            <span className='ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-body text-light bg-accent rounded-full'>
              {unreadCount}
            </span>
          )}
        </h3>
        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className='text-sm font-body text-accent hover:text-opacity-80'
          >
            Clear All
          </button>
        )}
      </div>

      {/* Notification List */}
      {notifications.length === 0 ? (
        <p className='text-primary font-body text-center'>No notifications</p>
      ) : (
        <ul className='space-y-3'>
          {notifications.map((notify) => (
            <li
              key={notify.id}
              className={`p-3 rounded-md ${
                notify.isRead ? "bg-secondary" : "bg-accent bg-opacity-10"
              } flex justify-between items-start`}
            >
              <div>
                <p
                  className={`font-body ${
                    notify.isRead ? "text-primary" : "text-primary font-medium"
                  }`}
                >
                  {notify.message}
                </p>
                <p className='text-sm text-primary font-body opacity-70 mt-1'>
                  {new Date(notify.timestamp).toLocaleString()}
                </p>
              </div>
              {!notify.isRead && (
                <button
                  onClick={() => handleMarkAsRead(notify.id)}
                  className='ml-2 text-sm font-body text-accent hover:text-opacity-80'
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Notifications
