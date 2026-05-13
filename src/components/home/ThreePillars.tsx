"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, Fingerprint, Network } from "lucide-react";

const products = [
  {
    name: "AVEL Flow",
    accent: "orange",
    color: "#F97316",
    icon: Activity,
    tagline: "One integration. Every payment rail. Complete financial intelligence.",
    description: "Built on normalized transaction data across MTN MoMo, Airtel Money, IremboPay, and bank rails.",
    href: "/products/flow",
    stats: "Private Alpha"
  },
  {
    name: "AVEL Entity",
    accent: "entity",
    color: "#0D9488",
    icon: Fingerprint,
    tagline: "Your business identity. Sovereign. Verifiable. Portable.",
    description: "Blockchain-anchored verification ensures every credential is tamper-proof and business-owned.",
    href: "/products/entity",
    stats: "Conceptual"
  },
  {
    name: "AVEL Core",
    accent: "core",
    color: "#64748B",
    icon: Network,
    tagline: "The infrastructure that keeps everything running — on any network.",
    description: "AI-driven event bus with SMS, USSD, and voice as first-class data channels for offline resilience.",
    href: "/products/core",
    stats: "Architecting"
  }
];

export default function ThreePillars() {
  return (
    <section className="fluid-y-padding bg-off-white">
      <div className="fluid-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col p-10 bg-white border-2 border-charcoal/5 rounded-2xl hover:border-orange/20 transition-all duration-500"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-10 transition-colors duration-500"
                style={{ backgroundColor: `${product.color}10`, color: product.color }}
              >
                <product.icon size={28} strokeWidth={1.5} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                  <span className="px-2 py-0.5 rounded bg-charcoal/5 text-[8px] font-bold uppercase tracking-widest text-charcoal/40">
                    {product.stats}
                  </span>
                </div>
                
                <p className="text-lg font-bold leading-tight mb-4 text-charcoal/80">
                  {product.tagline}
                </p>
                
                <p className="text-sm text-charcoal/50 leading-relaxed mb-10">
                  {product.description}
                </p>
              </div>

              <Link
                href={product.href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-orange transition-colors"
              >
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
