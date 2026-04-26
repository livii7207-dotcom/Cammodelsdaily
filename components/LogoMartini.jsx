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
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 7px #ff006e); }
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

      {/* ── Rope light pink — pulsing dashed outline around glass ── */}
      <g className="mg-rope" filter="url(#mg-rope-glow)">
        <line x1="7"   y1="54" x2="193" y2="54" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" />
        <line x1="7"   y1="54" x2="100" y2="163" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" />
        <line x1="193" y1="54" x2="100" y2="163" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" strokeLinecap="round" />
        <line x1="100" y1="163" x2="100" y2="211" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="4 3" strokeLinecap="round" />
        <ellipse cx="100" cy="213" rx="47" ry="9" stroke="#ff69b4" strokeWidth="1.8" strokeDasharray="6 4" />
      </g>

      {/* ── Neon glass outline ── */}
      <g className="mg-neon" fill="none" stroke="url(#mg-glow-grad)" strokeWidth="2.2" strokeLinecap="round" filter="url(#mg-glow)">
        <line x1="10"  y1="57" x2="190" y2="57" />
        <line x1="10"  y1="57" x2="100" y2="160" />
        <line x1="190" y1="57" x2="100" y2="160" />
        <line x1="100" y1="160" x2="100" y2="208" />
        <ellipse cx="100" cy="210" rx="43" ry="8" />
      </g>

      {/* ── All fills — same gradient so shapes merge visually ── */}
      <g fill="url(#mg-fill)">

        {/* Glass bowl */}
        <polygon points="10,57 190,57 100,160" />
        {/* Stem */}
        <rect x="96" y="160" width="8" height="50" rx="3" />
        {/* Base */}
        <ellipse cx="100" cy="211" rx="43" ry="8" />

        {/* ── Head (small — critical for proportions) ── */}
        <circle cx="42" cy="88" r="13" />

        {/* ── Hair ── */}
        <path d="M 30 78 Q 14 58 22 40 Q 30 24 42 30 Q 50 36 50 52 L 44 70 Z" />
        <path d="M 28 84 Q 12 74 14 60 Q 20 78 32 86 Z" />
        <path d="M 36 72 Q 26 54 34 40 Q 42 28 50 36 Q 44 50 42 62 Z" />

        {/* ── Body — one continuous path: shoulder → bust → waist → hip → legs over rim → back ── */}
        <path d="
          M 52 100
          Q 62 106 70 116
          Q 80 128 88 144
          Q 96 152 104 148
          Q 124 134 148 106
          Q 164 84 172 64
          Q 178 50 181 40
          L 185 28
          Q 187 20 181 17
          Q 175 14 171 22
          L 168 36
          Q 162 52 154 70
          Q 138 94 118 116
          Q 104 132 98 142
          Q 88 148 80 148
          Q 70 146 62 136
          Q 54 124 50 112
          Q 48 106 50 100
          Z
        " />

        {/* ── Second leg (behind first, offset slightly right) ── */}
        <path d="
          M 100 146
          Q 118 136 140 110
          Q 158 88 168 68
          Q 176 50 180 40
          L 184 28
          Q 186 20 180 17
          Q 174 14 170 22
          L 168 34
          Q 162 52 154 72
          Q 138 96 120 118
          Q 104 136 98 146
          Z
        " />

        {/* Pointed heels */}
        <path d="M 169 22 Q 175 12 183 17 Q 189 24 181 36 L 169 22 Z" />
        <path d="M 168 34 Q 175 22 183 27 Q 189 35 181 46 L 168 34 Z" />

        {/* ── Raised left arm ── */}
        <path d="
          M 48 102
          Q 40 84 38 68
          Q 36 56 40 50
          Q 44 44 48 48
          Q 50 54 50 64
          Q 52 78 54 96
          Z
        " />

        {/* Tiny martini glass held in raised hand */}
        <polygon points="33,46 47,46 40,53" />
        <rect x="39" y="53" width="2" height="5" />
        <rect x="36" y="58" width="8" height="2" rx="1" />
        <circle cx="40" cy="46" r="2.5" opacity="0.9" />

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
