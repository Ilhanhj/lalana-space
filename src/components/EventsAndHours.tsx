import { motion } from "motion/react";
import { Clock, Music, Calendar, Users, Heart, Award, ArrowRight, Sparkles, Utensils } from "lucide-react";

interface EventsAndHoursProps {
  onRentSpaceClick: () => void;
  onOpenRSVP: () => void;
}

export function EventsAndHours({ onRentSpaceClick, onOpenRSVP }: EventsAndHoursProps) {
  const packages = [
    {
      id: "wedding-engagement",
      title: "Wedding & Engagement Packages",
      icon: Heart,
      badge: "Terpopuler",
      description: "Rayakan janji suci dan pertunangan khidmat Anda dengan latar belakang pemandangan sawah hijau yang memukau. Sempurna untuk sirkulasi udara yang menyegarkan di Bandung Selatan.",
      capacity: "Sampai 200 Orang",
      features: [
        "Sewa seluruh area semi-outdoor & taman",
        "Pilihan Prasmanan (Buffet) Nusantara & Barat",
        "Set dekorasi bunga alami & daun segar",
        "Sistem tata suara akustik & mikrofon nirkabel"
      ]
    },
    {
      id: "birthdays-celebrations",
      title: "Intimate Birthday Celebrations",
      icon: Sparkles,
      badge: "Cozy Vibe",
      description: "Rayakan pertambahan usia bersama teman terdekat dan keluarga dalam kehangatan suasana asri. Lengkap dengan dekorasi lampion dan hidangan istimewa.",
      capacity: "20 - 100 Orang",
      features: [
        "Sudut area VIP khusus bernuansa alam",
        "Menu hidangan khusus & mocktail refreshing",
        "Fleksibilitas penataan dekorasi ulang tahun",
        "Peralatan audio pemutaran musik pilihan"
      ]
    },
    {
      id: "corporate-gatherings",
      title: "Corporate & Community Gatherings",
      icon: Users,
      badge: "Profesional",
      description: "Adakan pertemuan kantor, rapat kerja, reuni keluarga besar, atau seminar komunitas. Ruang yang tenang membantu koordinasi dan fokus interaksi yang tinggi.",
      capacity: "Sampai 200 Orang",
      features: [
        "Proyektor nirkabel & layar presentasi lebar",
        "Paket makan siang/malam prasmanan (buffet) prasetya",
        "Rehat kopi (Coffee break) dengan kudapan premium",
        "Layanan asisten acara khusus yang sigap"
      ]
    },
    {
      id: "buffet-services",
      title: "Buffet & Prasmanan Kustom",
      icon: Utensils,
      badge: "Kuliner",
      description: "Sajian prasmanan premium yang dikurasi langsung oleh koki terbaik kami. Menggabungkan resep autentik Nusantara (Tutug Oncom, Ayam Bakar) dengan kegemaran Barat pilihan Anda.",
      capacity: "Mulai 30 Pax",
      features: [
        "Pilihan hidangan utama bervariasi",
        "Aneka pencuci mulut, buah segar, & dessert",
        "Stasiun minuman kopi & teh seduh segar",
        "Layanan pelayan profesional & ramah"
      ]
    }
  ];

  return (
    <section id="events-hours" className="py-20 sm:py-28 bg-cream-warm/15 border-t border-cream-dark/50 relative overflow-hidden text-left">
      {/* Decorative backdrop blobs */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-cream-dark/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-10 w-96 h-96 bg-primary-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-cream-dark/50 pb-12 mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary-accent font-semibold bg-primary-accent/10 px-3 py-1 rounded-full inline-block">
              Jadwal &amp; Layanan Spesial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-earth-dark leading-snug tracking-tight">
              Nikmati Setiap Momen <br />
              <span className="italic font-normal text-earth-muted">Bersama Lalana Space</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed">
              Kami siap melayani kebutuhan kunjungan harian Anda dengan menu kuliner andalan kami maupun perhelatan momen-momen paling sakral dan komunal berskala besar di Bandung Selatan.
            </p>
          </div>
        </div>

        {/* SECTION 1: OPENING HOURS & LIVE MUSIC CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Card Left: Opening Hours */}
          <div className="lg:col-span-6 bg-earth-dark text-cream-light p-8 sm:p-10 rounded-[2.5rem] border border-earth-muted/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/10 rounded-full filter blur-2xl group-hover:scale-110 transition-transform duration-700" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-secondary-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary-accent font-semibold">Jadwal Operasional Harian</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug text-cream-warm">
                Waktu Kedatangan Terbaik Anda
              </h3>
              <p className="font-sans text-xs text-cream-warm/75 font-light leading-relaxed">
                Kami menyambut Anda setiap hari untuk bersantap, bersenda gurau, atau sekadar bekerja tenang menikmati hawa sejuk Bojongsoang.
              </p>

              <div className="space-y-4 pt-4 border-t border-cream-light/10">
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-xs text-cream-warm/70 uppercase">Senin – Jumat :</span>
                  <span className="font-sans text-sm font-semibold text-cream-light">08:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-xs text-cream-warm/70 uppercase">Sabtu – Minggu :</span>
                  <span className="font-sans text-sm font-semibold text-secondary-accent">07:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>
            
            <p className="font-sans text-[10px] text-cream-warm/50 leading-relaxed font-light mt-8 relative z-10">
              * Jam buka akhir pekan lebih pagi untuk menyambut kegiatan lari pagi atau pesepeda yang menikmati udara fajar sawah.
            </p>
          </div>

          {/* Card Right: Live Music */}
          <div className="lg:col-span-6 bg-cream-light p-8 sm:p-10 rounded-[2.5rem] border border-cream-dark/60 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-accent/5 rounded-full filter blur-2xl group-hover:scale-110 transition-transform duration-700" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <Music className="w-5 h-5 text-primary-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary-accent font-semibold">Senandung Senja</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug text-earth-dark">
                Weekend Live Music
              </h3>
              <p className="font-sans text-xs text-earth-muted font-light leading-relaxed">
                Segarkan pikiran Anda dengan pertunjukan musik akustik langsung yang syahdu di sore hari, ditemani pendar warna kuning senja di atas hamparan sawah hijau.
              </p>

              <div className="bg-primary-accent/5 rounded-2xl p-6 border border-primary-accent/15 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary-accent font-bold block">Jadwal Pertunjukan</span>
                <p className="font-serif text-lg text-earth-dark font-light">
                  Setiap Hari <span className="font-normal text-primary-accent">Sabtu &amp; Minggu</span>
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-800 animate-pulse" />
                  <span className="font-mono text-xs text-earth-dark font-bold">Mulai Jam 17:00 WIB</span>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={onOpenRSVP}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 font-sans text-xs tracking-widest uppercase bg-primary-accent text-cream-light py-4 px-6 rounded-full hover:bg-primary-accent/90 transition-all font-semibold"
              >
                Reservasi Meja Malam Minggu
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* SECTION 2: SPECIAL EVENTS & PACKAGES GRID */}
        <div className="space-y-12">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-earth-muted font-bold block">
              LAYANAN EVENT SPESIAL (KAPASITAS HINGGA 200 PAX)
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-earth-dark leading-tight">
              Paket Acara &amp; Prasmanan Kustom
            </h3>
            <p className="font-sans text-xs sm:text-sm text-earth-muted font-light max-w-xl">
              Kami mewadahi dan menyediakan dekorasi botani, fasilitas katering prasmanan premium, serta kapasitas luas hingga 200 orang untuk menyukseskan acara impian Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {packages.map((pkg, idx) => {
              const IconComp = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="bg-cream-light p-6 sm:p-8 rounded-[2rem] border border-cream-dark/60 shadow-sm flex flex-col justify-between transition-all hover:border-primary-accent/40 hover:shadow-md"
                >
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-earth-dark/5 rounded-2xl border border-cream-dark/40">
                        <IconComp className="w-5 h-5 text-primary-accent" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-primary-accent/10 text-primary-accent font-semibold px-2.5 py-0.5 rounded-full">
                        {pkg.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-light text-earth-dark">{pkg.title}</h4>
                      <span className="font-mono text-[10px] text-earth-muted uppercase tracking-wider block font-bold">
                        Kapasitas: {pkg.capacity}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-earth-muted font-light leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="pt-4 border-t border-cream-dark/40 space-y-2">
                      <span className="font-mono text-[9px] uppercase text-earth-muted tracking-wider block font-bold">Fasilitas Termasuk:</span>
                      <ul className="grid grid-cols-1 gap-2">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-earth-dark font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 text-left">
                    <button
                      onClick={onRentSpaceClick}
                      className="inline-flex items-center gap-1.5 font-mono text-[9.5px] tracking-wider uppercase border-b border-primary-accent/40 hover:border-primary-accent text-primary-accent font-semibold py-1 transition-all"
                    >
                      Hubungi Manajer Event &amp; Konsultasi Paket
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
