export default function LogoPinup({ size = 'md', showText = false }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(180 * scale);
  const h = Math.round(showText ? 320 * scale : 280 * scale);

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Apply Now Button Above Logo */}
      <a 
        href="/register" 
        className="mb-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shimmer-btn border border-white/20 hover:scale-105 transition-transform"
      >
        Apply Now
      </a>

      <svg width={w} height={h} viewBox={`0 0 180 ${showText ? 320 : 280}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pinup-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff0080" />
            <stop offset="100%" stopColor="#ff1493" />
          </linearGradient>
          
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="neon-glow-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            @keyframes neon-pulse {
              0%, 100% { filter: drop-shadow(0 0 2px #ff0080) drop-shadow(0 0 5px #ff0080); opacity: 1; }
              50% { filter: drop-shadow(0 0 5px #ff0080) drop-shadow(0 0 15px #ff0080); opacity: 0.8; }
            }
            .neon-path {
              animation: neon-pulse 2s ease-in-out infinite;
              stroke: #ff0080;
              stroke-width: 2.5;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .neon-text-pulse {
              animation: neon-pulse 2s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Martini Glass - Sexy Aggressive Style */}
        <g className="neon-path" filter="url(#neon-glow-heavy)">
          {/* Rim */}
          <path d="M 20 80 L 160 80" />
          {/* Bowl */}
          <path d="M 20 80 L 90 180 L 160 80" />
          {/* Stem */}
          <path d="M 90 180 L 90 250" />
          {/* Base */}
          <path d="M 50 250 L 130 250" />
        </g>

        {/* Pin-up Girl Silhouette sitting in glass */}
        <g fill="#ff0080" filter="url(#neon-glow)" opacity="0.9">
          {/* Head & Hair */}
          <path d="M 95 40 Q 110 35 120 50 Q 125 65 110 75 Q 100 70 95 60 Z" />
          {/* Torso */}
          <path d="M 95 60 Q 85 85 90 110 Q 110 115 125 105 Q 120 80 105 65 Z" />
          {/* Left Arm (raised) */}
          <path d="M 95 60 Q 70 45 55 55 Q 50 60 65 70 L 90 85 Z" />
          {/* Right Arm (resting on rim) */}
          <path d="M 115 75 Q 135 75 155 85 Q 160 90 150 95 L 125 105 Z" />
          {/* Left Leg (kicked up) */}
          <path d="M 90 110 Q 70 120 50 100 Q 35 85 45 75 Q 55 70 65 90 L 90 110 Z" />
          {/* Right Leg (hanging out) */}
          <path d="M 125 105 Q 145 125 165 115 Q 175 110 170 130 Q 165 150 140 140 L 120 125 Z" />
          
          {/* Sexy details - curves */}
          <circle cx="105" cy="85" r="4" fill="#07080f" opacity="0.3" />
          <circle cx="118" cy="92" r="4" fill="#07080f" opacity="0.3" />
        </g>

        {/* Liquid in glass */}
        <path d="M 40 110 Q 90 105 140 110 L 90 180 Z" fill="#ff0080" opacity="0.2" />

        {showText && (
          <g className="neon-text-pulse">
            <text x="90" y="285" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="20" fill="white" filter="url(#neon-glow)">
              XCAM
            </text>
            <text x="90" y="310" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="700" fontSize="18" fill="#ff0080" filter="url(#neon-glow)">
              MODELS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
