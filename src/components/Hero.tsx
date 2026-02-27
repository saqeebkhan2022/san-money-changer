"use client";

import { useState, useMemo } from "react";
import { ArrowLeftRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";

type CurrencyCode = string;

export default function Hero() {
  const currencies: CurrencyCode[] = ["USD", "INR", "AED", "EUR", "GBP"];

  const rates: Record<CurrencyCode, number> = {
    USD: 1,
    INR: 83.45,
    AED: 3.67,
    EUR: 0.92,
    GBP: 0.79,
  };

  const [from, setFrom] = useState<CurrencyCode>("USD");
  const [to, setTo] = useState<CurrencyCode>("INR");
  const [amount, setAmount] = useState<number>(1000);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const convertedAmount = useMemo(() => {
    const usdValue = amount / rates[from];
    return (usdValue * rates[to]).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [amount, from, to]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Real-time Exchange Rates
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:leading-[1.1]">
            Global Currency <br />
            <span className="text-primary">Exchange Simplified.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Experience lightning-fast conversions with San Money Changers.
            Transparent rates, zero hidden fees, and institutional-grade
            security.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95">
              Start Exchange Now
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50">
              View All Rates
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ShieldCheck className="h-5 w-5 text-emerald-500" /> Secure
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Zap className="h-5 w-5 text-amber-500" /> Instant
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <TrendingUp className="h-5 w-5 text-blue-500" /> Best Rates
            </div>
          </div>
        </div>

        {/* RIGHT CONVERTER CARD */}
        <div className="relative z-10">
          <div className="rounded-3xl border border-white bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-bold text-slate-800">
              Convert Currency
            </h3>

            <div className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Amount to Convert
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-xl font-bold text-slate-900 transition-focus focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none"
                    placeholder="0.00"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                    {from}
                  </div>
                </div>
              </div>

              {/* Currency Selection */}
              <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                    From
                  </label>
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white p-3 font-semibold text-slate-700 shadow-sm transition-hover hover:border-primary/50"
                  >
                    {currencies.map((cur) => (
                      <option key={cur}>{cur}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSwap}
                  className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-primary hover:text-white hover:rotate-180"
                >
                  <ArrowLeftRight size={18} />
                </button>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                    To
                  </label>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white p-3 font-semibold text-slate-700 shadow-sm transition-hover hover:border-primary/50"
                  >
                    {currencies.map((cur) => (
                      <option key={cur}>{cur}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Result Area */}
              <div className="mt-8 overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-inner">
                <div className="flex items-center justify-between opacity-70">
                  <span className="text-sm font-medium">Estimated Result</span>
                  <span className="text-xs">
                    1 {from} = {(rates[to] / rates[from]).toFixed(4)} {to}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight">
                    {convertedAmount}
                  </span>
                  <span className="text-xl font-bold text-primary">{to}</span>
                </div>
              </div>

              <p className="text-center text-xs text-slate-400">
                Rates are updated every 5 minutes. Market conditions apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
