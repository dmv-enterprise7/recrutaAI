interface LogoProps {
  variant?: 'primary' | 'dark' | 'mono-light' | 'mono-dark' | 'monogram'
  width?: number
}

export function Logo({ variant = 'primary', width = 168 }: LogoProps) {
  if (variant === 'monogram') {
    return (
      <svg viewBox="0 0 90 90" width={width} height={width} aria-label="Recruta AI">
        <rect x="2" y="2" width="86" height="86" rx="14" fill="#0E0F0C" />
        <g transform="translate(20,22)">
          <path
            d="M0 0 L0 46 M0 0 L18 0 Q28 0 28 10 Q28 20 18 20 L0 20 M14 20 L28 46"
            fill="none" stroke="#F4F1EA" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"
          />
          <path
            d="M28 46 L40 4 L52 46 M32 30 L48 30"
            fill="none" stroke="#D9B66A" strokeWidth="3" strokeLinecap="square"
          />
        </g>
      </svg>
    )
  }

  const isDark = variant === 'dark' || variant === 'mono-dark'
  const isMono = variant === 'mono-light' || variant === 'mono-dark'
  const inkColor  = isDark ? '#F4F1EA' : '#0E0F0C'
  const aiColor   = isMono ? inkColor  : (isDark ? '#D9B66A' : '#B8862A')
  const dotColor  = isMono ? inkColor  : (isDark ? '#6FA88A' : '#1F6F4A')

  return (
    <svg
      viewBox="0 0 360 100"
      width={width}
      height={(width * 100) / 360}
      aria-label="Recruta AI"
    >
      <text
        x="0" y="72"
        fontFamily="Instrument Serif, serif"
        fontSize="80"
        fontWeight="400"
        letterSpacing="-2.5"
        fill={inkColor}
      >
        Recruta
      </text>
      <text
        x="198" y="72"
        fontFamily="Instrument Serif, serif"
        fontSize="80"
        fontWeight="400"
        fontStyle="italic"
        letterSpacing="-2.5"
        fill={aiColor}
      >
        AI
      </text>
      <circle cx="288" cy="64" r="5" fill={dotColor} />
    </svg>
  )
}
