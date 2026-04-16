import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

type Msg = { from: "bot" | "user"; text: string };
const INITIAL: Msg[] = [{ from: "bot", text: `Hi — I'm the ${site.brand} assistant. How can I help: booking, pricing, or an emergency?` }];
const QUICK = ["Book a service", "Get pricing", "Emergency", "Talk to a human"];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(INITIAL);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  function send(input: string) {
    const t = input.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "user", text: t }]);
    setText("");
    setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: reply(t) }]), 420);
  }

  return (
    <>
      <button
        onClick={() => setOpen((x) => !x)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-soft transition hover:scale-105 hover:bg-brand-blueLight"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-md border border-brand-ink/10 bg-white shadow-soft">
          <div className="flex items-center justify-between bg-brand-blueDeep px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-yellow text-brand-black">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <div className="font-sans text-sm font-bold uppercase tracking-tight">{site.brand}</div>
                <div className="text-[10px] text-white/60">Replies in minutes</div>
              </div>
            </div>
            <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-1 rounded-md bg-brand-yellow/15 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <Phone className="h-3 w-3" />
              Call
            </a>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-brand-grayLight/60 px-4 py-4 font-sans text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                <div className={m.from === "bot" ? "max-w-[85%] rounded-md rounded-bl-sm bg-white px-3 py-2 text-brand-ink shadow-sm" : "max-w-[85%] rounded-md rounded-br-sm bg-brand-blue px-3 py-2 text-white"}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-2 border-t border-brand-ink/10 bg-white px-3 py-2">
              {QUICK.map((q) => (
                <button key={q} onClick={() => send(q)} className="rounded-md border border-brand-ink/15 bg-brand-grayLight px-3 py-1 font-sans text-xs font-semibold text-brand-ink hover:border-brand-blue hover:bg-brand-blueTint">
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="flex items-center gap-2 border-t border-brand-ink/10 bg-white p-3" onSubmit={(e) => { e.preventDefault(); send(text); }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-md border border-brand-ink/15 bg-white px-4 py-2 font-sans text-sm text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
            <Button type="submit" size="sm" variant="yellow" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

function reply(text: string) {
  const t = text.toLowerCase();
  if (/\b(emergency|urgent|now|asap|right now)\b/.test(t)) return `For emergencies, call ${site.phone} — 24/7, and we'll dispatch a licensed plumber fast.`;
  if (/\b(price|cost|how much|quote|estimate)\b/.test(t)) return "Most residential repairs are $175–$750 at flat-rate pricing in writing. We can give a precise quote on-site — free. Want to book a free estimate?";
  if (/\b(book|schedule|appointment)\b/.test(t)) return `Fastest path: submit the contact form or call ${site.phone}. We confirm within 15 minutes during business hours.`;
  if (/\b(human|real|person|agent|someone)\b/.test(t)) return `Of course — call ${site.phone} and you'll reach a real person. Or drop your number in the form and we'll ring back within 15 minutes.`;
  return `Great question. Fastest answer is a 2-minute call — ${site.phone}. Or tell me a bit more?`;
}
