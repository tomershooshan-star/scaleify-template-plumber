import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-brand-blueDeep/95 backdrop-blur-md shadow-lg"
          : "top-[38px] bg-transparent"
      }`}
    >
      <div className="container-x flex h-14 items-center justify-between sm:h-16">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-extrabold uppercase tracking-tight text-white sm:text-xl"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-yellow sm:h-9 sm:w-9">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-brand-black sm:h-5 sm:w-5"
              fill="none"
            >
              <path
                d="M12 3v9m0 0l-3-3m3 3l3-3M5 14v5h14v-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="yellow">
            <a href={`tel:${site.phoneRaw}`}>
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </Button>
        </div>

        <button
          className="p-2 text-white md:hidden"
          onClick={() => setOpen((x) => !x)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="bg-brand-blueDeep/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col gap-4 py-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-base font-bold uppercase text-white"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="yellow" size="md">
              <a href={`tel:${site.phoneRaw}`}>
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
