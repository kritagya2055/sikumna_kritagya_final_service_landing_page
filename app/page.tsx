import { Hero } from "@/components/Hero";
import { Shift } from "@/components/Shift";
import { Deliverables } from "@/components/Deliverables";
import { HowItWorks } from "@/components/HowItWorks";
import { Availability } from "@/components/Availability";
import { Faq } from "@/components/Faq";
import { BookingSection } from "@/components/BookingSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Shift />
      <Deliverables />
      <HowItWorks />
      <Availability />
      <Faq />
      <BookingSection />
      <SiteFooter />
    </main>
  );
}
