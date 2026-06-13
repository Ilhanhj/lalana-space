import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  MapPin, 
  Check, 
  Calendar, 
  MessageSquare, 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Shield, 
  DollarSign, 
  Layers, 
  Gift,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { CAFE_SPACES } from "../data";

interface SpaceRentalPageProps {
  onBackToHome: () => void;
  onOpenRSVP: () => void;
}

export function SpaceRentalPage({ onBackToHome, onOpenRSVP }: SpaceRentalPageProps) {
  // Calculator State
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>(CAFE_SPACES[0].id);
  const [eventType, setEventType] = useState<string>("Intimate Gathering");
  const [hours, setHours] = useState<number>(4);
  const [guestsCount, setGuestsCount] = useState<number>(15);
  
  // Package Extras Checkboxes
  const [extras, setExtras] = useState({
    unlimitedBeverages: true,
    botanicalDecor: false,
    workshopMaterial: false,
    acousticEquipment: false
  });

  // Active FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Selected space configuration object
  const currentSpace = useMemo(() => {
    return CAFE_SPACES.find(s => s.id === selectedSpaceId) || CAFE_SPACES[0];
  }, [selectedSpaceId]);

  // Pricing constants & estimation algorithm
  const pricingCalculation = useMemo(() => {
    // Base rates per hour for each space in Rupiah
    const baseRates: Record<string, number> = {
      "intimate-wedding": 1500000,
      "workshop-kriya": 800000,
      "intimate-gathering": 600000
    };

    const multiplier = baseRates[selectedSpaceId] || 700000;
    let baseTotal = multiplier * hours;

    // Extras cost calculation
    let extrasTotal = 0;
    const itemizedList: string[] = [];

    if (extras.unlimitedBeverages) {
      const beverageRate = 45000 * guestsCount; // Rp 45k per person
      extrasTotal += beverageRate;
      itemizedList.push(`• Sajian Minum Bebas (Tamu x Rp 45.000): Rp ${beverageRate.toLocaleString("id-ID")}`);
    }
    if (extras.botanicalDecor) {
      const decorCost = 1500000; // Rp 1.5M fixed
      extrasTotal += decorCost;
      itemizedList.push(`• Dekorasi Botani Tambahan (Fixed): Rp ${decorCost.toLocaleString("id-ID")}`);
    }
    if (extras.workshopMaterial) {
      const matCost = 75000 * guestsCount; // Rp 75k per person
      extrasTotal += matCost;
      itemizedList.push(`• Alat/Bahan Kriya Premium (Tamu x Rp 75.000): Rp ${matCost.toLocaleString("id-ID")}`);
    }
    if (extras.acousticEquipment) {
      const equipCost = 800000; // Rp 800k fixed
      extrasTotal += equipCost;
      itemizedList.push(`• Perlengkapan Akustik Lalana (Fixed): Rp ${equipCost.toLocaleString("id-ID")}`);
    }

    const grandTotal = baseTotal + extrasTotal;

    return {
      baseTotalFormatted: `Rp ${baseTotal.toLocaleString("id-ID")}`,
      extrasTotalFormatted: `Rp ${extrasTotal.toLocaleString("id-ID")}`,
      grandTotalFormatted: `Rp ${grandTotal.toLocaleString("id-ID")}`,
      grandTotalVal: grandTotal,
      itemizedList
    };
  }, [selectedSpaceId, hours, guestsCount, extras]);

  // Send calculated quote to WhatsApp
  const handleSendQuoteWA = () => {
    let text = `Halo Lalana Space! 🌿💍\n\nSaya sedang merencanakan acara spesial dan menggunakan kalkulator sewa ruang Lalana:\n\n`;
    text += `*Ruangan:* ${currentSpace.title}\n`;
    text += `*Tipe Acara:* ${eventType}\n`;
    text += `*Durasi:* ${hours} Jam\n`;
    text += `*Jumlah Hadirin:* ${guestsCount} Orang\n\n`;
    
    if (pricingCalculation.itemizedList.length > 0) {
      text += `*Layanan Ekstra Tambahan:*\n`;
      if (extras.unlimitedBeverages) text += `✔ Sajian Kopi & Teh Lalana Unlimited\n`;
      if (extras.botanicalDecor) text += `✔ Dekorasi Bunga & Botani Segar\n`;
      if (extras.workshopMaterial) text += `✔ Peralatan Kriya Premium Lengkap\n`;
      if (extras.acousticEquipment) text += `✔ Set Akustik Sunyi & Sound system\n`;
      text += `\n`;
    }

    text += `*Estimasi Grand Total:* ${pricingCalculation.grandTotalFormatted}\n\n`;
    text += `Mohon konfirmasi ketersediaan dan syarat selengkapnya untuk rencana acara kami ini. Terima kasih! ✨`;

    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const faqs = [
    {
      q: "Bagaimana cara kerja ketentuan Unplugged & Kebisingan Rendah (Low noise)?",
      a: "Di Lalana Space, kami berkomitmen menjaga aura ketenangan. Seluruh acara tetap mengusung sistem 'low sensory' — kami menganjurkan hadirin menyimpan smartphone di dalam sebuah kotak kanvas cantik saat acara dimulai, dan volume pidato/akustik dijaga pada batas desibel rendah. Kami tidak melarang audio, hanya mengontrol polusi kebisingan yang berlebihan."
    },
    {
      q: "Apakah diperbolehkan membawa katering eksternal?",
      a: "Untuk menjaga standar nutrisi organik dan keberlanjutan lingkungan, kami menyediakan paket makanan ringan & minuman dari Lalana Kitchen. Jika ingin membawa katering dari luar untuk penikahan intim atau reuni berkala, kami mengenakan komitmen kebersihan lingkungan flat sebesar Rp 800.000 dan harus dipastikan kemasan bebas plastik sekali pakai."
    },
    {
      q: "Kapan batas waktu reservasi dan pembatalan sewa?",
      a: "Reservasi sewa ruang minimal diajukan H-14 sebelum acara untuk persiapan dekorasi botani. Pembatalan dengan pengembalian uang muka 100% berlaku sebelum H-7. Apabila lewat dari batas tersebut, uang muka yang dibayarkan tidak dapat dikembalikan namun dapat dijadwal-ulang."
    },
    {
      q: "Apakah area parkir Lalana Space memadai untuk kerabat/tamu?",
      a: "Tentu. Terletak di belakang Rumah Kaca Oak Tua, Lalana memiliki kantong parkir khusus yang rindang dan rindang untuk kapasitas maksimal 10-12 mobil secara bersamaan, atau motor hingga 30 unit."
    }
  ];

  const getWhatsAppSpaceLink = (spaceTitle: string) => {
    const text = `Halo Lalana Space, saya ingin menanyakan info ketersediaan sewa ruang "${spaceTitle}". Mohon dibantu infonya. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-cream-light text-earth-dark selection:bg-cream-dark pb-24 relative">
      
      {/* Editorial top Banner */}
      <section className="relative pt-32 pb-20 bg-earth-dark text-cream-light overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cream-warm rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent-warm rounded-full filter blur-3xl" />
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
              SEWA RUANG EXCLUSIVE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              Sewa Ruang &amp; <br />
              <span className="italic font-normal text-cream-warm">Acara Spesial Anda</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-cream-warm/70 font-light leading-relaxed max-w-lg">
              Sediakan oase ketenangan untuk momen paling istimewa hidup Anda. Sewa area semi-outdoor tropis bergaya naturalistik Lalana untuk pernikahan khidmat, kelas kriya kreatif, atau lokakarya meditasi sepi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Spaces Showcase Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        
        {/* Intro Block card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-cream-dark/60 pb-16 mb-20">
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="font-mono text-[9px] text-accent-warm uppercase tracking-widest block font-bold">LALANA ETHICS</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light leading-snug">
              Sanctuary Sensorik &amp; Kriya Alamiah
            </h2>
            <p className="font-sans text-xs sm:text-sm text-earth-muted leading-relaxed font-light">
              Lalana Space dibangun di atas arsitektur 'low-sensory' dengan penataan material daur ulang alami, taman pakis terawat, lampion kertas hangat, dan sistem peredam bising terbaik. Ruang kami didesain bagi mereka yang mendambakan keheningan murni dan fokus interaksi sejati.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-warm/30 p-6 rounded-2xl border border-cream-dark/60 text-left space-y-2">
              <Shield className="w-5 h-5 text-emerald-800" />
              <h4 className="font-serif font-medium text-earth-dark text-sm">Privasi Mutlak Terjaga</h4>
              <p className="font-sans text-[11px] text-earth-muted font-light leading-relaxed">
                Setiap penyewaan merangkap penutupan sebagian atau total area untuk menjamin kelegaan kerabat Anda tanpa gangguan luar.
              </p>
            </div>
            <div className="bg-cream-warm/30 p-6 rounded-2xl border border-cream-dark/60 text-left space-y-2">
              <Layers className="w-5 h-5 text-amber-900" />
              <h4 className="font-serif font-medium text-earth-dark text-sm">Kemudahan Terintegrasi</h4>
              <p className="font-sans text-[11px] text-earth-muted font-light leading-relaxed">
                Dilengkapi proyektor nirkabel beresolusi tinggi, dekorasi bunga segar botanik, serta asisten lokakarya tersertifikasi.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Space Catalog Grid */}
        <div className="space-y-20">
          {CAFE_SPACES.map((space, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={space.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-cream-dark/30 pb-20 last:border-b-0"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-6 rounded-[2rem] overflow-hidden border border-cream-dark shadow-lg order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="aspect-[16/11] relative overflow-hidden group">
                    <img 
                      src={space.image} 
                      alt={space.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 bg-earth-dark text-cream-light font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                      Kapasitas: {space.capacity}
                    </div>
                  </div>
                </div>

                {/* Specification and Text description */}
                <div className={`lg:col-span-6 space-y-6 text-left order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-accent-warm uppercase tracking-widest font-semibold block">LALANA SIGNATURE AREA</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-earth-dark">
                      {space.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed">
                    {space.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-cream-dark/50">
                    <div>
                      <span className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-bold mb-2">Fasilitas Standar</span>
                      <ul className="space-y-1.5">
                        {space.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-earth-dark font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-bold mb-2">Paling Cocok Untuk</span>
                      <ul className="space-y-1.5">
                        {space.suitedFor.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-earth-muted font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-warm shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a 
                      href={getWhatsAppSpaceLink(space.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase bg-emerald-800 hover:bg-emerald-900 text-cream-light py-3.5 px-6 rounded-full transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-cream-light fill-cream-light" />
                      Tanyakan Tanggal via WA
                    </a>
                    
                    <button 
                      onClick={() => {
                        setSelectedSpaceId(space.id);
                        const calcEl = document.getElementById("quote-calculator");
                        if (calcEl) {
                          calcEl.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider uppercase border-b border-earth-dark/40 hover:border-earth-dark text-earth-dark font-semibold py-1 transition-all"
                    >
                      Kalkulasikan Biaya Sewa
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Interactive Reservation Package & Budget Calculator */}
      <section 
        id="quote-calculator"
        className="max-w-7xl mx-auto px-6 md:px-12 mt-28 relative"
      >
        <div className="absolute inset-0 bg-cream-warm/15 rounded-[3rem] border border-cream-dark/60 pointer-events-none" />
        
        <div className="p-8 sm:p-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column Input fields */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-accent-warm uppercase tracking-[0.2em] font-semibold">INTERACTIVE CONFIGURATOR</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-earth-dark">
                Simulasi Biaya &amp; Paket Sukarela
              </h2>
              <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed">
                Rancang rincian dan kebutuhan penunjang acara Anda di bawah ini untuk memperoleh kalkulasi kasar instan tanpa komitmen.
              </p>
            </div>

            {/* Input Selection List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Space Selection */}
              <div className="space-y-2">
                <label className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">Pilih Area Lalana</label>
                <div className="relative">
                  <select
                    value={selectedSpaceId}
                    onChange={(e) => setSelectedSpaceId(e.target.value)}
                    className="w-full bg-cream-light font-sans text-xs p-3.5 pr-10 rounded-xl border border-cream-dark focus:outline-none focus:border-earth-dark focus:bg-white transition-all appearance-none cursor-pointer text-earth-dark font-medium"
                  >
                    {CAFE_SPACES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-earth-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Event Type Selection */}
              <div className="space-y-2">
                <label className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">Tipe Pesta / Acara</label>
                <div className="relative">
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-cream-light font-sans text-xs p-3.5 pr-10 rounded-xl border border-cream-dark focus:outline-none focus:border-earth-dark focus:bg-white transition-all appearance-none cursor-pointer text-earth-dark font-medium"
                  >
                    <option value="Intimate Wedding / Akad">Pernikahan Intim / Akad</option>
                    <option value="Lokakarya Kreatif / Kriya">Lokakarya Kreatif / Kriya</option>
                    <option value="Gathering Komunitas">Pertemuan Kolektif / Sharing Session</option>
                    <option value="Sesi Foto / Video Komersial">Sesi Foto / Video Komersial</option>
                    <option value="Sesi Ulang Tahun Intim">Sesi Ulang Tahun Intim</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-earth-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Hours range slider representation */}
              <div className="space-y-3 bg-cream-warm/5 p-5 rounded-xl border border-cream-dark/50 transition-colors hover:border-cream-dark">
                <div className="flex justify-between items-center">
                  <label className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">Durasi Sewa</label>
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-800/10 px-2 py-0.5 rounded">{hours} Jam</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-1 bg-cream-dark/80 rounded-lg appearance-none cursor-pointer accent-earth-dark focus:outline-none"
                />
                <p className="text-[10px] text-earth-muted/80 font-light">* Sudah termasuk loading barang di H-1.</p>
              </div>

              {/* Guests Count Input selector representation */}
              <div className="space-y-3 bg-cream-warm/5 p-5 rounded-xl border border-cream-dark/50 transition-colors hover:border-cream-dark">
                <div className="flex justify-between items-center">
                  <label className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">Estimasi Hadirin</label>
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-800/10 px-2 py-0.5 rounded">{guestsCount} Tamu</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full h-1 bg-cream-dark/80 rounded-lg appearance-none cursor-pointer accent-earth-dark focus:outline-none"
                />
                <p className="text-[10px] text-earth-muted/80 font-light">* Penataan sesuai protokol sirkulasi udara.</p>
              </div>

            </div>

            {/* Extras Checkbox choices */}
            <div className="space-y-3">
              <span className="block font-mono text-[9px] text-earth-muted uppercase tracking-wider font-semibold">Layanan Tambahan (Opsional)</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* 1. unlimitedBeverages */}
                <label className={`group flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  extras.unlimitedBeverages 
                    ? "bg-emerald-950/[0.03] border-emerald-800/35 shadow-sm" 
                    : "bg-cream-light/20 border-cream-dark/60 hover:bg-cream-warm/15 hover:border-earth-muted"
                }`}>
                  <input
                    type="checkbox"
                    checked={extras.unlimitedBeverages}
                    onChange={(e) => setExtras(prev => ({ ...prev, unlimitedBeverages: e.target.checked }))}
                    className="sr-only"
                  />
                  <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    extras.unlimitedBeverages 
                      ? "border-emerald-800 bg-emerald-800 text-cream-light" 
                      : "border-cream-dark bg-white text-transparent group-hover:border-earth-muted"
                  }`}>
                    {extras.unlimitedBeverages && <Check className="w-2.5 h-2.5 stroke-[3.5]" />}
                  </div>
                  <div className="text-left leading-tight space-y-0.5">
                    <span className="block font-serif text-xs font-medium text-earth-dark transition-colors group-hover:text-black">
                      Sajian Kopi &amp; Teh (Unlimited)
                    </span>
                    <span className="block text-[9.5px] text-earth-muted/85 font-light leading-snug">
                      Seduhan sepuasnya bagi seluruh tamu undangan.
                    </span>
                  </div>
                </label>

                {/* 2. botanicalDecor */}
                <label className={`group flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  extras.botanicalDecor 
                    ? "bg-emerald-950/[0.03] border-emerald-800/35 shadow-sm" 
                    : "bg-cream-light/20 border-cream-dark/60 hover:bg-cream-warm/15 hover:border-earth-muted"
                }`}>
                  <input
                    type="checkbox"
                    checked={extras.botanicalDecor}
                    onChange={(e) => setExtras(prev => ({ ...prev, botanicalDecor: e.target.checked }))}
                    className="sr-only"
                  />
                  <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    extras.botanicalDecor 
                      ? "border-emerald-800 bg-emerald-800 text-cream-light" 
                      : "border-cream-dark bg-white text-transparent group-hover:border-earth-muted"
                  }`}>
                    {extras.botanicalDecor && <Check className="w-2.5 h-2.5 stroke-[3.5]" />}
                  </div>
                  <div className="text-left leading-tight space-y-0.5">
                    <span className="block font-serif text-xs font-medium text-earth-dark transition-colors group-hover:text-black">
                      Foliage &amp; Botanical Decor
                    </span>
                    <span className="block text-[9.5px] text-earth-muted/85 font-light leading-snug">
                      Penambahan bunga liar, pakis segundukan, &amp; lampion.
                    </span>
                  </div>
                </label>

                {/* 3. workshopMaterial */}
                <label className={`group flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  extras.workshopMaterial 
                    ? "bg-emerald-950/[0.03] border-emerald-800/35 shadow-sm" 
                    : "bg-cream-light/20 border-cream-dark/60 hover:bg-cream-warm/15 hover:border-earth-muted"
                }`}>
                  <input
                    type="checkbox"
                    checked={extras.workshopMaterial}
                    onChange={(e) => setExtras(prev => ({ ...prev, workshopMaterial: e.target.checked }))}
                    className="sr-only"
                  />
                  <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    extras.workshopMaterial 
                      ? "border-emerald-800 bg-emerald-800 text-cream-light" 
                      : "border-cream-dark bg-white text-transparent group-hover:border-earth-muted"
                  }`}>
                    {extras.workshopMaterial && <Check className="w-2.5 h-2.5 stroke-[3.5]" />}
                  </div>
                  <div className="text-left leading-tight space-y-0.5">
                    <span className="block font-serif text-xs font-medium text-earth-dark transition-colors group-hover:text-black">
                      Alat, Cetakan, &amp; Bahan Kriya
                    </span>
                    <span className="block text-[9.5px] text-earth-muted/85 font-light leading-snug">
                      Seluruh bahan tanah liat, pewarnaan, cat atau kuas.
                    </span>
                  </div>
                </label>

                {/* 4. acousticEquipment */}
                <label className={`group flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  extras.acousticEquipment 
                    ? "bg-emerald-950/[0.03] border-emerald-800/35 shadow-sm" 
                    : "bg-cream-light/20 border-cream-dark/60 hover:bg-cream-warm/15 hover:border-earth-muted"
                }`}>
                  <input
                    type="checkbox"
                    checked={extras.acousticEquipment}
                    onChange={(e) => setExtras(prev => ({ ...prev, acousticEquipment: e.target.checked }))}
                    className="sr-only"
                  />
                  <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    extras.acousticEquipment 
                      ? "border-emerald-800 bg-emerald-800 text-cream-light" 
                      : "border-cream-dark bg-white text-transparent group-hover:border-earth-muted"
                  }`}>
                    {extras.acousticEquipment && <Check className="w-2.5 h-2.5 stroke-[3.5]" />}
                  </div>
                  <div className="text-left leading-tight space-y-0.5">
                    <span className="block font-serif text-xs font-medium text-earth-dark transition-colors group-hover:text-black">
                      Paket Akustik Sunyi (Set Ambient)
                    </span>
                    <span className="block text-[9.5px] text-earth-muted/85 font-light leading-snug">
                      Gitar nirkabel, pengeras suara lembut, mikrofon.
                    </span>
                  </div>
                </label>

              </div>
            </div>

          </div>

          {/* Right Column Output Summary display formatted as stylized ticket */}
          <div className="lg:col-span-5 bg-earth-dark text-cream-light p-7 sm:p-8 rounded-[2.5rem] flex flex-col justify-between border border-earth-muted/30 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Ticket Tear Mock Cutouts (Visible only on desktop scale screens for refined touch) */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cream-light border-r border-cream-dark/20 z-10 hidden lg:block" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cream-light border-l border-cream-dark/20 z-10 hidden lg:block" />

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-warm animate-pulse" />
                <span className="font-mono text-[9px] text-accent-warm uppercase tracking-widest font-semibold block">PACKAGING QUOTE</span>
              </div>
              
              <div className="border-b border-cream-light/10 pb-4">
                <span className="block text-[9px] uppercase tracking-wider text-accent-warm/80 font-mono mb-1">AREA PILIHAN</span>
                <h3 className="font-serif text-lg font-light text-cream-warm">{currentSpace.title}</h3>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex justify-between font-sans text-xs text-cream-warm/75">
                  <span className="font-light">Sewa Dasar ({hours} Jam)</span>
                  <span className="font-mono font-medium text-cream-light">{pricingCalculation.baseTotalFormatted}</span>
                </div>

                <div className="flex justify-between font-sans text-xs text-cream-warm/75">
                  <span className="font-light">Layanan Tambahan</span>
                  <span className="font-mono font-medium text-cream-light">{pricingCalculation.extrasTotalFormatted}</span>
                </div>

                {pricingCalculation.itemizedList.length > 0 && (
                  <div className="space-y-1.5 py-2.5 px-3 bg-white/5 rounded-xl border border-white/5 mt-2">
                    <span className="block font-mono text-[8px] text-accent-warm uppercase tracking-wider font-semibold">Rincian Ekstra:</span>
                    <div className="space-y-1 max-h-24 overflow-y-auto pr-1">
                      {pricingCalculation.itemizedList.map((item, id) => (
                        <span key={id} className="block font-sans text-[9.5px] text-cream-warm/70 font-light truncate leading-relaxed">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Separator Tear line */}
            <div className="border-t border-dashed border-cream-light/20 my-2" />

            <div className="space-y-5">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-[11px] text-cream-warm/80 font-medium uppercase tracking-wider">Estimasi Total</span>
                <span className="font-mono text-3xl font-bold text-accent-warm tracking-tight">{pricingCalculation.grandTotalFormatted}</span>
              </div>
              <p className="font-sans text-[9.5px] text-cream-warm/50 leading-relaxed font-light">
                * Angka di atas merupakan biaya kasar awal. Tarif resmi sewa dapat bervariasi bergantung penataan interior kustom acara Anda.
              </p>

              <button
                onClick={handleSendQuoteWA}
                className="w-full inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase bg-emerald-800 hover:bg-emerald-700 text-cream-light py-4 rounded-full transition-all cursor-pointer shadow-md duration-300 transform active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-cream-light fill-cream-light shrink-0" />
                Sambut Tanggal via WhatsApp
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Structured Guidelines and FAQ Accordions */}
      <section className="max-w-4xl mx-auto px-6 mt-28">
        <div className="text-center space-y-3 mb-12">
          <span className="font-mono text-[9px] text-earth-muted uppercase tracking-[0.25em]">ACARA ATURAN &amp; FAQ</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-earth-dark">Pertanyaan &amp; Regulasi Ruang Hening</h2>
          <p className="font-sans text-xs text-earth-muted font-light max-w-md mx-auto">
            Pelajari asas-asas dasar ketenangan Lalana sebelum mematangkan janji temu bersama koordinator kriya kami.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div 
                key={i} 
                className="bg-cream-warm/20 rounded-2xl border border-cream-dark/50 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-sm font-medium text-earth-dark cursor-pointer hover:bg-cream-warm/35 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-earth-muted transition-transform duration-300 shrink-0 ml-3 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 border-t border-cream-dark/30 font-sans text-xs text-earth-muted font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Closing invite notice */}
        <div className="mt-16 bg-earth-dark text-cream-light p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1 max-w-md">
            <span className="font-mono text-[8.5px] uppercase text-accent-warm tracking-wider font-semibold">TICKET &amp; RSVP SERVICE</span>
            <h4 className="font-serif text-lg font-light">Ingin Kunjungan Saja Terlebih Dahulu?</h4>
            <p className="font-sans text-[11px] text-cream-warm/75 font-light leading-relaxed">
              Dapatkan tiket masuk atau pesan slot meja sunyi untuk merasakan secara personal kenyamanan akustik alam Lalana Space.
            </p>
          </div>
          <button
            onClick={onOpenRSVP}
            className="w-full md:w-auto inline-flex items-center justify-center font-sans text-xs font-semibold tracking-widest uppercase bg-cream-light text-earth-dark py-3.5 px-6 rounded-full hover:bg-cream-warm transition-colors cursor-pointer"
          >
            Reservasi Slot Meja
          </button>
        </div>
      </section>

    </div>
  );
}
