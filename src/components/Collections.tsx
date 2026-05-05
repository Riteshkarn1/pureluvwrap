"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const collectionsData = [
  {
    id: "bouquets",
    name: "Bouquets",
    desc: "Artificial & natural bouquets for every occasion",
    image: "/hero-bouquets.png",
    colSpan: "md:col-span-2",
  },
  {
    id: "keychains",
    name: "Keychains",
    desc: "Handcrafted crochet, pipe cleaner & clay flower keychains",
    image: "/hero-keychains.png",
    colSpan: "md:col-span-2",
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    desc: "Custom birthday hampers with fairy lights, photos & surprises",
    image: "/hero-giftboxes.png",
    colSpan: "md:col-span-2",
  },
  {
    id: "photo-bouquets",
    name: "Photo Bouquets",
    desc: "Dried flowers + polaroid photos — a gift they'll keep forever",
    image: "/hero-photobouquets.png",
    colSpan: "md:col-span-3",
  },
  {
    id: "figurine-bouquets",
    name: "Figurine Bouquets",
    desc: "Clay character bouquets & candy bouquets — unlike anything else",
    image: "/hero-figurines.png",
    colSpan: "md:col-span-3",
  },
  {
    id: "photo-frames",
    name: "Photo Frames",
    desc: "Personalised birthday calendar frames with your photos & messages",
    image: "/hero-photoframes.png",
    colSpan: "md:col-span-3",
  },
  {
    id: "crochet-gifts",
    name: "Crochet Gifts",
    desc: "Handmade crochet cake keychains & greeting card sets",
    image: "/hero-crochet.png",
    colSpan: "md:col-span-3",
  },
];

const WA_NUMBER = "919877310855";

function CollectionCard({ item, index }: { item: typeof collectionsData[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi PureLuvWrap! 🌸 I'm interested in your ${item.name}. Please share more details and pricing.`
  )}`;

  return (
    <motion.a
      ref={ref}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[16px] bg-white shadow-card hover:shadow-card-hover block min-h-[300px] sm:min-h-[360px] cursor-pointer ${item.colSpan}`}
      aria-label={`Order ${item.name}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Dark gradient at bottom to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent pointer-events-none" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[rgba(44,44,44,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 backdrop-blur-[2px]">
        <span className="text-white font-dm font-medium text-sm sm:text-base tracking-wide flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          Order via WhatsApp <span aria-hidden="true">→</span>
        </span>
      </div>

      {/* Persistent Text at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 pointer-events-none transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="font-playfair text-[22px] font-bold text-white mb-1 drop-shadow-sm">
          {item.name}
        </h3>
        <p className="font-dm text-[13px] text-[#E0E0E0] truncate">
          {item.desc}
        </p>
      </div>
    </motion.a>
  );
}

export default function Collections() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#FAF7F4]" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#C9727A] text-sm font-dm font-medium tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#C9727A]" />
            WHAT WE MAKE
            <span className="w-6 h-px bg-[#C9727A]" />
          </span>
          <h2 id="collections-heading" className="font-playfair text-4xl sm:text-5xl font-bold text-[#2C2C2C] mt-2 mb-4 tracking-tight">
            Our Collections
          </h2>
          <p className="font-dm text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
            Every piece is handcrafted with love — made to order, made to remember
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 lg:gap-6">
          {collectionsData.map((item, i) => (
            <CollectionCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}


