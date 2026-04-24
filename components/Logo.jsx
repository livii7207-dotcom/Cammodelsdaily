export default function Logo({ size = 'md' }) {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.75 : 1;
  const h = Math.round(36 * scale);
  const w = Math.round(200 * scale);

  return (
    <svg width={w} height={h} viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="xgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff0080" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="glowgrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff0080" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="badgeglow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Badge glow */}
      <rect x="-1" y="-1" width="38" height="38" rx="9" fill="url(#xgrad)" opacity="0.35" filter="url(#badgeglow)" />

      {/* X badge */}
      <rect x="0" y="0" width="36" height="36" rx="8" fill="url(#xgrad)" />

      {/* Curved X arms */}
      <path d="M 9 9 Q 21 13 27 27" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M 27 9 Q 15 13 9 27" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />

      {/* Heart tips at each arm end */}
      <g fill="white" opacity="0.95">
        {/* top-left (9,9) */}
        <path transform="translate(9,9) rotate(-45) scale(0.85)" d="M0,0.5 C-0.8,-1.2 -3,-1.2 -3,0.8 C-3,2.2 0,4 0,4 C0,4 3,2.2 3,0.8 C3,-1.2 0.8,-1.2 0,0.5Z" />
        {/* bottom-right (27,27) */}
        <path transform="translate(27,27) rotate(135) scale(0.85)" d="M0,0.5 C-0.8,-1.2 -3,-1.2 -3,0.8 C-3,2.2 0,4 0,4 C0,4 3,2.2 3,0.8 C3,-1.2 0.8,-1.2 0,0.5Z" />
        {/* top-right (27,9) */}
        <path transform="translate(27,9) rotate(45) scale(0.85)" d="M0,0.5 C-0.8,-1.2 -3,-1.2 -3,0.8 C-3,2.2 0,4 0,4 C0,4 3,2.2 3,0.8 C3,-1.2 0.8,-1.2 0,0.5Z" />
        {/* bottom-left (9,27) */}
        <path transform="translate(9,27) rotate(-135) scale(0.85)" d="M0,0.5 C-0.8,-1.2 -3,-1.2 -3,0.8 C-3,2.2 0,4 0,4 C0,4 3,2.2 3,0.8 C3,-1.2 0.8,-1.2 0,0.5Z" />
      </g>

      {/* Sparkle stars outside badge */}
      <g fill="#ff69b4" opacity="0.8">
        <path transform="translate(40,3)" d="M0,-2.2 L0.5,-0.5 L2.2,0 L0.5,0.5 L0,2.2 L-0.5,0.5 L-2.2,0 L-0.5,-0.5Z" />
        <path transform="translate(41,18)" d="M0,-1.4 L0.35,-0.35 L1.4,0 L0.35,0.35 L0,1.4 L-0.35,0.35 L-1.4,0 L-0.35,-0.35Z" />
        <path transform="translate(40,32)" d="M0,-2 L0.45,-0.45 L2,0 L0.45,0.45 L0,2 L-0.45,0.45 L-2,0 L-0.45,-0.45Z" />
      </g>

      {/* "Cam" text */}
      <text x="52" y="26" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="22" fill="white" filter="url(#glow)">
        Cam
      </text>

      {/* "Models" text */}
      <text x="103" y="26" fontFamily="Sora, sans-serif" fontWeight="700" fontSize="22" fill="url(#xgrad)">
        Models
      </text>

      {/* Underline glow bar */}
      <rect x="52" y="30" width="144" height="2" rx="1" fill="url(#glowgrad)" />
    </svg>
  );
}
