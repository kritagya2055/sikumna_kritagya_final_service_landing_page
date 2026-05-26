import { siteConfig } from "@/site.config";

export function SiteFooter() {
  const { footer, brand } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-content px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-2xl text-white">{brand.name}</p>
            <p className="mt-2 text-sm text-muted">{footer.blurb}</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`mailto:${footer.email}`}
              className="text-sm text-offwhite hover:text-gold transition-colors duration-200"
            >
              {footer.email}
            </a>
            <div className="flex gap-6">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-muted hover:text-gold transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-xs text-muted">
          © {year} {brand.name}. {footer.legal}
        </div>
      </div>
    </footer>
  );
}
