"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated Background Nodes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="fluid-container relative z-10 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
              Engineering the Continent&apos;s Foundation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Infrastructure. Identity. <br />
            <span className="text-orange">Intelligence.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            AVEL Flow, AVEL Entity, and AVEL Core — the three architectural layers we are building to help African businesses operate, prove themselves, and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/developers"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-charcoal rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange hover:text-white transition-all duration-300"
            >
              <Code size={18} />
              For Developers
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:border-orange hover:text-orange transition-all duration-300"
            >
              <Briefcase size={18} />
              For Businesses
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Visual Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent" />
    </section>
  );
}
