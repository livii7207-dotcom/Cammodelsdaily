export default function Logo({ size = 'md' }) {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.75 : 1;
  const h = Math.round(38 * scale);
  const w = Math.round(210 * scale);

  return (
    <svg width={w} height={h} viewBox="0 0 210 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="badge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#ff006e" />
          <stop offset="50%"  stopColor="#d63384" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="text-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ff006e" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ff006e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.22" />
          <stop offset="55%"  stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="badge-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="x-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="text-neon-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes logo-neon-pulse {
            0%, 100% { opacity: 1; filter: brightness(1); }
            50% { opacity: 0.8; filter: brightness(1.2); }
          }
          .logo-neon { animation: logo-neon-pulse 2s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Outer glow bloom */}
      <rect x="1" y="1" width="36" height="36" rx="11"
        fill="url(#badge-grad)" opacity="0.45" filter="url(#badge-glow)" />

      {/* Badge */}
      <rect x="0" y="0" width="38" height="38" rx="10" fill="url(#badge-grad)" />

      {/* Gloss */}
      <rect x="0" y="0" width="38" height="20" rx="10" fill="url(#gloss)" />

      {/* Elegant curved X */}
      <g filter="url(#x-glow)">
        <path d="M 10 10 Q 22 15 28 28" stroke="white" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <path d="M 28 10 Q 16 15 10 28" stroke="white" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      </g>

      {/* Center diamond */}
      <path d="M 19 16.5 L 22 19 L 19 21.5 L 16 19 Z" fill="white" opacity="0.75" />

      {/* Two tasteful sparkles */}
      <path transform="translate(41,5)"  d="M0,-2.2 L.55,-.55 L2.2,0 L.55,.55 L0,2.2 L-.55,.55 L-2.2,0 L-.55,-.55Z" fill="#f9a8d4" opacity="0.8" />
      <path transform="translate(40,33)" d="M0,-1.6 L.4,-.4 L1.6,0 L.4,.4 L0,1.6 L-.4,.4 L-1.6,0 L-.4,-.4Z"     fill="#f9a8d4" opacity="0.65" />

      {/* Wordmark */}
      <g className="logo-neon" filter="url(#text-neon-glow)">
        <text x="56" y="27"
          fontFamily="Sora, sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="0.2"
          fill="white">xcammodels.com</text>
      </g>

      {/* Underline glow */}
      <rect x="56" y="31" width="150" height="1.5" rx="1" fill="url(#line-grad)" />
    </svg>
  );
}
