/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const Card = ({ color, icon: Icon, title, value, footer }) => {
  const colorClasses = {
    blue: "bg-gradient-to-r from-accent to-primary",
    green: "bg-gradient-to-r from-accent to-dark",
    orange: "bg-gradient-to-r from-accent to-border",
    purple: "bg-gradient-to-r from-dark to-accent",
    red: "bg-gradient-to-r from-primary to-dark",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
      className="bg-light border border-border rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between">
          <div
            className={`h-14 w-14 grid place-items-center ${colorClasses[color]} text-light rounded-full shadow-md`}
          >
            {Icon}
          </div>
          <div className="text-right">
            <p className="text-sm font-body font-medium text-primary uppercase tracking-wider">
              {title}
            </p>
            <h4 className="text-3xl font-heading font-semibold text-primary mt-1">
              {value}
            </h4>
          </div>
        </div>
      </div>
      {footer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-secondary border-t border-border text-sm text-primary font-body"
        >
          <p>
            <strong className={`${footer.color} font-semibold`}>
              {footer.value}
            </strong>{" "}
            {footer.label}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
