import { siteConfig } from "@/site.config";

export function Faq() {
  const { faq } = siteConfig;

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center display text-3xl text-deep md:text-4xl">
          {faq.heading}
        </h2>

        <div className="mt-10 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 open:border-primary/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-semibold text-deep">{item.q}</span>
                <span
                  aria-hidden
                  className="text-2xl leading-none text-primary transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
