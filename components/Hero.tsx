import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/site.config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="bg-surface">
      <SiteHeader />
      <div className="mx-auto max-w-content px-6 pt-12 pb-16 md:pt-20 md:pb-24 text-center">
        <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
          {hero.eyebrow}
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl display text-4xl leading-[1.05] text-deep sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl">
          {hero.subhead}
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <a
            href="#book"
            className="inline-block rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            {hero.cta}
          </a>
          <p className="flex items-center gap-2 text-sm font-semibold text-deep">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-primary"
            />
            {hero.urgency}
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm text-muted">
          {hero.trustLine}
        </p>
      </div>
    </section>
  );
}
