import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { faq } = siteConfig;

export function Faq() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[800px]">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            {faq.heading}
          </h2>
        </FadeIn>

        <div className="mt-10">
          {faq.items.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.04}>
              <details className="group border-t border-cardBorder py-6 last:border-b">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6">
                  <span className="text-lg font-medium text-white md:text-xl">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="select-none text-xl font-light text-muted"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-muted">{item.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
