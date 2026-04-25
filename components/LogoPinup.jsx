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

      <svg
        width={w}
        height={h}
        viewBox={`0 0 260 ${showText ? 400 : 340}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="neon-glow-pinup" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="neon-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            @keyframes pinup-neon-pulse {
              0%, 100% {
                filter: drop-shadow(0 0 3px #ff0080) drop-shadow(0 0 10px #ff0080) drop-shadow(0 0 20px rgba(255,0,128,0.3));
                opacity: 1;
              }
              50% {
                filter: drop-shadow(0 0 6px #ff0080) drop-shadow(0 0 20px #ff0080) drop-shadow(0 0 40px rgba(255,0,128,0.5));
                opacity: 0.88;
              }
            }
            .pinup-neon {
              animation: pinup-neon-pulse 2.5s ease-in-out infinite;
            }
          `}</style>
        </defs>

        <g className="pinup-neon" filter="url(#neon-glow-pinup)">
          {/* ===== MARTINI GLASS ===== */}
          {/* Left rim to bottom of bowl */}
          <path d="M 35 120 L 130 240" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Right rim to bottom of bowl */}
          <path d="M 225 120 L 130 240" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Rim line */}
          <path d="M 35 120 L 225 120" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Stem */}
          <path d="M 130 240 L 130 300" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Base */}
          <path d="M 85 300 Q 130 308 175 300" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Base bottom */}
          <path d="M 88 300 L 172 300" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Liquid level in glass */}
          <path d="M 62 155 Q 130 148 198 155" stroke="#ff0080" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />

          {/* ===== WOMAN SILHOUETTE ===== */}
          
          {/* Head - oval tilted slightly back */}
          <ellipse cx="140" cy="62" rx="14" ry="17" stroke="#ff0080" strokeWidth="2" fill="none"
            transform="rotate(-10 140 62)" />

          {/* Hair flowing down and back */}
          <path d="M 130 50 Q 120 40 115 50 Q 110 65 105 80 Q 100 95 108 100"
            stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 128 48 Q 118 35 125 28 Q 135 25 140 35"
            stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Hair strand right */}
          <path d="M 150 52 Q 158 48 160 55 Q 162 65 155 72"
            stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Neck */}
          <path d="M 137 78 Q 135 85 132 90"
            stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Torso - woman leaning back in glass, curvy silhouette */}
          {/* Back curve */}
          <path d="M 132 90 Q 118 105 112 125 Q 108 140 115 155"
            stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Front/chest curve */}
          <path d="M 132 90 Q 145 100 148 115 Q 150 130 142 150"
            stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Waist */}
          <path d="M 115 155 Q 125 162 142 150"
            stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Bust detail - subtle curve */}
          <path d="M 138 100 Q 150 108 148 115"
            stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Hips */}
          <path d="M 115 155 Q 110 168 118 178"
            stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 142 150 Q 150 165 145 175"
            stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* LEFT ARM - extended up and out, holding small martini */}
          <path d="M 120 98 Q 95 80 70 65 Q 55 58 42 50"
            stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Hand */}
          <path d="M 42 50 Q 38 48 35 52"
            stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Small martini glass in hand */}
          <path d="M 25 30 L 45 30" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 25 30 L 35 45" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 45 30 L 35 45" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 35 45 L 35 52" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* RIGHT ARM - resting on rim of glass */}
          <path d="M 148 105 Q 170 108 190 115 Q 205 118 215 120"
            stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* LEFT LEG - kicked up high over the right rim */}
          <path d="M 118 178 Q 140 185 165 170 Q 195 148 218 130 Q 232 120 240 108"
            stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Left foot/heel */}
          <path d="M 240 108 Q 245 104 250 106"
            stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* High heel */}
          <path d="M 245 104 L 248 98"
            stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* RIGHT LEG - crossed, also extended */}
          <path d="M 145 175 Q 165 190 190 180 Q 215 168 230 148 Q 240 135 245 125"
            stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Right foot/heel */}
          <path d="M 245 125 Q 250 122 253 124"
            stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* High heel */}
          <path d="M 250 122 L 252 116"
            stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>

        {showText && (
          <g filter="url(#neon-glow-soft)">
            <text
              x="130"
              y="355"
              textAnchor="middle"
              fontFamily="Sora, sans-serif"
              fontWeight="800"
              fontSize="24"
              fill="white"
              className="neon-text"
            >
              xcammodels.com
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
