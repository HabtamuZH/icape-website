import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import SpotlightCard from "../about/SpotlightCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ExpVision = () => {
  useEffect(() => {
    ScrollReveal().reveal(".vision-card", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      duration: 1000,
      interval: 200,
      reset: true,
    });
    ScrollReveal().reveal(".sr-global-impact", {
      opacity: 0,
      x: -50,
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center flex-col">
        {/* Header Section */}
        <div className="mb-16 sr-global-impact">
          <h2 className="text-center text-4xl font-extrabold tracking-wide sm:text-5xl text-gray-100 pb-6">
            Explore Our Insights
          </h2>
          <SpotlightCard>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl p-6">
              Stay ahead with expert insights, industry trends, and innovative
              ideas. Explore our blog for knowledge that shapes the future.
            </p>
          </SpotlightCard>
        </div>
        {/* Call-to-Action Button */}
        <div className="hero-button flex flex-col mb-4 md:mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/blog"
            className="inline-flex justify-center items-center py-3 px-6 text-sm md:text-base font-medium text-white bg-accent rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Visit Our Blog
            <FaArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpVision;
