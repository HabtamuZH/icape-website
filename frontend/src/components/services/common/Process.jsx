/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";

const Process = ({ processSteps, title }) => {
  const headingRef = useRef(null);
  const stepsRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  // ScrollReveal Setup
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });

    if (headingRef.current) {
      sr.reveal(headingRef.current, { origin: "bottom", delay: 200 });
    }
    if (stepsRef.current) {
      sr.reveal(stepsRef.current.children, {
        origin: "bottom",
        delay: 400,
        interval: 200, // Staggered reveal for each step
      });
    }
  }, []);

  // Toggle accordion
  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-18 bg-light text-dark">
      <div className="max-w-[80vw] mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-heading text-primary text-center mb-12 animate-fadeIn drop-shadow-md"
        >
          {title}
        </h2>

        {/* Process Steps Accordion */}
        <div ref={stepsRef} className="space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="border-b border-border shadow-architectural rounded-xl2 overflow-hidden"
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-secondary transition-all duration-300 ease-in-out focus:outline-none"
              >
                <h3 className="text-xl font-heading text-primary">
                  {index + 1}. {step.step}
                </h3>
                <span
                  className={`text-accent text-2xl transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  {openIndex === index ? "+" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 p-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base font-body text-dark leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
