import { useEffect } from "react";
import Blog from "./../components/Blogs/news"

const Blogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <Blog/>
        </>
    )
}

export default Blogs