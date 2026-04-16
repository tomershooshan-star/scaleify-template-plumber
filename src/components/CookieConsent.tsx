import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "aqualine-cookie-consent-v1";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setShow(true), 1400);
        return () => clearTimeout(t);
      }
    } catch { setShow(true); }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() })); } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-xl border border-brand-ink/10 bg-white p-4 shadow-soft sm:p-5 md:bottom-6 md:left-6 md:right-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blueDeep text-brand-yellow">
          <Cookie className="h-5 w-5" />
        </div>
        <div className="flex-1 font-sans text-sm text-brand-ink/75">
          We use cookies to improve your experience and measure site performance. See our{" "}
          <Link to="/privacy" className="font-bold text-brand-ink underline underline-offset-2">Privacy Policy</Link>.
        </div>
        <div className="flex shrink-0 gap-2">
          <Button size="sm" variant="ghost" onClick={() => decide("rejected")}>Reject</Button>
          <Button size="sm" variant="yellow" onClick={() => decide("accepted")}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
