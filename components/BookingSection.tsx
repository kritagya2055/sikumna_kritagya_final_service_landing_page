import { FadeIn } from "@/components/FadeIn";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/site.config";

const { form } = siteConfig;

export function BookingSection() {
  return (
    <section id="book" className="scroll-mt-6 bg-obsidian py-20 md:py-32">
      <div className="mx-auto max-w-xl px-6">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {form.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{form.subhead}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 rounded-2xl bg-[#111111] p-8 md:p-10">
          <LeadForm />
        </FadeIn>
      </div>
    </section>
  );
}
