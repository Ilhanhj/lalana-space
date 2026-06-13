import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Check, 
  MessageSquare, 
  Trash2, 
  Sparkles, 
  ArrowLeft,
  X,
  Coffee,
  IceCream,
  HelpCircle,
  Leaf
} from "lucide-react";
import { MENU_CATEGORIES } from "../data";
import { MenuItem } from "../types";

const AMBIANCES = [
  { 
    id: "pedas", 
    label: "Yang Pedes-Pedes 🌶️", 
    match: (item: any) => 
      item.tags?.some((t: string) => ["Pedas Alami", "Sambal Pedas", "Asin Pedas", "Bumbu Rujak"].includes(t)) ||
      item.name.toLowerCase().includes("pedas") ||
      item.name.toLowerCase().includes("sambal") ||
      item.name.toLowerCase().includes("lada") ||
      item.name.toLowerCase().includes("tektek") ||
      item.name.toLowerCase().includes("tektok") ||
      item.description.toLowerCase().includes("pedas") ||
      item.description.toLowerCase().includes("sambal") ||
      item.description.toLowerCase().includes("tingkat pedas")
  },
  { 
    id: "dingin-segar", 
    label: "Dingin & Segar ❄️", 
    match: (item: any) => 
      item.tags?.some((t: string) => ["Dingin Segar", "Es", "Sajian Dingin", "Sangat Dingin", "Asam Segar", "Yakult Segar", "Es Krim Lumer"].includes(t)) ||
      item.name.toLowerCase().startsWith("es ") ||
      item.name.toLowerCase().includes("smoothie") ||
      item.name.toLowerCase().includes("refresher") ||
      item.name.toLowerCase().includes("elixir") ||
      item.description.toLowerCase().includes("es krim") ||
      item.description.toLowerCase().includes("limpahan es") ||
      item.description.toLowerCase().includes("dingin")
  },
  { 
    id: "kafein-kuat", 
    label: "Kafein Kuat ⚡", 
    match: (item: any) => 
      item.categoryId === "coffee-drinks" && (
        item.tags?.some((t: string) => ["Kopi Hitam", "Tanpa Gula", "Rasa Bold", "Manual Brew", "Seduh Tangan"].includes(t)) ||
        item.name.toLowerCase().includes("americano") ||
        item.name.toLowerCase().includes("espresso") ||
        item.name.toLowerCase().includes("cappuccino") ||
        item.name.toLowerCase().includes("v-60") ||
        item.name.toLowerCase().includes("manual brew") ||
        item.description.toLowerCase().includes("kopi hitam") ||
        item.description.toLowerCase().includes("espresso murni")
      )
  },
  { 
    id: "ramah-lambung", 
    label: "Sopan di Lambung 🍵", 
    match: (item: any) => 
      item.tags?.some((t: string) => ["Sopan di Lambung", "Sehat Alami", "Bebas Kafein", "Tanpa Kafein", "Sajian Nyaman", "Alami Herbal"].includes(t)) ||
      item.name.toLowerCase().includes("sapo tofu") ||
      item.name.toLowerCase().includes("soto") ||
      item.name.toLowerCase().includes("camomil") ||
      item.name.toLowerCase().includes("taro") ||
      item.description.toLowerCase().includes("ramah lambung") ||
      item.description.toLowerCase().includes("pencernaan") ||
      item.description.toLowerCase().includes("bebas kafein")
  },
  { 
    id: "berbagi", 
    label: "Kenyang Berdua 👥", 
    match: (item: any) => 
      item.tags?.some((t: string) => ["Paket Sharing", "Sempurna Berbagi", "Ukuran 1 Liter", "Sangat Hemat"].includes(t)) ||
      item.name.toLowerCase().includes("platter") ||
      item.name.toLowerCase().includes("split") ||
      item.name.toLowerCase().includes("1 liter") ||
      item.name.toLowerCase().includes("botol") ||
      item.description.toLowerCase().includes("berbagi") ||
      item.description.toLowerCase().includes("porsi kumpul")
  },
  { 
    id: "manis-legit", 
    label: "Manis Legit 🍯", 
    match: (item: any) => 
      item.categoryId === "desserts-pastries" ||
      item.tags?.some((t: string) => ["Manis Tradisional", "Gula Aren asli", "Karamel Alami", "Madu Hutan", "Krim Lembut", "Dingin Manis", "Keju Cokelat", "Anak Gembira"].includes(t)) ||
      item.name.toLowerCase().includes("pisang") ||
      item.name.toLowerCase().includes("cokelat") ||
      item.name.toLowerCase().includes("keju") ||
      item.name.toLowerCase().includes("mousse") ||
      item.name.toLowerCase().includes("cheesecake") ||
      item.name.toLowerCase().includes("panacotta") ||
      item.description.toLowerCase().includes("manis") ||
      item.description.toLowerCase().includes("karamel")
  }
];

interface MenuPageProps {
  onBackToHome: () => void;
}

export function MenuPage({ onBackToHome }: MenuPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedAmbience, setSelectedAmbience] = useState<string | null>(null);
  
  // Interactive Cart State managed in component
  const [cart, setCart] = useState<{ [itemId: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Flat list of all items for robust searching
  const allItems = useMemo(() => {
    return MENU_CATEGORIES.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id,
        categoryTitle: category.title
      }))
    );
  }, []);

  // Extract top 10 unique tags by popularity/frequency
  const availableTags = useMemo(() => {
    const tagCounts: { [tag: string]: number } = {};
    allItems.forEach(item => {
      if (item.tags) {
        item.tags.forEach(t => {
          tagCounts[t] = (tagCounts[t] || 0) + 1;
        });
      }
    });
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag);
  }, [allItems]);

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchCategory = selectedCategory === "all" || item.categoryId === selectedCategory;
      const matchTag = !selectedTag || (item.tags && item.tags.includes(selectedTag));
      
      let matchAmbience = true;
      if (selectedAmbience) {
        const foundAmbience = AMBIANCES.find(a => a.id === selectedAmbience);
        if (foundAmbience) {
          matchAmbience = foundAmbience.match(item);
        }
      }

      return matchSearch && matchCategory && matchTag && matchAmbience;
    });
  }, [allItems, searchQuery, selectedCategory, selectedTag, selectedAmbience]);

  // Helper properties to calculate cart details
  const cartDetails = useMemo(() => {
    let totalCount = 0;
    let totalPriceAmount = 0;
    const itemsList: { item: MenuItem; count: number; subtotal: number }[] = [];

    Object.entries(cart).forEach(([id, baseCount]) => {
      const count = Number(baseCount) || 0;
      if (count > 0) {
        const item = allItems.find(i => i.id === id);
        if (item) {
          totalCount += count;
          // Parse price string e.g. "Rp 50.000" to number
          const priceNum = parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0;
          const subtotal = priceNum * count;
          totalPriceAmount += subtotal;
          itemsList.push({ item, count, subtotal });
        }
      }
    });

    return {
      totalCount,
      totalPriceAmount,
      formattedTotal: `Rp ${totalPriceAmount.toLocaleString("id-ID")}`,
      itemsList
    };
  }, [cart, allItems]);

  // Handle quantity changes
  const updateCartQty = (itemId: string, delta: number) => {
    setCart(prev => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      return {
        ...prev,
        [itemId]: next
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  // Generate WhatsApp Order Link
  const handleSendWhatsAppOrder = () => {
    if (cartDetails.itemsList.length === 0) return;

    let messageText = `Halo Lalana Space! 🌿☕\n\nSaya ingin memesan menu tenang berikut untuk kunjungan saya:\n`;
    
    cartDetails.itemsList.forEach(({ item, count, subtotal }) => {
      messageText += `• ${count}x *${item.name}* (${item.price}) = Rp ${subtotal.toLocaleString("id-ID")}\n`;
    });

    messageText += `\n*Total Pesanan:* ${cartDetails.formattedTotal}\n`;
    messageText += `*Aturan Sewa:* Bebas Bising & Unplugged Commitment.\n\nMohon siapkan saat kedatangan saya. Terima kasih! ✨`;

    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-cream-light text-earth-dark selection:bg-cream-dark pb-24 relative">
      
      {/* Editorial top Banner */}
      <section className="relative pt-32 pb-20 bg-earth-dark text-cream-light overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cream-warm rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-warm rounded-full filter blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <button
            id="back-home-button"
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-warm/90 hover:text-accent-warm font-mono mb-8 cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </button>

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent-warm font-semibold bg-earth-muted/50 px-3 py-1 rounded-full inline-block">
              MENU TENANG LALANA
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              Sajian Jiwa &amp; <br />
              <span className="italic font-normal text-cream-warm">Keheningan Rasa</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-cream-warm/70 font-light leading-relaxed max-w-lg">
              Setiap menu diolah secara hati-hati memakai bahan musiman organik, biji kopi arabika single-origin, dan resep ramah lambung demi menyelaraskan ritme tubuh Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Main filter & products block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar Filter (sticky and clean on both mobile and desktop) */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6 sticky top-[72px] lg:top-24 z-30 bg-cream-light/95 backdrop-blur-md lg:bg-transparent lg:shadow-none lg:backdrop-blur-none py-3 px-4 -mx-6 sm:-mx-12 lg:mx-0 border-b lg:border-none border-cream-dark/20 h-fit shadow-sm lg:p-0">
            
            {/* Search Input */}
            <div className="bg-cream-warm/30 lg:bg-cream-warm/40 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-cream-dark/40">
              <label className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider mb-1.5 font-medium">
                Pencarian Sajian
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-muted" />
                <input
                  type="text"
                  placeholder="Cari kopi, taro, croissant..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-cream-light font-sans text-xs py-2 lg:py-3.5 pl-10 pr-4 rounded-lg lg:rounded-xl border border-cream-dark focus:outline-none focus:border-earth-dark transition-all placeholder:text-earth-muted/60"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-earth-muted hover:text-earth-dark text-xs p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-cream-warm/30 lg:bg-cream-warm/40 p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-cream-dark/40 space-y-2 lg:space-y-3">
              <span className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">
                Kategori Menu
              </span>
              <div className="flex flex-wrap lg:flex-col gap-1.5">
                <button
                  id="category-filter-all"
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-1.5 rounded-lg lg:rounded-xl font-sans text-xs tracking-wider text-left transition-all cursor-pointer text-nowrap ${
                    selectedCategory === "all"
                      ? "bg-earth-dark text-cream-light font-medium shadow-sm"
                      : "bg-cream-light/60 hover:bg-cream-dark/30 text-earth-muted hover:text-earth-dark"
                  }`}
                >
                  Semua ({allItems.length})
                </button>
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    id={`category-filter-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg lg:rounded-xl font-sans text-xs tracking-wider text-left transition-all cursor-pointer text-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-earth-dark text-cream-light font-medium shadow-sm"
                        : "bg-cream-light/60 hover:bg-cream-dark/30 text-earth-muted hover:text-earth-dark"
                    }`}
                  >
                    {cat.title} ({cat.items.length})
                  </button>
                ))}
              </div>
            </div>

            {/* Choices by Ambiance (Replaces unrequested features with beautiful dynamic filters) */}
            <div className="bg-cream-warm/30 lg:bg-cream-warm/40 p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-cream-dark/40 space-y-2 lg:space-y-3">
              <span className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">
                Suasana &amp; Rasa (Ambiance)
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedAmbience(null)}
                  className={`px-2.5 py-1.5 rounded-full font-sans text-[10px] transition-all cursor-pointer ${
                    !selectedAmbience
                      ? "bg-accent-warm text-earth-dark font-medium shadow-sm"
                      : "bg-cream-light/60 border border-cream-dark hover:border-earth-muted text-earth-muted"
                  }`}
                >
                  Semua Suasana
                </button>
                {AMBIANCES.map((amb) => (
                  <button
                    key={amb.id}
                    onClick={() => setSelectedAmbience(amb.id)}
                    className={`px-2.5 py-1.5 rounded-full font-sans text-[10px] transition-all cursor-pointer ${
                      selectedAmbience === amb.id
                        ? "bg-accent-warm text-earth-dark font-semibold shadow-sm"
                        : "bg-cream-light/60 border border-cream-dark hover:border-earth-muted text-earth-muted"
                    }`}
                  >
                    {amb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Tag Filter */}
            <div className="bg-cream-warm/30 lg:bg-cream-warm/40 p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-cream-dark/40 space-y-2 lg:space-y-3">
              <span className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold mb-1">
                Kebutuhan Diet &amp; Preferensi
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-2.5 py-1 rounded-full font-mono text-[8px] sm:text-[9px] uppercase tracking-wider transition-all cursor-pointer ${
                    !selectedTag 
                      ? "bg-earth-dark text-cream-light font-semibold" 
                      : "bg-cream-light/60 border border-cream-dark hover:border-earth-muted text-earth-muted"
                  }`}
                >
                  Semua Diet
                </button>
                {availableTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-2.5 py-1 rounded-full font-mono text-[8px] sm:text-[9px] uppercase tracking-wider transition-all cursor-pointer ${
                      selectedTag === tag 
                        ? "bg-earth-dark text-cream-light font-bold" 
                        : "bg-cream-light/60 border border-cream-dark hover:border-earth-muted text-earth-muted"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Product Grid Column */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Header summary of display */}
            <div className="flex items-center justify-between border-b border-cream-dark/60 pb-3 flex-wrap gap-2">
              <p className="font-mono text-[10px] text-earth-muted uppercase tracking-widest">
                Menampilkan <span className="font-semibold text-earth-dark">{filteredItems.length}</span> Hidangan Pilihan
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedAmbience && (
                  <span className="font-mono text-[9px] bg-accent-warm px-2.5 py-1 rounded-full text-earth-dark flex items-center gap-1 font-semibold">
                    Suasana: {AMBIANCES.find(a => a.id === selectedAmbience)?.label.split(" ").slice(0, -1).join(" ") || selectedAmbience}
                    <button onClick={() => setSelectedAmbience(null)} className="hover:text-red-900 cursor-pointer text-xs font-bold font-sans">×</button>
                  </span>
                )}
                {selectedTag && (
                  <span className="font-mono text-[9px] bg-accent-warm/40 px-2.5 py-1 rounded-full text-earth-dark flex items-center gap-1">
                    Tag: {selectedTag}
                    <button onClick={() => setSelectedTag(null)} className="hover:text-amber-900 cursor-pointer text-xs font-bold font-sans">×</button>
                  </span>
                )}
              </div>
            </div>

            {/* No items found display block */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20 bg-cream-warm/20 rounded-[2rem] border border-dashed border-cream-dark space-y-4">
                <HelpCircle className="w-10 h-10 text-earth-muted/50 mx-auto" />
                <h4 className="font-serif text-lg text-earth-dark font-light">Sajian Tidak Ditemukan</h4>
                <p className="font-sans text-xs text-earth-muted max-w-xs mx-auto">
                  Cobalah kata kunci lain atau setel ulang kategori filter untuk menjelajahi pilihan menu khas kami.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedTag(null);
                    setSelectedAmbience(null);
                  }}
                  className="inline-flex font-mono text-[9px] tracking-wider uppercase bg-earth-dark text-cream-light px-4 py-2 rounded-xl hover:bg-earth-muted transition-colors cursor-pointer"
                >
                  Atur Ulang Pencarian
                </button>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => {
                  const itemInCart = cart[item.id] || 0;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                      key={item.id}
                      className="group bg-cream-warm/20 rounded-[2rem] border border-cream-dark/60 overflow-hidden flex flex-col justify-between hover:border-earth-muted transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                      {/* Image header with high-contrast badge */}
                      <div className="relative aspect-[16/11] overflow-hidden bg-cream-dark/20">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 brightness-[1.02]"
                          />
                        ) : (
                          <div className="w-full h-full bg-cream-dark/40 flex items-center justify-center text-earth-muted">
                            <Coffee className="w-10 h-10 stroke-1 stroke-earth-muted" />
                          </div>
                        )}
                        
                        {/* Signature tag */}
                        {item.isSignature && (
                          <div className="absolute top-4 left-4 font-mono text-[8px] bg-accent-warm text-earth-dark px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 fill-earth-dark text-earth-dark" />
                            Signature
                          </div>
                        )}

                        {/* Category label */}
                        <div className="absolute bottom-4 left-4 font-serif text-[10px] bg-earth-dark/75 backdrop-blur-md text-cream-light px-3 py-1 rounded-md uppercase tracking-wider italic">
                          {item.categoryTitle}
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                        
                        <div>
                          <div className="flex items-start justify-between gap-2 max-w-full">
                            <h3 className="font-serif text-lg font-medium text-earth-dark group-hover:text-earth-muted transition-colors leading-tight">
                              {item.name}
                            </h3>
                            <span className="font-mono text-xs font-semibold text-earth-dark whitespace-nowrap bg-cream-dark/50 px-2 py-1 rounded">
                              {item.price}
                            </span>
                          </div>

                          {item.notes && (
                            <p className="font-serif italic text-[11px] text-accent-warm/95 mt-1">
                              &ldquo;{item.notes}&rdquo;
                            </p>
                          )}

                          <p className="font-sans text-xs text-earth-muted font-light leading-relaxed mt-2.5">
                            {item.description}
                          </p>

                          {/* Render tags */}
                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {item.tags.map(t => (
                                <span key={t} className="font-mono text-[8px] bg-cream-dark/35 text-earth-muted px-2 py-0.5 rounded uppercase tracking-wide">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Order action button */}
                        <div className="pt-2 flex items-center justify-between">
                          <span className="font-sans text-[10px] text-earth-muted/80">
                            Penyajian Alami
                          </span>
                          
                          {itemInCart > 0 ? (
                            <div className="flex items-center bg-earth-dark text-cream-light rounded-full p-1 border border-earth-dark transition-all duration-300">
                              <button
                                aria-label="Decrease quantity"
                                onClick={() => updateCartQty(item.id, -1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-earth-muted text-cream-light cursor-pointer focus:outline-none transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-xs font-bold px-3 min-w-[20px] text-center">
                                {itemInCart}
                              </span>
                              <button
                                aria-label="Increase quantity"
                                onClick={() => updateCartQty(item.id, 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-earth-muted text-cream-light cursor-pointer focus:outline-none transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => updateCartQty(item.id, 1)}
                              className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase border border-earth-dark hover:bg-earth-dark hover:text-cream-light py-2 px-4 rounded-full transition-all duration-300 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                              Pesan
                            </button>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Floating Order Cart summary strip at the bottom */}
      <AnimatePresence>
        {cartDetails.totalCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            id="floating-cart-bar"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl bg-earth-dark text-cream-light rounded-full px-6 py-4 shadow-xl border border-cream-dark/20 flex items-center justify-between z-40"
          >
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-full bg-accent-warm flex items-center justify-center text-earth-dark relative">
                <ShoppingBag className="w-5 h-5 fill-earth-dark" />
                <span className="absolute -top-1 -right-1.5 bg-cream-light text-earth-dark font-mono text-[9px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-earth-dark shadow-sm">
                  {cartDetails.totalCount}
                </span>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wider text-accent-warm/90 font-medium">
                  Rencana Pesanan
                </p>
                <p className="font-mono text-sm font-semibold">
                  {cartDetails.formattedTotal}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="hidden sm:inline-flex items-center font-sans text-[10px] tracking-widest uppercase border border-cream-light/30 hover:border-cream-light px-4 py-2.5 rounded-full transition-colors cursor-pointer text-cream-light"
              >
                Lihat Rincian
              </button>
              <button
                onClick={handleSendWhatsAppOrder}
                className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-widest font-semibold uppercase bg-emerald-800 text-cream-light hover:bg-emerald-900 px-5 py-3 rounded-full transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cream-light fill-cream-light" />
                Kirim via WA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Detail Modal Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />

            {/* Slide up modal drawer for details */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-cream-light rounded-t-[2.5rem] border-t border-cream-dark/60 z-50 shadow-2xl p-6 sm:p-8 flex flex-col max-h-[85vh] text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-cream-dark/50 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-earth-dark" />
                  <h3 className="font-serif text-xl font-light text-earth-dark">Ranjang Lalana</h3>
                  <span className="font-mono text-xs bg-cream-dark/50 px-2 py-0.5 rounded-full font-bold">
                    {cartDetails.totalCount} Menu
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full hover:bg-cream-warm transition-colors cursor-pointer focus:outline-none"
                >
                  <X className="w-5 h-5 text-earth-dark" />
                </button>
              </div>

              {/* Items List inside Drawer */}
              <div className="flex-1 overflow-y-auto scrollbar-thin py-2 space-y-4">
                {cartDetails.itemsList.map(({ item, count, subtotal }) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 border-b border-cream-dark/30 pb-3">
                    <div className="flex-1">
                      <h4 className="font-serif text-sm font-medium text-earth-dark leading-snug">
                        {item.name}
                      </h4>
                      <p className="font-mono text-[10px] text-earth-muted mt-0.5">
                        {item.price} × {count}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold text-earth-dark">
                        Rp {subtotal.toLocaleString("id-ID")}
                      </span>
                      {/* Plus-Minus inside drawer */}
                      <div className="flex items-center bg-cream-dark/40 rounded-full p-0.5 border border-cream-dark/20">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-cream-dark text-earth-dark focus:outline-none"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold px-2.5 min-w-[15px] text-center">
                          {count}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-cream-dark text-earth-dark focus:outline-none"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Bottom */}
              <div className="border-t border-cream-dark/60 pt-4 mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-earth-muted uppercase tracking-wider">Subtotal Pesanan</span>
                  <span className="font-mono text-base font-bold text-earth-dark">
                    {cartDetails.formattedTotal}
                  </span>
                </div>

                <p className="font-sans text-[11px] text-earth-muted bg-cream-warm/40 p-3 rounded-xl leading-relaxed text-center">
                  ☘️ Aturan *Bebas Gawai &amp; Kebisingan* berlaku untuk ketenangan pelanggan Lalana.
                </p>

                <div className="grid grid-cols-6 gap-2">
                  <button
                    onClick={clearCart}
                    className="col-span-2 inline-flex items-center justify-center gap-1.5 font-sans text-[9px] uppercase tracking-widest border border-red-200 text-red-700 hover:bg-red-50 py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Batal
                  </button>
                  <button
                    onClick={handleSendWhatsAppOrder}
                    className="col-span-4 inline-flex items-center justify-center gap-2 font-sans text-[10px] tracking-[0.1em] font-semibold uppercase bg-emerald-800 hover:bg-emerald-900 text-cream-light py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-cream-light fill-cream-light" />
                    Kirim Pesanan (WA)
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
