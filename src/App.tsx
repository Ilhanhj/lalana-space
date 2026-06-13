import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutConcept } from "./components/AboutConcept";
import { MenuHighlight } from "./components/MenuHighlight";
import { EventsAndHours } from "./components/EventsAndHours";
import { AmbientSoundPlayer } from "./components/AmbientSoundPlayer";
import { RSVPModal } from "./components/RSVPModal";
import { Footer } from "./components/Footer";
import { MenuPage } from "./components/MenuPage";
import { SpaceRentalPage } from "./components/SpaceRentalPage";
import { ActivityPage } from "./components/ActivityPage";
import { CreativeExperience } from "./components/CreativeExperience";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "menu" | "space" | "activity">(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path === "/menu" || hash === "#/menu") {
      return "menu";
    }
    if (path === "/sewa-ruang" || path === "/space" || hash === "#/sewa-ruang" || hash === "#/space") {
      return "space";
    }
    if (path === "/activity" || path === "/activities" || hash === "#/activity" || hash === "#/activities") {
      return "activity";
    }
    return "home";
  });

  // Monitor scroll progress for beautiful top screen scrollbar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // Track popstate for native URL back/forward routing
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/menu" || hash === "#/menu") {
        setCurrentView("menu");
      } else if (path === "/sewa-ruang" || path === "/space" || hash === "#/sewa-ruang" || hash === "#/space") {
        setCurrentView("space");
      } else if (path === "/activity" || path === "/activities" || hash === "#/activity" || hash === "#/activities") {
        setCurrentView("activity");
      } else {
        setCurrentView("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Monitor scroll section for navigation updates
  useEffect(() => {
    if (currentView !== "home") return;

    const sections = ["hero", "about", "menu", "events-hours", "location"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px", // Capture centered sections perfectly
      threshold: 0
    };

    const observerCallbacks = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallbacks, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [currentView]);

  // Integrated route + section scroll navigator
  const handleNavigateTo = (view: "home" | "menu" | "space" | "activity", targetSection?: string) => {
    if (view === "menu") {
      window.history.pushState({}, "", "/menu");
      setCurrentView("menu");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (view === "space") {
      window.history.pushState({}, "", "/sewa-ruang");
      setCurrentView("space");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (view === "activity") {
      window.history.pushState({}, "", "/activity");
      setCurrentView("activity");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.pushState({}, "", "/");
      setCurrentView("home");
      
      if (targetSection) {
        // Wait briefly for DOM to mount home sections
        setTimeout(() => {
          const el = document.getElementById(targetSection);
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            setActiveSection(targetSection);
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Trigger empty query/general space reservation
  const handleOpenGeneralRSVP = () => {
    setIsRSVPOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-cream-light font-sans antialiased text-earth-dark selection:bg-cream-dark selection:text-earth-dark">
      
      {/* Editorial top layout reading scrollbar */}
      <motion.div
        id="top-scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-earth-dark origin-left z-55 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Header element */}
      <Navbar
        currentView={currentView}
        onNavigateTo={handleNavigateTo}
        activeSection={activeSection}
        onExploreClick={handleOpenGeneralRSVP}
      />

      {currentView === "home" ? (
        <>
          {/* Hero Section */}
          <Hero
            onExploreClick={handleOpenGeneralRSVP}
            onScrollToAbout={() => handleNavigateTo("home", "about")}
          />

          {/* About Section */}
          <AboutConcept />

          {/* Creative Experiences & Activities Highlight Section */}
          <CreativeExperience onExploreActivitiesClick={() => handleNavigateTo("activity")} />

          {/* Menu Highlight Section - with full menu redirect trigger */}
          <MenuHighlight onViewFullMenu={() => handleNavigateTo("menu")} />

          {/* Opening Hours & Special Event Packages Section */}
          <EventsAndHours
            onRentSpaceClick={() => handleNavigateTo("space")}
            onOpenRSVP={handleOpenGeneralRSVP}
          />

          {/* Beautiful and Focused Call to Action for Space Rentals */}
          <section className="py-20 sm:py-28 bg-cream-warm/15 border-t border-cream-dark/55 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/5 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-[9px] text-primary-accent uppercase tracking-widest font-bold">LALANA SANCTUARY</span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-earth-dark leading-tight">
                  Sewa Ruang &amp; <br />
                  <span className="italic font-normal font-serif text-earth-muted">Acara Spesial Anda.</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed max-w-2xl">
                  Apakah Anda merencanakan selebrasi pernikahan intim, lokakarya kriya meditasi, atau sesi berbagi senyap bersama komunitas? Jelajahi oase keteduhan alami penenang jiwa kami yang didesain bebas polusi gawai.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  id="home-space-cta"
                  onClick={() => handleNavigateTo("space")}
                  className="group inline-flex items-center gap-2.5 font-sans text-xs tracking-widest uppercase bg-primary-accent text-cream-light hover:bg-primary-accent/90 px-8 py-4.5 rounded-full transition-all duration-300 shadow-md cursor-pointer font-semibold"
                >
                  Lihat Info Sewa Ruang
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </section>
        </>
      ) : currentView === "menu" ? (
        /* Standalone Menu Page */
        <MenuPage onBackToHome={() => handleNavigateTo("home")} />
      ) : currentView === "activity" ? (
        /* Standalone Activity Page */
        <ActivityPage onBackToHome={() => handleNavigateTo("home")} />
      ) : (
        /* Standalone Space Rental Page */
        <SpaceRentalPage 
          onBackToHome={() => handleNavigateTo("home")}
          onOpenRSVP={handleOpenGeneralRSVP}
        />
      )}

      {/* Soundscape Synthesizer */}
      <AmbientSoundPlayer />

      {/* Sticky footer banner to make engagement higher */}
      <section className="py-20 sm:py-28 bg-earth-dark text-cream-light text-center relative overflow-hidden px-6">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-earth-muted)/40,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-secondary-accent font-semibold">
            Kunjungi Lalana Space
          </p>
          <h3 className="font-serif text-3xl sm:text-5xl font-light leading-snug tracking-tight">
            Hubungi atau Reservasi Kunjungan
          </h3>
          <p className="font-sans text-xs sm:text-sm text-cream-light/80 font-light leading-relaxed max-w-md mx-auto">
            Rasakan langsung keteduhan ruang kopi sunyi Lalana. Reservasi slot kedatangan Anda atau diskusikan acara spesial Anda sekarang juga.
          </p>

          <button
            id="bottom-footer-cta-btn"
            onClick={handleOpenGeneralRSVP}
            className="inline-flex items-center font-sans text-xs tracking-[0.2em] uppercase bg-cream-light text-earth-dark px-10 py-4.5 rounded-full hover:bg-primary-accent hover:text-cream-light transition-all duration-300 cursor-pointer active:scale-98 font-semibold"
          >
            Hubungi Hub Lalana
          </button>
        </div>
      </section>

      {/* Footer Details */}
      <Footer onNavigateTo={handleNavigateTo} />

      {/* Dynamic Ticket Reservation slide Drawer */}
      <VPModalHelper
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
      />

    </div>
  );
}

// Inline fallback for the legacy RSVP modal targeting
function VPModalHelper({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <RSVPModal
      activity={null}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}
