import React, {useState} from "react"

const AdminSettings = () => {
  // Mock admin data (replace with real data from your backend or context)
  const [adminProfile, setAdminProfile] = useState({
    name: "Admin User",
    email: "admin@example.com"
  })

  const [notificationPrefs, setNotificationPrefs] = useState({
    application: true,
    feedback: true,
    system: false
  })

  const [theme, setTheme] = useState("light") // light or dark

  // Form states
  const [name, setName] = useState(adminProfile.name)
  const [email, setEmail] = useState(adminProfile.email)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Handlers
  const handleProfileUpdate = (e) => {
    e.preventDefault()
    if (password && password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setAdminProfile({name, email})
    alert("Profile updated successfully!")
    setPassword("")
    setConfirmPassword("")
  }

  const handleNotificationChange = (type) => {
    setNotificationPrefs((prev) => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    // Add logic to apply theme (e.g., update document.body class)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleLogout = () => {
    // Add logout logic (e.g., clear tokens, redirect)
    alert("Logged out!")
  }

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Add delete account logic
      alert("Account deleted!")
    }
  }

  return (
    <div className='bg-light min-h-screen p-6'>
      <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-border p-6'>
        {/* Header */}
        <h2 className='text-2xl font-heading font-semibold text-primary mb-6'>
          Admin Settings
        </h2>

        {/* Profile Management */}
        {/* <section className='mb-8'>
          <h3 className='text-xl font-heading font-medium text-primary mb-4'>
            Profile Management
          </h3>
          <form onSubmit={handleProfileUpdate} className='space-y-4'>
            <div>
              <label className='block text-sm font-body text-primary mb-1'>
                Full Name
              </label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-2 border bg-white border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent'
                placeholder='Enter your full name'
              />
            </div>
            <div>
              <label className='block text-sm font-body text-primary mb-1'>
                Email Address
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border bg-white border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent'
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label className='block text-sm font-body text-primary mb-1'>
                New Password (optional)
              </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border bg-white border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent'
                placeholder='Enter new password'
              />
            </div>
            <div>
              <label className='block text-sm font-body text-primary mb-1'>
                Confirm New Password
              </label>
              <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-2 border bg-white border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent'
                placeholder='Confirm new password'
              />
            </div>
            <button
              type='submit'
              className='bg-accent text-light font-body py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors'
            >
              Update Profile
            </button>
          </form>
        </section> */}

        {/* Notification Preferences */}
        <section className='mb-8'>
          <h3 className='text-xl font-heading font-medium text-primary mb-4'>
            Notification Preferences
          </h3>
          <div className='space-y-3'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={notificationPrefs.application}
                onChange={() => handleNotificationChange("application")}
                className='h-4 w-4 text-accent border-border rounded focus:ring-accent'
              />
              <span className='text-sm font-body text-primary'>
                Receive application notifications
              </span>
            </label>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={notificationPrefs.feedback}
                onChange={() => handleNotificationChange("feedback")}
                className='h-4 w-4 text-accent border-border rounded focus:ring-accent'
              />
              <span className='text-sm font-body text-primary'>
                Receive feedback notifications
              </span>
            </label>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={notificationPrefs.system}
                onChange={() => handleNotificationChange("system")}
                className='h-4 w-4 text-accent border bg-white border-border rounded focus:ring-accent'
              />
              <span className='text-sm font-body text-primary'>
                Receive system updates
              </span>
            </label>
          </div>
        </section>

        {/* Appearance
        <section className='mb-8'>
          <h3 className='text-xl font-heading font-medium text-primary mb-4'>
            Appearance
          </h3>
          <div className='flex space-x-4'>
            <button
              onClick={() => handleThemeChange("light")}
              className={`py-2 px-4 rounded-md font-body ${
                theme === "light"
                  ? "bg-accent text-light"
                  : "bg-secondary text-primary hover:bg-opacity-80"
              }`}
            >
              Light Mode
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className={`py-2 px-4 rounded-md font-body ${
                theme === "dark"
                  ? "bg-accent text-light"
                  : "bg-secondary text-primary hover:bg-opacity-80"
              }`}
            >
              Dark Mode
            </button>
          </div>
        </section> */}

        {/* Account Management */}
        <section className='mb-8 flex flex-col justify-center items-center '>
          <h3 className='text-xl font-heading font-medium text-primary mb-4'>
            Account Management
          </h3>
          <div className='flex space-x-4'>
            <button
              onClick={handleLogout}
              className='bg-accent text-light font-body py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors'
            >
              Log Out
            </button>
            <button
              onClick={handleDeleteAccount}
              className='bg-red-500 text-light font-body py-2 px-4 rounded-md hover:bg-red-600 transition-colors'
            >
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminSettings
