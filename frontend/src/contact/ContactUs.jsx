import  { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
  Send,
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEndpoint = "https://formsubmit.co/el/nidica"; // Email endpoint
    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 py-10 px-4">
      <motion.div
        className="w-full max-w-6xl bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-90 shadow-2xl rounded-3xl p-10 text-white flex flex-col md:flex-row gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" },
          },
        }}
      >
        {/* Left Section - Address & Contact Info */}
        <motion.div className="flex-1 space-y-6" variants={fadeInUp}>
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <MapPin className="text-blue-500 w-9 h-9 animate-pulse" />
            Contact Us
          </h2>
          <p className="text-lg text-gray-300">
            We’d love to hear from you! Reach out to us via phone, email, or
            visit our office.
          </p>
          <div className="space-y-5">
            {[
              {
                icon: <Phone className="w-7 h-7 text-blue-400" />,
                text: "+251 912 345 678",
              },
              {
                icon: <Mail className="w-7 h-7 text-blue-400" />,
                text: "info@artifactcompany.com",
              },
              {
                icon: <Clock className="w-7 h-7 text-blue-400" />,
                text: "Mon - Fri: 9:00 AM - 6:00 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: index * 0.2 },
                  },
                }}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
          {/* Contact Buttons */}
          <div className="mt-6 flex gap-4">
            {[
              {
                href: "mailto:info@artifactcompany.com",
                text: "Email Us",
                icon: <ArrowRight className="ml-2 w-5 h-5" />,
              },
              {
                href: "https://wa.me/251912345678",
                text: "Live Chat",
                icon: <MessageCircle className="ml-2 w-5 h-5" />,
              },
            ].map((btn, index) => (
              <motion.a
                key={index}
                href={btn.href}
                className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.text} {btn.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          {submitted ? (
            <p className="text-green-400 font-medium">
              Your message has been sent successfully!
            </p>
          ) : (
            <form
              action="https://formsubmit.co/el/nidica"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 transform hover:scale-105"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 transform hover:scale-105"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 transform hover:scale-105"
                required
              ></textarea>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>

      {/* Google Maps Embed */}
      <motion.div
        className="w-full max-w-6xl mt-10 h-80 rounded-xl overflow-hidden shadow-lg border border-gray-700"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeInOut" },
          },
        }}
      >
        <iframe
          title="Google Maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95592831590452!3d-37.81720974202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f31a3b%3A0x3e7e62c92da83e01!2sMelbourne%20City%20Centre!5e0!3m2!1sen!2sau!4v1634567890123!5m2!1sen!2sau"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
