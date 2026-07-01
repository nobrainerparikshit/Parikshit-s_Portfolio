export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      aria-label="PJ Logo"
      role="img"
      className={className}
    >
      <defs>
        <pattern id="logo-waves" width="8" height="8" patternUnits="userSpaceOnUse">
          <path
            d="M0 4 Q2 0 4 4 T8 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <circle cx="60" cy="52" r="44" fill="url(#logo-waves)" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
      <circle cx="60" cy="52" r="32" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="60" cy="52" r="20" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <text
        x="60"
        y="118"
        textAnchor="middle"
        className="fill-current font-serif text-[18px] tracking-[0.12em]"
      >
        PJ
      </text>
    </svg>
  )
}
