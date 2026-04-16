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
  return (
    <section className="relative overflow-hidden bg-brand-blueDeep text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] bg-diagonal-stripe pointer-events-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD400 0%, transparent 65%)" }}
      />

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

      <div className="relative">
        <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-8 lg:py-24 lg:min-h-[calc(92vh-5rem)]">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-black">
                24/7 Emergency Service
              </span>
            </div>

            <h1 className="display-hero text-white">
              Plumbing
              <br />
              <span className="text-brand-yellow">Solved.</span>
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

          <div className="relative flex items-end">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
                alt="Licensed plumber at work"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute right-4 top-4 rounded-xl bg-brand-yellow px-4 py-3 shadow-lg">
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
