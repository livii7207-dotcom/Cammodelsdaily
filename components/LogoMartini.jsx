export default function LogoMartini({ size = 'md', showText = true }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(200 * scale);
  const h = Math.round((showText ? 265 : 225) * scale);

  return (
    <svg width={w} height={h} viewBox={`0 0 200 ${showText ? 265 : 225}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mg-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#ff006e" />
          <stop offset="55%"  stopColor="#d63384" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="mg-text" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ff0080" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="mg-glow-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ff006e" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="mg-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mg-rope-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes mg-pulse {
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px #ff006e); }
            50%       { opacity: 0.5; filter: drop-shadow(0 0 2px #a855f7); }
          }
          @keyframes mg-rope {
            0%, 100% { opacity: 0.85; }
            50%       { opacity: 0.28; }
          }
          .mg-neon { animation: mg-pulse 2.2s ease-in-out infinite; }
          .mg-rope { animation: mg-rope 1.6s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* ── Rope light pink — pulsing dashed ring around the glass ── */}
      <g className="mg-rope" filter="url(#mg-rope-glow)">
        <line x1="7"   y1="54" x2="193" y2="54" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" />
        <line x1="7"   y1="54" x2="100" y2="163" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" />
        <line x1="193" y1="54" x2="100" y2="163" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" />
        <line x1="100" y1="163" x2="100" y2="211" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="4 3" strokeLinecap="round" />
        <ellipse cx="100" cy="213" rx="47" ry="9" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" />
      </g>

      {/* ── Neon glass outline — pulsing ── */}
      <g className="mg-neon" fill="none" stroke="url(#mg-glow-grad)" strokeWidth="2.2" strokeLinecap="round" filter="url(#mg-glow)">
        <line x1="10"  y1="57" x2="190" y2="57" />
        <line x1="10"  y1="57" x2="100" y2="160" />
        <line x1="190" y1="57" x2="100" y2="160" />
        <line x1="100" y1="160" x2="100" y2="208" />
        <ellipse cx="100" cy="210" rx="43" ry="8" />
      </g>

      {/* ── Silhouette — all one gradient fill ── */}
      <g fill="url(#mg-fill)">

        {/* Glass bowl */}
        <polygon points="10,57 190,57 100,160" />

        {/* Stem */}
        <rect x="95" y="160" width="10" height="50" rx="3" />

        {/* Base */}
        <ellipse cx="100" cy="211" rx="43" ry="8" />

        {/* ── Woman reclining inside the bowl ── */}

        {/* Head */}
        <circle cx="40" cy="88" r="18" />

        {/* Hair — flowing up and left */}
        <path d="M 26 73 Q 12 53 20 36 Q 28 22 42 30 Q 52 38 53 54 L 47 69 Z" />
        <path d="M 23 79 Q 7 69 9 56 Q 15 76 27 85 Z" />
        <path d="M 31 69 Q 21 51 29 38 Q 37 27 45 35 Q 39 48 37 61 Z" />

        {/* Torso */}
        <ellipse cx="77" cy="118" rx="25" ry="19" transform="rotate(-25 77 118)" />

        {/* Hips */}
        <ellipse cx="94" cy="147" rx="21" ry="14" transform="rotate(-8 94 147)" />

        {/* Bust */}
        <ellipse cx="67" cy="108" rx="14" ry="11" transform="rotate(-30 67 108)" />

        {/* ── Legs arching over the right rim ── */}

        {/* Leg 1 — main */}
        <path d="
          M 100 143
          Q 126 118 150 88
          Q 163 69 168 54
          L 176 36
          Q 180 26 174 22
          Q 168 18 164 26
          L 158 46
          Q 150 64 138 83
          Q 116 108 98 132
          Z
        " />

        {/* Leg 2 — behind */}
        <path d="
          M 108 148
          Q 133 122 155 94
          Q 167 75 172 60
          L 180 42
          Q 184 32 178 28
          Q 172 24 168 32
          L 162 52
          Q 155 69 142 88
          Q 122 113 110 140
          Z
        " />

        {/* Pointed heel — leg 1 */}
        <path d="M 164 26 Q 170 16 178 20 Q 184 27 176 36 L 164 26 Z" />

        {/* Pointed heel — leg 2 */}
        <path d="M 168 32 Q 176 20 184 26 Q 188 34 180 42 L 168 32 Z" />

        {/* ── Raised arm holding cocktail glass ── */}
        <path d="
          M 46 99
          Q 38 81 36 65
          Q 34 53 38 47
          Q 42 41 46 45
          Q 48 51 48 61
          Q 50 75 54 91
          Z
        " />

        {/* Tiny martini glass in hand */}
        <polygon points="33,43 46,43 39.5,51" />
        <rect x="38.5" y="51" width="2" height="5" />
        <rect x="35.5" y="56" width="8" height="2" rx="1" />

        {/* Cherry/olive */}
        <circle cx="39.5" cy="43" r="2.8" opacity="0.9" />

      </g>

      {/* ── Sparkles ── */}
      <g fill="#f9a8d4" opacity="0.7">
        <path transform="translate(8,26)"    d="M0,-3 L.65,-.65 L3,0 L.65,.65 L0,3 L-.65,.65 L-3,0 L-.65,-.65Z" />
        <path transform="translate(192,108)" d="M0,-2.2 L.5,-.5 L2.2,0 L.5,.5 L0,2.2 L-.5,.5 L-2.2,0 L-.5,-.5Z" />
        <path transform="translate(156,22)"  d="M0,-1.8 L.4,-.4 L1.8,0 L.4,.4 L0,1.8 L-.4,.4 L-1.8,0 L-.4,-.4Z" />
      </g>

      {/* ── Brand name ── */}
      {showText && (
        <>
          <text x="100" y="238" textAnchor="middle"
            fontFamily="Sora, sans-serif" fontWeight="800" fontSize="17" fill="white" letterSpacing="1">
            XCam
          </text>
          <text x="100" y="259" textAnchor="middle"
            fontFamily="Sora, sans-serif" fontWeight="500" fontSize="15"
            fill="url(#mg-text)" letterSpacing="3">
            MODELS
          </text>
        </>
      )}
    </svg>
  );
}
