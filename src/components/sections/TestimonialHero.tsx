import { Quote } from "lucide-react";
import { testimonials } from "@/config/site";
import { TopoLines, ConcentricRings } from "@/components/ui/Patterns";

export function TestimonialHero() {
  const t = testimonials[0];
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-lg bg-brand-blue py-16 sm:py-20 lg:py-24">
          <TopoLines opacity={0.15} />
          <ConcentricRings opacity={0.12} />
          {/* HUGE outlined ghost text behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            <div
              className="whitespace-nowrap text-center font-display font-black uppercase leading-none"
              style={{
                fontSize: "clamp(5rem, 15vw, 14rem)",
                letterSpacing: "-0.05em",
                WebkitTextStroke: "2px rgba(255,255,255,0.18)",
                color: "transparent",
              }}
            >
              GETTING A QUOTE
            </div>
          </div>

          <div className="relative grid gap-10 px-8 sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-16">
            <div className="relative z-10 flex flex-col justify-center">
              <Quote className="h-10 w-10 text-brand-yellow" strokeWidth={2.2} />
              <blockquote className="mt-4 font-display text-2xl font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-3xl lg:text-4xl">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow font-display text-xs font-black text-brand-black">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-sans text-sm font-bold text-white">{t.name}</div>
                  <div className="font-sans text-xs text-white/60">{t.role}</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-center">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=800&q=85"
                  alt="Plumber on site"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
