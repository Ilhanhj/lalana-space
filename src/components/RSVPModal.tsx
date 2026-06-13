import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, Mail, FileText, ChevronRight, Sparkles, MapPin, MessageCircle } from "lucide-react";
import { SpaceActivity, ReservationInquiry } from "../types";

interface RSVPModalProps {
  activity: SpaceActivity | null;
  isOpen: boolean;
  onClose: () => void;
}

export function RSVPModal({ activity, isOpen, onClose }: RSVPModalProps) {
  const [formData, setFormData] = useState<ReservationInquiry>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    notes: "",
    type: activity ? "workshop" : "relaxation"
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Generate arbitrary beautiful premium receipt serial code
    const arbitraryCode = `LAL-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`;
    setTicketNumber(arbitraryCode);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      notes: "",
      type: activity ? "workshop" : "relaxation"
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="rsvp-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-end">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-earth-dark/45 backdrop-blur-md"
          />

          {/* Core Panel - Slider drawer from right */}
          <motion.div
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="relative w-full max-w-lg h-full bg-cream-light border-l border-cream-dark shadow-2xl overflow-y-auto px-6 py-10 sm:px-12 flex flex-col justify-between"
          >
            {/* Header control line */}
            <div className="flex items-center justify-between border-b border-cream-dark/50 pb-6 mb-8">
              <div className="text-left">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-earth-muted block">
                  Registrasi Ruang
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-earth-dark mt-1">
                  {activity ? "Booking Lokakarya" : "Reservasi Tiket Masuk"}
                </h3>
              </div>
              <button
                id="close-modal-btn"
                onClick={handleReset}
                className="p-2.5 rounded-full hover:bg-cream-warm text-earth-muted hover:text-earth-dark cursor-pointer transition-colors"
                aria-label="Tutup panel"
              >
                <X className="w-5 h-5 font-light" />
              </button>
            </div>

            {/* Success Slate ticket screen or active form */}
            {!isSuccess ? (
              <form id="rsvp-booking-form" onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between gap-8">
                
                <div className="space-y-6 text-left">
                  {/* Selected activity card preview */}
                  {activity && (
                    <div className="p-4 bg-cream-warm/45 border border-cream-dark/60 rounded-2xl flex items-center gap-4">
                      <img
                        src={activity.image}
                        alt=""
                        className="w-12 h-12 rounded-xl object-cover border border-cream-dark"
                      />
                      <div className="space-y-1">
                        <span className="font-serif text-xs sm:text-sm font-light text-earth-dark block leading-tight">
                          {activity.title}
                        </span>
                        <div className="flex items-center gap-2 font-mono text-[9px] text-earth-muted uppercase tracking-wider">
                          <span>{activity.date}</span>
                          <span>&bull;</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Fields */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-name" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                        Nama Lengkap *
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        name="name"
                        required
                        placeholder="misal: Elian Wijaya"
                        className="w-full bg-cream-warm/20 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-email" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                        Alamat Email *
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        name="email"
                        required
                        placeholder="misal: elian@example.com"
                        className="w-full bg-cream-warm/20 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="user-phone" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                          Nomor Telepon
                        </label>
                        <input
                          id="user-phone"
                          type="tel"
                          name="phone"
                          placeholder="misal: +62 812-4560"
                          className="w-full bg-cream-warm/20 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="user-guests" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                          Jumlah Orang
                        </label>
                        <select
                          id="user-guests"
                          name="guests"
                          className="w-full bg-cream-warm/25 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors"
                          value={formData.guests}
                          onChange={handleInputChange}
                        >
                          {[1, 2, 3, 4, 5].map((g) => (
                            <option key={g} value={g}>
                              {g} Orang
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Simple Date/Time selectors if NOT booking a specific workshop */}
                    {!activity && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="user-date" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                            Tanggal Kunjungan
                          </label>
                          <input
                            id="user-date"
                            type="date"
                            name="date"
                            className="w-full bg-cream-warm/20 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors"
                            value={formData.date}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="user-time" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                            Waktu Kedatangan
                          </label>
                          <input
                            id="user-time"
                            type="time"
                            name="time"
                            className="w-full bg-cream-warm/20 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors"
                            value={formData.time}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user-notes" className="font-mono text-[9px] uppercase tracking-wider text-earth-muted font-light">
                        Permintaan Khusus atau Alergi
                      </label>
                      <textarea
                        id="user-notes"
                        name="notes"
                        rows={2}
                        placeholder="Pemberitahuan alergi makanan, kebutuhan fisik, atau catatan personal..."
                        className="w-full bg-cream-warm/20 border border-cream-dark/80 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm focus:outline-none focus:border-earth-dark transition-colors resize-none"
                        value={formData.notes}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Mindful Disclaimer text */}
                  <p className="font-sans text-[10px] text-earth-muted leading-relaxed font-light italic mt-6 bg-cream-dark/20 p-3 rounded-lg">
                    Pengingat teduh: Untuk menjaga sunyi bersama, kami menerapkan aturan tanpa gawai dan tanpa wifi di dalam inti ruangan Lalana. Reservasi Anda akan diverifikasi secara manual.
                  </p>
                </div>

                {/* Confirm Action Grid */}
                <div>
                  <button
                    id="submit-rsvp-btn"
                    type="submit"
                    className="w-full font-sans text-xs tracking-widest uppercase bg-earth-dark text-cream-light py-4 px-6 rounded-full flex items-center justify-center gap-1.5 hover:bg-earth-muted transition-colors cursor-pointer group"
                  >
                    Konfirmasi Reservasi Lalana
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </form>
            ) : (
              /* High-End Design Ticket confirmation card */
              <motion.div
                id="rsvp-success-ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-grow flex flex-col justify-between text-left gap-6 pb-4"
              >
                <div className="bg-white border-2 border-dashed border-cream-dark shadow-xl rounded-[2rem] p-6 sm:p-8 space-y-5 relative overflow-hidden">
                  
                  {/* Watermark logo decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-earth-muted/5 rounded-full flex items-center justify-center pointer-events-none text-[8px] font-mono tracking-widest select-none">
                    LALANA SANCTUARY OFFICE
                  </div>

                  <div className="flex items-center justify-between border-b border-cream-dark/60 pb-3">
                    <span className="font-serif text-sm italic text-earth-muted">Tiket Masuk Sanctuary</span>
                    <Sparkles className="w-4 h-4 text-accent-warm" />
                  </div>

                  {/* Ticket Serial No */}
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Nomor Seri Tiket</span>
                    <span className="font-mono text-sm font-semibold text-earth-dark tracking-wider">{ticketNumber}</span>
                  </div>

                  {/* Core Ticket Info */}
                  <div className="space-y-3.5 text-xs">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Pemegang</span>
                        <span className="font-sans font-medium text-earth-dark block truncate">{formData.name}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Alamat Email</span>
                        <span className="font-sans text-earth-muted truncate block">{formData.email}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Sesi / Ruang</span>
                        <span className="font-serif text-earth-dark block">
                          {activity ? "Grup Lokakarya" : "Sesi Ruang Relaksasi"}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Jumlah Tamu</span>
                        <span className="font-sans font-medium text-earth-dark">{formData.guests} Orang</span>
                      </div>
                    </div>

                    {/* Date/Time detail */}
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Waktu Kunjungan</span>
                      <div className="flex items-center gap-1.5 text-earth-dark font-sans font-semibold mt-1">
                        <Calendar className="w-3.5 h-3.5 text-earth-muted font-normal" />
                        <span>
                          {activity
                            ? `${activity.date} @ ${activity.time}`
                            : `${formData.date || "Besok"} ${formData.time ? `@ ${formData.time}` : ""}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stamp design on bottom details */}
                  <div className="border-t border-dashed border-cream-dark pt-4 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-earth-muted mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-earth-muted block">Lokasi Alamat</span>
                      <span className="font-sans text-[10px] text-earth-dark font-light block leading-tight">
                        Jl. Cikoneng, Bojongsari, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40288
                      </span>
                    </div>
                  </div>

                  {/* Barcode representation */}
                  <div className="flex flex-col items-center pt-3 border-t border-cream-dark/60">
                    <div className="h-8 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#2A2625_2px,#2A2625_4px,transparent_4px,transparent_6px,#2A2625_6px,#2A2625_10px)] opacity-75" />
                    <span className="font-mono text-[8px] text-earth-muted tracking-[0.4em] uppercase mt-1.5 select-none">
                      * HADIR SEPENUHNYA *
                    </span>
                  </div>

                </div>

                {/* Return actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200/50 p-4 rounded-2xl">
                    <Check className="w-4 h-4" />
                    <span className="font-sans text-xs font-semibold">Tiket masuk diantrekan &amp; disimpan!</span>
                  </div>

                  <a
                    id="whatsapp-ticket-submit-btn"
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                      activity
                        ? `Halo Lalana Space! Saya baru saja melakukan RSVP Lokakarya via website.\n\n🎟️ KODE TIKET: ${ticketNumber}\n👤 NAMA: ${formData.name}\n✉️ EMAIL: ${formData.email}\n🛠️ WORKSHOP: ${activity.title}\n📅 JADWAL: ${activity.date} (${activity.time})\n👥 JML ORANG: ${formData.guests} Orang\n\nMohon konfirmasi pendaftaran saya. Terima kasih banyak!`
                        : `Halo Lalana Space! Saya baru saja melakukan Reservasi Kunjungan Umum via website.\n\n🎟️ KODE RESERVASI: ${ticketNumber}\n👤 NAMA: ${formData.name}\n✉️ EMAIL: ${formData.email}\n🛋️ AJUAN DETAIL: Sesi Relaksasi Mandiri\n📅 TANGGAL: ${formData.date || "Segera"} (Jam: ${formData.time || "Kapan saja"})\n👥 JML ORANG: ${formData.guests} Orang\n📝 CATATAN: ${formData.notes || "-"}\n\nMohon dibantu konfirmasi slot kedatangan. Terima kasih banyak!`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full font-sans text-xs tracking-widest uppercase bg-emerald-800 hover:bg-emerald-900 border border-transparent py-4 text-cream-light rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2 font-semibold shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-cream-light" />
                    Kirim &amp; Konfirmasi via WhatsApp
                  </a>
                  
                  <button
                    id="reset-rsvp-btn"
                    onClick={handleReset}
                    className="w-full font-sans text-xs tracking-widest uppercase border border-cream-dark hover:border-earth-dark py-4 rounded-full transition-colors cursor-pointer text-earth-dark block"
                  >
                    Kembali ke Beranda
                  </button>
                </div>

              </motion.div>
            )}

            {/* Minor systemic footer metadata on drawer window */}
            <div className="border-t border-cream-dark/50 pt-5 mt-8 flex justify-between items-center text-[9px] font-mono text-earth-muted">
              <span>LALANA SPACE INC.</span>
              <span>EST. 2026</span>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
