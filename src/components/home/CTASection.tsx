"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Users2 } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-charcoal py-32 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_50%)] pointer-events-none" />

      <div className="fluid-container relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Start building on AVEL
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Choose your track to begin. Whether you&apos;re an engineer building a new payment rail or a business owner seeking clarity.
        </p>
      </div>

      <div className="fluid-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Developer Track */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-12 rounded-3xl bg-white/[0.03] border-2 border-white/5 hover:border-orange/30 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center text-orange mb-8 group-hover:bg-orange group-hover:text-white transition-all">
              <Code2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Developers</h3>
            <p className="text-white/40 mb-10 leading-relaxed max-w-xs">
              Instant API access. Sandbox environment. Normalized event bus for every rail.
            </p>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-3 py-4 bg-orange text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange/90 transition-all active:scale-95 shadow-xl shadow-orange/10"
            >
              Join Developer Waitlist
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Business Track */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-12 rounded-3xl bg-white/[0.03] border-2 border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-charcoal transition-all">
              <Users2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Businesses</h3>
            <p className="text-white/40 mb-10 leading-relaxed max-w-xs">
              Consolidate your operations. Prove your identity. Grow your reach.
            </p>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-3 py-4 bg-white text-charcoal rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all active:scale-95 shadow-xl shadow-white/5"
            >
              Join the Waitlist
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
