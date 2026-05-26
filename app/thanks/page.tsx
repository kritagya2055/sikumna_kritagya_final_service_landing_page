import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: `Thank you — ${siteConfig.brand.name}`,
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const { thanks } = siteConfig;

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative flex-1 flex items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-content px-6 py-24 md:py-32 text-center w-full">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold">
            {thanks.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-3xl mx-auto">
            {thanks.headline}
          </h1>
          <p className="mt-8 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {thanks.body}
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-block rounded-md border border-gold px-8 py-4 font-medium text-gold transition-opacity duration-200 hover:opacity-80"
            >
              {thanks.cta}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
