import {useEffect, useState} from "react"
import {Outlet, Link, useLocation} from "react-router-dom"
import OpportunityCard from "./OpportunityCard" // Adjust path
import careerService from "../../services/careers-service"
import ScrollReveal from "scrollreveal"
import LoadingSpinner from "../common/LoadingSpinner"

// Combined Carrier component with Announcement functionality
const Annoucement = () => {
  const [opportunities, setOpportunities] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation() // To detect current route

  useEffect(() => {
    careerService
      .getAll()
      .then((res) => setOpportunities(res.data))
      .catch((err) => {
        console.error(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    const sr = ScrollReveal({
      reset: false,
      duration: 800,
      easing: "ease-out"
    })
    sr.reveal(".announcement-header", {
      origin: "top",
      distance: "40px",
      delay: 200
    })
    sr.reveal(".opportunity-card", {
      origin: "bottom",
      distance: "30px",
      delay: 300,
      interval: 400
    })
    sr.reveal(".cta-section", {
      origin: "bottom",
      distance: "40px",
      delay: 400
    })

    return () => sr.destroy()
  }, [])

  // Determine if we're on the base /career route
  const isBaseRoute = location.pathname === "/career"

  if (error) return <div>{error.message}</div>
  if (loading) return <div><LoadingSpinner/></div>

  return (
    <section className='py-28 bg-secondary min-h-screen'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>


        {/* Render Announcement content or Outlet based on route */}
        {isBaseRoute ? (
          <>
            {/* Announcement Header */}
            <div className='announcement-header text-center mb-16'>
              <h2 className='text-4xl font-heading font-extrabold text-primary sm:text-5xl tracking-tight'>
                Career Opportunities at{" "}
                <span className='text-accent underline'>iCAPE</span>
              </h2>
              <p className='mt-4 max-w-3xl mx-auto text-xl text-primary font-body leading-relaxed'>
                Join our innovative team and contribute to groundbreaking
                projects that shape the future. We’re seeking passionate
                professionals and emerging talent to grow with us.
              </p>
            </div>

            {/* Opportunities Grid */}
            <div className='opportunity-card grid grid-cols-1 gap-10 md:grid-cols-2'>
              {opportunities.map((opp) => (
                <OpportunityCard
                  key={opp._id}
                  title={opp.title}
                  description={opp.description}
                  type={opp.type}
                  details={opp.details}
                  buttonText={opp.buttonText}
                  buttonLink={opp.buttonLink}
                />
              ))}
            </div>

            {/* Additional CTA */}
            <div className='cta-section mt-12 text-center'>
              <p className='text-primary font-body mb-4'>
                Questions about our opportunities? Reach out to our talent team.
              </p>
              <Link
                to='/contactus'
                className='inline-flex items-center px-6 py-3 border border-transparent text-base font-body font-medium rounded-lg text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200'
              >
                Contact Us
              </Link>
            </div>
          </>
        ) : (
          <Outlet /> // Render InternshipApplicationForm or CareerApplicationForm
        )}
      </div>
    </section>
  )
}

export default Annoucement
