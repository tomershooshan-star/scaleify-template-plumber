import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PromoPanel } from "@/components/sections/PromoPanel";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { TestimonialHero } from "@/components/sections/TestimonialHero";
import { BlackStats } from "@/components/sections/BlackStats";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <main>
        <Hero />
        <Services />
        <PromoPanel />
        <WhyChoose />
        <Process />
        <TestimonialHero />
        <BlackStats />
        <WorkGallery />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
