import { motion } from "framer-motion";
import headerBg from './../../public/images/image4.jpg';
import DesignIcon from "./../../public/icon/design.png";
import urban from "./../../public/icon/urban.png";
import interior from "./../../public/icon/interior.png";
import landscape from "./../../public/icon/landscape.png";

const services = [
  {
    title: "Architectural Design",
    description:
      "Innovative and sustainable design solutions for modern architecture.",
    icon: DesignIcon, // Replace with your actual icon path
  },
  {
    title: "Urban Planning",
    description:
      "Efficient and forward-thinking urban planning services for thriving communities.",
    icon: urban,
  },
  {
    title: "Interior Design",
    description:
      "Creating functional and aesthetically pleasing interior spaces.",
    icon: interior,
  },
  {
    title: "Landscape Architecture",
    description:
      "Beautiful and sustainable landscape designs that harmonize with nature.",
    icon: landscape,
  },
];

const Header = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt="Architecture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Heading with animation */}
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-36"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {},
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1b2944] rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Optional Icon */}
              {service.icon && (
                <span className=" p-1 rounded-[50%] inline">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="w-12 h-12 mb-4"
                  />
                </span>
              )}
              <h2 className="text-xl font-semibold mb-2 text-gray-200 text-center ">
                {service.title}
              </h2>
              <p className="text-gray-100 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
