export default function LogoPinup({ size = 'md', showText = false }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(260 * scale);
  const h = Math.round(showText ? 400 * scale : 340 * scale);

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Apply Now Button Above Logo */}
      <a 
        href="/register" 
        className="mb-6 px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-white shimmer-btn border border-white/20 hover:scale-105 transition-transform"
      >
        Apply Now
      </a>

      <svg width={w} height={h} viewBox={`0 0 260 ${showText ? 400 : 340}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="neon-glow-pro" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            @keyframes pinup-pro-pulse {
              0%, 100% { filter: drop-shadow(0 0 3px #ff0080) drop-shadow(0 0 12px #ff0080); stroke-width: 2.2; opacity: 1; }
              50% { filter: drop-shadow(0 0 6px #ff0080) drop-shadow(0 0 22px #ff0080); stroke-width: 2.5; opacity: 0.85; }
            }
            .pinup-pro-line {
              animation: pinup-pro-pulse 2.5s ease-in-out infinite;
              stroke: #ff0080;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
            }
          `}</style>
        </defs>

        <g className="pinup-pro-line" filter="url(#neon-glow-pro)">
          {/* Large Martini Glass - V-Bowl, Straight Stem, Flat Base */}
          <path d="M 40 100 L 130 220 L 220 100" strokeWidth="2.5" /> {/* Bowl */}
          <path d="M 40 100 C 40 90, 220 90, 220 100" strokeWidth="1.5" opacity="0.4" /> {/* Rim Back */}
          <path d="M 130 220 L 130 300" strokeWidth="2.5" /> {/* Stem */}
          <path d="M 80 300 L 180 300" strokeWidth="2.5" /> {/* Base */}

          {/* Elegant Pin-up Woman Silhouette (Ref: 1000000166.jpg) */}
          
          {/* Head & Flowing Hair */}
          <path d="M 125 45 C 135 35, 160 35, 165 60 C 170 85, 155 95, 145 90" strokeWidth="2" /> {/* Hair outer */}
          <path d="M 130 50 C 120 60, 125 75, 140 75" strokeWidth="1.8" /> {/* Face profile */}
          <path d="M 165 60 C 180 65, 175 100, 155 115" strokeWidth="1.5" opacity="0.8" /> {/* Hair back flow */}

          {/* Back & Torso - Lounging back inside the glass */}
          <path d="M 140 75 C 120 100, 125 145, 145 165" strokeWidth="2.2" /> {/* Back curve */}
          <path d="M 145 90 C 155 110, 165 135, 155 160" strokeWidth="2" /> {/* Front torso */}

          {/* Left Arm - Extended up and out, holding tiny martini */}
          <path d="M 130 60 C 100 45, 80 45, 60 55" strokeWidth="2" /> {/* Arm */}
          {/* Tiny Martini in hand */}
          <path d="M 45 40 L 65 40 L 55 55 Z" strokeWidth="1.5" />
          <path d="M 55 55 L 55 62" strokeWidth="1.5" />

          {/* Right Arm - Resting gracefully on the rim */}
          <path d="M 150 95 C 180 105, 210 110, 220 100" strokeWidth="2" />

          {/* Legs - Crossed and kicked up over the right rim */}
          {/* Top Leg (Kicked high) */}
          <path d="M 145 165 C 180 175, 210 160, 240 130 C 255 115, 245 100, 230 110" strokeWidth="2.2" />
          {/* Bottom Leg (Crossed behind) */}
          <path d="M 155 160 C 190 190, 230 190, 255 165 C 265 150, 255 135, 245 145" strokeWidth="2" />

          {/* Subtle Detail: Liquid level */}
          <path d="M 65 135 Q 130 125, 195 135" strokeWidth="1" opacity="0.3" />
        </g>

        {showText && (
          <g filter="url(#neon-glow-pro)">
            <text x="130" y="355" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="24" fill="white" className="neon-text">
              xcammodels.com
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
