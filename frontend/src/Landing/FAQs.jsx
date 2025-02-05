import {useRef, useState} from "react"

const FaqsCard = (props) => {
  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState("0px")
  const {faqsList, idx} = props

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight
    setState(!state)
    setAnswerH(`${answerElH + 20}px`)
  }

  return (
    <div
      className='space-y-3 mt-5 overflow-hidden border-b bg-gray-200 rounded-lg pt-2 px-4'
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className='cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium'>
        {faqsList.q}
        {state ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M20 12H4'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className='duration-300'
        style={state ? {height: answerH} : {height: "0px"}}
      >
        <div>
          <p className='text-gray-500'>{faqsList.a}</p>
        </div>
      </div>
    </div>
  )
}

export default () => {
  const faqsList = [
    {
      q: "What is iCAPE?",
      a: "iCAPE is an innovative platform developed to streamline partnership management, allowing organizations to easily manage and track their partnerships, collaborations, and growth opportunities."
    },
    {
      q: "How can iCAPE help my organization?",
      a: "iCAPE provides tools for seamless partnership management, allowing your organization to track goals, performance, and communication with partners in real-time, ensuring that every partnership is nurtured efficiently."
    },
    {
      q: "Who can use iCAPE?",
      a: "iCAPE is designed for organizations looking to manage their partnerships better. Whether you're a business, nonprofit, or government agency, iCAPE helps you stay on top of your collaborations and ensure mutual growth."
    },
    {
      q: "What features does iCAPE offer?",
      a: "iCAPE offers features like partnership tracking, goal-setting, performance monitoring, document sharing, and detailed reporting to ensure the success of every partnership."
    },
    {
      q: "How secure is my data with iCAPE?",
      a: "We take data security seriously at iCAPE. We use industry-leading encryption protocols and adhere to best practices in cybersecurity to ensure that all your partnership data is safe and secure."
    }
  ]

  return (
    <section className='leading-relaxed max-w-full pt-12 mx-auto px-4 md:px-8'>
      <div className='space-y-3 text-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>
          Frequently Asked Questions
        </h1>
        <p className='text-gray-600 max-w-lg mx-auto text-lg'>
          Answered all frequently asked questions about iCAPE. Still confused?
          Feel free to contact us.
        </p>
      </div>
      <div className='mt-14 pb-32 max-w-2xl mx-auto'>
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  )
}
