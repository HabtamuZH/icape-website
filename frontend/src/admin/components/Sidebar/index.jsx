import Option from "./Option"
import {motion} from "framer-motion"
import TitleSection from "./Title"
import {useState} from "react"
import ToggleClose from "./ToggleClose"
import optionsData from "../../data/optionData"

const Sidebar = ({unreadCount}) => {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState("Dashboard")

  // Update optionsData dynamically with unreadCount for Notifications
  const updatedOptionsData = optionsData.map((option) =>
    option.title === "Notifications" ? {...option, notifs: unreadCount} : option
  )

  return (
    <motion.nav
      layout
      className='sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2'
      style={{
        width: open ? "225px" : "fit-content"
      }}
    >
      <TitleSection open={open} />

      {updatedOptionsData.map(({Icon, title, link, notify}) => (
        <Option
          key={title}
          Icon={Icon}
          title={title}
          link={link}
          selected={selected}
          setSelected={setSelected}
          open={open}
          notify={notify} // Dynamic notifs value
        />
      ))}

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  )
}

export default Sidebar
