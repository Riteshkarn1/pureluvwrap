"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ─── Gallery data ───────────────────────────────── */
const bouquets = [
  {
    id: "anniversary",
    category: "Anniversary",
    image: "/bouquet-anniversary.png",
    alt: "Romantic red rose anniversary bouquet with baby's breath",
    description: "Deep crimson roses, timeless & passionate",
    waMsg: "Hi! I'm interested in the Anniversary bouquet 🌹 Please share more details!",
  },
  {
    id: "birthday",
    category: "Birthday",
    image: "/bouquet-birthday.png",
    alt: "Vibrant colorful birthday bouquet with sunflowers and pink roses",
    description: "Bright, joyful blooms to celebrate",
    waMsg: "Hi! I'm interested in the Birthday bouquet 🌻 Please share more details!",
  },
  {
    id: "bridal",
    category: "Bridal",
    image: "/bouquet-bridal.png",
    alt: "Luxurious white bridal bouquet with roses and cascading ribbons",
    description: "Pure white elegance for your big day",
    waMsg: "Hi! I'm interested in the Bridal bouquet 💐 Please share more details!",
  },
  {
    id: "minimalist",
    category: "Minimalist",
    image: "/bouquet-minimalist.png",
    alt: "Minimalist white ranunculus bouquet tied with natural twine",
    description: "Clean, simple beauty — less is more",
    waMsg: "Hi! I'm interested in the Minimalist bouquet 🌼 Please share more details!",
  },
  {
    id: "justbecause",
    category: "Just Because",
    image: "/bouquet-justbecause.png",
    alt: "Cheerful pastel mixed bouquet with peonies and lavender",
    description: "Because every day deserves flowers",
    waMsg: "Hi! I'm interested in the Just Because bouquet 🌸 Please share more details!",
  },
  {
    id: "corporate",
    category: "Corporate",
    image: "/bouquet-corporate.png",
    alt: "Sophisticated white and cream corporate flower arrangement",
    description: "Refined elegance for professional gifting",
    waMsg: "Hi! I'm interested in the Corporate bouquet arrangement 🌿 Please share more details!",
  },
  {
    id: "seasonal",
    category: "Seasonal Special",
    image: "/bouquet-seasonal.png",
    alt: "Seasonal blush dahlias and garden roses bouquet",
    description: "Seasonal blooms, always fresh",
    waMsg: "Hi! I'm interested in the Seasonal Special bouquet 🌷 Please share more details!",
  },
  {
    id: "luxury",
    category: "Luxury Box",
    image: "/bouquet-luxury.png",
    alt: "Ultra-luxury premium bouquet with orchids in velvet box",
    description: "The ultimate premium gifting experience",
    waMsg: "Hi! I'm interested in the Luxury Box arrangement 💎 Please share more details!",
  },
  {
    id: "wildflower",
    category: "Wildflower",
    image: "/bouquet-wildflower.png",
    alt: "Whimsical wildflower bouquet with cosmos and chamomile",
    description: "Carefree, garden-fresh charm",
    waMsg: "Hi! I'm interested in the Wildflower bouquet 🌿 Please share more details!",
  },
];

/* ─── Filter tabs ────────────────────────────────── */
const FILTERS = ["All", "Anniversary", "Birthday", "Bridal", "Minimalist", "Just Because"];

/* ─── Masonry height pattern for 9 cards: alternating tall/short ─ */
// tall = 480px, short = 320px
const HEIGHT_PATTERN = [480, 320, 480, 320, 480, 320, 480, 320, 480];

/* ─── Cards that get subtle float animation ──────── */
const FLOAT_INDICES = [1, 4, 7];

/* ─── Single Card ────────────────────────────────── */
function BouquetCard({
  bouquet,
  index,
  height,
}: {
  bouquet: (typeof bouquets)[0];
  index: number;
  height: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isFloating = FLOAT_INDICES.includes(index);
  const waUrl = `https://wa.me/919877310855?text=${encodeURIComponent(
    `Hi PureLuvWrap! 🌸 I'm interested in ordering the ${bouquet.category} Bouquet. Please share more details.`
  )}`;


  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-hover cursor-pointer gallery-card"
      style={{ height }}
      aria-label={`${bouquet.category} bouquet`}
    >
      {/* ─── Image — floats on selected cards ──── */}
      <motion.div
        className="absolute inset-0"
        animate={isFloating ? { y: [0, -10, 0] } : {}}
        transition={
          isFloating
            ? { duration: 6 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }
            : {}
        }
      >
        <Image
          src={bouquet.image}
          alt={bouquet.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          quality={80}
        />
      </motion.div>

      {/* ─── Category pill (always visible) ─────── */}
      <div className="absolute top-4 left-4 z-10">
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-rose text-xs font-dm font-semibold tracking-wide"
          initial={{ y: 0, opacity: 1 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {bouquet.category}
        </motion.span>
      </div>

      {/* ─── Hover overlay ───────────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-[rgba(44,44,44,0.88)] via-[rgba(44,44,44,0.35)] to-transparent group-hover:backdrop-blur-[2px]">
        <p className="text-white/80 font-dm text-sm text-center mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
          {bouquet.description}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`gallery-order-${bouquet.id}`}
          aria-label={`Order ${bouquet.category} bouquet via WhatsApp`}
          className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-rose text-white font-dm font-medium text-sm hover:bg-brand-burgundy transition-colors duration-300 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
        >
          Order This ✦
        </a>
      </div>

      {/* Card footer shown at rest */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="font-playfair text-base font-semibold text-brand-text">{bouquet.category} Bouquet</h3>
        <p className="font-dm text-xs text-brand-muted mt-0.5">{bouquet.description}</p>
      </div>

    </motion.article>
  );
}

/* ─── Gallery Section ────────────────────────────── */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const filtered = activeFilter === "All"
    ? bouquets
    : bouquets.filter((b) => b.category === activeFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-brand-bg" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-brand-rose text-sm font-dm font-medium tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-brand-rose" />
            Our Collection
            <span className="w-6 h-px bg-brand-rose" />
          </span>
          <h2 id="gallery-heading" className="font-playfair text-4xl sm:text-5xl font-bold text-brand-text mt-2 mb-4 tracking-tight">
            Our Arrangements
          </h2>
          <p className="font-dm text-brand-muted text-lg max-w-xl mx-auto leading-relaxed">
            Every bouquet is handcrafted with intention — from the first stem to the final ribbon.
          </p>
        </motion.div>

        {/* ─── Filter tabs ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto md:flex-wrap md:justify-center gap-2 sm:gap-3 mb-10 pb-1 md:pb-0 hide-scrollbar"
          role="tablist"
          aria-label="Filter bouquets by category"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              role="tab"
              aria-selected={activeFilter === f}
              style={{ whiteSpace: "nowrap", minWidth: "fit-content" }}
              className={`relative px-4 py-2 font-dm text-sm font-medium rounded-full transition-all duration-300 flex-shrink-0 min-h-[44px] ${
                activeFilter === f
                  ? "text-brand-rose bg-brand-rose/10"
                  : "text-brand-muted hover:text-brand-rose hover:bg-brand-rose/5"
              }`}
            >
              {f}
              {activeFilter === f && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute bottom-1.5 left-4 right-4 h-px bg-brand-rose"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ─── Masonry grid ─────────────────────── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filtered.map((bouquet, index) => (
              <BouquetCard
                key={bouquet.id}
                bouquet={bouquet}
                index={index}
                height={HEIGHT_PATTERN[bouquets.indexOf(bouquet)] ?? 400}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="font-dm text-brand-muted mb-5">
            Don&apos;t see what you&apos;re looking for? We create fully custom arrangements!
          </p>
          <a
            href="#order"
            onClick={(e) => { e.preventDefault(); document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-rose text-brand-rose font-dm font-medium hover:bg-brand-rose hover:text-white transition-all duration-300"
          >
            Design Your Custom Bouquet ✨
          </a>
        </motion.div>
      </div>
    </section>
  );
}
