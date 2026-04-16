// Reusable SVG/CSS pattern layers for blue panels.
// Each component renders an absolute-positioned overlay — drop inside a relative parent.

export function BlueprintGrid({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
}

export function DotGrid({ opacity = 0.18, size = 28 }: { opacity?: number; size?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px)",
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

export function TopoLines({ opacity = 0.12 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="topo" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
          <path d="M0 80 Q 40 40 80 80 T 160 80" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0 120 Q 40 80 80 120 T 160 120" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0 40 Q 40 0 80 40 T 160 40" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)" />
    </svg>
  );
}

export function ConcentricRings({ opacity = 0.15 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem]"
      viewBox="0 0 400 400"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={20 + i * 18}
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export function IsometricGrid({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage:
          "linear-gradient(60deg, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(-60deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
        backgroundSize: "50px 87px",
      }}
    />
  );
}

export function YellowPipeSquiggle() {
  // Decorative yellow pipe curve, sized by parent positioning
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-20 -right-20 h-[36rem] w-[36rem]"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 50 380 Q 100 200, 200 180 T 380 50"
        fill="none"
        stroke="#FFD400"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
