// import { FaTrash } from "react-icons/fa";

const FeedbackTable = ({
  currentFeedback,
  indexOfFirstItem,
  handleRowClick,
}) => {
  return (
    <div className="bg-light rounded-xl shadow-lg border border-border overflow-x-auto p-6">
      <table className="w-full text-left ">
        <thead className="border-b border-border">
          <tr className="text-primary">
            <th className="py-4 px-6 font-body font-semibold ">No.</th>
            <th className="py-4 px-6 font-body font-semibold ">User</th>
            <th className="py-4 px-6 font-body font-semibold ">Email</th>
            <th className="py-4 px-6 font-body font-semibold ">Message</th>
            <th className="py-4 px-6 font-body font-semibold ">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {currentFeedback.map((item, index) => (
            <tr
              key={item._id}
              className={`hover:bg-accent hover:bg-opacity-10  ${
                item.isRead ? "text-primary" : " bg-[#e9b070df] text-gray-800 "
              } cursor-pointer transition-colors `}
              onClick={() => handleRowClick(item)}
            >
              <td className="px-4 py-4 text-sm  font-body">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="px-4 py-4 text-sm  font-body">{item.name}</td>
              <td className="px-4 py-4 text-sm  font-body">{item.email}</td>
              <td className="px-4 py-4 text-sm  font-body">
                {item.message.slice(0, 15)}
                {item?.message?.length > 15 ? "..." : ""}
              </td>
              <td className="px-4 py-4 text-sm  font-body">
                {new Date(item.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
