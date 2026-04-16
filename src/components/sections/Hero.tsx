import { useEffect, useRef, useState } from "react";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Mouse-move parallax for photo
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      photoRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-blueDeep text-white flex flex-col">
      {/* Unique animated BG — concentric water ripples expanding from bottom-right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="heroRipple" cx="85%" cy="88%" r="65%">
            <stop offset="0%" stopColor="#FFD400" stopOpacity="0" />
            <stop offset="100%" stopColor="#FFD400" stopOpacity="0.6" />
          </radialGradient>
        </defs>
        {/* Ripple rings */}
        {Array.from({ length: 14 }).map((_, i) => (
          <circle
            key={i}
            cx="1360"
            cy="880"
            r={120 + i * 90}
            fill="none"
            stroke="white"
            strokeWidth="1"
            style={{
              animation: `rippleExpand 8s ease-in-out ${i * 0.4}s infinite`,
              transformOrigin: "1360px 880px",
            }}
          />
        ))}
        {/* Isometric triangle lines top-left */}
        <g opacity="0.6">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={-100 + i * 60}
              y1="0"
              x2={400 + i * 60}
              y2="500"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}
        </g>
      </svg>

      {/* Radial yellow glow bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[48rem] w-[48rem] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD400 0%, transparent 60%)" }}
      />
      {/* Second radial — blue depth top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #1E40E8 0%, transparent 60%)" }}
      />
      {/* Inline keyframes */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rippleExpand {
          0% { stroke-opacity: 0.08; transform: scale(0.8); }
          50% { stroke-opacity: 0.35; }
          100% { stroke-opacity: 0.08; transform: scale(1.15); }
        }
      `}</style>

      {/* Nav */}
      <nav className="relative z-20 border-b border-white/10">
        <div className="container-x flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold uppercase tracking-tight text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-black" fill="none">
                <path d="M12 3v9m0 0l-3-3m3 3l3-3M5 14v5h14v-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {site.brand}
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <Button asChild size="sm" variant="yellow">
            <a href={`tel:${site.phoneRaw}`}>
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </Button>
        </div>
      </nav>

      {/* Body */}
      <div className="relative flex flex-1 items-center">
        <div className="container-x grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:py-20">
          <div
            className="relative z-10 flex flex-col justify-center transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-brand-yellow px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-black">
                24/7 Emergency Service
              </span>
            </div>

            <h1 className="display-hero text-white">
              Plumbing
              <br />
              <span
                className="relative inline-block text-brand-yellow"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFD400 0%, #FFF4AA 50%, #FFD400 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                Solved.
              </span>
            </h1>

            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-white/70">
              {site.hero.subhead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="yellow">
                <a href={site.hero.primaryCta.href}>
                  <Phone className="h-4 w-4" />
                  {site.hero.primaryCta.label}
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href={site.hero.secondaryCta.href}>{site.hero.secondaryCta.label}</a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-xs">
              <div className="flex items-center gap-2 text-white/70">
                <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                <span className="font-bold text-white">{site.review.stars}</span>
                · {site.review.count.toLocaleString()} reviews
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <ShieldCheck className="h-4 w-4 text-brand-yellow" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 text-brand-yellow" />
                24/7 Emergency
              </div>
            </div>
          </div>

          {/* Right column — parallax plumber photo */}
          <div
            ref={photoRef}
            className="relative flex items-center transition-transform duration-200 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "transform 0.2s ease-out, opacity 0.9s ease-out",
            }}
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
                alt="Licensed plumber at work"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[580px]"
                loading="eager"
              />
              <div
                className="absolute right-4 top-4 rounded-lg bg-brand-yellow px-4 py-3 shadow-lg"
                style={{ animation: "floatY 4s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-brand-black text-brand-black" />
                  <div className="font-display text-lg font-black leading-none text-brand-black">
                    {site.review.stars}
                  </div>
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-brand-black/80">
                  {site.review.count}+ reviews
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 bg-brand-black/85 px-5 py-3 backdrop-blur-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-white">
                  Same-Day Response
                </div>
                <div className="rounded-md bg-brand-yellow px-2 py-1 text-[10px] font-black uppercase tracking-wider text-brand-black">
                  Since 2000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
