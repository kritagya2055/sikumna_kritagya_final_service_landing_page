import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/site.config";

export function BookingSection() {
  const { form } = siteConfig;

  return (
    <section id="book" className="bg-surface py-16 md:py-24 scroll-mt-6">
      <div className="mx-auto max-w-xl px-6">
        <div className="text-center">
          <h2 className="display text-3xl text-deep md:text-4xl">
            {form.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{form.subhead}</p>
        </div>

        <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 shadow-xl md:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
