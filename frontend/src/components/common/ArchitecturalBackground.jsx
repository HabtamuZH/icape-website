import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import BuildingAnimation from './BuildingAnimation';

const ArchitecturalBackground = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest);
  });

  return (
    <div className="relative w-full">
      {/* Absolute Fixed Background Infrastructure */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Solid Fill */}
        <div className="absolute inset-0 bg-secondary dark:bg-dark-bg transition-colors duration-500" />
        
        {/* Generative Animation Canvas */}
        <div className="absolute inset-0 opacity-35">
            <BuildingAnimation scrollProgress={scrollValue} opacity={1} />
        </div>
      </div>

      {/* Content Overlay Layer */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ArchitecturalBackground;
