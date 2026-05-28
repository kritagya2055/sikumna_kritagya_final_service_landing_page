"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/site.config";

const { hero, phone } = siteConfig;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Pure CSS background — deep #0B0B14 base with a warm radial
          glow rising from the bottom-center. See `.hero-gradient` in
          app/globals.css. */}
      <div aria-hidden className="hero-gradient absolute inset-0" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 py-24 text-center md:py-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-cardBorder bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-accentSoft"
          />
          {hero.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-[40px] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base text-white/80 md:text-xl"
        >
          {hero.subhead}
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <a href="#book" className="btn-primary text-base md:text-lg">
            {hero.cta} <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-5 text-sm text-muted"
        >
          {hero.trustLine}
        </motion.p>

        <motion.a
          variants={item}
          href={`tel:${phone.tel}`}
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
          {phone.display}
        </motion.a>
      </motion.div>
    </section>
  );
}
