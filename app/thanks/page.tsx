import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/site.config";

const { brand, thanks } = siteConfig;

export const metadata: Metadata = {
  title: `You're in — ${brand.name}`,
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="bg-obsidian">
      <div className="mx-auto max-w-2xl px-6 pb-24 pt-16 md:pt-20">
        <div className="flex justify-center">
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={150}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {thanks.headline}
          </h1>
          <p className="mt-5 text-lg text-muted">{thanks.subhead}</p>
        </div>

        {/* ── 01 — Video ──────────────────────────────────── */}
        <div className="mt-24">
          <p className="eyebrow text-platinum">{thanks.video.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {thanks.video.heading}
          </h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-[#111111]">
            {/* TODO: replace VIMEO_ID_PLACEHOLDER */}
            <iframe
              src="https://player.vimeo.com/video/VIMEO_ID_PLACEHOLDER"
              title="A two-minute message from Kritagya"
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* ── 02 — Calendly ───────────────────────────────── */}
        <div className="mt-24">
          <p className="eyebrow text-platinum">{thanks.calendly.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {thanks.calendly.heading}
          </h2>
          <div className="mt-8 w-full overflow-hidden rounded-xl bg-[#111111]">
            {/* TODO: replace CALENDLY_HANDLE_PLACEHOLDER */}
            <iframe
              src="https://calendly.com/CALENDLY_HANDLE_PLACEHOLDER?background_color=0a0a0a&text_color=ffffff&primary_color=c8c7c2"
              title="Choose your slot"
              className="w-full"
              style={{ minHeight: "700px" }}
            />
          </div>
        </div>

        {/* ── WhatsApp fallback ───────────────────────────── */}
        <p className="mt-20 text-center text-sm text-muted">
          <a
            href={thanks.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-platinum/40 underline-offset-4 transition-colors hover:text-platinum"
          >
            {thanks.whatsapp.label}
          </a>
        </p>
      </div>

      <SiteFooter />
    </main>
  );
}
