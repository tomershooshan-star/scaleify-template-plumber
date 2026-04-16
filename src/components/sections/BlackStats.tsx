import { Phone } from "lucide-react";
import { stats } from "@/config/site";
import { site } from "@/config/site";

export function BlackStats() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="relative overflow-hidden clip-sharp bg-brand-black p-10 text-white sm:p-14 lg:p-16">
          <div className="text-center">
            <h2 className="display-xl text-white">Results You Can Trust</h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-white/60">
              Our proven experience, satisfied customers, and consistent service quality demonstrate reliable plumbing solutions.
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-y-8 sm:grid-cols-3">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-5xl font-black leading-none text-white sm:text-6xl">
                  {s.n.replace(/[+,]/g, "").replace(/[a-z★]/gi, "") || s.n}
                  <span className="ml-1 font-display text-3xl font-black text-brand-yellow sm:text-4xl">
                    {s.n.includes("+") ? "+" : s.n.includes("★") ? "★" : s.n.includes("min") ? "m" : ""}
                  </span>
                </div>
                <div className="mt-3 font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
