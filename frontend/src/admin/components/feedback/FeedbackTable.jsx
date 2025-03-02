import React from "react";
import { FaTrash } from "react-icons/fa";

const FeedbackTable = ({ currentFeedback, indexOfFirstItem, handleRowClick, handleDeleteFeedback }) => {
  return (
    <div className="bg-light rounded-xl shadow-lg border border-border overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-secondary">
          <tr>
            <th className="px-4 py-3 text-sm font-body font-medium text-primary">No.</th>
            <th className="px-4 py-3 text-sm font-body font-medium text-primary">User</th>
            <th className="px-4 py-3 text-sm font-body font-medium text-primary">Email</th>
            <th className="px-4 py-3 text-sm font-body font-medium text-primary">Message</th>
            <th className="px-4 py-3 text-sm font-body font-medium text-primary">Date</th>
            <th className="px-4 py-3 text-sm font-body font-medium text-primary">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {currentFeedback.map((item, index) => (
            <tr
              key={item._id}
              className="hover:bg-accent hover:bg-opacity-10 cursor-pointer transition-colors"
              onClick={() => handleRowClick(item)}
            >
              <td className="px-4 py-4 text-sm text-primary font-body">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="px-4 py-4 text-sm text-primary font-body">{item.name}</td>
              <td className="px-4 py-4 text-sm text-primary font-body">{item.email}</td>
              <td className="px-4 py-4 text-sm text-primary font-body">{item.message}</td>
              <td className="px-4 py-4 text-sm text-primary font-body">
                {new Date(item.date).toLocaleDateString()}
              </td>
              <td className="px-4 py-4 text-sm text-primary font-body">
                <button
                  className="text-red-500 hover:text-red-700 mr-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteFeedback(item._id);
                  }}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;