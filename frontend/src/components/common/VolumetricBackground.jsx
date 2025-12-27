import { useEffect, useRef } from "react";

const VolumetricBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    // Configuration
    const prismCount = 15;
    const prisms = [];

    class Prism {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // Initial random spread
      }

      reset() {
        this.x = Math.random() * width;
        this.z = Math.random() * 400 + 100; // Distance
        this.y = height + 100;
        this.size = Math.random() * 60 + 40;
        this.speed = Math.random() * 0.5 + 0.2;
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.y -= this.speed;
        this.rotationX += this.rotSpeed;
        this.rotationY += this.rotSpeed;
        this.rotationZ += this.rotSpeed;

        if (this.y < -200) {
          this.reset();
        }
      }

      project(x, y, z) {
        const factor = 600 / (600 + z);
        return {
          px: x * factor + width / 2,
          py: y * factor + height / 2,
          factor
        };
      }

      draw() {
        const points = [
          { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 },
          { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 }
        ];

        const rotatedPoints = points.map(p => {
          let x = p.x, y = p.y, z = p.z;

          // Rotate X
          let tempY = y * Math.cos(this.rotationX) - z * Math.sin(this.rotationX);
          let tempZ = y * Math.sin(this.rotationX) + z * Math.cos(this.rotationX);
          y = tempY; z = tempZ;

          // Rotate Y
          let tempX = x * Math.cos(this.rotationY) + z * Math.sin(this.rotationY);
          tempZ = -x * Math.sin(this.rotationY) + z * Math.cos(this.rotationY);
          x = tempX; z = tempZ;

          return {
            x: x * this.size + (this.x - width / 2),
            y: y * this.size + (this.y - height / 2),
            z: z * this.size + (this.z - 200)
          };
        });

        const projected = rotatedPoints.map(p => this.project(p.x, p.y, p.z));

        const faces = [
          [0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], 
          [2, 3, 7, 6], [0, 3, 7, 4], [1, 2, 6, 5]
        ];

        const isDarkMode = document.documentElement.classList.contains('dark');
        const accentColor = isDarkMode ? "212, 175, 55" : "15, 18, 24";
        
        // Mouse influence on glow
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glowIntensity = Math.max(0, 1 - dist / 500);

        ctx.lineWidth = 1;
        ctx.lineJoin = "round";

        faces.forEach((face, i) => {
          // Subtle shading based on index
          ctx.beginPath();
          ctx.moveTo(projected[face[0]].px, projected[face[0]].py);
          for (let j = 1; j < 4; j++) {
            ctx.lineTo(projected[face[j]].px, projected[face[j]].py);
          }
          ctx.closePath();

          const faceAlpha = (this.opacity + glowIntensity * 0.2) * (1 - i * 0.05);
          ctx.fillStyle = `rgba(${accentColor}, ${faceAlpha * 0.5})`;
          ctx.fill();

          ctx.strokeStyle = `rgba(${accentColor}, ${faceAlpha + 0.1})`;
          ctx.stroke();

          // Highlight edges with bloom
          if (glowIntensity > 0.1) {
            ctx.save();
            ctx.shadowBlur = 10 * glowIntensity;
            ctx.shadowColor = `rgba(${accentColor}, ${glowIntensity})`;
            ctx.stroke();
            ctx.restore();
          }
        });
      }
    }

    for (let i = 0; i < prismCount; i++) {
      prisms.push(new Prism());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Sort prisms by Z for correct depth
      prisms.sort((a, b) => b.z - a.z);

      prisms.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000"
      style={{ filter: "blur(0.8px)" }}
    />
  );
};

export default VolumetricBackground;
