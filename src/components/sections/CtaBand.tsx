import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export function CtaBand() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="section-pad">
      <div className="container-x">
        <div
          ref={ref}
          className="relative overflow-hidden transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            clipPath: "polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=85"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(10,31,92,0.97) 0%, rgba(11,44,122,0.82) 50%, rgba(255,212,0,0.35) 100%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-8 px-8 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <span className="eyebrow-dark mb-4">Standing By</span>
              <h2 className="display-xl mt-4 text-brand-paper">
                One call, <span className="text-brand-yellow">done fast</span>.
              </h2>
              <p className="mt-5 max-w-lg font-sans text-[16.5px] leading-relaxed text-brand-paper/70">
                Burst pipe at 2am or a water heater on its last legs — a licensed
                plumber is in their van and ready to roll right now.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-brand-yellow px-8 py-4 font-grotesk text-sm font-bold uppercase tracking-[0.1em] text-brand-black transition hover:bg-brand-paper"
              >
                Get Free Estimate
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-2 border-2 border-brand-paper/30 bg-brand-paper/[0.05] px-8 py-4 font-grotesk text-sm font-bold uppercase tracking-[0.1em] text-brand-paper backdrop-blur-sm transition hover:border-brand-paper hover:bg-brand-paper hover:text-brand-navy"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
