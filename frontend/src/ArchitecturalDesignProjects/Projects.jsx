import React, {useState} from "react"
import {FaExternalLinkAlt} from "react-icons/fa"

const projects = [
  {
    id: "1",
    title: "Modern Urban Skyscraper",
    shortDescription:
      "A state-of-the-art skyscraper integrating eco-friendly designs.",
    longDescription:
      "This project aims to redefine urban landscapes by incorporating cutting-edge architectural advancements with sustainable materials and smart technologies.",
    image: "/images/image1.jpg"
  },
  {
    id: "2",
    title: "Green City Initiative",
    shortDescription:
      "An urban development project emphasizing sustainability.",
    longDescription:
      "Focused on green living, this initiative integrates renewable energy, green rooftops, and smart waste management to create a sustainable urban environment.",
    image: "/images/image2.jpg"
  },
  {
    id: "3",
    title: "Futuristic Residential Complex",
    shortDescription:
      "Luxury meets sustainability in this innovative residential area.",
    longDescription:
      "This residential complex provides modern living with smart homes, energy-efficient buildings, and a community-driven approach to environmental consciousness.",
    image: "/images/image3.jpg"
  },
  {
    id: "4",
    title: "Cultural Heritage Museum",
    shortDescription:
      "A museum preserving cultural heritage with modern architecture.",
    longDescription:
      "Blending historical significance with contemporary design, this museum serves as a bridge between the past and the future through interactive exhibits and immersive experiences.",
    image: "/images/image4.jpg"
  },
  {
    id: "5",
    title: "Eco-Friendly Business Hub",
    shortDescription: "A workspace designed for sustainable businesses.",
    longDescription:
      "With an emphasis on sustainability, this business hub integrates renewable energy, collaborative spaces, and eco-friendly infrastructure to support forward-thinking enterprises.",
    image: "/images/image5.jpg"
  },
  {
    id: "6",
    title: "Smart City Infrastructure",
    shortDescription: "Enhancing urban infrastructure with smart technology.",
    longDescription:
      "Utilizing IoT and AI, this project optimizes city management, from traffic flow to energy consumption, creating a more efficient and livable urban environment.",
    image: "/images/image6.jpg"
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 sm:text-4xl'>
          Our Projects
        </h2>
        <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
          Explore our latest architectural and urban development projects that
          are reshaping the world.
        </p>
        <div className='mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition cursor-pointer'
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover rounded-md'
              />
              <h3 className='text-xl font-semibold text-gray-700 mt-4'>
                {project.title}
              </h3>
              <p className='text-gray-600 mt-2 text-sm'>
                {project.shortDescription}
              </p>
              <button className='mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition'>
                View Details <FaExternalLinkAlt className='ml-2' />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto flex flex-col'>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className='w-full h-64 object-cover rounded-md'
            />
            <h3 className='text-2xl font-semibold text-gray-800 mt-4'>
              {selectedProject.title}
            </h3>
            <p className='text-gray-600 mt-2 flex-grow'>
              {selectedProject.longDescription}
            </p>
            <button
              className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 w-full'
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
