import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Brush, 
  Layers, 
  Sparkles, 
  MapPin, 
  Palette, 
  CheckCircle, 
  Info, 
  Heart,
  Smile,
  Timer,
  BookOpen
} from "lucide-react";
import confetti from "canvas-confetti";

interface ActivityPageProps {
  onBackToHome: () => void;
}

export function ActivityPage({ onBackToHome }: ActivityPageProps) {
  const [activeTab, setActiveTab] = useState<"all" | "lukis" | "clay">("all");

  const triggerConfettiEffect = () => {
    // Elegant Multi-directional Confetti Cannon burst
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#1ab58b", "#f5a534", "#111827", "#fef3c7"]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#1ab58b", "#f5a534", "#111827", "#fef3c7"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const activities = [
    {
      id: "lukis",
      title: "Lukis Tepi Sawah",
      tagline: "Therapeutic Painting Session",
      desc: "Larutkan penat harian Anda lewat goresan warna di atas kanvas dengan latar belakang pemandangan persawahan Bojongsoang yang hijau mendamaikan. Tidak perlu khawatir tentang persiapan apa pun—kami menyediakan seluruh peralatan melukis premium yang Anda butuhkan secara lengkap.",
      accent: "#1ab58b", // #1ab58b Primary Emerald Accent
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
      vibe: "Meditatif, Sejuk, Inspirasional",
      duration: "90 - 120 Menit",
      includes: [
        "Kanvas standar 30x40 cm",
        "Set kuas cat akrilik flat & round berbagai ukuran",
        "Cat akrilik premium kaya pigmen",
        "Palet kayu estetik & celemek pelindung noda",
        "Minuman penyegar gratis (mocktail / es teh herbal)",
        "Mini-guide petunjuk blending warna & teknik lukis dasar"
      ],
      process: [
        "Pilih spot duduk favorit Anda di tepi sawah berangin sejuk.",
        "Kru Lalana akan menyiapkan easel (penyangga kanvas), celemek, cat, dan palet.",
        "Mulai goreskan warna ditemani alunan musik akustik alam dan semilir angin asri Bandung Selatan."
      ]
    },
    {
      id: "clay",
      title: "Clay Play",
      tagline: "Sesi Kreativitas Tanah Liat",
      desc: "Temukan keasyikan tak terduga dalam membentuk adonan tanah liat dingin mengalir secara hands-on. Bentuk kedamaian batin Anda secara harfiah melalui media ekspresi tiga dimensi yang menyenangkan, bebas dari polusi bising gawai.",
      accent: "#f5a534", // #f5a534 Secondary Amber Accent
      image: "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&q=80&w=800",
      vibe: "Taktil, Seru, Kreatif, Interaktif",
      duration: "60 - 90 Menit",
      includes: [
        "1 kg tanah liat organik berkualitas tinggi",
        "Set pisau ukir, roller kayu, & sculpting tools lengkap",
        "Cetakan bentuk estetik bervariasi",
        "Spons basah khusus penghalus tekstur",
        "Kotak pembungkus aman untuk membawa pulang hasil karya",
        "Pilihan taburan pewarna kering atau cat khusus aksen"
      ],
      process: [
        "Terima gumpalan tanah liat dingin nan murni dari kru kami.",
        "Uleni tanah liat, bentuk sesuai khayalan atau buat fungsional (piring lilin, cangkir teh, wadah perhiasan).",
        "Hias hasil karya memakai sculpting tool dan bawa pulang karya orisinal buatan tangan sendiri!"
      ]
    }
  ];

  const filteredActivities = activeTab === "all" ? activities : activities.filter(a => a.id === activeTab);

  return (
    <div className="min-h-screen bg-cream-light text-earth-dark selection:bg-cream-dark pb-32 relative text-left">
      
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#1ab58b]/5 to-transparent pointer-events-none" />

      {/* EDITORIAL TOP BANNER */}
      <section className="relative pt-32 pb-16 bg-earth-dark text-cream-light overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1ab58b] rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#f5a534] rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#f5a534] hover:text-[#f5a534]/80 font-mono mb-8 cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </button>

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#f5a534] font-semibold bg-earth-muted/50 px-3 py-1 rounded-full inline-block">
              Lalana Creative Sessions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              Aktivitas Kreatif &amp; <br />
              <span className="italic font-normal text-cream-warm">Jeda Terapi Seni</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-cream-warm/70 font-light leading-relaxed max-w-lg">
              Lepaskan kepenatan dan temukan kembali koneksi mendalam dengan diri sendiri melalui dua aktivitas seru: melukis sawah dan bermain adonan tanah liat estetis.
            </p>
          </div>
        </div>
      </section>

      {/* TABS SELECTOR */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="flex justify-center sm:justify-start gap-2 border-b border-cream-dark/60 pb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-earth-dark text-cream-light font-bold"
                : "bg-cream-warm/40 text-earth-muted hover:bg-cream-warm hover:text-earth-dark"
            }`}
          >
            Semua Aktivitas ({activities.length})
          </button>
          <button
            onClick={() => setActiveTab("lukis")}
            className={`px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "lukis"
                ? "bg-earth-dark text-cream-light font-bold"
                : "bg-cream-warm/40 text-earth-muted hover:bg-cream-warm hover:text-earth-dark"
            }`}
          >
            <Brush className="w-3.5 h-3.5 text-[#1ab58b]" />
            Lukis Sawah
          </button>
          <button
            onClick={() => setActiveTab("clay")}
            className={`px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "clay"
                ? "bg-earth-dark text-cream-light font-bold"
                : "bg-cream-warm/40 text-earth-muted hover:bg-cream-warm hover:text-earth-dark"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#f5a534]" />
            Clay Play
          </button>
        </div>
      </section>

      {/* ACTIVITIES DETAILS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12 space-y-20">
        {filteredActivities.map((act) => {
          const isLukis = act.id === "lukis";
          const accentColorClass = isLukis ? "text-[#1ab58b]" : "text-[#f5a534]";
          const accentBgClass = isLukis ? "bg-[#1ab58b]/10 border-[#1ab58b]/30" : "bg-[#f5a534]/10 border-[#f5a534]/30";
          const accentBadgeClass = isLukis ? "bg-[#1ab58b]" : "bg-[#f5a534]";
          const accentBadgeText = isLukis ? "text-cream-light" : "text-earth-dark";

          return (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              key={act.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-cream-dark/40 pb-16 last:border-0"
            >
              {/* Left Column: Rich Photo & Experience details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-cream-dark/60 shadow-md">
                  <img
                    src={act.image}
                    alt={act.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-6 left-6 font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-sm ${accentBadgeClass} ${accentBadgeText}`}>
                    {act.tagline}
                  </div>
                </div>

                {/* Vibe / Timing Grid Card */}
                <div className="grid grid-cols-2 gap-4 bg-cream-warm/30 p-6 rounded-[2rem] border border-cream-dark/50">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Vibe Alami</span>
                    <p className="font-serif text-sm font-medium text-earth-dark flex items-center gap-1.5">
                      <Smile className={`w-4 h-4 ${accentColorClass}`} />
                      {act.vibe}
                    </p>
                  </div>
                  <div className="space-y-1 border-l border-cream-dark/50 pl-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Estimasi Durasi</span>
                    <p className="font-serif text-sm font-medium text-earth-dark flex items-center gap-1.5">
                      <Timer className={`w-4 h-4 ${accentColorClass}`} />
                      {act.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Description, what's included list, and interactive CTA */}
              <div className="lg:col-span-6 space-y-8 flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-2xl border ${accentBgClass} ${accentColorClass}`}>
                      {isLukis ? <Brush className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-earth-dark tracking-tight">
                      {act.title}
                    </h2>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-earth-muted leading-relaxed font-light">
                    {act.desc}
                  </p>
                </div>

                {/* Facilities / Includes Block */}
                <div className="space-y-4 bg-cream-light p-6 rounded-[2rem] border border-cream-dark/60">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-earth-muted font-bold block flex items-center gap-1.5">
                    <Info className={`w-3.5 h-3.5 ${accentColorClass}`} />
                    PERLENGKAPAN YANG DISEDIAKAN LENGKAP:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {act.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-earth-dark font-light leading-snug">
                        <CheckCircle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${accentColorClass}`} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                <div className="space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-earth-muted font-bold block flex items-center gap-1.5">
                    <BookOpen className={`w-3.5 h-3.5 ${accentColorClass}`} />
                    ALUR KEGIATAN:
                  </span>
                  <div className="space-y-3">
                    {act.process.map((step, px) => (
                      <div key={px} className="flex gap-3 text-xs items-start font-light">
                        <span className={`font-mono font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border shrink-0 ${accentBgClass} ${accentColorClass}`}>
                          {px + 1}
                        </span>
                        <p className="text-earth-muted leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* THE MAGIC CONFETTI CTA ACTION */}
                <div className="pt-6 border-t border-cream-dark/50">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left space-y-1">
                      <span className="font-mono text-[9px] uppercase text-earth-muted block">Harga Paket Per Sesi</span>
                      <p className="font-serif text-lg font-light text-earth-dark">
                        Mulai <span className="font-medium text-emerald-800">Rp 75.000</span> <span className="text-xs text-earth-muted">/ paxnett</span>
                      </p>
                    </div>

                    <button
                      onClick={triggerConfettiEffect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase bg-earth-dark text-cream-light hover:bg-[#1ab58b] hover:text-cream-light px-8 py-4 px-6 rounded-full transition-all duration-300 font-semibold cursor-pointer active:scale-95 shadow-md"
                    >
                      Mulai Main &amp; Coba Sekarang
                      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse fill-amber-300/40" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CONFETTI BANNER FOR HIGHEST INTERACTIVE FUN */}
      <section className="bg-cream-warm/25 py-12 border-y border-cream-dark/60 mt-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h3 className="font-serif text-2xl font-light text-earth-dark">Butuh Aktivitas untuk Gathering Kelompok Besar?</h3>
          <p className="font-sans text-xs sm:text-sm text-earth-muted leading-relaxed font-light max-w-xl mx-auto">
            Hadirkan sesi kustom melukis bersama atau dekorasi pot tanah liat untuk perhelatan reuni, arisan, atau team building kantor. Bebas atur waktu sepuasnya untuk kelompok hingga 200 pax.
          </p>
          <div className="pt-2">
            <button
              onClick={triggerConfettiEffect}
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest bg-[#f5a534] text-earth-dark px-6 py-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all font-bold cursor-pointer"
            >
              Rayakan Bersama Kami
              <Sparkles className="w-4 h-4 fill-earth-dark text-earth-dark hover:text-white shrink-0" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
