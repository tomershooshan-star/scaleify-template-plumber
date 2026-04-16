const projects = [
  { src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1100&q=85", title: "Kitchen Repipe", city: "Pasadena" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=85", title: "Emergency Pipe Repair", city: "Santa Monica" },
  { src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1100&q=85", title: "Fixture Installation", city: "Beverly Hills" },
  { src: "https://images.unsplash.com/photo-1581092795442-66f3e73c8b44?auto=format&fit=crop&w=1100&q=85", title: "Water Heater Swap", city: "Downtown LA" },
  { src: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1100&q=85", title: "Bathroom Remodel", city: "Long Beach" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=85", title: "Leak Detection", city: "Hollywood" },
];

export function WorkGallery() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-5 display-xl text-brand-ink">Work Gallery</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-brand-gray">
            A snapshot of recent plumbing projects showcasing quality workmanship, attention to detail, and reliable results.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-md bg-brand-grayLight"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.06] sm:h-64 lg:h-72"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=85";
                }}
              />
              {/* Hover overlay */}
              <div
                aria-hidden
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-blueDeep via-brand-blueDeep/40 to-transparent p-5 opacity-0 transition duration-500 group-hover:opacity-100"
              >
                <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
                    {p.city}
                  </div>
                  <div className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                    {p.title}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
