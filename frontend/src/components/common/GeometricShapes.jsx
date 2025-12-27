/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

const GeometricShapes = ({ count = 5, enableParallax = true }) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    // Generate random shapes
    const generatedShapes = Array.from({ length: count }, (_, i) => ({
      id: i,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.1 + 0.05,
    }));
    setShapes(generatedShapes);
  }, [count]);

  useEffect(() => {
    if (!enableParallax) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableParallax]);

  const renderShape = (shape) => {
    const baseStyle = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `
        translate(${enableParallax ? mousePosition.x * (shape.id + 1) * 0.1 : 0}px, 
                  ${enableParallax ? mousePosition.y * (shape.id + 1) * 0.1 : 0}px)
        rotate(${shape.rotation}deg)
      `,
      transition: 'transform 0.3s ease-out',
      animation: `float ${shape.duration}s ease-in-out infinite`,
      animationDelay: `${shape.delay}s`,
    };

    const isDark = document.documentElement.classList.contains('dark');
    const shapeColor = isDark ? 'rgba(107, 155, 209, 0.15)' : 'rgba(107, 114, 128, 0.1)';

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${shapeColor}, transparent)`,
              border: `1px solid ${shapeColor}`,
            }}
          />
        );
      
      case 'square':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              background: `linear-gradient(135deg, ${shapeColor}, transparent)`,
              border: `1px solid ${shapeColor}`,
            }}
          />
        );
      
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shapeColor}`,
            }}
          />
        );
      
      default:
        return null;
    }
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return null; // Don't render animations if user prefers reduced motion
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {shapes.map(renderShape)}
    </div>
  );
};

export default GeometricShapes;
