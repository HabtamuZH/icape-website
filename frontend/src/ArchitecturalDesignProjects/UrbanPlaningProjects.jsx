import React, {useState} from "react"
import {FaExternalLinkAlt} from "react-icons/fa"

const projects = [
  {
    id: "1",
    title: "Sustainable Smart City",
    shortDescription:
      "An innovative smart city designed for sustainability and efficiency.",
    longDescription:
      "This project incorporates renewable energy sources, smart grids, and green infrastructure to create a highly sustainable and efficient urban environment.",
    image: "/images/urban1.jpg"
  },
  {
    id: "2",
    title: "Eco-Friendly Residential Zone",
    shortDescription:
      "A housing development focused on green living and energy efficiency.",
    longDescription:
      "Featuring solar panels, water recycling systems, and extensive green spaces, this project promotes eco-conscious living in a modern urban setting.",
    image: "/images/urban2.jpg"
  },
  {
    id: "3",
    title: "Urban River Restoration",
    shortDescription:
      "A project focused on revitalizing urban waterways and improving biodiversity.",
    longDescription:
      "Through ecosystem restoration, pollution control, and recreational area development, this initiative aims to enhance the environmental quality of urban rivers.",
    image: "/images/urban3.jpg"
  }
]

const UrbanPlanningProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className='py-1 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 sm:text-4xl'>
          Urban Planning Projects
        </h2>
        <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
          Discover our latest urban planning initiatives aimed at sustainable
          and innovative city development.
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

export default UrbanPlanningProjects
