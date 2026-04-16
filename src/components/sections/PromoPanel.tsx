import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { IsometricGrid, YellowPipeSquiggle } from "@/components/ui/Patterns";

const bullets = ["Leaks. Mess. Frustration.", "Fixed Fast. Done Right."];

export function PromoPanel() {
  return (
    <section className="section-pad-sm bg-brand-grayLight">
      <div className="container-x">
        <div className="relative overflow-hidden clip-sharp bg-brand-blue text-white shadow-bluepanel">
          <IsometricGrid opacity={0.12} />
          <YellowPipeSquiggle />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-[28rem] w-[28rem] rounded-full bg-brand-yellow/20 blur-3xl"
          />
          {/* Small yellow chip */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 right-4 hidden h-28 w-28 rotate-12 rounded-lg bg-brand-yellow/90 lg:block"
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 font-sans text-[10px] font-black uppercase tracking-[0.18em] text-brand-yellow">
                4.9/5 based on {site.review.count}+ reviews
              </span>
              <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tightest text-white sm:text-6xl lg:text-7xl">
                Same-Day
                <br />
                <span className="text-brand-yellow">Pipe Repair.</span>
              </h2>

              <ul className="mt-8 flex flex-col gap-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 font-sans text-base font-semibold text-white/85">
                    <CheckCircle2 className="h-5 w-5 text-brand-yellow" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="yellow">
                  <a href="#contact">Request Service</a>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <a href={`tel:${site.phoneRaw}`}>
                    <Phone className="h-4 w-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative flex items-end justify-center">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=85"
                  alt="Plumber"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85"; }}
                />
                {/* Yellow decorative circle badge */}
                <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 items-center justify-center rounded-full bg-brand-yellow shadow-lg sm:flex">
                  <div className="text-center">
                    <div className="font-display text-lg font-black leading-none text-brand-black">24/7</div>
                    <div className="mt-0.5 text-[9px] font-black uppercase tracking-wider text-brand-black/80">Emergency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
