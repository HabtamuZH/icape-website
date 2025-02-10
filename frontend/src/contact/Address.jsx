// import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const AddressInformation = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 py-10 px-4">
      <motion.div
        className="w-full max-w-6xl bg-gray-800 bg-opacity-90 shadow-2xl rounded-3xl p-10 text-white flex flex-col md:flex-row gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Left Section - Address & Contact Info */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <MapPin className="text-blue-500 w-9 h-9" />
            Our Address
          </h2>
          <p className="text-lg text-gray-300">
            123 Artifact Street, Lorem City, Country
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <motion.div
              className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Phone className="w-7 h-7 text-blue-400" />
              <span className="text-lg font-medium">+123 456 7890</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Mail className="w-7 h-7 text-blue-400" />
              <span className="text-lg font-medium">
                info@artifactcompany.com
              </span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Clock className="w-7 h-7 text-blue-400" />
              <span className="text-lg font-medium">
                Mon - Fri: 9:00 AM - 6:00 PM
              </span>
            </motion.div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-6 flex gap-4">
            <motion.a
              href="mailto:info@artifactcompany.com"
              className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://wa.me/251910299794"
              target="_blank"
              className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Live Chat <MessageCircle className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section - Google Maps */}
        <motion.div
          className="flex-1 h-80 rounded-xl overflow-hidden shadow-lg border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <iframe
            title="Google Maps"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95592831590452!3d-37.81720974202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f31a3b%3A0x3e7e62c92da83e01!2sMelbourne%20City%20Centre!5e0!3m2!1sen!2sau!4v1634567890123!5m2!1sen!2sau"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>

      {/* Floating Live Chat Button */}
      <motion.a
        href="https://wa.me/251910299794"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default AddressInformation;
