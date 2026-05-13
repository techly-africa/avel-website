"use client";

import React from "react";
import { motion } from "framer-motion";

const outcomes = [
  {
    title: "Know your cash position. Always.",
    elaboration: "Real-time reconciliation and cash flow forecasting across every channel you use.",
    tag: "Flow",
  },
  {
    title: "Prove your business to any institution. Instantly.",
    elaboration: "A portable, verifiable credit and identity profile that travels with your business.",
    tag: "Entity",
  },
  {
    title: "Integrate every payment rail. Once.",
    elaboration: "Momo, Card, Bank, and USSD normalized into a single, high-performance API.",
    tag: "Flow",
  },
  {
    title: "Operate on any network. Reliably.",
    elaboration: "USSD and SMS fallbacks ensure your business stays alive even when the internet doesn't.",
    tag: "Core",
  }
];

export default function Outcomes() {
  return (
    <section className="fluid-y-padding bg-white">
      <div className="fluid-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 rounded bg-orange/5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange mb-8">
                {outcome.tag}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
                {outcome.title}
              </h2>
              <p className="text-xl text-charcoal/50 leading-relaxed max-w-lg">
                {outcome.elaboration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
