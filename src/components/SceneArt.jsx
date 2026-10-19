const blades = Array.from({ length: 40 }, (_, i) => `M${(i * 37) % 300} ${(i * 53) % 190} l3 -9`);

export default function SceneArt({ type }) {
  if (type === 'kayak') {
    return (
      <svg viewBox="0 0 300 190" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <rect width="300" height="190" fill="url(#water)" />
        <g fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round">
          <path d="M-10 40 Q40 20 90 40 T200 40 T310 40" />
          <path d="M-10 90 Q50 70 100 90 T210 90 T320 90" />
          <path d="M-10 140 Q40 120 90 140 T200 140 T310 140" />
        </g>
        <g transform="translate(110 55) rotate(-25)">
          <path d="M0 30 C30 0 120 0 150 30 C120 58 30 58 0 30Z" fill="#fbbf24" />
          <ellipse cx="75" cy="28" rx="22" ry="10" fill="#92400e" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 300 190" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4ade80" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
      </defs>
      <rect width="300" height="190" fill="url(#grass)" />
      <g stroke="#14532d" strokeOpacity=".5" strokeWidth="2">
        {blades.map((d) => <path key={d} d={d} />)}
      </g>
      <path d="M95 130 L150 40 L205 130Z" fill="#e5e7eb" />
      <path d="M150 40 L205 130 L160 130Z" fill="#9ca3af" />
      <path d="M150 75 L132 130 L168 130Z" fill="#374151" />
    </svg>
  );
}
