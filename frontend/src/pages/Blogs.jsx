import { useEffect } from "react";
import BlogList from "../components/Blogs/BlogList";

const Blogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <BlogList/>
        </>
    )
}

export default Blogs