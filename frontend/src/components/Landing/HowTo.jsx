import React from "react"
import {motion, useInView} from "framer-motion"
import {
  FaRegEdit,
  FaFileSignature,
  FaClipboardCheck,
  FaCheckCircle,
  FaUserPlus,
  FaCogs
} from "react-icons/fa" // Importing icons

const steps = [
  {
    title: "Step 1: Register",
    description:
      "Start by creating an account on iCAPE. Provide your basic details and verify your email address to get started.",
    icon: <FaUserPlus className='w-8 h-8 text-blue-500' />
  },
  {
    title: "Step 2: Complete Your Profile",
    description:
      "Fill in your profile with relevant information about your organization, including business details, contact info, and partnership goals.",
    icon: <FaRegEdit className='w-8 h-8 text-blue-500' />
  },
  {
    title: "Step 3: Submit Partnership Application",
    description:
      "Submit your partnership application through the iCAPE platform, along with all required documents and information for evaluation.",
    icon: <FaFileSignature className='w-8 h-8 text-blue-500' />
  },
  {
    title: "Step 4: Review Process",
    description:
      "Our team will carefully review your application. If needed, we will reach out for any additional information or clarification.",
    icon: <FaClipboardCheck className='w-8 h-8 text-blue-500' />
  },
  {
    title: "Step 5: Approval and Confirmation",
    description:
      "Once your partnership is approved, you will receive a confirmation email and gain access to the iCAPE partner portal.",
    icon: <FaCheckCircle className='w-8 h-8 text-blue-500' />
  },
  {
    title: "Step 6: Onboarding",
    description:
      "Complete the onboarding process, which will guide you through the tools, resources, and support available within the iCAPE platform for successful collaboration.",
    icon: <FaCogs className='w-8 h-8 text-blue-500' />
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
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {duration: 0.5}
  }
}

const HowTo = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <section id='how-to' name='how-to' className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center py-8'>
          <h1 className='text-3xl font-bold text-text-h1'>
            How to Work Together with iCAPE
          </h1>
          <p className='text-lg text-text-p mt-2'>
            Follow these steps to start collaborating with iCAPE and unlock
            growth opportunities.
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
              className='bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'
            >
              <div className='flex items-center space-x-4'>
                <div className='p-3 bg-blue-100 rounded-full'>{step.icon}</div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-800'>
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowTo
