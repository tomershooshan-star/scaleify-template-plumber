import { services } from "@/config/site";
import { ArrowUpRight, Wrench, Waves, Flame, Search, Droplets, GitBranch, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wrench, Waves, Flame, Search, Droplets, GitBranch, ShieldCheck, Zap,
};

export function Services() {
  const list = services.slice(0, 6);
  return (
    <section id="services" className="section-pad bg-brand-grayLight">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-5 display-xl text-brand-ink">
            Plumbing Services
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-brand-gray">
            Residential and commercial plumbing, done right the first time. Licensed professionals, upfront flat-rate pricing, and guaranteed workmanship.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-lg border border-brand-ink/5 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-card"
              >
                {/* Icon medallion */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand-blueTint text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] leading-relaxed text-brand-gray">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-blue transition group-hover:gap-2.5"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
