/* eslint-disable react/prop-types */
// import { FiChevronDown } from "react-icons/fi";
import {motion} from "framer-motion"
import {FaUserCircle} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"
import Logo from "./Logo"

const TitleSection = ({open}) => {
  return (
    <div className='mb-3 border-b border-slate-300 pb-3'>
      <div className='flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100'>
        <div className='flex items-center gap-2'>
          {/* <Logo /> */}
          <FaUserCircle className='mr-2' size={50} />
          {open && (
            <motion.div
              layout
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.125}}
            >
              <span className='block text-xs font-bold'>iCAPE</span>
              <span className='block text-xs text-slate-500'>Admin</span>
            </motion.div>
          )}
        </div> 
        <BiLogOut className='mr-2 text-red-600' size={30} />
      </div>
    </div>
  )
}

export default TitleSection
