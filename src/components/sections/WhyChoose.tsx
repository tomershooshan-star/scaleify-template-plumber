import { whyChoose } from "@/config/site";
import { Award, BadgeDollarSign, Timer, ShieldCheck, Sparkles, Truck, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  Award, BadgeDollarSign, Timer, ShieldCheck, Sparkles, Truck,
};

const imgs = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1581092795442-66f3e73c8b44?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
];

export function WhyChoose() {
  const list = whyChoose.slice(0, 4);
  return (
    <section id="why" className="section-pad bg-brand-blueTint/40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-5 display-xl text-brand-ink">The Plumbers You Call Twice</h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {list.map((item, i) => (
            <WhyRow key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyRow({ item, i }: { item: (typeof whyChoose)[number]; i: number }) {
  const { ref, inView } = useReveal<HTMLElement>(0.15);
  const Icon = iconMap[item.icon] ?? Award;
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="grid grid-cols-1 items-center gap-6 transition-all duration-700 ease-out sm:grid-cols-[1fr_1fr] sm:gap-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${i % 2 === 0 ? 40 : -40}px)`,
      }}
    >
      <div className={`${i % 2 ? "sm:order-2" : ""}`}>
        <div className="mb-5 inline-flex">
          <HexIcon>
            <Icon className="h-6 w-6" strokeWidth={2.2} />
          </HexIcon>
        </div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-ink">
          {item.title}
        </h3>
        <p className="mt-3 max-w-sm font-sans text-[15px] leading-relaxed text-brand-gray">
          {item.desc}
        </p>
      </div>
      <div className={`hidden aspect-[4/5] w-full overflow-hidden rounded-lg bg-white sm:block ${i % 2 ? "sm:order-1" : ""}`}>
        <img src={imgs[i % imgs.length]} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
    </article>
  );
}

function HexIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center text-brand-blue">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-brand-blueTint" fill="currentColor">
        <polygon points="50,2 95,26 95,74 50,98 5,74 5,26" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
