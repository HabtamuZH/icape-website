import AnnouncementSection from "../components/career/Annoucement"
import { useEffect } from "react";


const Carrier= () => {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <>
        <AnnouncementSection/>
        </>
    )
}

export default Carrier