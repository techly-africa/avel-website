"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Aggregate",
    subtitle: "AVEL Flow",
    icon: Zap,
    description: "Normalize payments across all rails into one stream.",
  },
  {
    title: "Verify",
    subtitle: "AVEL Entity",
    icon: ShieldCheck,
    description: "Build a sovereign, verifiable financial identity.",
  },
  {
    title: "Scale",
    subtitle: "Growth",
    icon: TrendingUp,
    description: "Unlock credit, partnerships, and global trade.",
  }
];

export default function Flywheel() {
  return (
    <section className="fluid-y-padding bg-white overflow-hidden border-y border-charcoal/5">
      <div className="fluid-container">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Architecture of Growth</h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
            AVEL isn&apos;t just a set of tools. It&apos;s a flywheel that turns operational data into institutional trust.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/20 via-orange to-orange/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center p-8 bg-white border-2 border-charcoal/5 rounded-3xl group hover:border-orange/20 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-off-white flex items-center justify-center mb-8 group-hover:bg-orange/5 transition-colors">
                  <step.icon size={36} className="text-charcoal group-hover:text-orange transition-colors" />
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange mb-2">
                  {step.subtitle}
                </span>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">
                  {step.description}
                </p>

                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-orange">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Repeat Indicator */}
          <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-charcoal text-white text-xs font-bold uppercase tracking-widest">
              <RefreshCw size={14} className="animate-spin-slow" />
              The Loop Repeats. The Business Strengthens.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
