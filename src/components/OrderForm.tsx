"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── WhatsApp Number ───────────────────────────────── */
const WA_NUMBER = "919877310855";

/* ─── Dropdown options ──────────────────────────────── */
const occasions = [
  "🎂 Birthday",
  "💑 Anniversary",
  "💝 Valentine's Day",
  "👋 Farewell",
  "💍 Wedding",
  "🏢 Corporate Gift",
  "👫 Friendship Day",
  "🎓 Graduation",
  "🌸 Just Because",
  "✏️ Other",
];

const budgets = [
  "₹500 – ₹1,000",
  "₹1,000 – ₹2,000",
  "₹2,000 – ₹4,000",
  "₹4,000 – ₹7,000",
  "₹7,000+",
];

const flowerTypes = [
  "🌸 Natural Flowers",
  "🎀 Artificial Flowers",
  "🌸🎀 Both (Mix)",
];

const bouquetTypes = [
  "🌸 Flower Bouquet (Artificial)",
  "🌿 Flower Bouquet (Natural)",
  "📸 Photo Bouquet (with Polaroids)",
  "🧸 Figurine / Clay Bouquet",
  "🍬 Candy Bouquet",
  "🎁 Gift Box / Hamper",
  "🔑 Custom Keychain",
  "🖼️ Photo Frame",
  "🧶 Crochet Gift",
  "✏️ Other (I'll describe below)",
];

type FormData = {
  name: string;
  phone: string;
  occasion: string;
  flowerType: string;
  bouquetType: string;
  colors: string;
  budget: string;
  message: string;
  date: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  occasion: "",
  flowerType: "",
  bouquetType: "",
  colors: "",
  budget: "",
  message: "",
  date: "",
};

/* ─── Input component ───────────────────────────────── */
function InputField({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-dm text-sm font-medium text-brand-text"
      >
        {label}{required && <span className="text-brand-rose ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-brand-rose-light bg-white font-dm text-sm text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-rose/40 focus:border-brand-rose transition-all duration-300";

export default function OrderForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showFlowerType = [
    "🌸 Flower Bouquet (Artificial)",
    "🌿 Flower Bouquet (Natural)",
    "📸 Photo Bouquet (with Polaroids)",
  ].includes(form.bouquetType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi PureLuvWrap! 🌸 I'd like to place a custom order:

- Name: ${form.name}
- Phone: ${form.phone}
- Occasion: ${form.occasion || "Not specified"}
- What would you like?: ${form.bouquetType || "Not specified"}
${showFlowerType ? `- Flower Type: ${form.flowerType || "Not specified"}\n` : ""}- Preferred Colors: ${form.colors || "No preference"}
- Budget: ${form.budget || "Not specified"}
- Delivery Date: ${form.date || "Flexible"}
- Message: ${form.message || "None"}`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="order"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-brand-bg to-brand-cream scroll-mt-16"
      aria-labelledby="order-heading"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-brand-rose text-sm font-dm font-medium tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-brand-rose" />
            CUSTOM ORDERS
            <span className="w-6 h-px bg-brand-rose" />
          </span>
          <h2
            id="order-heading"
            className="font-playfair text-[32px] sm:text-5xl font-bold text-brand-text tracking-tight mb-4"
          >
            Create Your Dream Gift
          </h2>
          <p className="font-dm text-brand-muted text-lg leading-relaxed">
            Tell us what you have in mind — we&apos;ll handcraft it just for you, with love.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl md:rounded-3xl shadow-card p-6 sm:p-8 md:p-10 border border-brand-rose-light/40"
        >
          <form onSubmit={handleSubmit} noValidate aria-label="Custom gift order form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <InputField label="Your Name" id="order-name" required>
                <input
                  id="order-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Priya Sharma"
                  className={inputClass}
                  autoComplete="name"
                />
              </InputField>

              {/* Phone */}
              <InputField label="Phone Number" id="order-phone" required>
                <input
                  id="order-phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                  autoComplete="tel"
                />
              </InputField>

              {/* Occasion */}
              <InputField label="Occasion" id="order-occasion" required>
                <select
                  id="order-occasion"
                  name="occasion"
                  required
                  value={form.occasion}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select occasion</option>
                  {occasions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </InputField>

              {/* What would you like? */}
              <InputField label="What would you like?" id="order-bouquet-type" required>
                <select
                  id="order-bouquet-type"
                  name="bouquetType"
                  required
                  value={form.bouquetType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select a product</option>
                  {bouquetTypes.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </InputField>

              {/* Colors */}
              <InputField label="Preferred Colors" id="order-colors">
                <input
                  id="order-colors"
                  name="colors"
                  type="text"
                  value={form.colors}
                  onChange={handleChange}
                  placeholder="Blush pink, white, sage green…"
                  className={inputClass}
                />
              </InputField>

              {/* Budget */}
              <InputField label="Budget Range" id="order-budget">
                <select
                  id="order-budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select budget</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </InputField>

              {/* Delivery Date */}
              <InputField label="Preferred Delivery Date" id="order-date">
                <input
                  id="order-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className={inputClass}
                  min={new Date().toISOString().split("T")[0]}
                />
              </InputField>

              {/* Flower Type (Conditional) */}
              {showFlowerType && (
                <InputField label="Flower Type" id="order-flower-type" required>
                  <select
                    id="order-flower-type"
                    name="flowerType"
                    required
                    value={form.flowerType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Select flower type</option>
                    {flowerTypes.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </InputField>
              )}

              {/* Special Message - full width */}
              <div className="sm:col-span-2">
                <InputField label="Special Message or Vision" id="order-message">
                  <textarea
                    id="order-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your dream gift — the vibe, recipient, colours, theme, or anything specific you have in mind..."
                    className={`${inputClass} resize-none`}
                  />
                </InputField>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-8">
              <button
                type="submit"
                id="order-submit-btn"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-brand-rose text-white font-dm font-semibold text-base hover:bg-brand-burgundy transition-all duration-300 hover:shadow-rose hover:scale-[1.02] active:scale-100"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Send My Order via WhatsApp 💬
              </button>
              <p className="text-center font-dm text-xs text-brand-muted mt-3">
                This will open WhatsApp with your order details pre-filled. No account needed.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


