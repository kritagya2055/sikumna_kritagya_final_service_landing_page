import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { availability } = siteConfig;

export function Availability() {
  return (
    <section className="bg-obsidian py-20 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-platinum">{availability.eyebrow}</p>
          <p className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            {availability.statement}
          </p>
          <p className="mt-6 text-lg text-muted">{availability.note}</p>
          <div className="mt-12">
            <a
              href="#book"
              className="inline-block rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-obsidian md:text-base"
            >
              {availability.cta}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
