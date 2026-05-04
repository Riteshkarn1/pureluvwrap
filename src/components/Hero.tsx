"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const WA_LINK =
  "https://wa.me/919877310855?text=Hi%21%20I%27d%20like%20to%20order%20a%20bouquet%20%F0%9F%8C%B8";

const MARQUEE_TEXT =
  "Handcrafted with Love  ✦  Fresh Daily Blooms  ✦  Same-Day Delivery  ✦  Custom Orders Welcome  ✦  Jalandhar's Favourite Bouquets  ✦  ";

const HEADLINE = [
  { text: "Every Petal,", italic: false, colorClass: "text-[#2C2C2C]" },
  { text: "Wrapped in",   italic: true,  colorClass: "text-[#2C2C2C]" },
  { text: "Love.",        italic: true,  colorClass: "text-[#C9727A]" },
];

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function HeadlineLine({
  text, italic, colorClass, mobileSize, tabletSize, desktopSize, delay,
}: {
  text: string; italic: boolean; colorClass: string;
  mobileSize: string; tabletSize: string; desktopSize: string;
  delay: number;
}) {
  return (
    <motion.span
      className={`block font-playfair font-bold leading-[1.08] ${italic ? "italic" : ""} ${colorClass} ${mobileSize} ${tabletSize} ${desktopSize}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {text}
    </motion.span>
  );
}

const HEADLINE_SIZES = [
  { mobile: "text-[42px]", tablet: "md:text-[52px]", desktop: "lg:text-[72px]" },
  { mobile: "text-[42px]", tablet: "md:text-[52px]", desktop: "lg:text-[72px]" },
  { mobile: "text-[48px]", tablet: "md:text-[58px]", desktop: "lg:text-[84px]" },
];

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const fadeLeft = (delay: number) => ({
    initial: { opacity: 0, x: reduced ? 0 : -18 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row overflow-hidden"
      aria-label="Hero section"
    >
      {/* ══════════════════════════
          LEFT — Content panel
      ══════════════════════════ */}
      <div
        className="
          relative flex flex-col justify-center
          w-full md:w-[55%] lg:w-1/2
          bg-[#FAF7F4]
          px-6 md:px-12 lg:pl-20 lg:pr-12
          pt-10 pb-0 md:pt-0 md:pb-0
          min-h-0 md:min-h-screen
          scroll-margin-top-[64px]
        "
      >
        {/* 1 — Eyebrow */}
        <motion.div className="flex items-center gap-3 mb-5 md:mb-6" {...fadeLeft(0.2)}>
          <span className="flex-shrink-0 w-8 md:w-10 h-[1.5px] bg-[#C9727A]" />
          <span
            className="font-dm uppercase text-[#C9727A]"
            style={{ fontSize: "10px", letterSpacing: "0.2em" }}
          >
            Handcrafted in Jalandhar, Punjab
          </span>
        </motion.div>

        {/* 2 — Headline */}
        <div className="flex flex-col gap-0 mb-5 md:mb-7">
          {HEADLINE.map((line, i) => (
            <HeadlineLine
              key={line.text}
              text={line.text}
              italic={line.italic}
              colorClass={line.colorClass}
              mobileSize={HEADLINE_SIZES[i].mobile}
              tabletSize={HEADLINE_SIZES[i].tablet}
              desktopSize={HEADLINE_SIZES[i].desktop}
              delay={0.4 + i * 0.15}
            />
          ))}
        </div>

        {/* 3 — Subtext */}
        <motion.p
          className="font-dm text-[#6B6B6B] leading-[1.6] mb-7 md:mb-9 max-w-full md:max-w-[320px] lg:max-w-[380px]"
          style={{ fontSize: "15px" }}
          {...fadeUp(0.9)}
        >
          Handcrafted bouquets for every occasion — delivered across{" "}
          <strong className="text-[#2C2C2C] font-medium">Jalandhar & Punjab</strong>.
        </motion.p>

        {/* 4 — CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12"
          {...fadeUp(1.1)}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            className="btn-shimmer inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9727A] text-white font-dm font-medium text-[15px] hover:bg-[#8B5E52] transition-colors duration-300 hover:shadow-rose hover:scale-[1.03] active:scale-100 w-full sm:w-auto min-h-[52px]"
            style={{ padding: "14px 28px" }}
          >
            <WAIcon />
            Order on WhatsApp
          </a>
          <a
            href="#gallery"
            onClick={scrollToGallery}
            id="hero-gallery-cta"
            className="inline-flex items-center justify-center gap-2 rounded-full font-dm font-medium text-[15px] border-[1.5px] border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 w-full sm:w-auto min-h-[52px]"
            style={{ padding: "14px 28px" }}
          >
            View Our Gallery
            <ArrowIcon />
          </a>
        </motion.div>

        {/* 5 — Social proof */}
        <motion.div className="flex items-center gap-3 mb-6 md:mb-0" {...fadeUp(1.3)}>
          <div className="flex -space-x-2.5" aria-hidden="true">
            {["A", "P", "S"].map((letter, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#FAF7F4] flex items-center justify-center font-dm font-bold text-[11px] text-white"
                style={{ backgroundColor: i === 0 ? "#C9727A" : i === 1 ? "#8B5E52" : "#C8A876" }}
              >
                {letter}
              </div>
            ))}
          </div>
          <p className="font-dm text-[#6B6B6B]" style={{ fontSize: "12px" }}>
            <span className="text-[#2C2C2C] font-semibold">200+</span> happy customers this month
          </p>
        </motion.div>

        {/* 6 — Marquee strip */}
        {/* On desktop: pinned absolute bottom. On mobile: inline after social proof */}
        <div
          className="
            mt-6 md:mt-0
            md:absolute md:bottom-0 md:left-0 md:right-0
            h-10 bg-[#2C2C2C] flex items-center overflow-hidden
          "
          aria-hidden="true"
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={reduced ? {} : { x: [0, "-33.333%"] }}
            transition={reduced ? {} : { duration: 35, ease: "linear", repeat: Infinity }}
          >
            {[0, 1, 2].map((rep) => (
              <span
                key={rep}
                className="font-dm flex-shrink-0"
                style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#C8A876", textTransform: "uppercase" }}
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════
          RIGHT — Image
      ══════════════════════════ */}
      <div
        className="
          relative overflow-hidden
          w-full md:w-[45%] lg:w-1/2
          h-[55vw] min-h-[220px] md:h-auto md:min-h-screen
        "
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: reduced ? 1 : 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/hero-bouquet.png"
            alt="Luxury handcrafted bouquet with pink roses and white blooms"
            fill
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 50vw"
            className="object-cover object-center"
            quality={90}
          />
        </motion.div>

        {/* Soft left-edge bleed — desktop only */}
        <div
          className="absolute inset-y-0 left-0 w-[12%] pointer-events-none z-10 hidden md:block"
          style={{ background: "linear-gradient(to right, #FAF7F4 0%, transparent 100%)" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

