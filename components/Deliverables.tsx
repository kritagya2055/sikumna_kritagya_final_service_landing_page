import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/site.config";

const { deliverables } = siteConfig;

export function Deliverables() {
  return (
    <section className="bg-offwhite py-20 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {deliverables.heading}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-3xl gap-x-16 gap-y-14 sm:grid-cols-2">
          {deliverables.items.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.08}>
              <p className="text-4xl font-semibold tracking-tight text-muted md:text-5xl">
                {item.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
