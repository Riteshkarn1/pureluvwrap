"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_qg4f232";
const EMAILJS_TEMPLATE_ID = "template_3n9eljb";
const EMAILJS_PUBLIC_KEY = "bhbvhqxB94AooUfzw";

const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'd2qsujot');

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/dhju7blft/image/upload',
    {
      method: 'POST',
      body: formData,
    }
  );
  const data = await response.json();
  return data.secure_url;
};

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
  "🌸 ",
  "🎀 Artificial Flowers",
  "🌸🎀 Both (Mix)",
];

const bouquetTypes = [
  "🌸 Flower Bouquet (Artificial)",
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
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
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
      {error && (
        <span
          className="font-dm text-[#ef4444] text-[12px] mt-1"
        >
          {error}
        </span>
      )}
    </div>
  );
}

const getInputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border bg-white font-dm text-sm text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 transition-all duration-300 ${hasError
    ? "border-[#ef4444] focus:ring-[#ef4444]/40 focus:border-[#ef4444]"
    : "border-brand-rose-light focus:ring-brand-rose/40 focus:border-brand-rose"
  }`;

export default function OrderForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image must be under 5MB");
      return;
    }

    setImageError("");
    setReferenceImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image must be under 5MB");
      return;
    }

    setImageError("");
    setReferenceImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setReferenceImage(null);
    setImagePreview(null);
    setImageError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const showFlowerType = [
    "🌸 Flower Bouquet (Artificial)",
    "📸 Photo Bouquet (with Polaroids)",
  ].includes(form.bouquetType);

  const stripEmojis = (str: string) => {
    if (!str) return "";
    return str.replace(/[^\w\s\/\(\)&\-]/g, "").trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!form.phone.trim() || !/^[0-9+\s]{10,}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!form.occasion) {
      newErrors.occasion = "Please select an occasion";
    }

    if (!form.bouquetType) {
      newErrors.bouquetType = "Please select what you'd like to order";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // Scroll to the first invalid field
      const firstErrorField = Object.keys(newErrors)[0];
      const fieldIdMap: { [key: string]: string } = {
        name: "order-name",
        phone: "order-phone",
        occasion: "order-occasion",
        bouquetType: "order-bouquet-type",
      };
      const el = document.getElementById(fieldIdMap[firstErrorField]);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload image to Cloudinary and get a URL (avoids EmailJS payload limits)
      let imageUrl = "No reference image provided";
      if (referenceImage) {
        imageUrl = await uploadToCloudinary(referenceImage);
      }

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          customer_name: form.name.trim(),
          customer_phone: form.phone.trim(),
          email: `${form.name.trim()} (${form.phone.trim()})`,
          occasion: form.occasion || "Not specified",
          product: form.bouquetType || "Not specified",
          flower_type: form.flowerType || "Not specified",
          preferred_colors: form.colors.trim() || "Not specified",
          budget: form.budget || "Not specified",
          delivery_date: form.date || "Not specified",
          special_message: form.message.trim() || "No message provided",
          reference_image: imageUrl,
        },
        EMAILJS_PUBLIC_KEY
      );

      // After email sends successfully, open WhatsApp
      const message = [
        "Hi PureLuvWrap!",
        "",
        "I'd like to place a custom order:",
        "",
        `Name: ${form.name.trim()}`,
        `Phone: ${form.phone.trim()}`,
        `Occasion: ${stripEmojis(form.occasion)}`,
        `Product: ${stripEmojis(form.bouquetType)}`,
        form.colors.trim() ? `Preferred Colors: ${form.colors.trim()}` : null,
        form.budget ? `Budget: ${form.budget}` : null,
        form.date ? `Delivery Date: ${form.date}` : null,
        showFlowerType && form.flowerType ? `Flower Type: ${stripEmojis(form.flowerType)}` : null,
        referenceImage
          ? "Reference Image: I have sent a reference image via email."
          : null,
        form.message.trim() ? `Message: ${form.message.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Show success message
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setForm(initialForm);
        setReferenceImage(null);
        setImagePreview(null);
        setImageError("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      console.error("EmailJS error:", error);
      // If email fails, still open WhatsApp so customer isn't blocked
      const message = [
        "Hi PureLuvWrap!",
        "",
        "I'd like to place a custom order:",
        "",
        `Name: ${form.name.trim()}`,
        `Phone: ${form.phone.trim()}`,
        `Occasion: ${stripEmojis(form.occasion)}`,
        `Product: ${stripEmojis(form.bouquetType)}`,
        form.colors.trim() ? `Preferred Colors: ${form.colors.trim()}` : null,
        form.budget ? `Budget: ${form.budget}` : null,
        form.date ? `Delivery Date: ${form.date}` : null,
        showFlowerType && form.flowerType ? `Flower Type: ${stripEmojis(form.flowerType)}` : null,
        form.message.trim() ? `Message: ${form.message.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Show error toast
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
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
              <InputField label="Your Name" id="order-name" required error={errors.name}>
                <input
                  id="order-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Priya Sharma"
                  className={getInputClass(!!errors.name)}
                  autoComplete="name"
                />
              </InputField>

              {/* Phone */}
              <InputField label="Phone Number" id="order-phone" required error={errors.phone}>
                <input
                  id="order-phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={getInputClass(!!errors.phone)}
                  autoComplete="tel"
                />
              </InputField>

              {/* Occasion */}
              <InputField label="Occasion" id="order-occasion" required error={errors.occasion}>
                <select
                  id="order-occasion"
                  name="occasion"
                  title="Occasion"
                  required
                  value={form.occasion}
                  onChange={handleChange}
                  className={getInputClass(!!errors.occasion)}
                >
                  <option value="" disabled>Select occasion</option>
                  {occasions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </InputField>

              {/* What would you like? */}
              <InputField label="What would you like?" id="order-bouquet-type" required error={errors.bouquetType}>
                <select
                  id="order-bouquet-type"
                  name="bouquetType"
                  title="What would you like?"
                  required
                  value={form.bouquetType}
                  onChange={handleChange}
                  className={getInputClass(!!errors.bouquetType)}
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
                  className={getInputClass(false)}
                />
              </InputField>

              {/* Budget */}
              <InputField label="Budget Range" id="order-budget">
                <select
                  id="order-budget"
                  name="budget"
                  title="Budget Range"
                  value={form.budget}
                  onChange={handleChange}
                  className={getInputClass(false)}
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
                  title="Preferred Delivery Date"
                  placeholder="YYYY-MM-DD"
                  value={form.date}
                  onChange={handleChange}
                  className={getInputClass(false)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </InputField>

              {/* Flower Type (Conditional) */}
              {showFlowerType && (
                <InputField label="Flower Type" id="order-flower-type">
                  <select
                    id="order-flower-type"
                    name="flowerType"
                    title="Flower Type"
                    value={form.flowerType}
                    onChange={handleChange}
                    className={getInputClass(false)}
                  >
                    <option value="" disabled>Select flower type</option>
                    {flowerTypes.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </InputField>
              )}

              {/* Reference Image (Optional) */}
              <div className="sm:col-span-2">
                <div className="flex flex-col gap-1.5 mb-2">
                  <label className="font-dm text-sm font-medium text-brand-text">
                    Reference Image (Optional)
                  </label>
                  <span className="font-dm text-[12px] text-[#9B9B9B]">
                    Share a photo for inspiration — a design you love, a colour combination, anything that helps us understand your vision.
                  </span>
                </div>

                <div
                  className={`relative w-full rounded-[12px] border-[1.5px] border-dashed border-[#C9727A] bg-[#FDF8F6] hover:bg-[#FAF0EE] hover:border-solid transition-all cursor-pointer flex flex-col items-center justify-center p-[24px] ${imageError ? 'border-red-500' : ''}`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  {imagePreview ? (
                    <div className="flex flex-col items-center w-full relative">
                      <img
                        src={imagePreview}
                        alt="Reference Preview"
                        className="max-h-[120px] object-contain rounded-md"
                      />
                      <span className="font-dm text-[12px] text-[#6B6B6B] mt-2 truncate max-w-[200px]">
                        {referenceImage?.name}
                      </span>
                      <button
                        type="button"
                        onClick={clearImage}
                        className="mt-3 text-[#C9727A] font-dm text-[12px] hover:underline"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9727A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <span className="font-dm text-[14px] text-[#6B6B6B] hidden sm:block">
                        Click to upload or drag & drop
                      </span>
                      <span className="font-dm text-[14px] text-[#6B6B6B] sm:hidden">
                        Tap to upload a photo
                      </span>
                      <span className="font-dm text-[11px] text-[#9B9B9B] mt-1">
                        JPG, PNG, WEBP up to 5MB
                      </span>
                    </>
                  )}
                </div>
                {imageError && (
                  <span className="font-dm text-[#ef4444] text-[12px] mt-1 block">
                    {imageError}
                  </span>
                )}
              </div>

              {/* Special Message - full width */}
              <div className="sm:col-span-2 mt-4 sm:mt-0">
                <InputField label="Special Message or Vision" id="order-message">
                  <textarea
                    id="order-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your dream gift — the vibe, recipient, colours, theme, or anything specific you have in mind..."
                    className={`${getInputClass(false)} resize-none`}
                  />
                </InputField>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-8 relative">
              {submitError && (
                <div className="absolute -top-12 left-0 right-0 mx-auto w-max bg-red-500 text-white text-xs px-4 py-2 rounded-lg shadow-lg z-10 animate-fade-in text-center">
                  Email failed but your WhatsApp message was sent.<br />
                  Please share your reference image directly in the chat.
                </div>
              )}
              <button
                type="submit"
                id="order-submit-btn"
                disabled={isSubmitting || submitSuccess}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-dm font-semibold text-base transition-all duration-300 ${submitSuccess
                    ? "bg-[#22c55e] text-white cursor-default"
                    : isSubmitting
                      ? "bg-brand-rose text-white opacity-80 cursor-not-allowed"
                      : "bg-brand-rose text-white hover:bg-brand-burgundy hover:shadow-rose hover:scale-[1.02] active:scale-100"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending your order...
                  </>
                ) : submitSuccess ? (
                  "Order Sent Successfully! ✓"
                ) : (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.545 5.873L.057 23.448a.5.5 0 0 0 .611.61l5.596-1.479A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.505-5.25-1.385l-.375-.213-3.88 1.025 1.037-3.78-.228-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Send My Order via WhatsApp 💬
                  </>
                )}
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



