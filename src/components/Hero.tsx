import { motion } from "motion/react";
import { MoveDown, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onScrollToAbout: () => void;
}

export function Hero({ onExploreClick, onScrollToAbout }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 bg-cream-light overflow-hidden pt-20"
    >
      {/* Subtle organic floating elements for peaceful vibe */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cream-warm rounded-full filter blur-3xl opacity-60 mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cream-dark/40 rounded-full filter blur-3xl opacity-45 mix-blend-multiply" />

      {/* Hero Visual Box Grid - Aesthetic Journal Concept */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Texts side */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Quiet Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-earth-muted/60" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-earth-muted font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-secondary-accent" />
              Menepi sejenak dari hiruk-pikuk
            </span>
          </motion.div>

          {/* Large Editorial Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-earth-dark leading-[1.08] tracking-tight"
          >
            Rasa &amp; Teduh di <br />
            <span className="italic font-normal font-serif text-earth-muted">Tepi Sawah.</span>
          </motion.h1>

          {/* Poetic Subheadline - simplified & short */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-sm sm:text-base text-earth-muted font-light max-w-md leading-relaxed"
          >
            Lalana Space adalah restoran, kafe, dan ruang sosial di Bojongsoang, Bandung Selatan. Nikmati suguhan kopi pilihan, hidangan lezat Nusantara &amp; Barat di tengah kedamaian pemandangan sawah asri.
          </motion.p>

          {/* Action Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="group relative font-sans text-xs tracking-[0.2em] uppercase bg-primary-accent text-cream-light py-4 px-8 rounded-full overflow-hidden transition-all duration-500 cursor-pointer shadow-lg shadow-primary-accent/15 hover:bg-primary-accent/90 hover:shadow-xl hover:shadow-primary-accent/20 hover:-translate-y-0.5 text-center font-semibold"
            >
              <span className="relative z-10">Reservasi Ruang</span>
            </button>

            <button
              id="hero-scroll-btn"
              onClick={onScrollToAbout}
              className="font-sans text-xs tracking-[0.2em] uppercase py-4 px-8 border border-earth-dark/20 text-earth-dark rounded-full hover:border-primary-accent hover:text-primary-accent hover:bg-primary-accent/5 transition-all duration-300 cursor-pointer text-center font-medium"
            >
              Selami Filosofi
            </button>
          </motion.div>

        </div>

        {/* Visual Showcase with Cool Overlapping Aesthetic Images (2 images instead of 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[420px] sm:min-h-[500px]"
        >
          {/* Main Frame Image */}
          <div className="relative w-11/12 max-w-xs sm:max-w-sm lg:max-w-none aspect-[4/5] rounded-[2rem] overflow-hidden border border-cream-dark shadow-2xl bg-cream-warm group z-10 hover:-translate-y-1 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1200"
              alt="Lalana Space Counter"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[15%] brightness-[96%] transition-transform duration-[4000ms] group-hover:scale-105"
            />
            {/* Soft film tint overlay */}
            <div className="absolute inset-0 bg-earth-dark/5 mix-blend-overlay" />
            
            {/* Tiny live operating details */}
            <div className="absolute bottom-5 left-5 bg-cream-light/85 backdrop-blur-md px-4 py-2.5 rounded-full border border-cream-dark/50 flex items-center gap-2 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-accent"></span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-earth-muted uppercase">Hari ini: 08:00 – 22:00 (Sab-Min 07:00 – 22:00)</span>
            </div>
          </div>

          {/* Overlapping back image (Organic leaf details - requested more images) */}
          <div className="absolute -left-12 bottom-6 w-3/5 aspect-square rounded-[2rem] overflow-hidden border border-cream-dark shadow-lg bg-cream-light pointer-events-none hidden sm:block grayscale-[10%] opacity-85 rotate-[-8deg] hover:rotate-0 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600"
              alt="Lalana Plant Details"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative rotating slow stamp */}
          <div className="absolute -top-6 right-2 w-20 h-20 border border-earth-dark/10 rounded-full flex items-center justify-center animate-spin-slow pointer-events-none hidden sm:flex z-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-earth-muted/40">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fontSize="8" fontWeight="400" className="font-mono tracking-widest uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  • MENDAUR • TENANG • MINDFUL •
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

      </div>

      {/* Down Scroll Anchor */}
      <motion.button
        id="hero-move-down-anchor"
        onClick={onScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-earth-muted/65 cursor-pointer hover:text-earth-dark transition-colors z-20"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase text-earth-muted">Gulir ke dasar</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <MoveDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
