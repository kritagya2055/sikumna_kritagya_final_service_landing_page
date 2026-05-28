import Image from "next/image";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig } from "@/site.config";

const { brand, footer } = siteConfig;

export function SiteFooter() {
  return (
    <footer className="border-t border-cardBorder px-5 py-10 md:py-12">
      <div className="mx-auto max-w-content">
        <div className="flex items-center justify-between gap-6">
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={120}
            height={32}
            className="h-7 w-auto object-contain md:h-8"
          />
          <SocialIcons />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted">{footer.audience}</p>
          <p className="mt-2 text-xs text-muted">{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
