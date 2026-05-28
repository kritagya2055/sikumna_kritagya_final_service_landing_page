import { siteConfig } from "@/site.config";

const { howItWorks } = siteConfig;

export function HowItWorks() {
  return (
    <div className="card h-full px-7 py-10 md:px-10 md:py-12">
      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
        {howItWorks.heading}
      </h3>
      <ol className="mt-8 space-y-4">
        {howItWorks.steps.map((step) => (
          <li
            key={step.label}
            className="rounded-2xl border border-cardBorder bg-bg/60 px-6 py-5"
          >
            <p className="eyebrow text-accentSoft">{step.label}</p>
            <p className="mt-2 text-base text-white md:text-lg">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
