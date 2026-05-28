import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { TwoColumn } from "@/components/TwoColumn";
import { Urgency } from "@/components/Urgency";
import { Faq } from "@/components/Faq";
import { BookingSection } from "@/components/BookingSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <TwoColumn />
        <Urgency />
        <Faq />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
