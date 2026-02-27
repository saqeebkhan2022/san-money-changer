"use client";

import { CheckCircle2, Clock, Users, Globe2, BarChart3 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Transparent Rates",
      description:
        "No hidden fees or surprises. What you see is what you get with our highly competitive market rates.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "24/7 Dedicated Support",
      description:
        "Our experts are available round the clock to assist you with complex conversions and inquiries.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Expert Forex Team",
      description:
        "Decades of collective experience in global markets ensures you get the most accurate service quality.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: "Wide Global Coverage",
      description:
        "Instantly convert between 16+ major world currencies with local expertise in every transaction.",
      icon: <Globe2 className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT SIDE: Content & Trust Indicators */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 size={14} />
              The San Money Advantage
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              We're committed to the{" "}
              <span className="text-primary">best exchange</span> experience.
            </h2>

            <p className="text-lg text-slate-600 mb-12 max-w-2xl">
              In a volatile market, you need a partner you can trust. San Money
              Changers Private Limited combines institutional technology with
              personalized service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
              {reasons.map((reason, index) => (
                <div key={index} className="group flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white shadow-md border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Visual Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] bg-slate-900 p-10 text-white shadow-2xl overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

              <h5 className="text-2xl font-bold mb-8">
                Trusted by thousands of travelers & businesses
              </h5>

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <span className="text-4xl font-black text-primary">16+</span>
                  <span className="text-slate-300 text-sm font-medium">
                    Global Currencies
                    <br />
                    Supported
                  </span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <span className="text-4xl font-black text-primary">100%</span>
                  <span className="text-slate-300 text-sm font-medium">
                    Transparent
                    <br />
                    Pricing Model
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-primary">24/7</span>
                  <span className="text-slate-300 text-sm font-medium">
                    Emergency Forex
                    <br />
                    Assistance
                  </span>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-sm italic text-slate-400">
                  "San Money Changers made my business trip currency exchange
                  effortless. The rates were significantly better than the
                  airport banks."
                </p>
                <p className="mt-4 text-xs font-bold text-white">
                  — Corporate Client
                </p>
              </div>
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-primary rounded-2xl -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
