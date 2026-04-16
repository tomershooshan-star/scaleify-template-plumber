const images = [
  "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1581092795442-66f3e73c8b44?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85",
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
          {images.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-xl bg-brand-grayLight ${
                i === 0 || i === 4 ? "sm:row-span-2 sm:col-span-1" : ""
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className={`h-full w-full object-cover transition duration-700 hover:scale-[1.04] ${
                  i === 0 || i === 4 ? "sm:h-[32rem]" : "sm:h-60"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
