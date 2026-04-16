import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { BlueprintGrid } from "@/components/ui/Patterns";

const WEBHOOK = import.meta.env.VITE_CONTACT_WEBHOOK as string | undefined;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setStatus("sending");
    try {
      if (WEBHOOK) {
        const r = await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: site.brand, ts: new Date().toISOString() }),
        });
        if (!r.ok) throw new Error("Webhook failed");
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad-sm">
      <div className="container-x">
        {/* Top call-to-action panel — blue */}
        <div className="relative overflow-hidden rounded-lg bg-brand-blueDeep px-8 py-14 text-white sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <BlueprintGrid opacity={0.09} />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #FFD400 0%, transparent 60%)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-sans text-[10px] font-black uppercase tracking-[0.18em] text-brand-yellow">
                Get Started
              </span>
              <h2 className="mt-5 display-xl text-white">
                Your Plumbing Problem<span className="text-brand-yellow">,</span> Solved Today.
              </h2>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" variant="yellow">
                <a href={`tel:${site.phoneRaw}`}>
                  <Phone className="h-5 w-5" />
                  Call {site.phone}
                </a>
              </Button>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white/80 transition hover:gap-2.5 hover:text-white"
              >
                Or Fill Out The Form Below
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div id="contact-form" className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h3 className="mt-5 display-lg text-brand-ink">Request a Free Estimate</h3>
            <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-brand-gray">
              Tell us what's going on and we'll call back within 15 minutes during business hours.
            </p>

            <div className="relative mt-8 aspect-[5/3] w-full overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=85"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"; }}
              />
              <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(200deg, rgba(10,31,92,0) 40%, rgba(10,31,92,0.9) 100%)" }} />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display text-xl font-bold uppercase text-white">Real Humans. Fast Response.</div>
                  <div className="mt-1 font-sans text-[11px] text-white/80">Avg reply: under 15 minutes</div>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-black">
                  <Phone className="h-4 w-4" />
                </div>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <Row icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phoneRaw}`} />
              <Row icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <Row icon={MapPin} label="Address" value={site.address} />
              <Row icon={Clock} label="Hours" value={`${site.hours.weekdays} · ${site.hours.emergency}`} />
            </dl>
          </div>

          <form onSubmit={onSubmit} className="rounded-md border border-brand-ink/10 bg-white p-8 shadow-card lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" required placeholder="Jane Smith" />
              <Field label="Phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
            </div>
            <div className="mt-5"><Field label="Email" name="email" type="email" placeholder="jane@email.com" /></div>
            <div className="mt-5"><Field label="Zip Code" name="zip" placeholder="90001" /></div>
            <div className="mt-5"><Field label="Tell Us About The Issue" name="message" as="textarea" placeholder="Burst pipe under the kitchen sink…" required /></div>
            <Button type="submit" size="lg" variant="yellow" className="mt-6 w-full" disabled={status === "sending"}>
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "sending" ? "Sending…" : status === "success" ? "Sent!" : "Request A Call"}
            </Button>
            {status === "error" && (
              <p className="mt-3 font-sans text-sm text-destructive">
                Something went wrong. Please call us at {site.phone}.
              </p>
            )}
            {status === "success" && (
              <p className="mt-3 font-sans text-sm text-brand-gray">Thanks — we'll reach out shortly.</p>
            )}
            <p className="mt-4 font-sans text-[11px] leading-relaxed text-brand-gray">
              By submitting, you agree to receive a call or text back from {site.brand}. Message & data rates may apply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; }) {
  const Inner = (
    <>
      <Icon className="h-4 w-4 text-brand-blue" />
      <div>
        <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gray">{label}</dt>
        <dd className="mt-1 font-sans text-[14px] font-semibold text-brand-ink">{value}</dd>
      </div>
    </>
  );
  return (
    <div className="flex items-start gap-3">
      {href ? <a href={href} className="flex items-start gap-3">{Inner}</a> : Inner}
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required, as = "input" }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; as?: "input" | "textarea"; }) {
  const cls = "w-full rounded-lg border border-brand-ink/15 bg-white px-4 py-3.5 font-sans text-sm text-brand-ink placeholder:text-brand-ink/35 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition";
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-ink/70">
        {label}
        {required && <span className="text-brand-blue"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
