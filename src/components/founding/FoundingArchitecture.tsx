"use client";

import React from "react";

const pillars = [
  {
    name: "AVEL Flow",
    category: "Payments & Intelligence",
    description: "A unified layer that aggregates African payment rails and turns transaction data into financial intelligence. Built for businesses that currently reconcile manually and fly blind on cash flow."
  },
  {
    name: "AVEL Entity",
    category: "Business Identity",
    description: "A sovereign, portable business identity system that lets African businesses prove who they are to any bank, partner, or platform — without starting from zero every time."
  },
  {
    name: "AVEL Core",
    category: "Connectivity Infrastructure",
    description: "The underlying event and communications layer that keeps AVEL running on any network, in any condition — SMS, USSD, and voice as first-class data channels, not afterthoughts."
  }
];

export default function FoundingArchitecture() {
  return (
    <section className="bg-charcoal py-40 px-6 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03]" />
      <div className="absolute top-0 left-2/4 w-px h-full bg-white/[0.03]" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/[0.03]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Three layers. <br />
            One coherent system.
          </h2>
          <p className="text-xl text-white/30 max-w-2xl font-medium italic">
            We are in active development. Here is the architecture we are building toward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-none">
          {pillars.map((pillar) => (
            <div key={pillar.name} className="p-12 bg-charcoal group hover:bg-white/[0.02] transition-colors">
              <div className="mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange block mb-2">
                  {pillar.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{pillar.name}</h3>
              </div>
              <p className="text-white/40 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-orange to-transparent mb-8" />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange text-center max-w-md">
            These are not products yet. They are the architecture we are committed to building.
          </p>
        </div>
      </div>
    </section>
  );
}
