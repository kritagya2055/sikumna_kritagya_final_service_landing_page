import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: `You're in — ${siteConfig.brand.name}`,
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const { thanks } = siteConfig;

  return (
    <main className="bg-surface">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="text-center">
          <h1 className="display text-4xl text-deep md:text-5xl">
            {thanks.headline}
          </h1>
          <p className="mt-4 text-lg text-muted">{thanks.subhead}</p>
        </div>

        {/* ── Section 1 — Video ─────────────────────────── */}
        <div className="mt-12">
          <p className="text-center font-semibold text-deep">
            {thanks.videoCaption}
          </p>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-ink/10 bg-alt">
            {/* TODO: replace VIMEO_ID_PLACEHOLDER with real Vimeo ID */}
            <iframe
              src="https://player.vimeo.com/video/VIMEO_ID_PLACEHOLDER"
              title="A 2-minute message from Kritagya"
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* ── Section 2 — Calendly ──────────────────────── */}
        <div className="mt-12">
          <p className="text-center font-semibold text-deep">
            {thanks.calendlyCaption}
          </p>
          <div className="mt-4 w-full overflow-hidden rounded-2xl border border-ink/10 bg-alt">
            {/* TODO: replace CALENDLY_HANDLE_PLACEHOLDER with real Calendly URL */}
            <iframe
              src="https://calendly.com/CALENDLY_HANDLE_PLACEHOLDER"
              title="Pick your 30-minute slot"
              className="w-full"
              style={{ minHeight: "700px" }}
            />
          </div>
        </div>

        {/* ── Bottom — WhatsApp ─────────────────────────── */}
        <div className="mt-12 text-center">
          <a
            href={thanks.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-accent px-8 py-4 text-lg font-bold text-ink transition-opacity duration-200 hover:opacity-90"
          >
            {thanks.whatsappCta}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
