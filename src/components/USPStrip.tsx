"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const usps = [
  {
    number: "01",
    title: "Handcrafted with Love",
    body: "Every bouquet, keychain, and gift box is made by hand — no machines, no shortcuts. Just pure artisan care.",
    from: -60,
  },
  {
    number: "02",
    title: "Fully Customisable",
    body: "Tell us your vision — names, colours, photos, themes. We bring your exact idea to life.",
    from: 60,
  },
  {
    number: "03",
    title: "Fresh & Unique Designs",
    body: "From pipe cleaner bouquets to clay figurines — our designs are one-of-a-kind and always on-trend.",
    from: -60,
  },
  {
    number: "04",
    title: "Fast Delivery in Jalandhar",
    body: "Order by noon and receive your handcrafted gift the same day — anywhere across Jalandhar.",
    from: 60,
  },
];

export default function USPStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="py-16 sm:py-20 md:py-28 bg-brand-cream border-y border-brand-rose-light/50"
      aria-label="Why choose PureLuvWrap"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-rose text-sm font-dm font-medium tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-brand-rose" />
            Our Promise
            <span className="w-6 h-px bg-brand-rose" />
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-text tracking-tight">
            Why PureLuvWrap?
          </h2>
        </motion.div>

        {/* Editorial rows */}
        <div className="divide-y divide-brand-rose-light/50">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.number}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  /* Mobile: slide from bottom. Desktop: alternate left/right */
                  : { opacity: 0, y: 30 }
              }
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-7 md:py-10 px-0 hover:bg-white/40 transition-colors duration-300 rounded-xl"
            >
              {/* ── Mobile: stacked layout ── */}
              <div className="flex flex-col md:hidden gap-1">
                <span
                  className="font-playfair font-bold italic leading-none select-none"
                  style={{ fontSize: "36px", color: "rgba(201,114,122,0.2)" }}
                  aria-hidden="true"
                >
                  {usp.number}
                </span>
                <h3 className="font-playfair font-bold text-brand-text leading-tight mt-1" style={{ fontSize: "20px" }}>
                  {usp.title}
                </h3>
                <p className="font-dm text-brand-muted leading-relaxed mt-1" style={{ fontSize: "14px" }}>
                  {usp.body}
                </p>
              </div>

              {/* ── Desktop: editorial 3-col grid ── */}
              <div className="hidden md:grid grid-cols-[100px_1fr_2fr] gap-x-10 items-center">
                <span
                  className="font-playfair text-5xl lg:text-6xl font-bold italic leading-none select-none transition-colors duration-500"
                  style={{ color: "rgba(201,114,122,0.18)" }}
                  aria-hidden="true"
                >
                  {usp.number}
                </span>
                <h3 className="font-playfair text-xl lg:text-2xl font-bold text-brand-text leading-tight">
                  {usp.title}
                </h3>
                <p className="font-dm text-sm lg:text-base text-brand-muted leading-relaxed">
                  {usp.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
