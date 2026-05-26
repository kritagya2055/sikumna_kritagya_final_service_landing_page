import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/site.config";

export default function Home() {
  const { hero, problem, process, faq, form } = siteConfig;

  return (
    <main className="bg-black">
      {/* ── HERO (BLACK) ───────────────────────────────── */}
      <section className="relative bg-black overflow-hidden">
        <SiteHeader />
        <div aria-hidden className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-content px-6 py-24 md:py-32 text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-white max-w-4xl mx-auto">
            {hero.headline}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#audit"
              className="inline-block rounded-md bg-gold px-8 py-4 font-medium text-black transition-opacity duration-200 hover:opacity-90"
            >
              {hero.primaryCta}
            </a>
            <p className="text-sm text-muted">{hero.secondaryNote}</p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM (WHITE) ────────────────────────────── */}
      <section className="bg-white text-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight">
              {problem.heading}
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {problem.intro}
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {problem.points.map((point) => (
              <div key={point.title}>
                <div className="h-px w-12 bg-gold" />
                <h3 className="mt-5 font-display text-2xl font-medium">
                  {point.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS (OFF-WHITE) ────────────────────────── */}
      <section className="bg-offwhite text-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight">
              {process.heading}
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {process.intro}
            </p>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {process.steps.map((step) => (
              <div key={step.number}>
                <p className="font-display text-5xl text-gold">{step.number}</p>
                <h3 className="mt-4 font-display text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (WHITE) ────────────────────────────────── */}
      <section className="bg-white text-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-center">
            {faq.heading}
          </h2>
          <div className="mt-12 divide-y divide-charcoal/10 border-t border-charcoal/10">
            {faq.items.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-display text-xl md:text-2xl font-medium">
                    {item.q}
                  </span>
                  <span className="text-gold text-2xl leading-none transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM (BLACK) ───────────────────────────────── */}
      <section id="audit" className="bg-black text-white py-20 md:py-28 scroll-mt-8">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <div className="mx-auto h-px w-12 bg-gold" />
            <h2 className="mt-6 font-display text-3xl md:text-5xl font-medium leading-tight">
              {form.heading}
            </h2>
            <p className="mt-5 text-muted leading-relaxed">{form.subhead}</p>
          </div>
          <div className="mt-12">
            <LeadForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
