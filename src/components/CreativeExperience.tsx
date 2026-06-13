import { motion } from "motion/react";
import { Palette, Layers, ArrowRight, Sparkles, Brush, HelpCircle } from "lucide-react";

interface CreativeExperienceProps {
  onExploreActivitiesClick: () => void;
}

export function CreativeExperience({ onExploreActivitiesClick }: CreativeExperienceProps) {
  return (
    <section id="creative-experience" className="py-20 sm:py-28 bg-cream-warm/10 border-t border-cream-dark/50 relative overflow-hidden text-left">
      {/* Decorative botanical backdrop mesh */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-primary-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-secondary-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-cream-dark/40 pb-12 mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary-accent font-semibold bg-primary-accent/10 px-3 py-1 rounded-full inline-block">
              More Than Just a Cafe
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-earth-dark leading-snug tracking-tight">
              Creative Experience <br />
              <span className="italic font-normal text-earth-muted">Melarut dalam Seni &amp; Alam</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed max-w-sm">
              Kami percaya kesegaran kopi pilihan terasa lebih sempurna jika dinikmati sambil mengasah imajinasi Anda. Hadirkan ketenangan lewat aktivitas kreatif terkurasi.
            </p>
          </div>
        </div>

        {/* INTERACTIVE CARDS LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Activity 1: Lukis Tepi Sawah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group bg-cream-light rounded-[2.5rem] border border-cream-dark/60 overflow-hidden flex flex-col justify-between hover:border-primary-accent/40 hover:shadow-lg transition-all duration-500"
          >
            <div>
              {/* Card Image Cover with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark/20">
                <img
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800"
                  alt="Lukis Tepi Sawah di Lalana Space"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 font-mono text-[8px] bg-primary-accent/90 text-cream-light px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  TERAPI ALAM &amp; KANVAS
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary-accent/10 rounded-xl text-primary-accent border border-primary-accent/20">
                    <Brush className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-earth-dark">Lukis Tepi Sawah</h3>
                </div>
                
                <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed">
                  Rasakan pengalaman meditatif melukis keindahan alam pedesaan langsung di tepi hamparan sawah hijau Bojongsoang yang segar. Kami menyediakan **seluruh alat lukis lengkap**—kanvas, kuas premium, cat akrilik berbagai warna, hingga palet dan celemek pelindung. Anda hanya perlu membawa imajinasi dan kedamaian hati.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-cream-warm text-earth-muted px-2.5 py-1 rounded-md">
                    Alat Lukis Disediakan
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-cream-warm text-earth-muted px-2.5 py-1 rounded-md">
                    Pemandangan Sawah Langsung
                  </span>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <button
                onClick={onExploreActivitiesClick}
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-widest uppercase border border-earth-dark/40 hover:bg-earth-dark hover:text-cream-light hover:border-earth-dark py-3 px-6 rounded-full transition-all duration-305 cursor-pointer font-semibold"
              >
                Rincian Lukis Sawah
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Activity 2: Clay Play */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-cream-light rounded-[2.5rem] border border-cream-dark/60 overflow-hidden flex flex-col justify-between hover:border-secondary-accent/40 hover:shadow-lg transition-all duration-500"
          >
            <div>
              {/* Card Image Cover with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark/20">
                <img
                  src="https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&q=80&w=800"
                  alt="Clay Play di Lalana Space"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 font-mono text-[8px] bg-secondary-accent text-earth-dark px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  SENSORY TOK-SENTUHAN
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-secondary-accent/10 rounded-xl text-secondary-accent border border-secondary-accent/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-earth-dark">Clay Play</h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed">
                  Bentuk kedamaian batin Anda secara harfiah melalui tanah liat alami yang dingin dan menenangkan. Sesi hands-on yang seru, rileks, dan ramah pemula di mana Anda dibebaskan mencetak, membentuk, dan mendekorasi objek tanah liat kesayangan Anda—mulai dari cangkir asimetris, wadah dupa, hingga pajangan estetik mungil.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-cream-warm text-earth-muted px-2.5 py-1 rounded-md">
                    Tanah Liat Organik Pilihan
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-cream-warm text-earth-muted px-2.5 py-1 rounded-md">
                    Hands-On Kreatif &amp; Santai
                  </span>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <button
                onClick={onExploreActivitiesClick}
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-widest uppercase border border-earth-dark/40 hover:bg-earth-dark hover:text-cream-light hover:border-earth-dark py-3 px-6 rounded-full transition-all duration-305 cursor-pointer font-semibold"
              >
                Rincian Clay Play
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* CTA ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 rounded-3xl border border-dashed border-cream-dark/80 bg-cream-warm/20 gap-6">
          <div className="flex items-start gap-4 text-left">
            <span className="p-3 bg-primary-accent/10 text-primary-accent rounded-2xl shrink-0 mt-1">
              <Sparkles className="w-5 h-5 fill-primary-accent/10" />
            </span>
            <div className="space-y-1">
              <h4 className="font-serif text-base font-light text-earth-dark">Manjakan Sisi Kreatif Anda</h4>
              <p className="font-sans text-xs text-earth-muted leading-relaxed font-light max-w-xl">
                Setiap aktivitas terbuka untuk individu maupun kelompok, dikawal dengan instruktur ramah yang siap menemani langkah per langkah petualangan seni Anda.
              </p>
            </div>
          </div>
          
          <button
            onClick={onExploreActivitiesClick}
            id="explore-activities-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase bg-primary-accent text-cream-light hover:bg-primary-accent/90 px-8 py-4.5 rounded-full shadow-md font-semibold shrink-0 cursor-pointer transition-all duration-300 active:scale-98"
          >
            Explore Activities
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
