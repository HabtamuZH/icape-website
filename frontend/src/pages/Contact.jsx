import Contact from "../components/contact/ContactUs"
import { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <Contact/>
        </>
    )
}

export default ContactUs