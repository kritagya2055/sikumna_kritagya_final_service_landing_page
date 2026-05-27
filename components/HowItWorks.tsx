import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { howItWorks } = siteConfig;

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {howItWorks.heading}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-4xl md:grid-cols-3 md:gap-12">
          {howItWorks.steps.map((step, i) => (
            <FadeIn
              key={step.number}
              delay={i * 0.1}
              className={
                i > 0
                  ? "border-t border-platinum/50 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                  : ""
              }
            >
              <p className="text-3xl font-semibold tracking-tight text-muted md:text-4xl">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
