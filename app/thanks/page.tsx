import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/site.config";

const { brand, thanks } = siteConfig;

export const metadata: Metadata = {
  title: `You're in — ${brand.name}`,
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <Nav />
      <main className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              {thanks.headline}
            </h1>
            <p className="mt-4 text-base text-muted md:text-lg">
              {thanks.subhead}
            </p>
          </div>

          {/* ── 01 — Video ───────────────────────────────── */}
          <div className="card mt-14 px-6 py-8 md:px-10 md:py-10">
            <p className="eyebrow text-accentSoft">{thanks.video.eyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {thanks.video.heading}
            </h2>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-black/40">
              {/* TODO: replace VIMEO_ID_PLACEHOLDER */}
              <iframe
                src="https://player.vimeo.com/video/VIMEO_ID_PLACEHOLDER"
                title="A two-minute message"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── 02 — Calendly ────────────────────────────── */}
          <div className="card mt-8 px-6 py-8 md:px-10 md:py-10">
            <p className="eyebrow text-accentSoft">{thanks.calendly.eyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {thanks.calendly.heading}
            </h2>
            <div className="mt-6 w-full overflow-hidden rounded-2xl bg-black/40">
              {/* TODO: replace CALENDLY_HANDLE_PLACEHOLDER */}
              <iframe
                src="https://calendly.com/CALENDLY_HANDLE_PLACEHOLDER?background_color=15151E&text_color=ffffff&primary_color=7C5CFC"
                title="Choose your slot"
                className="w-full"
                style={{ minHeight: "700px" }}
              />
            </div>
          </div>

          {/* ── WhatsApp fallback ────────────────────────── */}
          <p className="mt-12 text-center text-sm text-muted">
            <a
              href={thanks.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-cardBorder underline-offset-4 transition-colors hover:text-white"
            >
              {thanks.whatsapp.label}
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
