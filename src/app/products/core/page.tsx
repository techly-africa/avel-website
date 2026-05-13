"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Network, WifiOff, MessageSquare, Phone, Cpu } from "lucide-react";
import Link from "next/link";

export default function CorePage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="fluid-y-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-core/5 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="fluid-container relative z-10">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-core mb-6 block">
              AVEL Core
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Reliable by design. <br />
              Offline by necessity. <br />
              <span className="text-core">Foundational.</span>
            </h1>
            <p className="text-xl text-charcoal/60 mb-12 leading-relaxed">
              Built on Africa&apos;s Talking telco rails with an AI-driven event bus — SMS, USSD, and voice as first-class data channels, not afterthoughts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-core transition-all"
            >
              Join the Developer Alpha
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Surface - Event Flow Diagram */}
      <section className="pb-32 bg-white">
        <div className="fluid-container">
          <div className="relative p-12 bg-charcoal rounded-[2rem] shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="absolute top-8 left-8 px-3 py-1 rounded bg-core/20 text-core text-[10px] font-bold uppercase tracking-widest">Architectural Concept</div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.1),transparent_70%)]" />
            
            {/* Animated Flow Diagram */}
            <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <div className="text-white font-bold mb-2">Event Fire</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Transaction Sent</div>
              </div>
              <div className="flex justify-center md:col-span-1">
                <div className="h-0.5 w-full bg-gradient-to-r from-white/5 via-core to-white/5 animate-pulse" />
              </div>
              <div className="md:col-span-1 p-8 bg-core/20 border-2 border-core rounded-2xl text-center">
                <Cpu className="mx-auto text-core mb-4" />
                <div className="text-white font-bold mb-2">AI Event Bus</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Intelligent Routing</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/60">
                  <span className="text-green-500 mr-2">●</span> Push (Live)
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/60">
                  <span className="text-orange mr-2">●</span> USSD (Fallback)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="fluid-y-padding bg-off-white">
        <div className="fluid-container">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-6">Built for Africa&apos;s Reality</h2>
            <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
              Internet is a luxury. Communication is a necessity. AVEL Core treats telco rails as first-class infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: WifiOff, title: "Offline Resilience", desc: "Automatic USSD fallback when data networks fail. Your business never stops." },
              { icon: MessageSquare, title: "SMS Intelligence", desc: "Programmable SMS for transaction alerts, MFA, and customer data collection." },
              { icon: Phone, title: "Voice & IVR", desc: "AI-driven voice routing for customer verification and automated support." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border-2 border-charcoal/5 group hover:border-core/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-core/10 flex items-center justify-center text-core mb-8 group-hover:bg-core group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Proof */}
      <section className="fluid-y-padding bg-white">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="p-12 bg-charcoal rounded-[2rem] text-white">
              <h3 className="text-3xl font-bold mb-8">Target Specifications</h3>
              <div className="space-y-8">
                {[
                  { label: "Success Rate", value: "99.98%" },
                  { label: "USSD Latency", value: "< 250ms" },
                  { label: "Event Throughput", value: "10k+ /sec" }
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
                    <span className="text-2xl font-bold text-core">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-charcoal">The Event Bus Advantage</h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
                Traditional event systems assume reliable TCP connections. AVEL Core was designed from the ground up to handle the intermittent connectivity of the continent, using an AI router to decide which rail (Push, SMS, or USSD) is most likely to succeed in the current network condition.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Africa&apos;s Talking Rails",
                  "3G Optimized",
                  "Low Latency USSD",
                  "Multi-Region Redundancy"
                ].map((feat) => (
                  <span key={feat} className="px-4 py-2 rounded-full bg-off-white border border-charcoal/5 text-[10px] font-bold uppercase tracking-widest text-charcoal/60">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
