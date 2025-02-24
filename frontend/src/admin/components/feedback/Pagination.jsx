import React from "react"
import {motion} from "framer-motion"

const Pagination = ({currentPage, totalPages, handlePageChange}) => {
  return (
    <div className='mt-6 flex justify-center items-center gap-2 flex-wrap'>
      <motion.button
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 text-primary font-body border border-border rounded-md hover:bg-accent hover:text-light disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Previous
      </motion.button>
      {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
        <motion.button
          key={page}
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 font-body ${
            currentPage === page
              ? "bg-accent text-light"
              : "text-primary border border-border hover:bg-accent hover:text-light"
          } rounded-md transition-colors duration-200`}
        >
          {page}
        </motion.button>
      ))}
      <motion.button
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 text-primary font-body border border-border rounded-md hover:bg-accent hover:text-light disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Next
      </motion.button>
    </div>
  )
}

export default Pagination
