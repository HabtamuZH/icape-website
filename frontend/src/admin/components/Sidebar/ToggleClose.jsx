/* eslint-disable react/prop-types */
import { FiChevronsRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-border transition-colors hover:bg-secondary text-primary"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid w-10 h-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-body font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default ToggleClose;