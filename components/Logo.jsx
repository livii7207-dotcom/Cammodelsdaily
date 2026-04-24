export default function Logo({ size = 'md' }) {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.75 : 1;
  const h = Math.round(36 * scale);
  const w = Math.round(180 * scale);

  return (
    <svg width={w} height={h} viewBox="0 0 180 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="xgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff1493" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="glowgrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff1493" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* X badge */}
      <rect x="0" y="0" width="36" height="36" rx="8" fill="url(#xgrad)" />
      {/* X shape inside badge */}
      <line x1="9" y1="9" x2="27" y2="27" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="27" y1="9" x2="9" y2="27" stroke="white" strokeWidth="4.5" strokeLinecap="round" />

      {/* "Cam" text */}
      <text
        x="46"
        y="26"
        fontFamily="Sora, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        filter="url(#glow)"
      >
        Cam
      </text>

      {/* "Models" text */}
      <text
        x="97"
        y="26"
        fontFamily="Sora, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="url(#xgrad)"
      >
        Models
      </text>

      {/* Underline glow bar */}
      <rect x="46" y="30" width="130" height="2" rx="1" fill="url(#glowgrad)" />
    </svg>
  );
}
