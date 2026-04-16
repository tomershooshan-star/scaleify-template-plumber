import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, AtSign, Share2, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { BlueprintGrid } from "@/components/ui/Patterns";
import { Button } from "@/components/ui/Button";

const services = [
  "Emergency Repairs",
  "Drain & Sewer Cleaning",
  "Water Heater Service",
  "Leak Detection",
  "Fixture Installation",
  "Repiping & Rerouting",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blueDeep text-white">
      <BlueprintGrid opacity={0.05} />

      {/* TOP: CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
              Need a plumber right now?
            </div>
            <div className="mt-2 font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              Call us — we pick up 24/7.
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" variant="yellow">
              <a href={`tel:${site.phoneRaw}`}>
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href="#contact">
                Request Service
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* MIDDLE: 4-col link grid */}
      <div className="relative container-x grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold uppercase">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-black" fill="none">
                <path d="M12 3v9m0 0l-3-3m3 3l3-3M5 14v5h14v-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {site.brand}
          </Link>
          <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-white/60">
            Licensed & insured plumbers. 24/7 emergency service. Upfront flat-rate pricing. Lifetime workmanship warranty.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a href={site.socials.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white">
              <AtSign className="h-4 w-4" />
            </a>
            <a href={site.socials.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white">
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <Col title="Services" links={services.map((s) => ({ label: s, href: "#services" }))} />
        <Col title="Company" links={[
          { label: "About", href: "#why" },
          { label: "Process", href: "#process" },
          { label: "Reviews", href: "#reviews" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ]} />
        <div>
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Get in touch</h4>
          <ul className="mt-5 space-y-3 font-sans text-sm">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-yellow" /><a href={`tel:${site.phoneRaw}`} className="text-white/80 hover:text-white">{site.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-yellow" /><a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">{site.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-yellow" /><span className="text-white/60">{site.address}</span></li>
          </ul>
        </div>
      </div>

      {/* GIANT WORDMARK — the PlumbMate signature move */}
      <div className="relative overflow-hidden border-t border-white/10">
        <div className="container-x py-10">
          <div
            className="font-display font-black uppercase leading-none text-center"
            style={{
              fontSize: "clamp(4rem, 18vw, 20rem)",
              letterSpacing: "-0.055em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
            }}
          >
            {site.brand}
          </div>
        </div>
      </div>

      {/* BOTTOM: legal */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 font-sans text-xs text-white/50 sm:flex-row">
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
          <div>© {new Date().getFullYear()} {site.brand}. All rights reserved.</div>
          <div>Website by <a href="https://scaleify.co" className="hover:text-white">Scaleify</a></div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: Array<{ label: string; href?: string; to?: string }> }) {
  return (
    <div>
      <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">{title}</h4>
      <ul className="mt-5 space-y-3 font-sans text-sm">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link to={l.to} className="text-white/75 hover:text-white">{l.label}</Link>
            ) : (
              <a href={l.href!} className="text-white/75 hover:text-white">{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
