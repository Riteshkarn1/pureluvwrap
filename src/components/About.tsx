"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IG_HANDLE = "@pureluvwrap7";
const IG_LINK = "https://instagram.com/pureluvwrap7";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 bg-brand-bg scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          {/* ─── Left: Text ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-brand-rose text-sm font-dm font-medium tracking-widest uppercase mb-5">
              <span className="w-6 h-px bg-brand-rose" />
              Our Story
            </span>

            <h2
              id="about-heading"
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text tracking-tight leading-[1.15] mb-6"
            >
              Made with{" "}
              <span className="gradient-text italic">Pure Love</span>
            </h2>

            <div className="space-y-4 font-dm text-brand-muted leading-relaxed text-sm md:text-base">
              <p>
                Every bouquet we craft is a little piece of someone&apos;s story — a birthday
                surprise, a heartfelt apology, a wedding memory, or simply a reminder that
                someone is thinking of you.
              </p>
              <p>
                PureLuvWrap was born in Jalandhar from a deep love of handcrafting beautiful 
                things. What started as bouquets grew into something much bigger — keychains, 
                gift boxes, photo bouquets, crochet gifts, and everything in between. Every 
                single piece is still made by hand, with the same care and love as our very 
                first creation.
              </p>
              <p>
                Today, we craft dozens of arrangements every week, but each one still gets
                the same thoughtful attention as our very first. We source the freshest
                blooms from local markets every single morning, and every stem is placed
                with intention.
              </p>
              <p className="text-brand-text font-medium">
                We don&apos;t just sell flowers — we create moments you&apos;ll remember.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
              {[
                { value: "500+", label: "Happy Customers" },
                { value: "3+",   label: "Years of Craft" },
                { value: "100%", label: "Fresh Blooms" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair font-bold gradient-text text-[28px] md:text-3xl">{stat.value}</p>
                  <p className="font-dm text-[11px] md:text-xs text-brand-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="mt-8 md:mt-10">
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="about-instagram-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border-2 border-brand-rose text-brand-rose font-dm font-medium text-sm hover:bg-brand-rose hover:text-white transition-all duration-300 w-full sm:w-auto min-h-[48px]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow us on Instagram
              </a>
              <span className="block mt-2 font-dm text-sm text-brand-muted text-center sm:text-left sm:mt-0 sm:ml-4 sm:inline">{IG_HANDLE}</span>
            </div>
          </motion.div>

          {/* ─── Right: Image ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Mobile: flat full-width image */}
            <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-card-hover h-[280px]"
              // On lg screens, let aspect ratio control height
            >
              <div className="lg:hidden relative w-full h-[280px]">
                <Image
                  src="/about-flatlay.png"
                  alt="A beautiful flatlay of handcrafted PureLuvWrap gifts including a bouquet, keychain, and photo frame"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/20 to-transparent" />
              </div>
            </div>

            {/* Desktop: aspect-ratio image with floating badge */}
            <div className="hidden lg:block relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card-hover">
              <Image
                src="/about-flatlay.png"
                alt="A beautiful flatlay of handcrafted PureLuvWrap gifts including a bouquet, keychain, and photo frame"
                fill
                sizes="50vw"
                className="object-cover"
                quality={85}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/20 to-transparent" />

              {/* Floating badge — desktop only */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-hover px-5 py-4 border border-brand-rose-light/50"
                aria-hidden="true"
              >
                <p className="font-playfair text-brand-rose font-bold text-lg">100%</p>
                <p className="font-dm text-brand-muted text-xs">Fresh, Always</p>
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border-2 border-brand-rose/20 -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand-rose/5 -z-10" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

