import { Instagram, MapPin, Compass, Mail, Clock } from "lucide-react";
import { LalanaLogo } from "./LalanaLogo";

interface FooterProps {
  onNavigateTo: (view: "home" | "menu" | "space" | "activity", targetSection?: string) => void;
}

export function Footer({ onNavigateTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const labelsMap: Record<string, string> = {
    about: "Tentang",
    menu: "Menu",
    activities: "Aktivitas",
    "space-rentals": "Sewa Ruang",
    location: "Lokasi"
  };

  return (
    <footer
      id="main-footer"
      className="bg-cream-warm/40 border-t border-cream-dark/50 py-16 sm:py-20 text-left"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Leftmost Col - Branding & Vision */}
        <div className="md:col-span-4 space-y-6">
          <LalanaLogo withText={true} />
          <p className="font-sans text-xs sm:text-sm text-earth-muted font-light leading-relaxed max-w-sm">
            Lalana Space adalah restoran, kafe, dan ruang sosial dengan pemandangan sawah asri di Bojongsoang, Bandung Selatan. Menyediakan hidangan Nusantara &amp; Barat, kopi istimewa, serta layanan event berkapasitas hingga 200 orang.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-cream-dark hover:border-earth-dark text-earth-muted hover:text-earth-dark transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 font-light" />
            </a>
            <a
              href="mailto:hello@lalanaspace.com"
              className="p-2.5 rounded-full border border-cream-dark hover:border-earth-dark text-earth-muted hover:text-earth-dark transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 font-light" />
            </a>
          </div>
        </div>

        {/* Center-Left Col - Opening Hours */}
        <div className="md:col-span-3 space-y-6">
          <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-earth-dark font-semibold flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Jam Operasional
          </h5>
          <ul className="space-y-3 font-sans text-xs text-earth-muted font-light">
            <li className="flex justify-between border-b border-cream-dark/40 pb-1 px-0.5">
              <span>Senin &mdash; Jumat</span>
              <span className="font-mono font-medium text-earth-dark">08:00 &mdash; 22:00</span>
            </li>
            <li className="flex justify-between border-b border-cream-dark/40 pb-1 px-0.5">
              <span>Sabtu &mdash; Minggu</span>
              <span className="font-mono font-medium text-earth-dark">07:00 &mdash; 22:00</span>
            </li>
            <li className="text-[10px] text-primary-accent italic pt-1">
              * Live Music: Setiap Sabtu &amp; Minggu jam 17:00 WIB.
            </li>
          </ul>
        </div>

        {/* Center-Right Col - Directions Locator */}
        <div id="location" className="md:col-span-3 space-y-6">
          <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-earth-dark font-semibold flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            Temukan Lalana
          </h5>
          <div className="space-y-4">
            <p className="font-sans text-xs text-earth-muted leading-relaxed font-light">
              Jl. Cikoneng, Bojongsari <br />
              Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40288 <br />
              <span className="text-[10px] text-earth-muted/95 block mt-2 leading-relaxed">
                Tersedia area parkir di bagian depan dan belakang.
              </span>
            </p>

            {/* Google Maps link */}
            <a
              id="google-maps-directions-link"
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-earth-dark font-medium border-b border-earth-dark/60 hover:border-earth-dark pb-0.5 transition-colors group"
            >
              Petunjuk Arah Google Maps
              <Compass className="w-3 h-3 group-hover:rotate-45 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Right Col - Quick Navigation Links for scroll recovery */}
        <div className="md:col-span-2 space-y-6">
          <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-earth-dark font-semibold">
            Tautan Jeda
          </h5>
          <ul className="space-y-2 font-serif text-sm font-light">
            {["about", "menu", "activities", "space-rentals", "location"].map((lnk) => (
              <li key={lnk}>
                <button
                  id={`footer-nav-${lnk}`}
                  onClick={() => {
                    if (lnk === "menu") {
                      onNavigateTo("menu");
                    } else if (lnk === "space-rentals") {
                      onNavigateTo("space");
                    } else if (lnk === "activities") {
                      onNavigateTo("activity");
                    } else {
                      onNavigateTo("home", lnk);
                    }
                  }}
                  className="text-earth-muted hover:text-earth-dark transition-colors duration-300 uppercase font-sans text-[10px] tracking-widest block text-left focus:outline-none cursor-pointer"
                >
                  {labelsMap[lnk] || lnk}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Extreme Bottom line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-cream-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-earth-muted">
        <div>
          &copy; {currentYear} Lalana Space. Hak Cipta Dilindungi.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-earth-dark cursor-help" title="Pemandangan Sawah Asri">SCENIC RICE FIELD VIEW</span>
          <span>&bull;</span>
          <span className="hover:text-earth-dark cursor-help" title="Kapasitas Acara Besar">CAPACITY 200 PAX</span>
        </div>
      </div>
    </footer>
  );
}
