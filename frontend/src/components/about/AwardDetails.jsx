import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

// Mock database of awards (replace with actual data source like an API or context)
const awardsDatabase = {
  "ikka-award": {
    title: "IKKA Award for Architectural Excellence",
    issuer: "IKKA Foundation",
    date: "October 20, 2024",
    description:
      "Recognized for outstanding innovation in sustainable architectural design, this award highlights iCAPE’s commitment to blending aesthetics with eco-friendly functionality. Our team’s groundbreaking approach to urban planning and architectural solutions has been celebrated as a model for future development.",
    category: "Sustainable Architecture",
    recipient: "iCAPE Consulting Architects and Engineers PLC",
    imageUrl: "/award1.jpeg", // Adjust path to match your public folder or use imported image
    achievements: [
      "Pioneered sustainable urban planning for 5+ Ethiopian towns",
      "Reduced project carbon footprint by 30% through innovative design",
      "Won multiple design competitions for eco-conscious structures"
    ]
  }
  // Add more awards as needed
}

// Default fallback data
const defaultAward = {
  title: "Award Not Found",
  issuer: "Unknown",
  date: "N/A",
  description:
    "No award details available. Please select an award from the company history page.",
  category: "N/A",
  recipient: "N/A",
  imageUrl: "https://via.placeholder.com/600x400",
  achievements: []
}

const AwardDetails = () => {
  const {id} = useParams() // Get the award ID from the URL (e.g., "/awards/ikka-award")
  const [award, setAward] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    // Simulate fetching award data based on ID
    const fetchAwardData = () => {
      const foundAward = awardsDatabase[id] || defaultAward
      setAward(foundAward)
      console.log("Award fetched for ID:", id, foundAward)
    }

    fetchAwardData()

    // In a real app, replace with an API call:
    /*
    fetch(`/api/awards/${id}`)
      .then((res) => res.json())
      .then((data) => setAward(data || defaultAward))
      .catch((error) => {
        console.error("Error fetching award:", error);
        setAward(defaultAward);
      });
    */
  }, [id])

  // While award is still loading, use defaultAward as a temporary fallback
  const displayAward = award || defaultAward

  return (
    <section className='py-32 bg-secondary min-h-screen'>
      <div className='w-full h-full mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight'>
            {displayAward.title}
          </h1>
          <p className='mt-4 text-xl text-primary font-body leading-relaxed max-w-3xl mx-auto'>
            Awarded by{" "}
            <span className='text-accent'>{displayAward.issuer}</span> on{" "}
            {displayAward.date}
          </p>
        </div>

        {/* Main Content */}
        <div className='bg-light rounded-xl shadow-lg border border-border p-6 sm:p-8'>
          {/* Award Image */}
          <div className='mb-8 lg:flex gap-12 xs:flex-row'>
            <img
              src={displayAward.imageUrl}
              alt={displayAward.title}
              className='sm:h-80 object-cover rounded-md'
            />
            {/* Description */}
            <div>
              <h2 className='text-2xl font-heading font-semibold text-primary mb-4'>
                About the Award
              </h2>
              <p className='text-primary font-body leading-relaxed'>
                {displayAward.description}
              </p>
            </div>
          </div>
          {/* Award Details */}
          <div className='space-y-6'>

            {/* Key Information */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-body font-medium text-primary mb-2'>
                  Category
                </h3>
                <p className='text-primary font-body'>
                  {displayAward.category}
                </p>
              </div>
              <div>
                <h3 className='text-lg font-body font-medium text-primary mb-2'>
                  Recipient
                </h3>
                <p className='text-primary font-body'>
                  {displayAward.recipient}
                </p>
              </div>
            </div>

            {/* Achievements */}
            {displayAward.achievements.length > 0 && (
              <div>
                <h2 className='text-2xl font-heading font-semibold text-primary mb-4'>
                  Key Achievements
                </h2>
                <ul className='list-disc list-inside text-primary font-body space-y-2'>
                  {displayAward.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className='mt-8 text-center'>
            <Link
              to='/about'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
            >
              More About iCAPE
              <svg
                className='ml-2 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardDetails
