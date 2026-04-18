import { Wrench, Droplets, Clock, Award, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Feature = { icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  { icon: Award, title: "Master Plumbers", desc: "State-licensed, bonded, insured. No contractors, no shortcuts." },
  { icon: Clock, title: "Same-Day Service", desc: "Book before noon, we're at your door today. Guaranteed." },
  { icon: Droplets, title: "Leak Guarantee", desc: "If it leaks within a year of our fix, we come back free." },
  { icon: Wrench, title: "Lifetime Warranty", desc: "All labor backed for life on every install we touch." },
];

export function Features() {
  return (
    <section className="py-16 lg:py-20 bg-brand-blueTint">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature: f, i }: { feature: Feature; i: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  const Icon = f.icon;
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden border-2 border-brand-navy/5 bg-brand-paper p-7 shadow-card transition-all duration-700 ease-out hover:-translate-y-1 hover:border-brand-yellow"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${i * 90}ms`,
        clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-80"
        style={{ background: "radial-gradient(circle, #FFD400 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 h-16 w-16 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center bg-brand-navy text-brand-yellow shadow-[0_10px_30px_-10px_rgba(11,44,122,0.6)] transition group-hover:rotate-6 group-hover:bg-brand-yellow group-hover:text-brand-navy">
          <Icon className="h-6 w-6" strokeWidth={2.2} />
        </div>
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brand-navy">{f.title}</h3>
        <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-brand-navy/65">{f.desc}</p>
      </div>
    </div>
  );
}
