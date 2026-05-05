"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, Variants } from "framer-motion";

const WA_LINK =
  "https://wa.me/919876606759?text=Hi%21%20I%27d%20like%20to%20place%20an%20order%20%F0%9F%8E%81";

const MARQUEE_TEXT =
  "Handcrafted with Love  ✦  Fresh Daily Blooms  ✦  DELIVERED IN 2–3 DAYS  ✦  Custom Orders Welcome  ✦  Jalandhar's Favourite Gifts  ✦  ";

const slides = [
  {
    id: "bouquets",
    eyebrow: "HANDCRAFTED BOUQUETS",
    heading1: "Every Petal,",
    heading2: "Wrapped in",
    heading3: "Love.",
    subtext: "Artificial & natural bouquets for every occasion",
    image: "/hero-bouquets.png",
  },
  {
    id: "keychains",
    eyebrow: "MINIATURE KEYCHAINS",
    heading1: "Tiny Blooms,",
    heading2: "Big",
    heading3: "Feelings.",
    subtext: "Handcrafted crochet, pipe cleaner & clay flower keychains",
    image: "/hero-keychains.png",
  },
  {
    id: "giftboxes",
    eyebrow: "BIRTHDAY GIFT BOXES",
    heading1: "Open It &",
    heading2: "Feel the",
    heading3: "Magic.",
    subtext: "Custom birthday hampers with fairy lights, photos & surprises",
    image: "/hero-giftboxes.png",
  },
  {
    id: "photobouquets",
    eyebrow: "PHOTO BOUQUETS",
    heading1: "Your Memories,",
    heading2: "Beautifully",
    heading3: "Wrapped.",
    subtext: "Dried flowers + polaroid photos — a gift they'll keep forever",
    image: "/hero-photobouquets.png",
  },
  {
    id: "figurines",
    eyebrow: "FIGURINE BOUQUETS",
    heading1: "Cute, Quirky",
    heading2: "& Completely",
    heading3: "Unique.",
    subtext: "Clay character bouquets & candy bouquets — unlike anything else",
    image: "/hero-figurines.png",
  },
  {
    id: "photoframes",
    eyebrow: "CUSTOM PHOTO FRAMES",
    heading1: "A Moment",
    heading2: "Framed",
    heading3: "Forever.",
    subtext: "Personalised birthday calendar frames with your photos & messages",
    image: "/hero-photoframes.png",
  },
  {
    id: "crochet",
    eyebrow: "CROCHET GIFTS",
    heading1: "Stitched with",
    heading2: "Every Bit",
    heading3: "of Love.",
    subtext: "Handmade crochet cake keychains & greeting card sets",
    image: "/hero-crochet.png",
  },
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

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToCollections = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[currentIndex];

  const fadeVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden"
      aria-label="Hero section"
    >
      {/* ══════════════════════════
          TOP / RIGHT — Image (Mobile stacks image on top)
      ══════════════════════════ */}
      <div
        className="
          relative overflow-hidden
          w-full md:w-[45%] lg:w-1/2
          h-[55vw] min-h-[300px] md:h-auto md:min-h-screen
          order-1 md:order-2
        "
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.heading1 + slide.heading2}
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 50vw"
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft left-edge bleed — desktop only */}
        <div
          className="absolute inset-y-0 left-0 w-[12%] pointer-events-none z-10 hidden md:block"
          style={{ background: "linear-gradient(to right, #FAF7F4 0%, transparent 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════
          BOTTOM / LEFT — Content panel
      ══════════════════════════ */}
      <div
        className="
          relative flex flex-col
          w-full md:w-[55%] lg:w-1/2
          bg-[#FAF7F4]
          order-2 md:order-1
          min-h-0 md:min-h-screen
        "
      >
        {/* Main Content Area (centered vertically) */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:pl-20 lg:pr-12 pt-10 pb-8 md:pt-0 md:pb-0 scroll-margin-top-[64px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariant}
            >
              {/* 1 — Eyebrow */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span className="flex-shrink-0 w-8 md:w-10 h-[1.5px] bg-[#C9727A]" />
                <span
                  className="font-dm uppercase text-[#C9727A]"
                  style={{ fontSize: "10px", letterSpacing: "0.2em" }}
                >
                  {slide.eyebrow}
                </span>
              </div>

              {/* 2 — Headline */}
              <div className="flex flex-col gap-0 mb-5 md:mb-7">
                <span className="block font-playfair font-bold leading-[1.08] text-[#2C2C2C] text-[42px] md:text-[52px] lg:text-[72px]">
                  {slide.heading1}
                </span>
                <span className="block font-playfair font-bold leading-[1.08] italic text-[#2C2C2C] text-[42px] md:text-[52px] lg:text-[72px]">
                  {slide.heading2}
                </span>
                <span className="block font-playfair font-bold leading-[1.08] italic text-[#C9727A] text-[48px] md:text-[58px] lg:text-[84px]">
                  {slide.heading3}
                </span>
              </div>

              {/* 3 — Subtext */}
              <p
                className="font-dm text-[#6B6B6B] leading-[1.6] mb-7 md:mb-9 max-w-full md:max-w-[320px] lg:max-w-[380px]"
                style={{ fontSize: "15px" }}
              >
                {slide.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* 4 — Static CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9727A] text-white font-dm font-medium text-[15px] hover:bg-[#8B5E52] transition-colors duration-300 hover:shadow-rose hover:scale-[1.03] active:scale-100 w-full sm:w-auto min-h-[52px]"
              style={{ padding: "14px 28px" }}
            >
              <WAIcon />
              Order on WhatsApp
            </a>
            <a
              href="#collections"
              onClick={scrollToCollections}
              className="inline-flex items-center justify-center gap-2 rounded-full font-dm font-medium text-[15px] border-[1.5px] border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 w-full sm:w-auto min-h-[52px]"
              style={{ padding: "14px 28px" }}
            >
              View Collections
              <ArrowIcon />
            </a>
          </div>

          {/* 5 — Static Social proof */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
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
          </div>
        </div>

        {/* 6 — Slide Navigation Controls (Positioned at bottom above marquee) */}
        <div className="flex items-center justify-between px-6 md:px-12 lg:pl-20 lg:pr-12 pb-6 md:pb-16 mt-auto">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-[#C9727A]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-[#2C2C2C]/20 flex items-center justify-center text-[#2C2C2C] hover:bg-[#2C2C2C]/5 transition-colors"
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-[#2C2C2C]/20 flex items-center justify-center text-[#2C2C2C] hover:bg-[#2C2C2C]/5 transition-colors"
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 7 — Marquee strip */}
        <div
          className="
            w-full h-10 bg-[#2C2C2C] flex items-center overflow-hidden
            md:absolute md:bottom-0 md:left-0 md:right-0
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
    </section>
  );
}
