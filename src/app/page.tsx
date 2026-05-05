import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import USPStrip from "@/components/USPStrip";
import Collections from "@/components/Collections";
import OrderForm from "@/components/OrderForm";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/**
 * Hero is loaded client-side only (ssr: false) to prevent SSR/hydration
 * mismatches with Framer Motion animations (opacity, transforms) on Vercel.
 */
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

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

      {/* 1. Hero — cinematic split-screen, staggered headline, marquee */}
      <Hero />

      {/* 2. USP Strip — editorial alternating row list */}
      <USPStrip />

      {/* 3. Collections — asymmetric grid, no tabs */}
      <Collections />

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
