import Option from "./Option"
import {motion} from "framer-motion"
import TitleSection from "./Title"
import {
  FiHome,
  FiDollarSign,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiBarChart,
  FiUsers,
  FiSettings
} from "react-icons/fi"
import {useState} from "react"
import ToggleClose from "./ToggleClose"
import {FaPen, FaProjectDiagram, FaUser} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"
import {MdFeedback} from "react-icons/md"

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState("Dashboard")

  return (
    <motion.nav
      layout
      className='sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2'
      style={{
        width: open ? "225px" : "fit-content"
      }}
    >
      <TitleSection open={open} />

      <div className='space-y-1'>
        <Option
          Icon={FiHome}
          title='Dashboard'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FaUser}
          title='Profile'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FaProjectDiagram}
          title='Projects-form'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FaPen}
          title='Blogs-post'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={MdFeedback}
          title='View-feedbacks'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={IoMdNotifications}
          title='Notifications'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiSettings}
          title='Settings'
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>
      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  )
}

export default Sidebar
