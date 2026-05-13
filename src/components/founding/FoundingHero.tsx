"use client";

import React from "react";
import AvelLogo from "@/components/ui/AvelLogo";
import Link from "next/link";

export default function FoundingHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-charcoal overflow-hidden px-6">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#F9731615,transparent)]" />
      </div>

      {/* Top Header / Branding */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-20">
        <AvelLogo size={40} light />
        <div className="hidden md:flex items-center gap-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Kigali — RW</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">2024</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start text-left">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              Infrastructure for all things African
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.9] tracking-tighter mb-12">
            Running a business <br />
            in Africa should never <br />
            be this hard.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end w-full">
          <p className="text-xl md:text-2xl text-white/40 max-w-xl font-medium leading-relaxed">
            AVEL is building the layer that makes it easier to get online, 
            understand your data, collect payments, and reach your customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="#waitlist"
              className="group w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-6 bg-white text-charcoal rounded-none font-bold uppercase tracking-widest text-sm hover:bg-orange hover:text-white transition-all duration-500"
            >
              Join the waitlist
              <div className="w-1.5 h-1.5 rounded-full bg-charcoal group-hover:bg-white transition-colors" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-10 py-6 bg-transparent border border-white/20 text-white rounded-none font-bold uppercase tracking-widest text-sm hover:border-orange hover:text-orange transition-all duration-500"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 z-20" />
      <div className="absolute bottom-0 right-12 w-px h-24 bg-white/5 z-20 hidden lg:block" />
    </section>
  );
}
