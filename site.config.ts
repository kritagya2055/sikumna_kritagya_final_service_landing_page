/**
 * site.config.ts
 * ─────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all editable copy & contact details.
 * Edit this file to change any text on the landing or thanks page.
 */

export const siteConfig = {
  // ── Brand ───────────────────────────────────────────────
  brand: {
    name: "Kritagya Bhandari",
    tagline: "Digital Marketing",
    logoSrc: "/logo.png",
    logoAlt: "Kritagya Bhandari — Digital Marketing",
  },

  // ── SEO / metadata ──────────────────────────────────────
  meta: {
    title: "Kritagya Bhandari — Digital Marketing Consultant",
    description:
      "Get a free, no-obligation growth audit of your digital marketing. Practical, data-driven strategy to turn attention into revenue.",
    url: "https://kritagyabhandari.com",
  },

  // ── Where lead notifications are sent ───────────────────
  notificationEmail: "contact.kritagya27@gmail.com",

  // ── Hero (BLACK) ────────────────────────────────────────
  hero: {
    eyebrow: "Free Growth Audit",
    headline: "Marketing that earns its place on your balance sheet.",
    subhead:
      "Most brands don't have a traffic problem — they have a conversion problem. I'll show you exactly where your funnel leaks revenue, and how to fix it.",
    primaryCta: "Claim your free audit",
    secondaryNote: "No pitch. No obligation. A real, written analysis.",
  },

  // ── Problem section (WHITE) ─────────────────────────────
  problem: {
    heading: "You're spending on growth. Where is it going?",
    intro:
      "Ad budgets rise, dashboards fill up, and yet the revenue line stays stubbornly flat. The issue is rarely effort — it's clarity.",
    points: [
      {
        title: "Traffic without conversion",
        body: "Visitors arrive, look around, and leave. Without a measured path to action, attention never becomes income.",
      },
      {
        title: "Channels that don't compound",
        body: "Each platform is run in isolation. Nothing reinforces anything else, so every result resets to zero next month.",
      },
      {
        title: "Decisions made on vanity metrics",
        body: "Likes, reach and impressions feel good and tell you almost nothing about what actually moves money.",
      },
    ],
  },

  // ── Process section (OFF-WHITE) ─────────────────────────
  process: {
    heading: "A simple, deliberate process",
    intro:
      "No jargon, no 90-slide decks. Three focused steps that take you from guesswork to a clear plan.",
    steps: [
      {
        number: "01",
        title: "Audit",
        body: "I review your funnel, channels and numbers end-to-end and pinpoint exactly where revenue is leaking.",
      },
      {
        number: "02",
        title: "Strategy",
        body: "You receive a prioritised, written plan — the highest-leverage fixes first, in plain language.",
      },
      {
        number: "03",
        title: "Execution",
        body: "We implement, measure, and double down on what works. Decisions backed by data, not opinion.",
      },
    ],
  },

  // ── FAQ section (WHITE) ─────────────────────────────────
  faq: {
    heading: "Questions, answered",
    items: [
      {
        q: "Is the audit really free?",
        a: "Yes. You'll get a genuine written analysis of your marketing with no obligation to work with me afterwards. It's how I demonstrate value before asking for anything.",
      },
      {
        q: "What do you need from me to start?",
        a: "Just the basics: your website, the channels you're active on, and read-only access to your analytics where possible. The form below is enough to begin.",
      },
      {
        q: "How quickly will I hear back?",
        a: "I personally review every submission and respond within two business days with next steps.",
      },
      {
        q: "Do you work with small businesses?",
        a: "Absolutely. The process scales from solo founders to established teams — the principles of profitable growth are the same.",
      },
    ],
  },

  // ── Lead form (BLACK) ───────────────────────────────────
  form: {
    heading: "Claim your free growth audit",
    subhead:
      "Tell me a little about your business and I'll get back to you personally.",
    fields: {
      name: { label: "Full name", placeholder: "Jane Doe" },
      email: { label: "Email address", placeholder: "jane@company.com" },
      company: { label: "Company / website", placeholder: "company.com" },
      message: {
        label: "What's your biggest marketing challenge?",
        placeholder: "Tell me where you feel stuck…",
      },
    },
    submitLabel: "Send my request",
    submittingLabel: "Sending…",
    consentNote:
      "By submitting, you agree to be contacted about your audit. Your details are never shared.",
  },

  // ── Footer (BLACK) ──────────────────────────────────────
  footer: {
    blurb: "Practical, data-driven digital marketing.",
    email: "contact.kritagya27@gmail.com",
    socials: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "X", href: "#" },
    ],
    legal: "All rights reserved.",
  },

  // ── Thanks page (BLACK throughout) ──────────────────────
  thanks: {
    eyebrow: "Request received",
    headline: "Thank you — your audit is on its way.",
    body: "I've received your details and will personally review them. Expect a written response within two business days. In the meantime, keep an eye on your inbox (and spam folder, just in case).",
    cta: "Back to home",
  },
} as const;

export type SiteConfig = typeof siteConfig;
