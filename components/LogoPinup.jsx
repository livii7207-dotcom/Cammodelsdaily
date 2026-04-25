export default function LogoPinup({ size = 'md', showText = false }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(240 * scale);
  const h = Math.round(showText ? 360 * scale : 320 * scale);

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Apply Now Button Above Logo */}
      <a 
        href="/register" 
        className="mb-6 px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-white shimmer-btn border border-white/20 hover:scale-105 transition-transform"
      >
        Apply Now
      </a>

      <svg width={w} height={h} viewBox={`0 0 240 ${showText ? 360 : 320}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="neon-glow-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur1" />
            <feGaussianBlur stdDeviation="7" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            @keyframes neon-pulse-strong {
              0%, 100% { filter: drop-shadow(0 0 2px #ff0080) drop-shadow(0 0 8px #ff0080); opacity: 1; stroke-width: 2.2; }
              50% { filter: drop-shadow(0 0 5px #ff0080) drop-shadow(0 0 15px #ff0080); opacity: 0.85; stroke-width: 2.5; }
            }
            .neon-line {
              animation: neon-pulse-strong 2.5s ease-in-out infinite;
              stroke: #ff0080;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
            }
          `}</style>
        </defs>

        {/* The "Martini Girl" Line Art Silhouette */}
        <g className="neon-line" filter="url(#neon-glow-strong)">
          {/* Main Martini Glass */}
          <path d="M 40 80 L 120 180 L 200 80" strokeWidth="2.5" /> {/* Bowl */}
          <path d="M 40 80 Q 120 70 200 80" strokeWidth="1.5" opacity="0.6" /> {/* Rim back */}
          <path d="M 120 180 L 120 260" strokeWidth="2.5" /> {/* Stem */}
          <path d="M 80 260 L 160 260" strokeWidth="2.5" /> {/* Base */}

          {/* Pin-up Woman Silhouette - Line Art Style */}
          {/* Flowing Hair */}
          <path d="M 115 45 Q 135 35 150 55 Q 155 75 140 85 Q 160 90 155 110" strokeWidth="2" />
          
          {/* Head & Neck */}
          <path d="M 115 45 Q 105 55 115 65 Q 120 75 130 70" strokeWidth="2" />
          
          {/* Back & Torso (lounging back) */}
          <path d="M 130 70 Q 110 100 120 130 Q 140 145 160 135" strokeWidth="2.2" />
          
          {/* Left Arm (extended up holding small martini) */}
          <path d="M 115 65 Q 85 45 60 55" strokeWidth="2" />
          <path d="M 60 55 Q 55 50 50 60 L 65 70" strokeWidth="1.5" /> {/* Hand area */}
          
          {/* Small Martini in hand */}
          <path d="M 45 40 L 65 40 L 55 55 Z" strokeWidth="1.5" />
          <path d="M 55 55 L 55 65" strokeWidth="1.5" />
          
          {/* Right Arm (resting on rim) */}
          <path d="M 135 85 Q 165 95 195 85" strokeWidth="2" />
          
          {/* Legs (Kicked up over the rim) */}
          {/* Left Leg */}
          <path d="M 160 135 Q 180 145 210 120 Q 230 100 220 85" strokeWidth="2.2" />
          {/* Right Leg (crossed) */}
          <path d="M 160 135 Q 190 165 220 155 Q 240 145 235 125" strokeWidth="2.2" />
          
          {/* Subtle liquid line in glass */}
          <path d="M 65 115 Q 120 105 175 115" strokeWidth="1" opacity="0.4" />
        </g>

        {showText && (
          <g filter="url(#neon-glow-strong)">
            <text x="120" y="310" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="24" fill="white" className="neon-text">
              xcammodels.com
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
