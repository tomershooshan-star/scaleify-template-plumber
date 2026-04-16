import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

// Standalone nav for inner pages (Privacy, Terms). Home uses the nav baked into Hero.
export function Navigation() {
  return (
    <header className="bg-brand-blueDeep text-white">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold uppercase tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-black" fill="none">
              <path d="M12 3v9m0 0l-3-3m3 3l3-3M5 14v5h14v-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {site.brand}
        </Link>

        <Button asChild size="sm" variant="yellow">
          <a href={`tel:${site.phoneRaw}`}>
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
        </Button>
      </div>
    </header>
  );
}
