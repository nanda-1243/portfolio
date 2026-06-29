import type { Project } from '../data/projects'

// Stylized, domain-themed generative banners (no stock/screenshot images).
// Each draws an abstract Apple-style scene tinted with the project accent.
export default function ProjectBanner({
  project,
  tall = false,
}: {
  project: Project
  tall?: boolean
}) {
  const { accent, slug } = project
  const id = slug.replace(/[^a-z]/g, '')

  return (
    <div
      className={`relative w-full overflow-hidden ${tall ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}
      style={{ background: '#06060b' }}
    >
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent.from} stopOpacity="0.28" />
            <stop offset="0.5" stopColor="#06060b" stopOpacity="0.95" />
            <stop offset="1" stopColor={accent.to} stopOpacity="0.22" />
          </linearGradient>
          <radialGradient id={`glow-${id}`} cx="0.5" cy="0.4" r="0.6">
            <stop offset="0" stopColor={accent.to} stopOpacity="0.5" />
            <stop offset="1" stopColor={accent.to} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`line-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={accent.from} />
            <stop offset="1" stopColor={accent.to} />
          </linearGradient>
        </defs>

        <rect width="800" height="450" fill={`url(#bg-${id})`} />
        <circle cx="400" cy="170" r="220" fill={`url(#glow-${id})`} />

        {/* Subtle grid */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="450" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
          ))}
        </g>

        {slug === 'maritime-geospatial-intelligence' && (
          <g>
            {/* coastline / route waves */}
            <path
              d="M0 320 Q150 270 300 310 T600 300 T800 320"
              fill="none"
              stroke={`url(#line-${id})`}
              strokeWidth="3"
              opacity="0.8"
            />
            <path
              d="M0 360 Q200 330 400 360 T800 360"
              fill="none"
              stroke={accent.to}
              strokeWidth="2"
              opacity="0.4"
            />
            {/* route between ports */}
            <g>
              <line x1="120" y1="180" x2="640" y2="240" stroke={accent.text} strokeWidth="2" strokeDasharray="6 8" opacity="0.7" />
              {[
                [120, 180],
                [320, 150],
                [470, 210],
                [640, 240],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={i === 0 || i === 3 ? 9 : 5} fill={accent.to} opacity="0.9" />
              ))}
            </g>
          </g>
        )}

        {slug === 'health-monitoring-tracking-system' && (
          <g>
            {/* ECG / heartbeat line */}
            <polyline
              points="0,250 120,250 160,250 190,180 220,320 250,250 380,250 420,250 450,150 490,340 520,250 800,250"
              fill="none"
              stroke={`url(#line-${id})`}
              strokeWidth="3"
              opacity="0.9"
            />
            {/* geofence ring */}
            <circle cx="600" cy="150" r="70" fill="none" stroke={accent.to} strokeWidth="2" strokeDasharray="4 7" opacity="0.6" />
            <circle cx="600" cy="150" r="10" fill={accent.to} opacity="0.85" />
          </g>
        )}

        {slug === 'ai-document-analysis-rag' && (
          <g>
            {/* document */}
            <rect x="110" y="120" width="150" height="200" rx="12" fill="rgba(255,255,255,0.06)" stroke={accent.ring} />
            {[150, 170, 190, 210, 230].map((y) => (
              <line key={y} x1="135" y1={y} x2="235" y2={y} stroke="rgba(255,255,255,0.25)" strokeWidth="4" strokeLinecap="round" />
            ))}
            {/* retrieval nodes / vectors */}
            <g>
              {[
                [480, 150],
                [600, 130],
                [560, 240],
                [680, 220],
              ].map(([x, y], i) => (
                <g key={i}>
                  <line x1="260" y1="220" x2={x} y2={y} stroke={accent.text} strokeWidth="1.5" strokeDasharray="3 6" opacity="0.5" />
                  <circle cx={x} cy={y} r="18" fill="rgba(255,255,255,0.05)" stroke={`url(#line-${id})`} strokeWidth="2" />
                </g>
              ))}
            </g>
          </g>
        )}
      </svg>
    </div>
  )
}
