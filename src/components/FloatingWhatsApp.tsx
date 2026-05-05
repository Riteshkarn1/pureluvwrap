"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const WA_LINK =
  "https://wa.me/919877310855?text=Hi%20PureLuvWrap!%20%F0%9F%8C%B8%20I'd%20like%20to%20know%20more%20about%20your%20handcrafted%20gifts.";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed z-50 flex flex-col items-end gap-2"
      /* Mobile: bottom 20px right 16px; Desktop: bottom 24px right 24px */
      style={{ bottom: "20px", right: "16px" }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-brand-text text-xs font-dm font-medium px-3 py-1.5 rounded-full shadow-card-hover whitespace-nowrap"
            role="tooltip"
          >
            Order Now 💬
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button — 52px on mobile, 56px on desktop */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Order via WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onFocus={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
        className="relative flex items-center justify-center rounded-full shadow-lg w-[52px] h-[52px] sm:w-14 sm:h-14"
        style={{
          backgroundColor: "#25D366",
          animation: prefersReducedMotion ? "none" : "pulse-btn 3s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        {/* Ripple ring */}
        {!prefersReducedMotion && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid #25D366",
              animation: "pulse-btn 3s ease-in-out infinite",
              opacity: 0.4,
              scale: 1.15,
            }}
            aria-hidden="true"
          />
        )}

        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
          className="sm:hidden"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
          className="hidden sm:block"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}

