/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SketchLine = ({ line, scrollYProgress }) => {
  const pathLength = useTransform(
    scrollYProgress, 
    [line.scrollTrigger, line.scrollTrigger + 0.2], 
    [0, 1]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [line.scrollTrigger, line.scrollTrigger + 0.1, line.scrollTrigger + 0.2],
    [0, 1, 0.8]
  );

  return (
    <motion.line
      x1={`${line.x1}%`}
      y1={`${line.y1}%`}
      x2={`${line.x1 + (Math.cos(line.angle) * line.length / 10)}%`}
      y2={`${line.y1 + (Math.sin(line.angle) * line.length / 10)}%`}
      stroke="currentColor"
      className="text-accent/60 dark:text-accent/40"
      initial={{ pathLength: 0, opacity: 0 }}
      style={{ pathLength, opacity }}
      strokeWidth="1.2"
    />
  );
};

const DrawingEffect = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Create a series of random "sketch" lines that appear/disappear based on scroll
  const [sketchLines, setSketchLines] = useState([]);
  
  useEffect(() => {
    const lines = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      length: Math.random() * 200 + 50,
      angle: Math.random() * 360,
      delay: Math.random() * 2,
      scrollTrigger: Math.random() * 0.8, // Adjust to ensure they appear
    }));
    setSketchLines(lines);
  }, []);

  const annotationOpacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const annotationOpacity2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full">
        {sketchLines.map((line) => (
          <SketchLine key={line.id} line={line} scrollYProgress={scrollYProgress} />
        ))}

        {/* Technical Annotations */}
        <motion.g style={{ opacity: annotationOpacity1 }}>
          <text x="50" y="100" className="text-[10px] fill-accent/40 font-heading">SECTION A-A</text>
          <path d="M40 105 L120 105" stroke="currentColor" strokeWidth="0.5" className="text-accent/40" />
        </motion.g>
        
        <motion.g style={{ opacity: annotationOpacity2 }}>
          <text x="80%" y="40%" className="text-[10px] fill-accent/40 font-heading">PLAN VIEW - LEVEL 02</text>
          <circle cx="85%" cy="42%" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent/40" />
        </motion.g>
      </svg>
    </div>
  );
};

export default DrawingEffect;
