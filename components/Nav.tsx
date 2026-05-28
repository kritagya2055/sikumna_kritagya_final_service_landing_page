import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig } from "@/site.config";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur supports-[backdrop-filter]:bg-bg/50">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link href="/" aria-label={siteConfig.brand.name} className="inline-flex">
          <Image
            src={siteConfig.brand.logoSrc}
            alt={siteConfig.brand.logoAlt}
            width={140}
            height={40}
            priority
            className="h-8 w-auto object-contain md:h-9"
          />
        </Link>
        <SocialIcons />
      </div>
    </header>
  );
}
