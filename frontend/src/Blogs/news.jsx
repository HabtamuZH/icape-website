import React, {useState} from "react"
import {FaArrowRight} from "react-icons/fa"

const BlogData = [
  {
    date: "Dec 22, 2023",
    CardTitle: "Introducing AutoManage: Revolutionizing Partnership Management",
    CardDescription:
      "AutoManage provides innovative AI tools for efficient partnership management, helping organizations streamline collaboration...",
    image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
    fullDescription:
      "AutoManage provides innovative AI tools for efficient partnership management, helping organizations streamline collaboration and improve overall performance. AutoManage is an advanced AI-driven platform that enables organizations to manage their partnerships with greater efficiency. The platform leverages machine learning and data analytics to optimize collaboration, track progress, and ensure long-term success in all business partnerships."
  },
  {
    date: "Dec 22, 2023",
    CardTitle: "How AutoManage Enhances Communication in Partnerships",
    CardDescription:
      "Effective communication is the backbone of successful partnerships. AutoManage helps organizations foster better communication...",
    image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
    fullDescription:
      "Effective communication is the backbone of successful partnerships. AutoManage helps organizations foster better communication through automated updates, real-time notifications, and streamlined messaging. AutoManage allows organizations to stay connected with partners in real time through seamless messaging and instant notifications. The platform improves clarity, ensures timely updates, and minimizes communication gaps, resulting in stronger, more effective partnerships."
  },
  {
    date: "Dec 22, 2023",
    CardTitle: "The Future of AI in Partnership Management",
    CardDescription:
      "AI is transforming partnership management, and AutoManage is at the forefront of this revolution. Learn how AI can automate tasks, improve decision-making, and foster growth...",
    image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
    fullDescription:
      "AI is transforming partnership management, and AutoManage is at the forefront of this revolution. Learn how AI can automate tasks, improve decision-making, and foster growth. Artificial intelligence is changing the way organizations manage partnerships by automating repetitive tasks, analyzing data for valuable insights, and assisting in decision-making. AutoManage harnesses the power of AI to provide organizations with the tools they need to drive growth and maximize the potential of every partnership."
  }
]

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const handleOpenModal = (content) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalContent({})
  }

  return (
    <>
      <section className='pb-10 pt-20 lg:pb-20 lg:pt-[120px] bg-bg-color '>
        <div>
          <div className='mx-4 flex flex-wrap'>
            <div className='w-full'>
              <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
                {/* <span className='mb-2 block text-lg font-semibold text-[var(--color-btn-default)]'>
                  Our Blogs
                </span> */}
                <h2 className='font-poppins mb-4 text-text-h1 font-bold sm:text-4xl md:text-[40px]'>
                  Our Recent News
                </h2>
                <p className='font-poppins text-text-p'>
                  Stay updated with the latest news about AutoManage and how it
                  is transforming partnership management across industries.
                </p>
              </div>
            </div>
          </div>

          <div className='mx-4 flex flex-wrap'>
            {BlogData.map((blog, index) => (
              <BlogCard
                key={index}
                date={blog.date}
                CardTitle={blog.CardTitle}
                CardDescription={blog.CardDescription}
                image={blog.image}
                fullDescription={blog.fullDescription}
                onReadMore={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Modal content={modalContent} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default News

const BlogCard = ({
  image,
  date,
  CardTitle,
  CardDescription,
  fullDescription,
  onReadMore
}) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='mb-10 w-full shadow-lg rounded-[1rem] hover:scale-102 transition-transform'>
        <div className='mb-8 overflow-hidden rounded'>
          <img src={image} alt='' className='w-full' />
        </div>
        <div className='p-4'>
          {date && (
            <span className='font-poppins mb-5 inline-block rounded bg-[var(--color-btn-default)] px-4 py-1 text-center text-xs font-semibold leading-loose text-[var(--color-btn-text)]'>
              {date}
            </span>
          )}
          <h3 className='font-poppins mb-4 inline-block text-text-h2 font-semibold  sm:text-2xl lg:text-xl xl:text-2xl'>
            {CardTitle}
          </h3>
          <p className='font-poppins text-text-p '>
            {CardDescription}
            <button
              onClick={() =>
                onReadMore({
                  date,
                  CardTitle,
                  CardDescription,
                  fullDescription,
                  image
                })
              }
              className='font-poppins flex items-center gap-2 text-[var(--color-btn-default)] hover:cursor-pointer hover:text-[var(--color-btn-hover)]'
            >
              Read More
              <FaArrowRight
                size={15}
                className='text-[var(--color-btn-default)]'
              />
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

const Modal = ({content, onClose}) => {
  const {date, CardTitle, fullDescription, image} = content

  return (
    <div className='font-poppins fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-opacity-80'>
      <div className='bg-[var(--color-bg-color)] rounded-lg shadow-lg w-[90%] max-w-3xl max-h-[90%] overflow-y-auto'>
        <div className='relative p-6'>
          <img src={image} alt={CardTitle} className='rounded mb-4 w-full' />
          <span className='inline-block text-sm font-semibold text-[var(--color-btn-default)] mb-2'>
            {date}
          </span>
          <h3 className='text-2xl font-bold mb-4 text-[var(--color-text-h2)]'>
            {CardTitle}
          </h3>
          <p className='text-text-p mb-6'>
            {fullDescription}
          </p>
          <button
            onClick={onClose}
            className='absolute mb-4 px-3 py-1 right-6 bottom-0 font-semibold text-[var(--color-btn-text)] bg-[var(--color-btn-default)] rounded hover:bg-[var(--color-btn-hover)] transition-transform'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
