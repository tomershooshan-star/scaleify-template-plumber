import { useState } from "react";
import { CheckCircle2, Phone, ArrowUpRight, Play } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/config/site";

type TabKey = "mission" | "vision" | "values";

const tabs: Record<TabKey, { label: string; body: string[] | string }> = {
  mission: {
    label: "Mission",
    body: [
      "24/7 Emergency Response",
      "Leak Detection & Repair",
      "Water Heater Install",
      "Full-Home Repipe",
      "Drain Cleaning · Hydro-Jet",
    ],
  },
  vision: {
    label: "Vision",
    body: [
      "Licensed Master Plumbers",
      "Flat-Rate Upfront Pricing",
      "Same-Day Service Guarantee",
      "Permits Pulled, Code Passed",
      "Drop Cloths · Shoe Covers",
      "Fully Stocked Vans",
    ],
  },
  values: {
    label: "Values",
    body:
      "We show up on time, quote in writing, and leave the job cleaner than we found it. No hourly surprises. No flushing problems back at you. Just real plumbing, done by licensed techs who treat your home like theirs.",
  },
};

export function About() {
  const [active, setActive] = useState<TabKey>("vision");
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  const tab = tabs[active];

  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div
            ref={ref}
            className="relative transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=85"
                alt="Master plumber at work"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <button
                aria-label="Watch story"
                className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-yellow text-brand-black shadow-xl transition hover:scale-105"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-yellow/40" />
                <Play className="ml-1 h-6 w-6 fill-brand-black" strokeWidth={0} />
              </button>
            </div>
          </div>

          <div>
            <span className="eyebrow mb-5">About Us</span>
            <h2 className="display-xl mt-4 text-brand-navy">
              Plumbing you can <span className="text-brand-yellow">trust</span>.
            </h2>
            <p className="mt-6 max-w-lg font-sans text-[17px] leading-relaxed text-brand-navy/65">
              25 years of licensed plumbing across the metro. From midnight
              burst pipes to whole-home repipes — we fix it once, fix it right,
              and don't hand you a surprise bill.
            </p>

            <div className="mt-9 flex items-center gap-8 border-b border-brand-navy/10">
              {(Object.keys(tabs) as TabKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative pb-3 font-grotesk text-base font-bold uppercase tracking-[0.1em] transition ${
                    active === key ? "text-brand-navy" : "text-brand-navy/45 hover:text-brand-navy/70"
                  }`}
                >
                  {tabs[key].label}
                  {active === key && (
                    <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-brand-yellow" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-7 min-h-[160px]">
              {Array.isArray(tab.body) ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {tab.body.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-grotesk text-[15px] font-semibold text-brand-navy"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-yellow" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="max-w-lg font-sans text-[15.5px] leading-relaxed text-brand-navy/65">
                  {tab.body}
                </p>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 bg-brand-navy px-6 py-3 font-grotesk text-sm font-bold uppercase tracking-[0.1em] text-brand-paper transition hover:bg-brand-yellow hover:text-brand-black"
              >
                Read More
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="font-grotesk">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-navy/50">
                    Call any time
                  </div>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="text-[15px] font-bold text-brand-navy hover:text-brand-yellow"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
