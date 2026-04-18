import { UtilityBar } from "@/components/UtilityBar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TextSlider } from "@/components/sections/TextSlider";
import { PromoPanel } from "@/components/sections/PromoPanel";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { TestimonialHero } from "@/components/sections/TestimonialHero";
import { BlackStats } from "@/components/sections/BlackStats";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <UtilityBar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <TextSlider />
        <PromoPanel />
        <WhyChoose />
        <Process />
        <TestimonialHero />
        <BlackStats />
        <WorkGallery />
        <CtaBand />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
