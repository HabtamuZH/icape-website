import Projects from '../projects/Projects'
import { useEffect } from "react";

const ProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <Projects />
        </>
    )
}

export default ProjectPage