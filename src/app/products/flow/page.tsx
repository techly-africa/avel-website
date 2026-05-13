"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Repeat, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FlowPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="fluid-y-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="fluid-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange mb-6 block">
              AVEL Flow
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              One integration. <br />
              Every payment rail. <br />
              <span className="text-orange">Financial Intelligence.</span>
            </h1>
            <p className="text-xl text-charcoal/60 mb-12 leading-relaxed">
              Consolidate MTN MoMo, Airtel Money, IremboPay, and bank rails into a single structured channel. 
              Built-in AI for reconciliation and cash flow forecasting.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange transition-all"
            >
              Join the Private Alpha
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Surface - Dashboard Preview */}
      <section className="pb-32 bg-white">
        <div className="fluid-container">
          <div className="relative p-4 md:p-8 bg-charcoal rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            {/* Dashboard Mockup */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="p-8 bg-white/5 rounded-2xl border border-white/10 relative">
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-orange/20 text-orange text-[8px] font-bold uppercase tracking-widest">Simulation</div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Cash Position (30D)</h4>
                  <div className="h-48 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 80, 50, 95, 75, 100, 85, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-orange/40 rounded-t-sm" 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">MTN MoMo</span>
                    <p className="text-2xl font-bold text-white mt-2">14.2M RWF</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Airtel Money</span>
                    <p className="text-2xl font-bold text-white mt-2">8.7M RWF</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-8 bg-white/5 rounded-2xl border border-white/10 h-full">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Reconciliation Status</h4>
                  <div className="space-y-6">
                    {[
                      { label: "Matched", value: "98.2%", color: "bg-green-500" },
                      { label: "Pending", value: "1.5%", color: "bg-orange" },
                      { label: "Flagged", value: "0.3%", color: "bg-red-500" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs font-bold text-white mb-2 uppercase tracking-widest">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color}`} style={{ width: item.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="fluid-y-padding bg-off-white">
        <div className="fluid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Zap, title: "Normalization", desc: "One data format for every payment rail across Africa." },
              { icon: BarChart3, title: "Forecasting", desc: "AI-driven cash flow projections for smarter decisions." },
              { icon: Repeat, title: "Auto-Recon", desc: "Stop matching transactions manually. Let AI do the work." },
              { icon: ShieldCheck, title: "Fraud Detection", desc: "Real-time anomaly detection to protect your treasury." },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-all">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Proof */}
      <section className="fluid-y-padding bg-white border-t border-charcoal/5">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Built for the Rails of Africa</h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-8">
                AVEL Flow is being architected as an intelligent adapter. We are building native integrations into the region&apos;s most critical rails to ensure high success rates and instant settlement visibility.
              </p>
              <div className="space-y-4">
                {["MTN MoMo (RW, UG, GH)", "Airtel Money (RW, TZ, KE)", "IremboPay Integration", "East African Bank Rails"].map((rail) => (
                  <div key={rail} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                    <span className="text-sm font-bold text-charcoal uppercase tracking-widest">{rail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 bg-charcoal rounded-3xl text-white">
              <span className="text-[10px] font-bold text-orange uppercase tracking-[0.4em] mb-6 block">Target Pricing</span>
              <h3 className="text-3xl font-bold mb-6">Volume-First Logic</h3>
              <p className="text-white/40 mb-10 leading-relaxed">
                Simple transaction-based pricing that scales with your business. No hidden setup fees. No vendor lock-in.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">0.5%</span>
                <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Per Transaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
