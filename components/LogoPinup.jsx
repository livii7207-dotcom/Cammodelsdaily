export default function LogoPinup({ size = 'md', showText = false }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(200 * scale);
  const h = Math.round(showText ? 340 * scale : 300 * scale);

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Apply Now Button Above Logo */}
      <a 
        href="/register" 
        className="mb-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shimmer-btn border border-white/20 hover:scale-105 transition-transform"
      >
        Apply Now
      </a>

      <svg width={w} height={h} viewBox={`0 0 200 ${showText ? 340 : 300}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pinup-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff0080" />
            <stop offset="100%" stopColor="#ff1493" />
          </linearGradient>
          
          <filter id="soft-neon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="liquid-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes subtle-neon {
              0%, 100% { filter: drop-shadow(0 0 1px #ff0080) drop-shadow(0 0 3px #ff0080); opacity: 1; }
              50% { filter: drop-shadow(0 0 3px #ff0080) drop-shadow(0 0 8px #ff0080); opacity: 0.9; }
            }
            .pinup-path {
              animation: subtle-neon 3s ease-in-out infinite;
              stroke: #ff0080;
              stroke-width: 1.5;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          `}</style>
        </defs>

        {/* Martini Glass - Elegant & Classic */}
        <g className="pinup-path">
          {/* Rim */}
          <path d="M 30 100 L 170 100" />
          {/* Bowl */}
          <path d="M 30 100 L 100 200 L 170 100" />
          {/* Stem */}
          <path d="M 100 200 L 100 270" />
          {/* Base */}
          <path d="M 60 270 L 140 270" />
        </g>

        {/* Pin-up Girl Silhouette - Elegant Curves (Reference 1000000166.jpg) */}
        <g fill="#ff0080" filter="url(#soft-neon)" opacity="0.95">
          {/* Head & Flowing Hair */}
          <path d="M 105 50 Q 125 45 135 65 Q 140 85 125 95 Q 115 90 110 80 Z" />
          <path d="M 135 65 Q 150 70 145 90 Q 140 105 125 105" fill="none" stroke="#ff0080" strokeWidth="1" />
          
          {/* Torso & Curves */}
          <path d="M 110 80 Q 95 105 100 135 Q 120 140 140 125 Q 135 100 120 85 Z" />
          
          {/* Left Arm (raised holding mini martini) */}
          <path d="M 110 80 Q 80 60 60 70 Q 55 75 75 85 L 100 105 Z" />
          {/* Small martini in hand */}
          <path d="M 55 65 L 70 65 L 62.5 75 Z" stroke="#ff0080" strokeWidth="1" fill="none" />
          
          {/* Right Arm (gracefully raised) */}
          <path d="M 125 95 Q 145 90 160 105 Q 165 110 155 120 L 140 125 Z" />
          
          {/* Left Leg (Elegant kick up) */}
          <path d="M 100 135 Q 80 145 55 120 Q 40 100 55 90 Q 65 85 75 110 L 100 135 Z" />
          
          {/* Right Leg (Hanging out of glass) */}
          <path d="M 140 125 Q 165 150 185 140 Q 195 135 190 160 Q 185 185 155 170 L 130 150 Z" />
        </g>

        {/* Liquid in glass - Subtle Glow */}
        <path d="M 50 130 Q 100 125 150 130 L 100 200 Z" fill="#ff0080" opacity="0.15" filter="url(#liquid-glow)" />

        {showText && (
          <g filter="url(#soft-neon)">
            <text x="100" y="305" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="22" fill="white">
              xcammodels.com
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
