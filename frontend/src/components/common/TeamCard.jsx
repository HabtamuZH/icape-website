/* eslint-disable react/prop-types */
import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

// Map platform names to icons
const socialIcons = {
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
};

const TeamCard = ({ avatar, name, title, desc, socialLinks }) => {
  return (
    <div className="p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
      <div className="shadow-2xl rounded-lg bg-secondary p-4">
        <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-accent">
          <img src={avatar} className="w-full h-full object-cover" alt={name} />
        </div>
        <h4 className="text-primary text-lg font-semibold font-heading">
          {name}
        </h4>
        <p className="text-accent text-sm font-medium font-body">{title}</p>
        <p className="text-gray-700 mt-3 text-sm font-body">{desc}</p>
        <div className="mt-4 flex justify-center gap-4 text-gray-600">
          {socialLinks &&
            socialLinks.map((link, index) => {
              const Icon = socialIcons[link.platform] || FaTwitter; // Default to Twitter if platform unknown
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition"
                >
                  <Icon size={20} />
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
