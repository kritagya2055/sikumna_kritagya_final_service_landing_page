import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { urgency } = siteConfig;

export function Urgency() {
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <FadeIn className="rounded-card border border-cardBorder bg-cardDeep px-7 py-16 text-center md:px-12 md:py-20">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            {urgency.headline}
          </h2>
          <p className="mt-5 text-base text-muted md:text-lg">{urgency.body}</p>
        </FadeIn>
      </div>
    </section>
  );
}
