import { motion } from "motion/react";
import { Compass, Sparkles } from "lucide-react";

export function AboutConcept() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-cream-light relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-cream-warm/60 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Simple, Bold Brand Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Punchy Text */}
          <div className="lg:col-span-6 space-y-6 text-left font-bold">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary-accent font-semibold bg-primary-accent/10 px-3 py-1 rounded-full inline-block">
              Tentang Lalana Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-earth-dark leading-tight tracking-tight">
              Oase Asri Tepi Sawah <br />
              <span className="italic font-normal text-earth-muted">Bojongsoang, Bandung Selatan</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-earth-muted leading-relaxed font-light max-w-lg">
              Lalana Space memadukan kedamaian suasana alam pedesaan dengan kehangatan restu kuliner Nusantara dan Barat. Terletak di tepi hamparan sawah Bojongsoang, ruang sosial kami menawarkan keteduhan tak tertandingi serta kapasitas luas hingga 200 tamu—menjadikannya tempat sempurna untuk merayakan momen berharga Anda.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-earth-dark font-medium">Pemandangan Sawah Asri</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-earth-dark font-medium">Kapasitas 200 Pax</span>
              </div>
            </div>
          </div>

          {/* Right: Beautiful Large Coffee & Space visuals */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-cream-dark shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
                    alt="Lalana Brew"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="col-span-5 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden border border-cream-dark shadow-md"
                >
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400"
                    alt="Lalana Space Spot"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Minimal Sensory Grid */}
        <div className="mt-16 pt-10 border-t border-cream-dark/50 grid grid-cols-3 gap-6 text-center">
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-light text-earth-dark">Sawah Hijau</span>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-earth-muted mt-2">Pemandangan Alam Pedesaan</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-light text-earth-dark">200 Pax</span>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-earth-muted mt-2">Kapasitas Sempurna Acara</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-light text-earth-dark">Bojongsoang</span>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-earth-muted mt-2">Bandung Selatan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
