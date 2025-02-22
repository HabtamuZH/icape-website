import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid w-10 h-10 shrink-0 place-content-center rounded-md bg-accent"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-light"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        />
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        />
      </svg>
    </motion.div>
  );
};

export default Logo;