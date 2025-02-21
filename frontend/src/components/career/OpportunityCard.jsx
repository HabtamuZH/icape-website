import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const OpportunityCard = ({
  title,
  description,
  type,
  details,
  buttonText,
  buttonLink,
}) => {
  // No separate useEffect needed here since it's handled in the parent

  return (
    <div className="opportunity-card bg-light rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-heading font-semibold text-primary">
          {title}
        </h3>
        <span className="inline-flex items-center px-3 py-1 rounded-xl text-sm font-body font-medium bg-accent bg-opacity-20 text-accent">
          {type}
        </span>
      </div>
      <p className="text-primary font-body mb-6 leading-relaxed">
        {description}
      </p>
      {details && (
        <ul className="list-disc list-inside text-primary font-body mb-6 space-y-2">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <a
        href={buttonLink}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-body font-medium rounded-md text-light bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
      >
        {buttonText}
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default OpportunityCard;