import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Deliverables } from "@/components/Deliverables";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyNow } from "@/components/WhyNow";
import { Faq } from "@/components/Faq";
import { BookingSection } from "@/components/BookingSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Deliverables />
      <HowItWorks />
      <WhyNow />
      <Faq />
      <BookingSection />
      <SiteFooter />
    </main>
  );
}
