import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LalanaLogo } from "./LalanaLogo";

interface NavbarProps {
  onExploreClick: () => void;
  currentView: "home" | "menu" | "space" | "activity";
  onNavigateTo: (view: "home" | "menu" | "space" | "activity", targetSection?: string) => void;
  activeSection: string;
}

export function Navbar({ onExploreClick, currentView, onNavigateTo, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor page scroll status
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "Tentang" },
    { id: "menu", label: "Menu" },
    { id: "activities", label: "Aktivitas" },
    { id: "space-rentals", label: "Sewa Ruang" },
    { id: "location", label: "Lokasi" }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === "menu") {
      onNavigateTo("menu");
    } else if (id === "space-rentals") {
      onNavigateTo("space");
    } else if (id === "activities") {
      onNavigateTo("activity");
    } else {
      onNavigateTo("home", id);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-cream-light/85 backdrop-blur-md border-b border-cream-dark/30 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - Integrated Vector */}
        <button
          id="nav-logo"
          onClick={() => onNavigateTo("home", "hero")}
          className="focus:outline-none cursor-pointer transition-opacity hover:opacity-90 py-0.5"
        >
          <LalanaLogo withText={true} />
        </button>
 
        {/* Desktop Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = 
                item.id === "menu" ? currentView === "menu" :
                item.id === "space-rentals" ? currentView === "space" :
                item.id === "activities" ? currentView === "activity" :
                (currentView === "home" && activeSection === item.id);

              return (
                <li key={item.id}>
                  <button
                    id={`nav-item-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`font-sans text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 relative py-1 focus:outline-none ${
                      isActive ? "text-primary-accent font-semibold" : "text-earth-muted hover:text-primary-accent"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-accent"
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-cream-dark" />

          {/* Minimalist CTA with dynamic primary branding */}
          <button
            id="nav-cta-btn"
            onClick={onExploreClick}
            className="font-sans text-xs tracking-widest uppercase border border-primary-accent/40 hover:border-primary-accent px-5 py-2.5 rounded-full text-primary-accent bg-transparent transition-all duration-300 hover:bg-primary-accent hover:text-cream-light cursor-pointer active:scale-98 font-medium"
          >
            Telusuri Ruang
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 text-earth-dark focus:outline-none cursor-pointer hover:bg-cream-warm rounded-full transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-cream-light border-b border-cream-dark/60 py-10 px-6 md:px-12 flex flex-col gap-8 shadow-xl z-50 backdrop-blur-lg"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className="font-serif text-3xl font-light tracking-wide text-earth-dark focus:outline-none text-left w-full hover:translate-x-1 transition-transform duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="h-[1px] bg-cream-dark w-full" />

            {/* Mobile Actions */}
            <div className="flex flex-col gap-4">
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreClick();
                }}
                className="w-full text-center font-sans text-sm tracking-widest uppercase border border-primary-accent bg-primary-accent text-cream-light py-4 rounded-full transition-all duration-300 shadow-md font-medium cursor-pointer hover:bg-primary-accent/90"
              >
                Reservasi Kunjungan
              </button>
              <p className="text-center font-serif italic text-sm text-earth-muted mt-2">
                &ldquo;Sembuh dari bising. Temukan kembali dirimu.&rdquo;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
