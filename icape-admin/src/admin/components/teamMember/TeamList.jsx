import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons for buttons
import { motion } from "framer-motion";

const TeamList = ({ team, onEdit, onDelete }) => {
  return (
    <div className="bg-secondary grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <div
          key={member._id}
          className="bg-secondary border border-border rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* Card Header: Avatar */}
          <div className="flex justify-center pt-6">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-accent"
            />
          </div>

          {/* Card Body: Details */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-heading font-semibold text-primary mb-1">
              {member.name}
            </h3>
            <p className="text-accent font-body text-sm font-medium mb-2">
              {member.title}
            </p>
            <p className="text-gray-700 font-body text-sm mb-4">
              {member.desc}
            </p>
            <div className="text-sm text-gray-600 font-body space-y-1">
              {member.socialLinks.map((link, idx) => (
                <p key={idx} className="truncate">
                  <span className="font-semibold">{link.platform}:</span>{" "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.url}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Card Footer: Buttons */}
          <div className="p-4 bg-secondary border-t border-border flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onEdit(member)}
              className="px-4 py-2 bg-accent text-light rounded-md hover:bg-primary transition-colors duration-200 font-body flex items-center gap-2"
            >
              <FaEdit /> Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDelete(member._id)}
              className="px-4 py-2 bg-red-500 text-light rounded-md hover:bg-red-600 transition-colors duration-200 font-body flex items-center gap-2"
            >
              <FaTrash /> Delete
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
