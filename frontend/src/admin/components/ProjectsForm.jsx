import  { useState } from 'react';

export default function ProjectsForm() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="py-8 px-6 mx-auto max-w-6xl w-full lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new Project</h2>
        <form action="#" className='w-full'>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Project Name</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type project name" required />
            </div>
            <div className="w-full">
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
              <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Project type" required />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
              <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                <option selected>Select status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
            </div>
            {/* Multiple Image Upload Section */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">Upload Images</label>
              <input type="file" multiple accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" />
              {/* Image Previews */}
              <div className="mt-4 flex flex-wrap gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={image} alt={`Preview ${index}`} className="w-20 h-20 object-cover rounded-lg" />
                    <button type="button" className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full" onClick={() => removeImage(index)}>X</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Project
          </button>
        </form>
      </div>
    </section>
  );
}
