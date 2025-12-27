import { useEffect, useRef } from "react";

const TopographicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width, height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    // Configuration
    const lineCount = 45;
    const step = 25;
    let time = 0;

    // Simple noise-like function using multi-octave sine waves
    const noise = (x, y, t) => {
      return (
        Math.sin(x * 0.002 + y * 0.001 + t * 0.5) * 40 +
        Math.sin(x * 0.005 - y * 0.002 + t * 0.8) * 20 +
        Math.sin(x * 0.001 + y * 0.005 + t * 0.3) * 60
      );
    };

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // We want to draw horizontal-ish topographic lines
      for (let i = 0; i < lineCount; i++) {
        const rowY = (height / lineCount) * i;
        
        ctx.beginPath();
        // Use the new accent color (Gold) but very subtle
        // In dark mode, gold lines look amazing. In light mode, charcoal lines look great.
        const isDarkMode = document.documentElement.classList.contains('dark');
        ctx.strokeStyle = isDarkMode 
          ? `rgba(212, 175, 55, ${0.05 + (i / lineCount) * 0.1})` 
          : `rgba(15, 18, 24, ${0.03 + (i / lineCount) * 0.05})`;
        ctx.lineWidth = 1;

        for (let x = -50; x <= width + 50; x += step) {
          const distortion = noise(x, rowY, time);
          const y = rowY + distortion;

          if (x === -50) {
            ctx.moveTo(x, y);
          } else {
            // Bezier curve for smoothness
            const prevX = x - step;
            const prevDistortion = noise(prevX, rowY, time);
            const prevY = rowY + prevDistortion;
            const cpX = prevX + step / 2;
            ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-60 transition-opacity duration-1000"
      style={{ filter: "blur(0.5px)" }}
    />
  );
};

export default TopographicBackground;
