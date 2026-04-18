const slides = [
  "LEAK REPAIR",
  "WATER HEATER",
  "FULL REPIPE",
  "DRAIN CLEARING",
  "LEAK REPAIR",
  "WATER HEATER",
  "FULL REPIPE",
  "DRAIN CLEARING",
];

export function TextSlider() {
  return (
    <section className="overflow-hidden bg-brand-navy py-12 lg:py-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {slides.map((s, i) => (
          <div
            key={`${s}-${i}`}
            className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden className="shrink-0 lg:h-16 lg:w-16">
              <path
                d="M30 0L38.1027 21.8973L60 30L38.1027 38.1027L30 60L21.8973 38.1027L0 30L21.8973 21.8973L30 0Z"
                fill="#FFD400"
              />
            </svg>
            <h3 className="font-display text-5xl font-bold uppercase tracking-tight text-brand-paper sm:text-6xl lg:text-[96px] lg:leading-none">
              {s}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
