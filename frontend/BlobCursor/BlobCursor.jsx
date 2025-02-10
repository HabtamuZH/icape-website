import { useTrail, animated } from "@react-spring/web";
import { useRef, useEffect, useCallback } from "react";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const BlobCursor = ({ blobType = "circle", fillColor = "#00f0ff" }) => {
  const [trail, api] = useTrail(3, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));

  const ref = useRef(null);

  const handleMove = useCallback(
    (e) => {
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const y = e.clientY || (e.touches && e.touches[0].clientY);
      api.start({ xy: [x, y] });
    },
    [api]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [handleMove]);

  // Define sizes for each animated div
  const sizes = [
    { width: 60, height: 60 },
    { width: 125, height: 125 },
    { width: 75, height: 75 },
  ];

  // Define pseudo-element styles (replacing ::after)
  const pseudoStyles = [
    { top: 20, left: 20, width: 20, height: 20 },
    { top: 35, left: 35, width: 35, height: 35 },
    { top: 25, left: 25, width: 25, height: 25 },
  ];

  return (
    <div className="w-full h-full">
      {/* SVG filter for blob effect */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>

      <div
        ref={ref}
        className="absolute w-full h-full overflow-hidden bg-transparent select-none cursor-default"
        style={{
          filter: 'url("#blob")',
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            className="absolute opacity-60"
            style={{
              transform: props.xy.to(trans),
              width: `${sizes[index].width}px`,
              height: `${sizes[index].height}px`,
              willChange: "transform",
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
            }}
          >
            {/* Pseudo-element replacement */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                top: `${pseudoStyles[index].top}px`,
                left: `${pseudoStyles[index].left}px`,
                width: `${pseudoStyles[index].width}px`,
                height: `${pseudoStyles[index].height}px`,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.8)",
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default BlobCursor;
