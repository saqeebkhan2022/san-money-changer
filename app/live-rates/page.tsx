"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  RefreshCcw,
  Search,
  ArrowUpRight,
  Info,
} from "lucide-react";

// Define the structure for our rate data
interface RateData {
  code: string;
  name: string;
  rate: number;
  change: number; // Simulated percentage change
}

export default function LiveRatesPage() {
  const [rates, setRates] = useState<RateData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock data for initial professional render
  const fetchRates = async () => {
    setLoading(true);
    try {
      // In a real app: const res = await fetch('https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD');
      // const data = await res.json();

      // Simulating API delay and data
      setTimeout(() => {
        const mockRates: RateData[] = [
          { code: "USD", name: "United States Dollar", rate: 1.0, change: 0.0 },
          { code: "INR", name: "Indian Rupee", rate: 83.45, change: +0.12 },
          { code: "EUR", name: "Euro", rate: 0.92, change: -0.05 },
          { code: "GBP", name: "British Pound", rate: 0.79, change: +0.08 },
          { code: "AED", name: "UAE Dirham", rate: 3.67, change: 0.0 },
          { code: "CAD", name: "Canadian Dollar", rate: 1.35, change: -0.15 },
          { code: "AUD", name: "Australian Dollar", rate: 1.52, change: +0.21 },
          { code: "JPY", name: "Japanese Yen", rate: 151.2, change: -0.45 },
          { code: "SGD", name: "Singapore Dollar", rate: 1.34, change: +0.02 },
        ];
        setRates(mockRates);
        setLastUpdated(new Date());
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error fetching rates:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 300000); // Auto-refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  const filteredRates = rates.filter(
    (r) =>
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* PAGE HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-3">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Live Market Data
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Global Exchange <span className="text-slate-400">Rates</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search currency..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none w-full sm:w-64 transition-all"
              />
            </div>
            <button
              onClick={fetchRates}
              className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-5 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <RefreshCcw size={18} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>

        {/* INFO BOX */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4 text-blue-800 text-sm">
          <Info size={20} className="shrink-0" />
          <p>
            Rates are based on mid-market prices and updated every 5 minutes.
            Last updated: <strong>{lastUpdated.toLocaleTimeString()}</strong>
          </p>
        </div>

        {/* RATES TABLE */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest">
                    Currency
                  </th>
                  <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest">
                    Rate (vs USD)
                  </th>
                  <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest">
                    24h Change
                  </th>
                  {/* <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-right">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading && rates.length === 0
                  ? [...Array(6)].map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td
                          colSpan={4}
                          className="px-8 py-6 bg-slate-50/50 h-20"
                        />
                      </tr>
                    ))
                  : filteredRates.map((item) => (
                      <tr
                        key={item.code}
                        className="hover:bg-slate-50 transition-colors group"
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 border border-slate-200">
                              {item.code.substring(0, 2)}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">
                                {item.code}
                              </div>
                              <div className="text-xs text-slate-500 font-medium">
                                {item.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 font-mono font-bold text-lg text-slate-700">
                          {item.rate.toFixed(4)}
                        </td>
                        <td className="px-8 py-6">
                          <div
                            className={`flex items-center gap-1 font-bold text-sm ${item.change >= 0 ? "text-emerald-600" : "text-rose-600"}`}
                          >
                            {item.change >= 0 ? (
                              <TrendingUp size={16} />
                            ) : (
                              <TrendingDown size={16} />
                            )}
                            {Math.abs(item.change)}%
                          </div>
                        </td>
                        {/* <td className="px-8 py-6 text-right">
                          <button className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                            Convert <ArrowUpRight size={14} />
                          </button>
                        </td> */}
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          {filteredRates.length === 0 && !loading && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-medium">
                No currencies found matching "{search}"
              </p>
            </div>
          )}
        </div>

        {/* FOOTER DISCLAIMER */}
        <p className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          Disclaimer: These rates are for informational purposes only. San Money
          Changers Private Limited does not guarantee the accuracy of these
          rates for commercial use. Please contact our branch for final
          transactional rates.
        </p>
      </div>
    </main>
  );
}
