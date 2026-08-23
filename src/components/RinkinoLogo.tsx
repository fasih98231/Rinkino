import React from 'react';

interface RinkinoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const RinkinoLogo: React.FC<RinkinoLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Rinkino Geometric Neural Entity Node SVG Logo */}
      <div className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-0.5 border border-zinc-800 shadow-xl shadow-lime-500/5 group transition-transform duration-300 hover:scale-105 shrink-0`}>
        <div className="w-full h-full bg-zinc-950/90 rounded-[10px] backdrop-blur-md flex items-center justify-center relative overflow-hidden">
          {/* Subtle lime glow highlight */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#a3e635]/20 rounded-full blur-sm pointer-events-none" />
          
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#a3e635] transform group-hover:rotate-6 transition-transform duration-300"
          >
            {/* Connected Entity Nodes & Vector R */}
            <path
              d="M8 6H18C21.3137 6 24 8.68629 24 12C24 14.8016 22.0805 17.1528 19.4627 17.8182L24.5 26H19L14.5 18H12V26H8V6Z"
              fill="currentColor"
              fillOpacity="0.15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Glowing Core Node */}
            <circle cx="12" cy="12" r="2.5" fill="#a3e635" />
            <circle cx="18" cy="12" r="2" fill="#ffffff" />
            <circle cx="20" cy="22" r="2" fill="#a3e635" />
            {/* Neural Links */}
            <line x1="12" y1="12" x2="18" y2="12" stroke="#a3e635" strokeWidth="1.5" strokeDasharray="1 1" />
            <line x1="14.5" y1="18" x2="20" y2="22" stroke="#a3e635" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tight text-white font-mono ${textSizes[size]}`}>
              RINKINO
            </span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] tracking-widest uppercase">
              GEO
            </span>
          </div>
          <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest -mt-0.5">
            AI Engine Optimization
          </span>
        </div>
      )}
    </div>
  );
};
