import { useNavigate, useLocation } from 'react-router-dom';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const projectType = location.pathname.split('/').pop();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      {/* First Section */}
      <section className="w-full pt-24 animated fadeInUp">
        <h1 className="text-4xl text-center font-bold pt-2">{projectType.toUpperCase()} PROJECTS</h1>
        <div className="container mx-auto flex flex-wrap">
          {/* First Column */}
          <div className="w-full md:w-1/2 p-4 cursor-pointer" onClick={() => handleProjectClick('apartment')}>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image7})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h2 className="text-white text-2xl font-bold">APARTMENT</h2>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/2 p-4 cursor-pointer" onClick={() => handleProjectClick('cbeBank')}>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image8})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h2 className="text-white text-2xl font-bold">CBE BANK</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full animated fadeInUp">
        <div className="container mx-auto flex flex-wrap">
          {/* First Column */}
          <div className="w-full md:w-1/3 p-4 cursor-pointer" onClick={() => handleProjectClick('jcc')}>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image9})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h2 className="text-white text-2xl font-bold">JCC</h2>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/3 p-4 cursor-pointer" onClick={() => handleProjectClick('garaMart')}>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image10})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h2 className="text-white text-2xl font-bold">GARA MART</h2>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="w-full md:w-1/3 p-4 cursor-pointer" onClick={() => handleProjectClick('waritZ')}>
            <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image11})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h2 className="text-white text-2xl font-bold">WARIT Z</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;