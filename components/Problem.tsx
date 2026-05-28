import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { problem } = siteConfig;

export function Problem() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-content">
        <FadeIn className="card mx-auto px-7 py-12 text-center md:px-12 md:py-16">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {problem.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-muted md:text-lg">
            {problem.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
