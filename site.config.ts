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
    title:
      "Your customers are out there. Here's the plan to bring them in. | Kritagya Bhandari",
    description:
      "A free 1:1 marketing consultation for Nepali business owners. Walk away with a custom plan to bring you real customers.",
    // Override at deploy time with the NEXT_PUBLIC_SITE_URL env var.
    url: "https://kritagyabhandari.com",
  },

  // ── Where lead notifications are sent ───────────────────
  notificationEmail: "contact.kritagya27@gmail.com",

  // ── 1. Hero ─────────────────────────────────────────────
  hero: {
    eyebrow: "FREE 1:1 CONSULTATION CALL",
    // Headline renders on two lines. "out there" is the single
    // Instrument Serif italic accent on the whole page.
    headlineLine1Pre: "Your customers are",
    headlineSerif: "out there",
    headlineLine1Post: ".",
    headlineLine2: "Here's the plan to bring them in.",
    subhead:
      "Tired of paying for marketing that doesn't bring customers? We'll fix that on a call.",
    cta: "Book my free call",
    note: "Spots are limited. Don't wait.",
    trustLine: "Built for real businesses. Real owners. Real growth.",
  },

  // ── 2. The problem ──────────────────────────────────────
  shift: {
    eyebrow: "BE HONEST",
    statement:
      "Here's what no one will tell you: most businesses pay for marketing that doesn't sell. Likes. Reach. Engagement. None of it pays your rent. Customers do. And without a real plan, customers don't come.",
    closing: "That ends here.",
  },

  // ── 3. What you walk away with ──────────────────────────
  deliverables: {
    heading: "After the call, you'll have:",
    items: [
      {
        number: "01",
        title: "A real diagnosis.",
        body: "A real diagnosis of what's broken in your marketing today.",
      },
      {
        number: "02",
        title: "A custom plan.",
        body: "A plan built for one business: yours. No templates.",
      },
      {
        number: "03",
        title: "A clear next step.",
        body: "Exact next steps. No guesswork.",
      },
      {
        number: "04",
        title: "No sales pitch.",
        body: "The plan is yours. If you want help building it, that's a separate conversation.",
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
        body: "Fill the form. Takes 60 seconds.",
      },
      {
        number: "02",
        title: "Choose.",
        body: "Pick a time that works for you.",
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
    eyebrow: "SPACE IS LIMITED",
    statement: "5 free slots. Then I'm full.",
    note: "Grab a slot before your competition does.",
    cta: "Reserve my spot",
  },

  // ── 6. Questions ────────────────────────────────────────
  faq: {
    heading: "Questions.",
    items: [
      {
        q: "Is this really free?",
        a: "Yes. No cost. No card. No hidden upsell. Some calls become paid engagements. Most don't. Either way, you leave with a plan.",
      },
      {
        q: "Who is it for?",
        a: "Owners of real Nepali businesses who want more customers. Café, clinic, brand, online store — if you sell something, this call helps.",
      },
      {
        q: "What happens on the call?",
        a: "A focused conversation. I ask about your business, your goals, what you've tried. You leave with a plan you can use the next day.",
      },
      {
        q: "How long is it?",
        a: "Under an hour. Long enough to give you a real plan. Short enough to respect your time.",
      },
      {
        q: "Do I need a website?",
        a: "No. Many of the best Nepali businesses run entirely on Instagram or Facebook. We work with what you have.",
      },
      {
        q: "What happens after I fill the form?",
        a: "You'll land on a confirmation page, choose a time slot, and receive an instant confirmation email.",
      },
      {
        q: "Will you actually build me a plan, or is this a sales pitch?",
        a: "A real plan. Specific channels. Specific budget. Specific next steps. You own it — whether we work together or not.",
      },
    ],
  },

  // ── 7. Booking form ─────────────────────────────────────
  form: {
    heading: "Ready? Let's go.",
    subhead: "Six questions. The rest is on me.",
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
    submitLabel: "Book my call",
    submittingLabel: "Booking",
    consentNote: "Free. No card. No pitch.",
  },

  // ── 8. Footer ───────────────────────────────────────────
  footer: {
    audience: "For Nepali businesses building something serious.",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Contact", href: "mailto:contact.kritagya27@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/977XXXXXXXXXX" },
    ],
    legal: "© 2026 Kritagya Bhandari.",
  },

  // ── /thanks page ────────────────────────────────────────
  thanks: {
    headline: "You're in.",
    subhead: "Application received. Two quick steps to lock it in.",
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
