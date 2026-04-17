import { Phone, Clock, MapPin } from "lucide-react";
import { site } from "@/config/site";

export function UtilityBar() {
  return (
    <div className="w-full bg-brand-ink text-white">
      <div className="container-x flex items-center justify-between gap-6 py-2.5">
        <div className="flex items-center gap-8">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-2 font-sans text-[13px] font-bold text-white transition hover:text-brand-yellow"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <span className="hidden items-center gap-2 font-sans text-[13px] text-white/60 sm:flex">
            <Clock className="h-3.5 w-3.5" />
            {site.hours.emergency}
          </span>
        </div>
        <div className="hidden items-center gap-2 font-sans text-[13px] text-white/60 md:flex">
          <MapPin className="h-3.5 w-3.5" />
          {site.serviceCities.slice(0, 3).join(" · ")}
        </div>
      </div>
    </div>
  );
}
