import { FadeIn } from "@/components/FadeIn";
import { Deliverables } from "@/components/Deliverables";
import { HowItWorks } from "@/components/HowItWorks";

export function TwoColumn() {
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto grid max-w-content gap-6 md:grid-cols-2 md:gap-8">
        <FadeIn>
          <Deliverables />
        </FadeIn>
        <FadeIn delay={0.1}>
          <HowItWorks />
        </FadeIn>
      </div>
    </section>
  );
}
