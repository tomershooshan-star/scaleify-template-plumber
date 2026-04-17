import { process as steps } from "@/config/site";
import { DotGrid, BlueprintGrid } from "@/components/ui/Patterns";

export function Process() {
  return (
    <section id="process" className="section-pad-sm bg-brand-grayLight">
      <div className="mx-auto w-[92vw] max-w-[1800px]">
        <div
          className="relative overflow-hidden bg-brand-blueDeep px-8 py-20 sm:px-14 sm:py-28 lg:px-20 lg:py-36"
          style={{
            clipPath:
              "polygon(0 32px, 32px 0, calc(100% - 32px) 0, 100% 32px, 100% calc(100% - 32px), calc(100% - 32px) 100%, 32px 100%, 0 calc(100% - 32px))",
          }}
        >
          <BlueprintGrid opacity={0.08} />
          <DotGrid opacity={0.12} size={22} />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="eyebrow-dark">Simple Process</span>
            <h2
              className="mt-5 font-display font-bold uppercase leading-[0.95] tracking-tightest text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Book Your Service
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70">
              Four simple steps — from your first call to a job you never have to think about again.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-20 max-w-4xl">
            {/* Vertical center line */}
            <div
              aria-hidden
              className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-white/20 md:block"
            />

            <ul className="space-y-8 md:space-y-16">
              {steps.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <li key={s.n} className="relative md:flex md:items-center">
                    {/* Left column */}
                    <div className="hidden w-[calc(50%-2rem)] md:block">
                      {isLeft ? (
                        <div className="rounded-md bg-brand-blue p-6 text-right text-white shadow-lg md:p-8">
                          <h3 className="font-display text-xl font-bold uppercase tracking-tight lg:text-2xl">
                            {s.title}
                          </h3>
                          <p className="mt-3 font-sans text-sm leading-relaxed text-white/85 lg:text-[15px]">
                            {s.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="pr-4 text-right">
                          <div className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-white/40">
                            Step {i + 1}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center dot — always dead center */}
                    <div className="hidden w-16 shrink-0 items-center justify-center md:flex">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow font-display text-base font-black text-brand-black ring-8 ring-brand-blueDeep">
                        {s.n}
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="hidden w-[calc(50%-2rem)] md:block">
                      {!isLeft ? (
                        <div className="rounded-md bg-brand-blue p-6 text-left text-white shadow-lg md:p-8">
                          <h3 className="font-display text-xl font-bold uppercase tracking-tight lg:text-2xl">
                            {s.title}
                          </h3>
                          <p className="mt-3 font-sans text-sm leading-relaxed text-white/85 lg:text-[15px]">
                            {s.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="pl-4 text-left">
                          <div className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-white/40">
                            Step {i + 1}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mobile layout (stacked) */}
                    <div className="md:hidden">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow font-display text-sm font-black text-brand-black">
                          {s.n}
                        </div>
                        <div className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-white/40">
                          Step {i + 1}
                        </div>
                      </div>
                      <div className="rounded-md bg-brand-blue p-5 text-white">
                        <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                          {s.title}
                        </h3>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-white/85">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
