/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

const BlueprintGrid = ({ variant = 'default', opacity = 0.15 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    const drawGrid = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollY = window.scrollY;
      const scrollFactor = Math.min(1, scrollY / (document.documentElement.scrollHeight - window.innerHeight));
      
      // Grid settings
      const gridSize = 40;
      const isDark = document.documentElement.classList.contains('dark');
      const opacityValue = opacity * (0.8 + scrollFactor * 0.4); // Increased base opacity
      
      const lineColor = isDark ? `rgba(107, 155, 209, ${opacityValue})` : `rgba(75, 85, 99, ${opacityValue})`; // Darker gray for light mode
      const accentColor = isDark ? `rgba(232, 180, 184, ${opacityValue * 2})` : `rgba(212, 165, 116, ${opacityValue * 2})`;
      
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.8; // Thicker lines

      // Draw vertical lines - progressive draw
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height * Math.min(1, (scrollFactor * 2) - (x / canvas.width)));
        ctx.stroke();
      }

      // Draw horizontal lines - progressive draw
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width * Math.min(1, (scrollFactor * 2) - (y / canvas.height)), y);
        ctx.stroke();
      }
      
      // ... rest of the draw logic (golden, technical) ...
      if (variant === 'golden') {
        const goldenRatio = 1.618;
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 1;
        const goldenX = canvas.width / goldenRatio;
        const goldenY = canvas.height / goldenRatio;
        
        if (scrollFactor > 0.3) {
            ctx.beginPath();
            ctx.moveTo(goldenX, 0);
            ctx.lineTo(goldenX, canvas.height * scrollFactor);
            ctx.stroke();
        }
        if (scrollFactor > 0.5) {
            ctx.beginPath();
            ctx.moveTo(0, goldenY);
            ctx.lineTo(canvas.width * scrollFactor, goldenY);
            ctx.stroke();
        }
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('scroll', drawGrid);

    // Redraw on theme change
    const observer = new MutationObserver(drawGrid);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('scroll', drawGrid);
      observer.disconnect();
    };
  }, [variant, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default BlueprintGrid;
