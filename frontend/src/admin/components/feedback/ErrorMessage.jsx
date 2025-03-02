import React from "react";

const ErrorMessage = ({ message }) => {
  return <div className="p-6 text-red-500 font-body">{message}</div>;
};

export default ErrorMessage;