import { useEffect, useRef } from 'react';

const BuildingAnimation = ({ opacity = 0.6, scrollProgress = 0 }) => {
  const canvasRef = useRef(null);
  const towersRef = useRef({ foreground: [], background: [] });
  const animationRef = useRef(null);
  const initializedRef = useRef(false);
  
  // Advanced State Management
  const currentScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const entranceRef = useRef(0); 
  const autoTimeRef = useRef(0); // For continuous time-based evolution

  useEffect(() => {
    targetScrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    if (!initializedRef.current) {
      const createTowerSet = (count, zLayer) => {
        const set = [];
        for (let i = 0; i < count; i++) {
          const x = 0.05 + (i * (0.9 / count)) + (Math.random() * 0.02);
          const w = 0.025 + (Math.random() * 0.04);
          const d = 0.2 + (Math.random() * 0.4);
          const triggerPoint = (i / count); 

          set.push({
            id: Math.random(),
            x,
            y: 0.92, 
            w,
            h: 0.3 + (Math.random() * 0.5),
            d,
            triggerPoint, 
            range: 0.35,  
            parallax: zLayer === 'front' ? 0.08 + (Math.random() * 0.04) : 0.03 + (Math.random() * 0.02),
            zLayer,
            seed: Math.random(),
            type: Math.random() > 0.6 ? 'slanted' : 'monolith',
            // Technical metadata
            tag: `iCAPE-NODE-${Math.floor(Math.random() * 900) + 100}`,
          });
        }
        return set;
      };

      towersRef.current = {
        foreground: createTowerSet(6, 'front'),
        background: createTowerSet(5, 'back') 
      };
      initializedRef.current = true;
    }

    const getRgba = (color, a) => color.replace(/[\d.]+\)$/g, `${a})`);

    const drawTower = (t, colors, p, effectiveScroll, time) => {
      if (p <= 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      
      // Combine Scroll + Slow Auto drift + Breathing
      const autoDrift = time * 0.000015; // Extremely slow "Auto-Pan"
      const breathe = Math.sin(time * 0.0006 + t.seed * 10) * 12;
      const totalShift = ((effectiveScroll + autoDrift) * ch * t.parallax * 3.5) + breathe;
      
      const tx = t.x * cw;
      const ty = (t.y * ch) - totalShift; 
      const tw = t.w * cw;
      const th = t.h * ch * p;
      const td = tw * t.d;

      ctx.save();
      
      const sA = Math.max(0, (p - 0.1) * 1.4) * (t.zLayer === 'front' ? 0.8 : 0.4);
      const slant = t.type === 'slanted' ? tw * 0.35 : 0;
      
      ctx.shadowBlur = t.zLayer === 'front' ? 18 : 6;
      ctx.shadowColor = getRgba(colors.glow, sA * 0.25);

      const drawFace = (pts, fill, edgeAlpha, showScan = false) => {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for(let i=1; i<pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.fill();
        
        // 1. Digital Scanning Laser (Vertical Sweep)
        if (showScan && sA > 0.2) {
            const scanPos = (Math.sin(time * 0.0015 + t.seed * 5) + 1) / 2;
            const scanY = pts[0].y + (pts[2].y - pts[0].y) * scanPos;
            ctx.beginPath();
            ctx.strokeStyle = getRgba(colors.edge, sA * 0.4);
            ctx.lineWidth = 1;
            ctx.moveTo(tx - 5, scanY);
            ctx.lineTo(tx + tw + 5, scanY);
            ctx.stroke();
        }

        ctx.strokeStyle = getRgba(colors.edge, edgeAlpha);
        ctx.lineWidth = t.zLayer === 'front' ? 1.4 : 0.7;
        ctx.stroke();

        // 2. Vertex Anchors (Smart Points)
        if (t.zLayer === 'front' && edgeAlpha > 0.5) {
            ctx.fillStyle = getRgba(colors.edge, edgeAlpha);
            pts.forEach(p => {
                ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2); ctx.fill();
            });
        }
      };

      const front = [{x: tx, y: ty}, {x: tx + tw, y: ty}, {x: tx + tw, y: ty - th + slant}, {x: tx, y: ty - th}];
      const side = [{x: tx + tw, y: ty}, {x: tx + tw + td, y: ty - td * 0.4}, {x: tx + tw + td, y: ty - th + slant - td * 0.4}, {x: tx + tw, y: ty - th + slant}];
      const top = [{x: tx, y: ty - th}, {x: tx + tw, y: ty - th + slant}, {x: tx + tw + td, y: ty - th + slant - td * 0.4}, {x: tx + td, y: ty - th - td * 0.4}];

      drawFace(front, getRgba(colors.glassTop, sA), sA, true);
      drawFace(side, getRgba(colors.glassBottom, sA * 0.65), sA * 0.6);
      drawFace(top, getRgba(colors.roofLight, sA * 0.45), sA * 0.6);

      // Technical HUD Label
      if (t.zLayer === 'front' && p > 0.8) {
        ctx.fillStyle = getRgba(colors.edge, sA * 0.3);
        ctx.font = '7px monospace';
        ctx.fillText(t.tag, tx, ty - th - 15);
      }

      ctx.restore();
    };

    const render = (timestamp) => {
      const lerpFactor = 0.08;
      currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * lerpFactor;
      
      if (entranceRef.current < 1) entranceRef.current += 0.012; 

      const isDark = document.documentElement.classList.contains('dark');
      const theme = isDark ? {
        glassTop: 'rgba(212, 175, 55, 0.12)',
        glassBottom: 'rgba(5, 5, 12, 0.4)',
        roofLight: 'rgba(255, 230, 150, 0.8)',
        edge: 'rgba(212, 175, 55, 0.6)',
        glow: 'rgba(212, 175, 55, 0.3)'
      } : {
        glassTop: 'rgba(50, 65, 85, 0.05)',
        glassBottom: 'rgba(240, 245, 250, 0.4)',
        roofLight: 'rgba(255, 255, 255, 0.8)',
        edge: 'rgba(15, 25, 45, 0.5)',
        glow: 'rgba(15, 25, 45, 0.2)'
      };

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Constant Gridded Floor
      ctx.strokeStyle = getRgba(theme.edge, isDark ? 0.035 : 0.06);
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i < canvas.width; i += 100) { ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); }
      for (let j = 0; j < canvas.height; j += 100) { ctx.moveTo(0, j); ctx.lineTo(canvas.width, j); }
      ctx.stroke();

      const allTowers = [...towersRef.current.background, ...towersRef.current.foreground];
      
      allTowers.forEach(t => {
        [-1, 0, 1].forEach(offset => {
            // Incorporate tiny Auto-Drift into the logical frame
            const autoPan = timestamp * 0.00001; 
            const virtualTrigger = t.triggerPoint + offset;
            const dist = (currentScrollRef.current + autoPan) - virtualTrigger;
            
            if (dist > -t.range && dist < t.range) {
                let p = 1 - Math.abs(dist) / t.range;
                p = 1 - Math.pow(1 - p, 4); 
                const finalP = p * entranceRef.current;
                drawTower(t, theme, finalP, currentScrollRef.current, timestamp);
            }
        });
      });

      // Fog Grounder
      const fogGrad = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      fogGrad.addColorStop(0, 'rgba(0,0,0,0)');
      fogGrad.addColorStop(1, isDark ? 'rgba(5, 5, 12, 0.98)' : 'rgba(255, 255, 255, 0.96)');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []); 

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: opacity }}
    />
  );
};

export default BuildingAnimation;
