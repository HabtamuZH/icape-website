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
            {/* <th className="py-4 px-6 font-body font-semibold ">Email</th> */}
            <th className="py-4 px-6 font-body font-semibold ">Message</th>
            <th className="py-4 px-6 font-body font-semibold ">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {currentFeedback.map((item, index) => (
            <tr
              key={item.id}
              className={`hover:bg-accent hover:bg-opacity-10  ${
                item.isRead ? "text-primary" : " bg-[#e9b070df] text-gray-800 "
              } cursor-pointer transition-colors `}
              onClick={() => handleRowClick(item)}
            >
              <td className="px-4 py-4 text-sm  font-body">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="px-4 py-4 text-sm  font-body">{item.name}</td>
              {/* <td className="px-4 py-4 text-sm  font-body">{item.email}</td> */}
              <td className="px-4 py-4 text-sm  font-body">
                {item.message.slice(0, 15)}
                {item?.message?.length > 15 ? "..." : ""}
              </td>
              <td
                onClick={() => {
                  console.log(item.date);
                }}
                className="px-4 py-4 text-sm  font-body"
              >
                {getRelativeTime(item.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;

function getRelativeTime(dateString) {
  const now = new Date();
  const target = new Date(dateString);
  const diff = target.getTime() - now.getTime(); // future = positive, past = negative
  const diffAbs = Math.abs(diff);

  const seconds = Math.floor(diffAbs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const isFuture = diff > 0;

  if (seconds < 60) return isFuture ? "In a few seconds" : "Just now";
  if (minutes < 60)
    return isFuture ? `In ${minutes} minute(s)` : `${minutes} minute(s) ago`;
  if (hours < 24)
    return isFuture ? `In ${hours} hour(s)` : `${hours} hour(s) ago`;
  if (days === 1) return isFuture ? "Tomorrow" : "Yesterday";
  if (days < 7) return isFuture ? `In ${days} day(s)` : `${days} day(s) ago`;

  // Fallback to showing full date if it's older/newer than a week
  return target.toLocaleDateString();
}

