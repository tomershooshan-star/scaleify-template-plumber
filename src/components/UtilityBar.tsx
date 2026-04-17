import { Phone, Clock, MapPin } from "lucide-react";
import { site } from "@/config/site";

export function UtilityBar() {
  return (
    <div className="w-full bg-brand-black text-white">
      <div className="container-x flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-1.5 font-sans text-xs font-bold text-white transition hover:text-brand-yellow"
          >
            <Phone className="h-3 w-3" />
            {site.phone}
          </a>
          <span className="hidden items-center gap-1.5 font-sans text-xs text-white/60 sm:flex">
            <Clock className="h-3 w-3" />
            {site.hours.emergency}
          </span>
        </div>
        <div className="hidden items-center gap-1.5 font-sans text-xs text-white/60 md:flex">
          <MapPin className="h-3 w-3" />
          {site.serviceCities.slice(0, 3).join(" · ")}
        </div>
      </div>
    </div>
  );
}
