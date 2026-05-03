export default function ShieldIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2L4 7v9c0 7.18 5.18 13.89 12 15.5C22.82 29.89 28 23.18 28 16V7L16 2z"
        fill="rgba(31,111,235,0.15)"
        stroke="#1f6feb"
        strokeWidth="1.5"
      />
      <path
        d="M16 2L4 7v9c0 7.18 5.18 13.89 12 15.5C22.82 29.89 28 23.18 28 16V7L16 2z"
        fill="url(#shieldGrad)"
        opacity="0.5"
      />
      <path
        d="M12 16l3 3 5-5"
        stroke="#3fb950"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="shieldGrad" x1="4" y1="2" x2="28" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1f6feb" stopOpacity="0.6" />
          <stop offset="1" stopColor="#3fb950" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}