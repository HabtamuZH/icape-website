import {useEffect, useState} from "react"
import ScrollReveal from "scrollreveal"
import OpportunityCard from "./OpportunityCard"
import {Link} from "react-router-dom"
import careerService from "../../services/careers-service"

const Announcement = () => {
  const [opportunities, setOpportunities] = useState()
  const [error ,setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    careerService
      .getAll()
      .then((res) => setOpportunities(res.data))
      .catch((err) => console.error(err))
      .finally(()=>setLoading(false))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    const sr = ScrollReveal({
      reset: false, // One-time animation
      duration: 800,
      easing: "ease-out"
    })
    // Header animation
    sr.reveal(".announcement-header", {
      origin: "top",
      distance: "40px",
      delay: 200
    })

    // Opportunity cards animation
    sr.reveal(".opportunity-card", {
      origin: "bottom",
      distance: "30px",
      delay: 300,
      interval: 400 // Staggered effect for each card
    })

    // CTA animation
    sr.reveal(".cta-section", {origin: "bottom", distance: "40px", delay: 400})

    return () => sr.destroy() // Cleanup
  }, [])

  if(error) return <div>{error.message}</div>
  if(loading) return <div>Loading...</div>

  return (
    <section className='py-32 bg-gradient-to-b from-secondary to-light'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='announcement-header text-center mb-16'>
          <h2 className='text-4xl font-heading font-extrabold text-primary sm:text-5xl tracking-tight'>
            Career Opportunities at{" "}
            <span className='text-accent underline'>iCAPE</span>
          </h2>
          <p className='mt-4 max-w-3xl mx-auto text-xl text-primary font-body leading-relaxed'>
            Join our innovative team and contribute to groundbreaking projects
            that shape the future. We’re seeking passionate professionals and
            emerging talent to grow with us.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className='opportunity-card grid grid-cols-1 gap-10 md:grid-cols-2'>
          {opportunities.map((opp) => (
            <OpportunityCard
              key={opp._id} // Use _id from MongoDB as the unique key
              title={opp.title}
              description={opp.description}
              type={opp.type}
              details={opp.details}
              buttonText={opp.buttonText}
              buttonLink={opp.buttonLink}
            />
          ))}
          {/* <OpportunityCard
            title='Internship Program 2025'
            description='Our internship program offers a unique opportunity for students and recent graduates to gain hands-on experience in a cutting-edge industry. Work alongside industry experts on real projects, develop professional skills, and build your network in a supportive, mentorship-driven environment.'
            type='Paid Internship (Summer/Fall 2025)'
            details={[
              "Structured mentorship program",
              "Real-world project experience",
              "Potential for full-time opportunities"
            ]}
            buttonText='Apply for Internship'
            buttonLink='/application-forms'
          /> */}
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
      </div>
    </section>
  )
}

export default Announcement
