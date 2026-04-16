import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/config/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-brand-grayLight">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 display-xl text-brand-ink">Frequently Asked Questions</h2>
            <p className="mt-5 max-w-sm font-sans text-[15px] leading-relaxed text-brand-gray">
              Still have a question? Call us directly — a real person answers, 24/7.
            </p>
          </div>

          <Accordion.Root type="single" collapsible defaultValue="item-0" className="border-t border-brand-ink/10">
            {faqs.map((f, i) => (
              <Accordion.Item
                key={f.q}
                value={`item-${i}`}
                className="border-b border-brand-ink/10"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "flex w-full items-center justify-between gap-6 py-6 text-left font-display text-base font-bold uppercase tracking-tight text-brand-ink",
                      "transition hover:text-brand-blue",
                      "[&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg]:text-brand-blue"
                    )}
                  >
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand-ink/50 transition" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 pr-8 font-sans text-[15px] leading-relaxed text-brand-gray">
                    {f.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
