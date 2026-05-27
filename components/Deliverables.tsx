import { siteConfig } from "@/site.config";

export function Deliverables() {
  const { deliverables } = siteConfig;

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-3xl text-deep md:text-4xl">
            {deliverables.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{deliverables.subhead}</p>
        </div>

        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {deliverables.items.map((item) => (
            <li key={item.lead} className="flex items-start gap-4">
              <span
                aria-hidden
                className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent text-sm font-bold text-ink"
              >
                ✓
              </span>
              <p className="text-lg text-ink">
                <span className="font-bold">{item.lead}</span>
                <span className="text-muted"> — {item.body}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl rounded-2xl bg-alt px-6 py-5 text-center font-semibold text-deep">
          {deliverables.close}
        </p>
      </div>
    </section>
  );
}
