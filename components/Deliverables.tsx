import { siteConfig } from "@/site.config";

const { deliverables } = siteConfig;

export function Deliverables() {
  return (
    <div className="card h-full px-7 py-10 md:px-10 md:py-12">
      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
        {deliverables.heading}
      </h3>
      <ul className="mt-8 space-y-5">
        {deliverables.items.map((item) => (
          <li key={item} className="flex gap-4">
            <span
              aria-hidden
              className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-accent"
            />
            <span className="text-base text-white md:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
