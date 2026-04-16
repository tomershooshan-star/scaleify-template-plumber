import { process as steps } from "@/config/site";
import { DotGrid, BlueprintGrid } from "@/components/ui/Patterns";

export function Process() {
  return (
    <section id="process" className="section-pad-sm bg-brand-grayLight">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-lg bg-brand-blueDeep p-8 sm:p-12 lg:p-16">
          <BlueprintGrid opacity={0.08} />
          <DotGrid opacity={0.12} size={22} />
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="eyebrow-dark">Simple Process</span>
            <h2 className="mt-5 display-xl text-white">Book Your Service</h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-3xl">
            {/* Vertical connector line */}
            <div
              aria-hidden
              className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-white/20 md:block"
            />

            <ul className="space-y-6 md:space-y-12">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className={`relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-3" : ""
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`rounded-md bg-brand-blue p-5 text-white md:p-6 ${
                      i % 2 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <h3 className="font-display text-base font-bold uppercase tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-white/80">
                      {s.desc}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 top-0 hidden h-full items-center justify-center md:static md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow font-display text-sm font-black text-brand-black ring-4 ring-brand-blueDeep">
                      {s.n}
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden md:block">
                    <div className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                      Step {i + 1}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
