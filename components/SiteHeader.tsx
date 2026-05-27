import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export function SiteHeader() {
  return (
    <header className="w-full flex justify-center pt-6 md:pt-8">
      <Link href="/" className="inline-flex items-center group">
        <Image
          src={siteConfig.brand.logoSrc}
          alt={siteConfig.brand.logoAlt}
          width={240}
          height={80}
          priority
          className="h-12 md:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
        />
        <span className="sr-only">{siteConfig.brand.name}</span>
      </Link>
    </header>
  );
}
