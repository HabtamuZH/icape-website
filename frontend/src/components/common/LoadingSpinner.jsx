
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-transparent space-y-8">
      <div className="relative w-32 h-32">
        {/* Technical Drafting Reticle */}
        <div className="absolute inset-0 border-[1px] border-dashed border-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-2 border-[1px] border-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        {/* Isometric Building Architect Loader */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Level */}
          <path
            d="M50 85 L20 70 L20 40 L50 55 L80 40 L80 70 Z"
            className="stroke-accent animate-[draw_3s_ease-in-out_infinite]"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Mid Level */}
          <path
            d="M50 55 L25 42 L25 25 L50 38 L75 25 L75 42 Z"
            className="stroke-accent/60 animate-[draw_3s_ease-in-out_infinite_0.5s]"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Top Level/Roof */}
          <path
            d="M50 38 L35 30 L50 22 L65 30 Z"
            className="stroke-accent animate-[draw_3s_ease-in-out_infinite_1s]"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          {/* Internal Structure Lines */}
          <line x1="50" y1="85" x2="50" y2="55" className="stroke-accent/40 animate-[draw_3s_ease-in-out_infinite]" strokeWidth="1" />
          <line x1="50" y1="55" x2="50" y2="38" className="stroke-accent/40 animate-[draw_3s_ease-in-out_infinite_0.5s]" strokeWidth="1" />
          <line x1="50" y1="38" x2="50" y2="22" className="stroke-accent/40 animate-[draw_3s_ease-in-out_infinite_1s]" strokeWidth="1" />
        </svg>

        {/* Floating Technical Coordinates */}
        <div className="absolute -top-4 -right-8 font-mono text-[8px] text-accent/50 animate-pulse">
          iCAPE_NODE_88
        </div>
        <div className="absolute -bottom-4 -left-8 font-mono text-[8px] text-accent/50 animate-pulse">
          ARCH_INIT_SEQ
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-accent font-heading font-bold tracking-[0.3em] text-sm uppercase animate-pulse">
          Crafting Space
        </h3>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent mt-2 overflow-hidden">
            <div className="w-full h-full bg-accent animate-[loading-bar_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes draw {
          0%, 100% { stroke-dasharray: 0, 400; opacity: 0; }
          20% { opacity: 1; }
          50% { stroke-dasharray: 400, 0; }
          80% { opacity: 1; }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;