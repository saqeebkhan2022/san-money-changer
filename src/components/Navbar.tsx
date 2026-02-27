"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import logo from "../../public/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll for that premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO SECTION */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative overflow-hidden rounded-xl transition-transform group-hover:scale-105">
            <Image
              src={logo}
              alt="San Money Changers"
              width={70}
              height={70}
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 lg:text-2xl">
              SAN<span className="text-primary">MONEY</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Private Limited
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#services"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/live-rates"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
          >
            Live Rates
          </Link>
          <Link
            href="#why-choose-us"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
          >
            Why Choose Us
          </Link>
          <div className="h-6 w-px bg-slate-200" /> {/* Divider */}
          <Link
            href="tel:+1234567890" // Replace with your actual number
            className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary hover:shadow-primary/20 active:scale-95"
          >
            <Phone size={16} />
            Call Support
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-600 lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-slate-200 bg-white p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-2 font-semibold text-slate-700"
            >
              Services <ChevronRight size={16} />
            </Link>
            <Link
              href="/live-rates"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-2 font-semibold text-slate-700"
            >
              Live Rates <ChevronRight size={16} />
            </Link>
            <Link
              href="#why-choose-us"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-2 font-semibold text-slate-700"
            >
              Why Us <ChevronRight size={16} />
            </Link>
            <Link
              href="tel:+1234567890"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white"
            >
              <Phone size={18} /> Call Us Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
