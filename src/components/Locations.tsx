"use client";

import { MapPin, Clock, Phone, Navigation, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Locations() {
  const [copied, setCopied] = useState(false);
  const address = "E-100, Central Market, Lajpat Nagar II, New Delhi, 110024";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: Branch Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <MapPin size={16} />
              Find Us
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Visit our <span className="text-primary">Main Branch</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Located in the heart of Delhi's commercial hub. Visit us for
              instant currency exchange and personalized financial services.
            </p>

            {/* Office Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="space-y-6">
                {/* Address Group */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">
                      Office Address
                    </h5>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {address} <br />
                      (Below Chhabra Bartan Store)
                    </p>
                    <button
                      onClick={copyAddress}
                      className="flex items-center gap-2 text-xs font-bold text-primary hover:text-slate-900 transition-colors"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? "Copied to Clipboard" : "Copy Full Address"}
                    </button>
                  </div>
                </div>

                {/* Hours Group */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">
                      Operating Hours
                    </h5>
                    <div className="flex items-center gap-2 text-emerald-600 text-xs font-black uppercase tracking-widest mb-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Open 24/7
                    </div>
                    <p className="text-slate-500 text-sm">
                      Including Holidays & Weekends
                    </p>
                  </div>
                </div>

                {/* Contact Group */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">
                      Direct Contact
                    </h5>
                    <p className="text-slate-500 text-sm mb-2">
                      Speak directly with our branch manager.
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="text-lg font-black text-slate-900 hover:text-primary"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <a
                  href="https://www.google.com/maps/dir//SAN+MONEY+CHANGERS+PVT+LTD"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-primary transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Navigation size={18} />
                  Get Live Directions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Map */}
          <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[500px] relative">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-slate-200">
              {/* Replace the src with your actual Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7744383407!2d77.2404!3d28.5765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzM1LjQiTiA3N8KwMTQnMjUuNCJF!5e0!3m2!1sen!2sin!4v1614589200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
            </div>

            {/* Floating Detail Overlay (Desktop Only) */}
            <div className="hidden md:block absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-lg text-white">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Nearest Landmark
                  </p>
                  <p className="text-xs font-bold text-slate-900">
                    Lajpat Nagar Metro Station (5 min walk)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
