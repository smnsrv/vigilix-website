export default function ShieldIcon({ size = 32, fill = '#2563EB' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vigilix">
      <path
        d="M 35 50 L 100 115 L 165 50 L 165 115 C 165 150 140 170 100 180 C 60 170 35 150 35 115 Z"
        fill={fill}
      />
    </svg>
  );
}
