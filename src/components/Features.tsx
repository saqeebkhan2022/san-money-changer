"use client";

import { Zap, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Instant Conversion",
      description:
        "Get real-time exchange rates updated instantly for accurate, high-speed conversions.",
      icon: <Zap className="w-7 h-7" />,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "Multiple Currencies",
      description:
        "Seamless support for 16+ major global currencies including USD, EUR, GBP, and AED.",
      icon: <Globe className="w-7 h-7" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Secure & Reliable",
      description:
        "Institutional-grade security ensuring your data and transactions are always protected.",
      icon: <ShieldCheck className="w-7 h-7" />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Why Choose San Money
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Everything you need for <br className="hidden md:block" />
              <span className="text-slate-500">
                seamless currency exchange.
              </span>
            </h3>
          </div>
          <p className="text-lg text-slate-600 max-w-xs">
            We combine speed, security, and the best market rates in one
            platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} mb-6 transition-transform group-hover:scale-110 duration-300`}
              >
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                {feature.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h4>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
