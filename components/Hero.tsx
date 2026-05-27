"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/site.config";

const { brand, hero } = siteConfig;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-obsidian px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-vignette" />

      <motion.div
        className="relative z-10 flex w-full max-w-content flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={180}
            height={60}
            priority
            className="h-11 w-auto object-contain md:h-12"
          />
        </motion.div>

        <motion.p variants={item} className="eyebrow mt-12 text-platinum">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-5xl text-[44px] font-semibold leading-[1.02] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          {hero.headlineLine1Pre}{" "}
          <span className="font-serif font-normal italic tracking-tight">
            {hero.headlineSerif}
          </span>
          {hero.headlineLine1Post}
          <br />
          {hero.headlineLine2}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-md text-base text-muted md:text-lg"
        >
          {hero.subhead}
        </motion.p>

        <motion.div variants={item} className="mt-12">
          <a
            href="#book"
            className="inline-block rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-obsidian md:text-base"
          >
            {hero.cta}
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-6 text-sm text-muted">
          {hero.note}
        </motion.p>

        <motion.p variants={item} className="mt-3 text-xs text-muted">
          {hero.trustLine}
        </motion.p>
      </motion.div>
    </section>
  );
}
