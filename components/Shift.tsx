import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { shift } = siteConfig;

export function Shift() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <FadeIn className="mx-auto max-w-3xl">
          <p className="eyebrow text-muted">{shift.eyebrow}</p>
          <p className="mt-8 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-[40px] md:leading-[1.15]">
            {shift.statement}
          </p>
          <p className="mt-8 text-lg text-muted">{shift.closing}</p>
        </FadeIn>
      </div>
    </section>
  );
}
