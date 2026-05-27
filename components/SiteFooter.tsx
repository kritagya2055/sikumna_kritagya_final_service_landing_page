import { siteConfig } from "@/site.config";

export function SiteFooter() {
  const { footer, brand } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-content px-6 py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="display text-xl">{brand.name}</p>
            <p className="mt-2 text-sm text-white/60">{footer.blurb}</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`mailto:${footer.email}`}
              className="text-sm text-white/80 hover:text-accent transition-colors duration-200"
            >
              {footer.email}
            </a>
            <div className="flex gap-6">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50">
          © {year} {brand.name}. {footer.legal}
        </div>
      </div>
    </footer>
  );
}
