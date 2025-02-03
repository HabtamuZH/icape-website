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
      className='space-y-3 mt-5 overflow-hidden border-b bg-gray-100 rounded-lg pt-2 px-4'
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
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
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
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    }
  ]

  return (
    <section
      className='leading-relaxed max-w-full pt-12 mx-auto px-4 md:px-8'
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"
      }}
    >
      <div className='space-y-3 text-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>
          Frequently Asked Questions
        </h1>
        <p className='text-gray-600 max-w-lg mx-auto text-lg'>
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
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
