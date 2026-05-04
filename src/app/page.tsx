import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USPStrip from "@/components/USPStrip";
import Gallery from "@/components/Gallery";
import OrderForm from "@/components/OrderForm";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/**
 * PureLuvWrap — Home Page
 * All sections assembled in logical flow order.
 * CTAs link to wa.me — no backend required.
 */
export default function Home() {
  return (
    <main>
      {/* Sticky Navbar */}
      <Navbar />

      {/* 1. Hero — cinematic parallax, word-by-word headline, marquee */}
      <Hero />

      {/* 2. USP Strip — editorial alternating row list */}
      <USPStrip />

      {/* 3. Gallery — masonry + filter tabs + enhanced hover */}
      <Gallery />

      {/* 4. Custom Order Form — WhatsApp-powered, no backend */}
      <OrderForm />

      {/* 5. Testimonials — auto-scroll carousel, animated stars */}
      <Testimonials />

      {/* 6. About — brand story + Instagram */}
      <About />

      {/* 7. Footer — dark moody CTA + links + contact */}
      <Footer />

      {/* Fixed: Floating WhatsApp button (bottom-right, pulses every 3s) */}
      <FloatingWhatsApp />
    </main>
  );
}
