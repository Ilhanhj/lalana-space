import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_CATEGORIES } from "../data";
import { Award, MessageCircle, ArrowRight } from "lucide-react";

const CATEGORY_IMAGES: Record<string, { url: string; alt: string; quote: string }> = {
  "main-courses": {
    url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
    alt: "Makanan Utama Hidangan Rasa",
    quote: "Sajian mi lebar kenyal dan racikan nasi rempah botani khas Lalana yang melipur rasa lapar."
  },
  "snacks-salads": {
    url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
    alt: "Kudapan Botani & Salad",
    quote: "Dimsum kukus lembut bermahkota saus mentai hangat dan salad renyah pemulih kesegaran."
  },
  "desserts-pastries": {
    url: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600",
    alt: "Pencuci Mulut & Pastri",
    quote: "Kelembutan cheesecake krim New York panggang berpadu panggangan hangat croissant mentega Prancis."
  },
  "coffee-drinks": {
    url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
    alt: "Sajian Kopi Es & Hangat",
    quote: "Espresso arabika pilihan diseduh cermat dipadukan lumeran keju asin atau karamel manis."
  },
  "non-coffee-drinks": {
    url: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
    alt: "Ramuan Teh & Non-Kopi",
    quote: "Gelimang matcha premium Shizuoka Jepang gurih kental dan mocktail bunga telang nan cantik."
  },
  "bottle-happiness": {
    url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
    alt: "Botol Kebahagiaan 1 Liter",
    quote: "Kemasan porsi 1 liter melimpah penyedia damai rasa bersama sahabat atau keluarga terdekat."
  }
};

interface MenuHighlightProps {
  onViewFullMenu: () => void;
}

export function MenuHighlight({ onViewFullMenu }: MenuHighlightProps) {
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORIES[0].id);
  const [hoveredItem, setHoveredItem] = useState<{ image: string; name: string; notes?: string } | null>(null);

  const activeCategory = MENU_CATEGORIES.find((cat) => cat.id === selectedCategory) || MENU_CATEGORIES[0];
  const activeImage = CATEGORY_IMAGES[selectedCategory] || CATEGORY_IMAGES["main-courses"];

  const displayImageSrc = hoveredItem?.image || activeImage.url;
  const displayImageAlt = hoveredItem?.name || activeImage.alt;
  const displayImageQuote = hoveredItem 
    ? (hoveredItem.notes ? `"${hoveredItem.notes}"` : "Sajian istimewa Lalana Space.") 
    : activeImage.quote;

  // Formulate a beautiful pre-filled WhatsApp message for menu ordering
  const getWhatsAppMenuLink = (categoryName: string) => {
    const text = `Halo Lalana Space, saya tertarik untuk memesan atau reservasi hidangan dari menu "${categoryName}". Mohon info ketersediaan meja kosong hari ini.`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppSingleItemLink = (itemName: string, itemPrice: string) => {
    const text = `Halo Lalana Space, saya ingin memesan menu "${itemName}" (${itemPrice}) untuk kunjungan dine-in / take-away saya.`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  // Reset hovered item when category changes
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setHoveredItem(null);
  };

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 bg-cream-warm/40 border-y border-cream-dark/30 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-48 h-48 bg-cream-dark/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-earth-muted mb-4">
            Dapur Botani &amp; Seduhan
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-earth-dark tracking-tight">
            Sajian Penenang Jiwa
          </h2>
          <p className="font-sans text-xs sm:text-sm text-earth-muted mt-4 font-light max-w-md mx-auto">
            Setiap cangkir dan kudapan dibuat dari bahan organik lokal pilihan, disajikan perlahan untuk menjaga kemurnian rasa.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center border-b border-cream-dark/50 mb-12 sm:mb-16">
          <div className="flex gap-6 sm:gap-12 relative overflow-x-auto pb-px scrollbar-none">
            {MENU_CATEGORIES.map((category) => {
              const isSelected = category.id === selectedCategory;
              return (
                <button
                  key={category.id}
                  id={`menu-tab-${category.id}`}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`font-serif text-base sm:text-lg tracking-wide pb-4 cursor-pointer relative focus:outline-none transition-all whitespace-nowrap ${
                    isSelected ? "text-primary-accent font-semibold" : "text-earth-muted hover:text-primary-accent"
                  }`}
                >
                  {category.title}
                  {isSelected && (
                    <motion.div
                      layoutId="menuActiveUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Grid for Ultra-Focus on Menu + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Menu Items Listing (Takes 7 columns) */}
          <div className="lg:col-span-7 min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-8"
              >
                {activeCategory.items.map((item) => (
                  <div
                    key={item.id}
                    id={`menu-item-row-${item.id}`}
                    onMouseEnter={() =>
                      item.image &&
                      setHoveredItem({
                        image: item.image,
                        name: item.name,
                        notes: item.notes,
                      })
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                    className="flex gap-4 sm:gap-6 group items-center p-3 sm:p-4 rounded-3xl hover:bg-cream-warm/40 transition-all duration-300 border border-transparent hover:border-cream-dark/40 text-left"
                  >
                    {/* Compact Product Thumbnail */}
                    {item.image && (
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-cream-dark/60 shadow-md shrink-0 bg-cream-dark/10">
                        {/* High-visibility premium badge overlay */}
                        <div className="absolute top-2 left-2 z-10 pointer-events-none">
                          <span className={`font-mono text-[7px] sm:text-[8px] tracking-widest uppercase font-bold block px-2 py-0.5 rounded-md shadow-md select-none ${
                            item.isSignature 
                              ? "bg-amber-900 text-cream-light" 
                              : "bg-earth-dark/90 text-cream-warm"
                          }`}>
                            {item.isSignature ? "FAVORITE" : "RECOMMENDED"}
                          </span>
                        </div>
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}

                    {/* Product Metadata */}
                    <div className="flex-grow space-y-1.5 min-w-0">
                      {/* Name, connecting dots, and Price */}
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="flex items-center gap-1.5 font-serif text-sm sm:text-base md:text-lg font-light text-earth-dark group-hover:text-amber-950 transition-colors duration-300">
                          {item.isSignature && (
                            <span className="p-0.5 bg-cream-dark rounded text-amber-800" title="Rekomendasi Lalana">
                              <Award className="w-3 h-3" />
                            </span>
                          )}
                          {item.name}
                        </span>

                        {/* Dashed connector */}
                        <div className="flex-grow border-b border-dashed border-cream-dark/85 mx-2 self-end h-1" />

                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                          <span className="font-mono text-xs sm:text-sm font-medium text-earth-dark">
                            {item.price}
                          </span>

                          {/* Instant WhatsApp Order */}
                          <a
                            href={getWhatsAppSingleItemLink(item.name, item.price)}
                            target="_blank"
                            rel="noreferrer"
                            title={`Pesan ${item.name} via WhatsApp`}
                            className="p-1.5 rounded-full hover:bg-emerald-50 text-emerald-750 hover:text-emerald-900 transition-colors duration-200"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-[11px] sm:text-xs text-earth-muted font-light leading-relaxed pr-4">
                        {item.description}
                      </p>

                      {/* Quick notes */}
                      {item.notes && (
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <span className="w-1 h-1 rounded-full bg-secondary-accent" />
                          <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-earth-muted uppercase">
                            {item.notes}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Quick action button for the selected category and dedicated Menu link */}
            <div className="mt-8 pt-6 border-t border-cream-dark/40 flex flex-wrap items-center gap-4 text-left">
              <a
                href={getWhatsAppMenuLink(activeCategory.title)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase bg-emerald-800 text-cream-light py-3.5 px-6 rounded-full hover:bg-emerald-900 transition-colors duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Pesan {activeCategory.title} via WA
              </a>
              <button
                onClick={onViewFullMenu}
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase border border-primary-accent/40 hover:border-primary-accent text-primary-accent px-6 py-3.5 rounded-full hover:bg-primary-accent hover:text-cream-light transition-all duration-300 cursor-pointer font-medium"
              >
                Buka Halaman Menu Lengkap
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Beautiful Portrait Picture Frame of Selected Concept or Hovered Product */}
          <div className="lg:col-span-5 relative w-full lg:sticky lg:top-24">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={displayImageSrc}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-cream-dark shadow-xl"
              >
                <img
                  src={displayImageSrc}
                  alt={displayImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[97%] transition-transform duration-500 hover:scale-102"
                />
                
                {/* Visual glass overlay with a poetic quote or product trait */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/75 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                  <span className="font-serif italic text-cream-light text-base md:text-lg mb-2 leading-relaxed">
                    {displayImageQuote}
                  </span>
                  <div className="h-[1px] w-12 bg-cream-dark/60 my-2" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-cream-dark uppercase block">
                    {displayImageAlt} &bull; {hoveredItem ? "Sajian Menu" : "Suasana Lalana"}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>



      </div>
    </section>
  );
}

