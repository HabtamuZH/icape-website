import React from "react"
import {motion, useInView} from "framer-motion"

const steps = [
  {
    title: "Step 1: Register",
    description:
      "Create an account by providing your personal details and verifying your email address."
  },
  {
    title: "Step 2: Complete Profile",
    description:
      "Fill in your profile information, including your business details and contact information."
  },
  {
    title: "Step 3: Submit Application",
    description:
      "Submit your partnership application with the necessary documents and information."
  },
  {
    title: "Step 4: Review Process",
    description:
      "Our team will review your application and contact you for any additional information."
  },
  {
    title: "Step 5: Approval",
    description:
      "Once approved, you will receive a confirmation email and access to the partner portal."
  },
  {
    title: "Step 6: Onboarding",
    description:
      "Complete the onboarding process to get started with your partnership with INSA."
  }
]

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: {opacity: 0, y: 50, rotate: -5},
  visible: {opacity: 1, y: 0, rotate: 0, transition: {duration: 0.5}}
}

const HowTo = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <section
      id='how-to'
      name='how-to'
      className='bg-white py-12 font--poppins'
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center py-8'>
          <h1 className='text-3xl font-bold text-text-h1'>
            How to Work together
          </h1>
          <p className='text-lg text-text-p mt-2'>
            Follow these steps to work together with iCAPE.
          </p>
        </div>
        <motion.div
          ref={ref}
          className='space-y-8'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-gray-100  p-6 rounded-lg shadow-md'
            >
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {step.title}
              </h3>
              <p className='text-gray-700 dark:text-gray-800'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowTo
