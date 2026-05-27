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
    title: "Kritagya Bhandari — Digital Marketing",
    description:
      "A free 30-minute call. Walk away with a custom plan to bring real customers to your business. Built for ambitious Nepali business owners.",
    // Override at deploy time with the NEXT_PUBLIC_SITE_URL env var.
    url: "https://kritagyabhandari.com",
  },

  // ── Where lead notifications are sent ───────────────────
  notificationEmail: "contact.kritagya27@gmail.com",

  // ── 1. Hero ─────────────────────────────────────────────
  hero: {
    // The headline renders as: "Marketing built to bring you {serif}".
    headlineLead: "Marketing built to bring you",
    headlineSerif: "customers.",
    subhead:
      "A free 30-minute call. Walk away with a custom plan for your business.",
    cta: "Book your free call",
    note: "Limited to 5 calls per week.",
  },

  // ── 2. The shift ────────────────────────────────────────
  shift: {
    eyebrow: "THE REALITY",
    statement:
      "Most businesses are paying for marketing that doesn't sell. Likes, reach, engagement — none of it pays the bills. Customers do.",
    closing: "This call gives you a plan to fix that.",
  },

  // ── 3. What you walk away with ──────────────────────────
  deliverables: {
    heading: "What you walk away with.",
    items: [
      {
        number: "01",
        title: "A real diagnosis.",
        body: "Why your marketing isn't converting today.",
      },
      {
        number: "02",
        title: "A custom plan.",
        body: "Built for your business, your budget, your stage.",
      },
      {
        number: "03",
        title: "A clear next step.",
        body: "Exact actions to take in the next 7 days.",
      },
      {
        number: "04",
        title: "No sales pitch.",
        body: "You keep the plan. Whether we work together or not.",
      },
    ],
  },

  // ── 4. How it works ─────────────────────────────────────
  howItWorks: {
    heading: "How it works.",
    steps: [
      {
        number: "01",
        title: "Apply.",
        body: "Fill the form. 60 seconds.",
      },
      {
        number: "02",
        title: "Choose.",
        body: "Pick a 30-minute slot that suits you.",
      },
      {
        number: "03",
        title: "Show up.",
        body: "Get on the call. Walk away with the plan.",
      },
    ],
  },

  // ── 5. Availability ─────────────────────────────────────
  availability: {
    eyebrow: "AVAILABILITY",
    statement: "Five calls per week. No exceptions.",
    note: "When the slots are gone, they're gone. Book yours below.",
    cta: "Book your free call",
  },

  // ── 6. Questions ────────────────────────────────────────
  faq: {
    heading: "Questions.",
    items: [
      {
        q: "Is this really free?",
        a: "Yes. No cost, no card, no obligation. You keep the plan either way.",
      },
      {
        q: "Who is it for?",
        a: "Nepali business owners who sell something real and want more customers. Any industry, any stage.",
      },
      {
        q: "What happens on the call?",
        a: "I ask about your business and what you've tried. You leave with a specific plan you can use.",
      },
      {
        q: "How long is it?",
        a: "Thirty minutes. Sometimes forty-five if we go deep. Never longer.",
      },
      {
        q: "Do I need a website?",
        a: "No. We work with what you have, even if that's only Instagram or Facebook.",
      },
      {
        q: "What happens after I fill the form?",
        a: "You go to a confirmation page, pick a time, and get an email confirmation right away.",
      },
      {
        q: "Will you actually build me a plan, or is this a sales pitch?",
        a: "A real plan. Specific channels, specific budget, specific steps. You own it after the call.",
      },
    ],
  },

  // ── 7. Booking form ─────────────────────────────────────
  form: {
    heading: "Book your call.",
    subhead: "Five spots open this week.",
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
        placeholder: "Optional",
      },
    },
    submitLabel: "Book my call →",
    submittingLabel: "Booking",
    consentNote: "Free. No card. No pitch.",
  },

  // ── 8. Footer ───────────────────────────────────────────
  footer: {
    links: [
      { label: "Privacy", href: "#" },
      { label: "Contact", href: "mailto:contact.kritagya27@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/977XXXXXXXXXX" },
    ],
    legal: "© 2026 Kritagya Bhandari. Built for ambitious Nepali business owners.",
  },

  // ── /thanks page ────────────────────────────────────────
  thanks: {
    headline: "You're in.",
    subhead: "Two things before our call.",
    video: {
      eyebrow: "01 — WATCH",
      heading: "A two-minute message.",
    },
    calendly: {
      eyebrow: "02 — BOOK",
      heading: "Choose your slot.",
    },
    whatsapp: {
      label: "Trouble booking? Message on WhatsApp.",
      href: "https://wa.me/977XXXXXXXXXX",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
