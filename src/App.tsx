import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import { CookieConsent } from "@/components/CookieConsent";
import { Chatbot } from "@/components/Chatbot";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <Chatbot />
    </>
  );
}
