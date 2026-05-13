"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu } from "lucide-react";

export default function TechnologyProof() {
  return (
    <section className="fluid-y-padding bg-off-white border-t border-charcoal/5">
      <div className="fluid-container">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-4">The Tech Stack</h2>
          <h3 className="text-4xl font-bold tracking-tight">Advanced by default. Invisible by design.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-12 bg-white rounded-3xl border-2 border-charcoal/5 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange/5 flex items-center justify-center text-orange mb-8 group-hover:bg-orange group-hover:text-white transition-all duration-500">
                <BrainCircuit size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-6">AI-Powered Intelligence</h4>
              <p className="text-charcoal/50 text-lg leading-relaxed">
                Every transaction teaches the system. Reconciliation, cash flow forecasting, and anomaly detection improve with every business that joins the platform.
              </p>
            </div>
            {/* Subtle Node Graph Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-charcoal">
                <circle cx="20" cy="20" r="2" />
                <circle cx="80" cy="20" r="2" />
                <circle cx="50" cy="50" r="2" />
                <circle cx="20" cy="80" r="2" />
                <circle cx="80" cy="80" r="2" />
                <path d="M20 20 L50 50 L80 20 M20 80 L50 50 L80 80" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>

          {/* Blockchain Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-12 bg-charcoal rounded-3xl overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-charcoal transition-all duration-500">
                <Cpu size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-white">Blockchain-Anchored Trust</h4>
              <p className="text-white/50 text-lg leading-relaxed">
                Every business identity credential is anchored on-chain. Tamper-proof. Consent-gated. Owned by the business, not by any platform.
              </p>
            </div>
            {/* Subtle Chain Decoration */}
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.05] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-white" fill="none">
                <rect x="20" y="20" width="20" height="20" rx="4" strokeWidth="2" />
                <rect x="50" y="50" width="20" height="20" rx="4" strokeWidth="2" />
                <rect x="20" y="50" width="20" height="20" rx="4" strokeWidth="2" />
                <rect x="50" y="20" width="20" height="20" rx="4" strokeWidth="2" />
                <path d="M40 30 H50 M30 40 V50 M60 40 V50 M40 60 H50" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
