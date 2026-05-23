"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ─── Testimonials data ─────────────────────────── */
const testimonials = [
  {
    id: 1,
    quote:
      "Ordered an anniversary bouquet for my wife and she was absolutely stunned. The craftsmanship was outstanding and the packaging was stunning — felt like a luxury gift from the finest boutique. Will order again for every occasion!",
    name: "Arjun Malhotra",
    location: "Jalandhar",
    occasion: "Anniversary",
  },
  {
    id: 2,
    quote:
      "PureLuvWrap made my best friend's birthday extra special. The mixed pastel bouquet was even more beautiful in person than in the photos. The wrapping is so pretty I almost didn't want to open it.",
    name: "Simran Kaur",
    location: "Model Town, Jalandhar",
    occasion: "Birthday",
  },
  {
    id: 3,
    quote:
      "I chose PureLuvWrap for my bridal gift and I have zero regrets. They listened to every little detail I described over WhatsApp and crafted something beyond my dreams. My photos are absolutely magical because of that bouquet.",
    name: "Manpreet Dhillon",
    location: "Phagwara, Punjab",
    occasion: "Wedding",
  },
];

/* ─── Animated star rating ──────────────────────── */
function Stars({ inView }: { inView: boolean }) {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#C8A876"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.4 + i * 0.1, type: "spring", stiffness: 300 }}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

/* ─── Single testimonial card ───────────────────── */
function TestimonialCard({
  t,
  inView,
}: {
  t: (typeof testimonials)[0];
  inView: boolean;
}) {
  return (
    <div className="relative flex-shrink-0 w-full sm:w-[480px] bg-white rounded-3xl p-6 sm:p-8 shadow-card overflow-hidden mx-0 sm:mx-3">
      {/* Decorative large quote mark */}
      <span
        className="absolute top-4 left-5 font-playfair italic leading-none select-none pointer-events-none text-[48px] sm:text-[96px] text-[#C9727A]/10"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="mb-5">
        <Stars inView={inView} />
      </div>

      {/* Quote */}
      <p className="font-dm text-brand-text/80 text-sm leading-relaxed relative z-10 mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <footer className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-rose to-brand-burgundy flex items-center justify-center text-white font-playfair font-bold text-sm flex-shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <cite className="font-playfair font-semibold text-brand-text not-italic text-sm">
            {t.name}
          </cite>
          <p className="font-dm text-xs text-brand-muted">
            {t.location} · {t.occasion}
          </p>
        </div>
      </footer>

      {/* Floral watermark */}
      <svg
        width="64" height="64" viewBox="0 0 64 64" fill="none"
        className="absolute bottom-4 right-4 opacity-[0.07]"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="8" fill="#C9727A" />
        <ellipse cx="32" cy="14" rx="6" ry="10" fill="#C9727A" />
        <ellipse cx="32" cy="50" rx="6" ry="10" fill="#C9727A" />
        <ellipse cx="14" cy="32" rx="10" ry="6" fill="#C9727A" />
        <ellipse cx="50" cy="32" rx="10" ry="6" fill="#C9727A" />
      </svg>
    </div>
  );
}

/* ─── Testimonials Section ───────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  /* Auto-advance every 4s unless paused or reduced-motion */
  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion]);

  const goTo = (i: number) => setCurrent(i);

  return (
    <section
      className="py-24 sm:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,#F5EDE6_0%,#EDD8CF_55%,#E8C9C4_100%)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-rose text-sm font-dm font-medium tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-brand-rose" />
            Customer Love
            <span className="w-6 h-px bg-brand-rose" />
          </span>
          <h2
            id="testimonials-heading"
            className="font-playfair text-4xl sm:text-5xl font-bold text-brand-text tracking-tight"
          >
            What They&apos;re Saying 🌷
          </h2>
        </motion.div>

        {/* ─── Carousel track ───────────────────── */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Overflow wrapper */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 flex justify-center px-0 sm:px-8">
                  <TestimonialCard t={t} inView={inView} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current ? "true" : "false"}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-brand-rose"
                    : "w-2 h-2 bg-brand-rose/30 hover:bg-brand-rose/60"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next — inside viewport, smaller on mobile */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="absolute left-1 sm:-left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-card flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-white transition-colors duration-300 z-10"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="absolute right-1 sm:-right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-card flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-white transition-colors duration-300 z-10"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

