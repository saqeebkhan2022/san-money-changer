"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import logo from "../../public/logo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo}
                alt="San Money Changers"
                width={50}
                height={50}
                className="h-12 w-auto rounded-lg brightness-110"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  SAN<span className="text-primary">MONEY</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Private Limited
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your premier partner for secure, transparent, and lightning-fast
              currency exchange. Bridging global markets with local expertise
              since inception.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "Features", "Why Us", "Live Rates", "Admin"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={
                        link === "Home"
                          ? "/"
                          : `#${link.toLowerCase().replace(" ", "-")}`
                      }
                      className="group flex items-center gap-2 text-sm transition-colors hover:text-primary"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
                      />
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "Currency Conversion",
                "Live Market Rates",
                "Business Forex",
                "Secure Wire Transfers",
                "Travel Money",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={20} className="mt-0.5 text-primary shrink-0" />
                <span>
                  123 Forex Plaza, Financial District,
                  <br />
                  Central Avenue, ST 54321
                </span>
              </li>
              <li>
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <Phone size={18} className="text-primary" />
                  +91 98765 43210
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@sanmc.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <Mail size={18} className="text-primary" />
                  info@sanmc.com
                </Link>
              </li>
              <li className="mt-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase text-emerald-500">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available 24/7
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {currentYear} San Money Changers Private Limited. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms", "Security"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-slate-500 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
