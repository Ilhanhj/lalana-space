import { motion } from "motion/react";
import { CAFE_SPACES } from "../data";
import { MapPin, Users, Coins, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

export function SpaceRentalDetails() {
  const getWhatsAppSpaceLink = (spaceTitle: string) => {
    const text = `Halo Lalana Space, saya tertarik untuk menyelenggarakan acara "${spaceTitle}" di Lalana Space. Mohon info ketersediaan tempat dan prosedur reservasinya. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="space-rentals"
      className="py-24 sm:py-32 bg-cream-light border-t border-cream-dark/40 relative overflow-hidden"
    >
      {/* Decorative blurred lights */}
      <div className="absolute right-10 bottom-10 w-64 h-64 bg-cream-warm/80 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/3 w-80 h-80 bg-cream-dark/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 sm:mb-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-earth-muted mb-4">
            Sanctuary Sensorik &amp; Kriya
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-earth-dark tracking-tight leading-tight">
            Sewa Ruang &amp; <br />
            <span className="italic font-normal font-serif text-earth-muted">Acara Spesial Anda.</span>
          </h2>
          <div className="h-[1px] w-24 bg-cream-dark/80 mt-6 mb-8" />
          <p className="font-sans text-xs sm:text-sm text-earth-muted leading-relaxed font-light max-w-2xl">
            Lalana Space tidak sekadar kafe biasa. Kami menyediakan area privat bernuansa alami, berperedam suara, bermeja solid daur ulang, serta bertema pencahayaan redup yang damai untuk menyelenggarakan lokakarya kriya, pertunangan intim, selebrasi lambat, atau sesi fotografi estetis.
          </p>
        </div>

        {/* Space Grid */}
        <div className="space-y-16 sm:space-y-24">
          {CAFE_SPACES.map((space, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                
                {/* Visual / Image Side with customized tilt & order depending on index */}
                <div className={`lg:col-span-6 overflow-hidden rounded-[2.5rem] border border-cream-dark shadow-2xl relative group ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-cream-dark">
                    <img
                      src={space.image}
                      alt={space.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[10%] brightness-[96%] transition-transform duration-[4000ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-earth-dark/5 mix-blend-overlay" />
                  </div>

                  {/* Top floating details overlay */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2.5">
                    <span className="bg-cream-light/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cream-dark/50 font-mono text-[9px] uppercase tracking-wider text-earth-dark font-semibold flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-earth-muted" />
                      {space.capacity}
                    </span>
                  </div>
                </div>

                {/* Text Content Details Side */}
                <div className={`lg:col-span-6 space-y-6 text-left ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                  
                  {/* Space Icon Name Tagline */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-wider text-accent-warm uppercase font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-warm inline-block animate-pulse" />
                      RESERVASI ACARA LALANA • TERBATAS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-earth-dark">
                      {space.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-earth-muted leading-relaxed font-light">
                    {space.description}
                  </p>

                  {/* Nested Bullet Specs Lists */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-cream-dark/50">
                    
                    {/* Column 1: Fitur Area */}
                    <div className="space-y-2.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-earth-muted block font-semibold">
                        Fasilitas Penunjang:
                      </span>
                      <ul className="space-y-1.5">
                        {space.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-earth-dark font-light">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Cocok Untuk Acara */}
                    <div className="space-y-2.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-earth-muted block font-semibold">
                        Sempurna Untuk:
                      </span>
                      <ul className="space-y-1.5">
                        {space.suitedFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-earth-muted font-light">
                            <span className="w-1 h-1 rounded-full bg-accent-warm mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Direct Link to WhatsApp button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a
                      id={`whatsapp-space-btn-${space.id}`}
                      href={getWhatsAppSpaceLink(space.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 font-sans text-xs tracking-widest uppercase bg-emerald-800 text-cream-light py-4 px-8 rounded-full hover:bg-emerald-900 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-cream-light" />
                      Konsultasikan Acara via WhatsApp
                    </a>

                    <a
                      href="#location"
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-earth-dark font-medium border-b border-earth-dark/40 hover:border-earth-dark py-1 transition-all"
                    >
                      Lihat Orientasi Denah
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Events held in cafe notice */}
        <div className="mt-20 sm:mt-28 p-8 bg-cream-warm/30 rounded-3xl border border-cream-dark/60 text-left relative overflow-hidden">
          <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-accent-warm/10 to-transparent pointer-events-none rounded-full" />
          
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-earth-muted">
              Komitmen Bebas Gawai
            </span>
            <span className="font-serif text-xl sm:text-2xl font-light text-earth-dark block">
              Ketentuan Tenang &amp; Unplugged Lalana
            </span>
            <p className="font-sans text-xs sm:text-sm text-earth-muted leading-relaxed font-light">
              Demi menjaga aura meditatif Lalana, seluruh penyelenggaraan acara berkomitmen tanpa polusi bising dan gawai pintar (unplugged policy) demi kedekatan interaksi sejati.
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Lalana%2C%20saya%20ingin%20berkonsultasi%20mengenai%20aturan%20unplugged%20gathering%20untuk%20rencana%20acara%20saya."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-bold border-b border-emerald-800 hover:border-emerald-950 transition-colors pb-0.5"
              >
                Konsultasi Aturan via WhatsApp
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
