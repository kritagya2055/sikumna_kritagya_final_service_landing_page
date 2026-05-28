/**
 * site.config.ts
 * ─────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all editable copy & contact details.
 */

export const siteConfig = {
  brand: {
    name: "Kritagya Bhandari",
    tagline: "Digital Marketing",
    logoSrc: "/logo.png",
    logoAlt: "Kritagya Bhandari — Digital Marketing",
  },

  meta: {
    title:
      "Your customers are out there. Here's the plan to bring them in. | Kritagya Bhandari",
    description:
      "A free 1:1 marketing consultation for Nepali business owners. Walk away with a custom plan to bring you real customers.",
    url: "https://kritagyabhandari.com",
  },

  notificationEmail: "contact.kritagya27@gmail.com",

  // ── Phone (rendered in hero + nav) ──────────────────────
  phone: {
    display: "+977 9761673867",
    tel: "+9779761673867",
  },

  // ── Socials (nav + footer) ──────────────────────────────
  social: {
    instagram: "https://instagram.com/PLACEHOLDER",
    facebook: "https://facebook.com/PLACEHOLDER",
    whatsapp: "https://wa.me/9779761673867",
    phone: "tel:+9779761673867",
  },

  // ── Hero ────────────────────────────────────────────────
  hero: {
    badge: "FREE 1:1 CONSULTATION CALL",
    headline: "Your customers are out there. Here's the plan to bring them in.",
    subhead:
      "Tired of paying for marketing that doesn't bring customers? We'll fix that on a call.",
    cta: "Book my free call",
    trustLine: "Built for real businesses. Real owners. Real growth.",
  },

  // ── Problem section ─────────────────────────────────────
  problem: {
    headline: "Most businesses pay for marketing that doesn't sell.",
    body: "Likes. Reach. Engagement. None of it pays your rent. Customers do. And without a real plan, customers don't come. That ends here.",
  },

  // ── Deliverables (left card) ────────────────────────────
  deliverables: {
    heading: "After the call, you'll have:",
    items: [
      "A real diagnosis of what's broken in your marketing today.",
      "A plan built for one business: yours. No templates.",
      "Exact next steps. No guesswork.",
      "A specific budget plan — where to spend, where to stop.",
      "The plan is yours. If you want help building it, that's a separate conversation.",
    ],
  },

  // ── How it works (right card) ───────────────────────────
  howItWorks: {
    heading: "How it works.",
    steps: [
      { label: "STEP 1", body: "Fill the form. Takes 60 seconds." },
      { label: "STEP 2", body: "Pick a time that works for you." },
      { label: "STEP 3", body: "Get on the call. Walk away with the plan." },
    ],
  },

  // ── Urgency ─────────────────────────────────────────────
  urgency: {
    headline: "5 free slots. Then I'm full.",
    body: "Grab a slot before your competition does.",
  },

  // ── FAQ ─────────────────────────────────────────────────
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

  // ── Form ────────────────────────────────────────────────
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
      message: { label: "Message for Us", placeholder: "Optional" },
    },
    submitLabel: "Book my call",
    submittingLabel: "Booking",
    consentNote: "Free. No card. No pitch.",
  },

  // ── Footer ──────────────────────────────────────────────
  footer: {
    audience: "For Nepali businesses building something serious.",
    legal: "© 2026 Kritagya Bhandari.",
  },

  // ── /thanks ─────────────────────────────────────────────
  thanks: {
    headline: "You're in.",
    subhead: "Application received. Two quick steps to lock it in.",
    video: { eyebrow: "01 — WATCH", heading: "A two-minute message." },
    calendly: { eyebrow: "02 — BOOK", heading: "Choose your slot." },
    whatsapp: {
      label: "Trouble booking? Message on WhatsApp.",
      href: "https://wa.me/9779761673867",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
