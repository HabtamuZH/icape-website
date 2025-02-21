import { PropTypes } from "prop-types";

const DetailSlider = ({ onClose, title, description }) => {
  return (
    <div
      className="fixed inset-0 bg-dark bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-light p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 text-center">
            {title}
          </h2>
          <div className="space-y-6 text-primary/80 font-body">
            {description.map((ds, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-xl font-heading text-accent font-semibold mb-2">
                  {ds.subTitle}
                </h3>
                <p className="text-base leading-relaxed">{ds.content}</p>
              </div>
            ))}
            {/* Dummy content to force scrolling for testing */}
            {/* <div className="h-[100vh] bg-gray-200 opacity-50 text-center">
              Scroll Test Area (Remove this in production)
            </div> */}
          </div>
        </div>

        {/* Footer Metadata */}
        <div className="flex justify-between items-center text-primary text-sm mt-4 font-body shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 text-accent">📝</span>
            <span>ICAPE Team</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 text-accent">📅</span>
            <span>February 20, 2025</span> {/* Example date */}
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 text-accent">🏷️</span>
            <span>{title}</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-primary text-2xl font-bold hover:text-accent"
          onClick={onClose}
          aria-label="Close slider"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default DetailSlider;

DetailSlider.propTypes = {
  onClose: PropTypes.func.isRequired,
  description: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};