export default function LogoMartini({ size = 'md', showText = false }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(160 * scale);
  const h = Math.round(showText ? 300 * scale : 260 * scale);

  return (
    <svg width={w} height={h} viewBox={`0 0 160 ${showText ? 300 : 260}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mg-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="mg-pink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff0080" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="mg-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes mg-pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.45; }
          }
          .mg-neon { animation: mg-pulse 2.2s ease-in-out infinite; }
        `}</style>
      </defs>

      <g className="mg-neon" filter="url(#mg-glow)">
        <circle cx="80" cy="32" r="28" stroke="#ff0080" strokeWidth="2" fill="none" />
        <path
          d="M 18 70 Q 80 60 142 70 L 102 158 L 102 218 L 130 226 L 130 238 L 30 238 L 30 226 L 58 218 L 58 158 Z"
          stroke="#ff0080" strokeWidth="2" fill="none" strokeLinejoin="round"
        />
        <path d="M 18 70 Q 80 64 142 70" stroke="#a855f7" strokeWidth="1.5" fill="none" />
      </g>

      <circle cx="80" cy="32" r="24" fill="url(#mg-blue)" />
      <ellipse cx="80" cy="16" rx="18" ry="10" fill="#1d4ed8" opacity="0.7" />
      <path d="M 62 20 Q 56 14 60 8 Q 65 4 70 10" fill="#1d4ed8" opacity="0.6" />
      <path d="M 98 20 Q 104 14 100 8 Q 95 4 90 10" fill="#1d4ed8" opacity="0.6" />

      <path d="M 22 70 Q 80 62 138 70 L 100 156 Q 80 162 60 156 Z" fill="url(#mg-blue)" />
      <rect x="70" y="53" width="20" height="20" rx="6" fill="url(#mg-blue)" />
      <rect x="62" y="156" width="36" height="60" rx="18" fill="url(#mg-blue)" />
      <path d="M 32 216 Q 80 208 128 216 L 130 232 Q 80 240 30 232 Z" fill="url(#mg-blue)" />

      <ellipse cx="68" cy="30" rx="4.5" ry="4" fill="#1e3a8a" />
      <ellipse cx="69" cy="29" rx="1.5" ry="1.5" fill="#bfdbfe" opacity="0.6" />
      <path d="M 88 31 Q 92 27 96 31" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="89" y1="30" x2="87" y2="25" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="92" y1="28.5" x2="92" y2="23" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="95" y1="30" x2="97" y2="25" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 70 42 Q 80 49 90 42" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="60" cy="38" rx="6" ry="3.5" fill="#f472b6" opacity="0.35" />
      <ellipse cx="100" cy="38" rx="6" ry="3.5" fill="#f472b6" opacity="0.35" />

      <line x1="80" y1="66" x2="84" y2="56" stroke="#ff69b4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="85" cy="53" r="6" fill="#ff0080" />
      <ellipse cx="87" cy="51" rx="2" ry="1.5" fill="#ff69b4" opacity="0.5" />

      <g fill="#ff69b4" opacity="0.7">
        <path transform="translate(145,50)" d="M0,-3 L0.6,-0.6 L3,0 L0.6,0.6 L0,3 L-0.6,0.6 L-3,0 L-0.6,-0.6Z" />
        <path transform="translate(12,110)" d="M0,-2.5 L0.5,-0.5 L2.5,0 L0.5,0.5 L0,2.5 L-0.5,0.5 L-2.5,0 L-0.5,-0.5Z" />
        <path transform="translate(148,180)" d="M0,-2 L0.4,-0.4 L2,0 L0.4,0.4 L0,2 L-0.4,0.4 L-2,0 L-0.4,-0.4Z" />
      </g>

      {showText && (
        <>
          <text x="80" y="268" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="18" fill="white">
            XCam
          </text>
          <text x="80" y="290" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="700" fontSize="18" fill="url(#mg-pink)">
            Models
          </text>
        </>
      )}
    </svg>
  );
}
