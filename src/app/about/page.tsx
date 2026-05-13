"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Cpu, BrainCircuit } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero / Origin */}
      <section className="fluid-y-padding bg-white relative">
        <div className="fluid-container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={20} className="text-orange" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-charcoal">Kigali, Rwanda</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12">
              Infrastructure built for the reality of Africa.
            </h1>
      <p className="text-2xl text-charcoal/50 leading-relaxed font-medium">
        We didn&apos;t build AVEL to adapt technology from somewhere else. We built it here, for the specific, fragmented, and resilient reality of African business.
      </p>
          </div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="fluid-y-padding bg-off-white border-y border-charcoal/5">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Thesis</h2>
              <div className="space-y-8 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  For too long, African businesses have been forced to operate on top of infrastructure that wasn&apos;t designed for them. Fragile internet connectivity, opaque identity systems, and siloed payment rails have acted as a tax on growth.
                </p>
                <p>
                  AVEL believes that every African business — from the smallest merchant to the largest enterprise — deserves a foundational layer that works in any condition, proves their value to any institution, and integrates every rail they need to move money.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: BrainCircuit, title: "AI-Native", desc: "Intelligence isn&apos;t a layer on top; it&apos;s the core of how we reconcile and forecast." },
                { icon: ShieldCheck, title: "Sovereign Trust", desc: "Blockchain isn&apos;t for hype; it&apos;s for giving businesses control over their own identity." },
                { icon: Cpu, title: "Offline First", desc: "USSD and SMS aren&apos;t legacy; they are critical infrastructure for resilience." },
                { icon: MapPin, title: "Local Presence", desc: "Headquartered in Kigali. Deeply rooted in the markets we serve." }
              ].map((pill, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border-2 border-charcoal/5">
                  <pill.icon size={24} className="text-orange mb-4" />
                  <h4 className="font-bold mb-2">{pill.title}</h4>
                  <p className="text-xs text-charcoal/50 leading-relaxed">{pill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team / Founder Presence */}
      <section className="fluid-y-padding bg-white">
        <div className="fluid-container">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-6">The Team</h2>
            <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
              Built by principal engineers, researchers, and operators who have spent decades navigating the continent&apos;s business landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] bg-off-white rounded-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                  {/* Placeholder for team photos */}
                  <div className="w-full h-full flex items-center justify-center text-charcoal/10 font-bold text-4xl">AVEL</div>
                </div>
                <h3 className="text-xl font-bold mb-1">Founding Member</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Engineering / Strategy</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Mission Statement Pledge */}
      <section className="py-40 bg-charcoal text-white text-center">
        <div className="fluid-container">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange mb-12">Our Position</h2>
          <blockquote className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            &quot;African businesses deserve infrastructure that works as hard as they do. We don&apos;t make pledges. We build tools.&quot;
          </blockquote>
        </div>
      </section>
    </div>
  );
}
