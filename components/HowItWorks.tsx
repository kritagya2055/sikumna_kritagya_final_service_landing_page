import { siteConfig } from "@/site.config";

export function HowItWorks() {
  const { howItWorks } = siteConfig;

  return (
    <section className="bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-center display text-3xl text-deep md:text-4xl">
          {howItWorks.heading}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-7 shadow-sm"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white"
              >
                {step.number}
              </span>
              <h3 className="mt-5 display text-2xl text-deep">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
