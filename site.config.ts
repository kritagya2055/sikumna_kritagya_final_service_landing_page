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
    title: "Book a Free Marketing Strategy Call — Kritagya Bhandari",
    description:
      "Built for ambitious Nepali business owners ready to grow. Book a free 30-minute call and walk away with a custom plan to bring real paying customers — not vanity likes.",
    // Override at deploy time with the NEXT_PUBLIC_SITE_URL env var.
    url: "https://kritagyabhandari.com",
  },

  audienceLine: "Built for ambitious Nepali business owners ready to grow.",

  // ── Where lead notifications are sent ───────────────────
  notificationEmail: "contact.kritagya27@gmail.com",

  // ── Hero ────────────────────────────────────────────────
  hero: {
    eyebrow: "FREE 1:1 CONSULTATION CALL",
    headline: "Get a marketing plan that actually brings customers.",
    subhead:
      "In 30 minutes, walk away with a custom plan to bring real paying customers to your business — not vanity likes.",
    cta: "Book my FREE call →",
    urgency: "Only 5 free spots open this week",
    trustLine:
      "100% free  ·  No credit card  ·  Built for ambitious Nepali business owners",
  },

  // ── Problem section ─────────────────────────────────────
  problem: {
    heading: "Tired of boosting posts that go nowhere?",
    subhead: "If any of this sounds familiar, you're not alone.",
    points: [
      "Boosting posts with zero leads",
      "Followers go up, sales don't move",
      "Throwing money at ads with no real plan",
      "Watching competitors win on Instagram while you stall",
    ],
  },

  // ── What you'll get in the call ─────────────────────────
  deliverables: {
    heading: "What you walk away with",
    subhead: "Not a sales pitch. A real plan you own.",
    items: [
      {
        lead: "A clear diagnosis",
        body: "why your current marketing isn't converting",
      },
      {
        lead: "A custom 90-day plan",
        body: "built around YOUR business, not a template",
      },
      {
        lead: "The right platforms & content style",
        body: "exactly where to focus",
      },
      {
        lead: "Specific budget guidance",
        body: "Rs. amount + where to spend it",
      },
      {
        lead: "7-day action steps",
        body: "things you can start the same day",
      },
    ],
    close: "Zero sales pitch. You keep the plan whether you work with me or not.",
  },

  // ── How the call works ──────────────────────────────────
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        number: "1",
        title: "Fill the form",
        body: "90 seconds. Tell me about your business.",
      },
      {
        number: "2",
        title: "Pick your slot",
        body: "Choose a 30-min time that works for you.",
      },
      {
        number: "3",
        title: "Get on the call",
        body: "Walk away with your custom plan in hand.",
      },
    ],
  },

  // ── Why book now (urgency block) ────────────────────────
  whyNow: {
    heading: "Why now matters.",
    body: "I only take 5 free strategy calls per week. Once they're gone, they're gone. Book yours before someone in your industry does.",
    cta: "Claim your free spot →",
  },

  // ── FAQ ─────────────────────────────────────────────────
  faq: {
    heading: "Questions, answered",
    items: [
      {
        q: "Is this REALLY free?",
        a: "Yes. Zero cost. No card. No bait-and-switch. Some calls turn into paid work, most don't. Either way, you walk away with a plan.",
      },
      {
        q: "Who is this for?",
        a: "Nepali business owners running a real business who want more customers. Café, clothing brand, clinic, online store — doesn't matter. If you sell something, this call helps.",
      },
      {
        q: "What happens on the call?",
        a: "30 minutes. I ask about your business, goals, what you've tried. You leave with a specific plan you can use immediately.",
      },
      {
        q: "How long is the call?",
        a: "30 minutes. Sometimes 45 if we go deep. Never longer.",
      },
      {
        q: "Do I need a website?",
        a: "No. You can run entirely on Instagram or Facebook. We'll work with what you have.",
      },
      {
        q: "What happens after I fill the form?",
        a: "You'll go to a confirmation page, pick a time slot, and get an email confirmation immediately.",
      },
      {
        q: "Will you actually build a plan, or just sell to me?",
        a: "A real plan. Specific channels, specific budget, specific steps. You own it after the call.",
      },
    ],
  },

  // ── Lead form ───────────────────────────────────────────
  form: {
    heading: "Book your free spot.",
    subhead: "5 spots open this week. Takes 60 seconds.",
    fields: {
      name: { label: "Full Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@email.com" },
      whatsapp: { label: "WhatsApp Number", placeholder: "98XXXXXXXX" },
      business: { label: "Business Name", placeholder: "Your business" },
      link: {
        label: "Website or Facebook Page Link",
        placeholder: "facebook.com/yourbusiness",
      },
      message: {
        label: "Message for Us",
        placeholder: "Anything you'd like me to know (optional)",
      },
    },
    submitLabel: "Book my free call →",
    submittingLabel: "Booking…",
    consentNote: "100% free. No credit card. Just a real conversation.",
  },

  // ── Footer ──────────────────────────────────────────────
  footer: {
    blurb: "Built for ambitious Nepali business owners ready to grow.",
    email: "contact.kritagya27@gmail.com",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    legal: "All rights reserved.",
  },

  // ── Thanks page ─────────────────────────────────────────
  thanks: {
    headline: "You're in. Now book your slot.",
    subhead: "Two quick things before our call:",
    videoCaption: "Watch this 2-min message from Kritagya ↓",
    calendlyCaption: "Pick your 30-min slot ↓",
    whatsappCta: "Need help? WhatsApp me →",
    whatsappHref: "https://wa.me/977XXXXXXXXXX",
  },
} as const;

export type SiteConfig = typeof siteConfig;
