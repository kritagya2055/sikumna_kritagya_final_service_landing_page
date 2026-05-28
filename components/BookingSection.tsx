import { FadeIn } from "@/components/FadeIn";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/site.config";

const { form } = siteConfig;

export function BookingSection() {
  return (
    <section id="book" className="scroll-mt-8 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <FadeIn className="card px-7 py-10 md:px-12 md:py-14">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              {form.heading}
            </h2>
            <p className="mt-3 text-base text-muted md:text-lg">
              {form.subhead}
            </p>
          </div>
          <div className="mt-10">
            <LeadForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
