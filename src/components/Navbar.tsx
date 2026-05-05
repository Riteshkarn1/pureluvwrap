"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK = "https://wa.me/919877310855?text=Hi%20PureLuvWrap!%20%F0%9F%8C%B8%20I'd%20like%20to%20know%20more%20about%20your%20handcrafted%20gifts.";

/* ─── Floral SVG Icon ───────────────────────────────── */
function FloralIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="#C9727A" />
      <ellipse cx="12" cy="6" rx="2" ry="3.5" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="12" cy="18" rx="2" ry="3.5" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="6" cy="12" rx="3.5" ry="2" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="18" cy="12" rx="3.5" ry="2" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="7.8" cy="7.8" rx="2" ry="3.2" fill="#C9727A" opacity="0.6" transform="rotate(-45 7.8 7.8)" />
      <ellipse cx="16.2" cy="7.8" rx="2" ry="3.2" fill="#C9727A" opacity="0.6" transform="rotate(45 16.2 7.8)" />
      <ellipse cx="7.8" cy="16.2" rx="2" ry="3.2" fill="#C9727A" opacity="0.6" transform="rotate(45 7.8 16.2)" />
      <ellipse cx="16.2" cy="16.2" rx="2" ry="3.2" fill="#C9727A" opacity="0.6" transform="rotate(-45 16.2 16.2)" />
    </svg>
  );
}

/* ─── WhatsApp SVG ──────────────────────────────────── */
function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ─── Nav links ─────────────────────────────────────── */
const navLinks = [
  { href: "#home",    label: "Home" },
  { href: "#collections", label: "Collections" },
  { href: "#about",   label: "About" },
  { href: "#order",   label: "Custom Order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const linkClass =
    "font-dm text-sm font-medium text-brand-muted hover:text-brand-rose transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-rose after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      {/* ─── Main Navbar ──────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-brand-rose-light/40 shadow-sm py-2 md:py-3" : "py-3 md:py-5"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 md:h-auto"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 md:gap-2 group"
            aria-label="PureLuvWrap — Home"
          >
            {/* Mobile: smaller icon */}
            <span className="md:hidden"><FloralIcon size={20} /></span>
            <span className="hidden md:block"><FloralIcon size={24} /></span>
            <span className="font-playfair font-bold tracking-wide group-hover:text-brand-rose transition-colors duration-300 text-[18px] md:text-xl text-brand-text">
              PureLuvWrap
            </span>
          </Link>

          {/* Desktop Links (≥1024px) */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA (≥1024px) — full button */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-order-cta"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-rose text-white text-sm font-medium font-dm hover:bg-brand-burgundy transition-all duration-300 hover:shadow-rose hover:scale-105"
          >
            <WAIcon size={16} />
            Order Now
          </a>

          {/* Tablet links (768px–1023px): show links, icon-only WA button */}
          <div className="hidden md:flex lg:hidden items-center gap-6">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Icon-only green WA button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 hover:scale-110 flex-shrink-0"
              style={{ backgroundColor: "#25D366" }}
            >
              <WAIcon size={18} />
            </a>
          </div>

          {/* Mobile hamburger (≤767px) */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] min-w-[44px] min-h-[44px]"
          >
            <span className={`block h-0.5 w-6 bg-[#2C2C2C] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-[#2C2C2C] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-5"}`} />
            <span className={`block h-0.5 w-6 bg-[#2C2C2C] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* ─── Mobile Drawer ──────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
              style={{ width: "min(80vw, 320px)", backgroundColor: "#FAF7F4" }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Close button — top right, 44×44px tap target */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full hover:bg-brand-rose/10 transition-colors duration-200 text-[#2C2C2C] text-xl font-light"
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col gap-2 px-8 mt-4 flex-1" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3 font-playfair text-2xl text-[#2C2C2C] hover:text-brand-rose transition-colors duration-300 min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* WA CTA button at bottom */}
              <div className="px-8 pb-10 pt-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  id="drawer-whatsapp-cta"
                  className="flex items-center justify-center gap-2 w-full rounded-full text-white font-dm font-medium transition-colors duration-300 hover:bg-brand-burgundy min-h-[52px]"
                  style={{
                    backgroundColor: "#C9727A",
                    fontSize: "15px",
                    padding: "14px",
                  }}
                >
                  <WAIcon size={18} />
                  Order on WhatsApp 💬
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


