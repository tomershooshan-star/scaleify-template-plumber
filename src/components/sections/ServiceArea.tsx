import { MapPin } from "lucide-react";
import { site } from "@/config/site";

export function ServiceArea() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Service Area</span>
          <h2 className="mt-5 display-lg text-brand-ink">Where We Work</h2>
          <p className="mt-4 font-sans text-base text-brand-gray">
            Based in {site.address.split(",").slice(-2).join(",").trim()}, serving the greater metro area.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {site.serviceCities.map((c) => (
            <div
              key={c}
              className="inline-flex items-center gap-2 rounded-lg border border-brand-ink/10 bg-white px-4 py-2.5 font-sans text-sm font-semibold text-brand-ink"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-blue" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
