import { siteConfig } from "@/site.config";

export function Problem() {
  const { problem } = siteConfig;

  return (
    <section className="bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-3xl text-deep md:text-4xl">
            {problem.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{problem.subhead}</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {problem.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
              >
                ✕
              </span>
              <span className="font-medium text-ink">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
