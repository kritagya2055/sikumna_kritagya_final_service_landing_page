import { siteConfig } from "@/site.config";

export function WhyNow() {
  const { whyNow } = siteConfig;

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="display text-3xl text-white md:text-5xl">
          {whyNow.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          {whyNow.body}
        </p>
        <a
          href="#book"
          className="mt-8 inline-block rounded-xl bg-accent px-8 py-4 text-lg font-bold text-ink transition-opacity duration-200 hover:opacity-90"
        >
          {whyNow.cta}
        </a>
      </div>
    </section>
  );
}
