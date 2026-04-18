import { useEffect } from "react";

export function ScrollManager() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    window.history.replaceState(null, "", window.location.pathname);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo(0, 0);
    });
  }, []);
  return null;
}
