"use client";

const WA_LINK = "https://wa.me/919876606759?text=Hi%20PureLuvWrap!%20%F0%9F%8C%B8%20I'd%20like%20to%20place%20a%20custom%20order.%20Please%20help%20me%20out!";
const IG_LINK = "https://instagram.com/pureluvwrap7";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#order", label: "Custom Order" },
  { href: "#about", label: "About Us" },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

/* ─── Floral SVG ─────────────────────────────────────── */
function FloralIconSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="inline-block">
      <circle cx="12" cy="12" r="2.5" fill="#C9727A" />
      <ellipse cx="12" cy="6" rx="2" ry="3.5" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="12" cy="18" rx="2" ry="3.5" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="6" cy="12" rx="3.5" ry="2" fill="#E8A4A8" opacity="0.8" />
      <ellipse cx="18" cy="12" rx="3.5" ry="2" fill="#E8A4A8" opacity="0.8" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-text text-white" role="contentinfo">
      {/* ─── Dark Moody CTA Banner ───────────────────── */}
      <div
        className="relative overflow-hidden py-16 sm:py-20 px-6 ambient-bg"
      >
        {/* SVG floral pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="floral-bg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="6" fill="#C9727A" />
                <ellipse cx="40" cy="22" rx="5" ry="10" fill="#C9727A" />
                <ellipse cx="40" cy="58" rx="5" ry="10" fill="#C9727A" />
                <ellipse cx="22" cy="40" rx="10" ry="5" fill="#C9727A" />
                <ellipse cx="58" cy="40" rx="10" ry="5" fill="#C9727A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#floral-bg)" />
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-playfair font-bold italic text-[#FAF7F4] mb-4 leading-[1.2] tracking-tight text-[28px] sm:text-4xl lg:text-5xl">
            Someone is waiting for their perfect gift.
          </p>
          <p className="font-dm tracking-[0.18em] uppercase mb-8 text-[13px]" style={{ color: "#C8A876" }}>
            Order in 2 minutes. Delivered with love.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-whatsapp-cta"
            className="pulse-wa btn-shimmer inline-flex items-center gap-2.5 rounded-full bg-white text-[#2C2C2C] font-dm font-semibold text-sm hover:bg-[#C8A876] transition-colors duration-500 w-full max-w-xs sm:w-auto"
            style={{ willChange: "transform" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>


      {/* ─── Footer Body ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <FloralIconSmall />
              <span className="font-playfair text-xl font-bold text-white">PureLuvWrap</span>
            </div>
            <p className="font-dm text-white/60 text-sm leading-relaxed max-w-sm">
              Handcrafted gifts for every occasion, made with pure love.
              Delivering joy across Jalandhar & Punjab.
            </p>
            <p className="font-dm text-brand-rose text-sm mt-5">
              Delivering love across Jalandhar & Punjab 🌸
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-dm text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp-link"
                  className="flex items-center gap-2.5 font-dm text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brand-rose group-hover:scale-110 transition-transform" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  +91 98773 10855
                </a>
              </li>
              <li>
                <a
                  href={IG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-instagram-link"
                  className="flex items-center gap-2.5 font-dm text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brand-rose group-hover:scale-110 transition-transform" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @pureluvwrap7
                </a>
              </li>
              <li>
                <p className="font-dm text-sm text-white/60">
                  📍 Jalandhar, Punjab, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-white/40 text-center">
            © {year} PureLuvWrap. All rights reserved.
          </p>
          <p className="font-dm text-xs text-white/40 text-center">
            Made with 🌸 in Jalandhar, Punjab
          </p>
        </div>
      </div>
    </footer>
  );
}

