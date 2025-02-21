/* eslint-disable react/prop-types */

import {motion} from "framer-motion"
import {Link} from "react-router-dom"

const Option = ({Icon, title, link, selected, setSelected, open, notify}) => {

  return (
    <Link to={link.toLowerCase()}>
      <motion.button
        layout
        onClick={() => setSelected(title)}
        className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
          selected === title
            ? "bg-indigo-400 text-indigo-800"
            : "text-slate-700 hover:bg-slate-200"
        }`}
      >
        <motion.div
          layout
          className='grid h-full w-10 place-content-center text-lg'
        >
          <Icon />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.125}}
            className='text-xs font-medium'
          >
            {title}
          </motion.span>
        )}

        {notify && open && (
          <motion.span
            initial={{scale: 0, opacity: 0}}
            animate={{opacity: 1, scale: 1}}
            style={{y: "-50%"}}
            transition={{delay: 0.5}}
            className='absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white flex items-center justify-center'
          >
            {notify}
          </motion.span>
        )}
      </motion.button>
    </Link>
  )
}

export default Option
