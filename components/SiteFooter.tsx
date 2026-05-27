import Image from "next/image";
import { siteConfig } from "@/site.config";

const { brand, footer } = siteConfig;

export function SiteFooter() {
  return (
    <footer className="bg-obsidian px-6 pb-12 pt-16">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <nav className="flex gap-8">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-platinum"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-platinum/20 pt-8">
          <p className="text-sm text-muted">{footer.audience}</p>
          <p className="mt-2 text-sm text-muted">{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
